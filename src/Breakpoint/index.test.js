import React from 'react';
import { mount } from 'enzyme';

import Breakpoint from './';

const noop = () => {};

const queries = {
  md: '(min-width: 801px) and (max-width: 900px)',
  lg: '(min-width: 901px)'
};

describe('<Breakpoint />', () => {
  it('renders with given queries set to false', () => {
    window.matchMedia = () => ({ addListener: noop });
    const component = mount(
      <Breakpoint queries={queries}>
        {({ md, lg }) => {
          if (lg) return <h1>Large</h1>;
          if (md) return <h1>Medium</h1>;
          return <h1>Small</h1>;
        }}
      </Breakpoint>
    );
    expect(component).toMatchSnapshot();
  });

  it('calls matchMedia with given queries and registers listeners when mounted and window is defined', () => {
    const addListener = jest.fn();
    const matchMedia = jest.fn(() => ({ addListener }));
    window.matchMedia = matchMedia;
    mount(
      <Breakpoint queries={queries}>
        {({ md, lg }) => {
          if (lg) return <h1>Large</h1>;
          if (md) return <h1>Medium</h1>;
          return <h1>Small</h1>;
        }}
      </Breakpoint>
    );
    expect(matchMedia).toHaveBeenCalledTimes(2);
    expect(matchMedia.mock.calls).toIncludeAllMembers([[queries.md], [queries.lg]]);
    expect(addListener).toHaveBeenCalledTimes(2);
  });

  it('calls remove listener when unmounted', () => {
    const addListener = jest.fn();
    const removeListener = jest.fn();
    const matchMedia = jest.fn(() => ({ addListener, removeListener }));
    window.matchMedia = matchMedia;

    const queries = {
      md: '(min-width: 801px) and (max-width: 900px)',
      lg: '(min-width: 901px)'
    };
    const component = mount(
      <Breakpoint queries={queries}>
        {({ md, lg }) => {
          if (lg) return <h1>Large</h1>;
          if (md) return <h1>Medium</h1>;
          return <h1>Small</h1>;
        }}
      </Breakpoint>
    );
    component.unmount();
    expect(removeListener).toHaveBeenCalledTimes(2);
  });

  it('renders with $expected query after evaluating queries with medium: $medium and large: $large', () => {
    /* eslint-disable no-undef, no-unused-labels, no-multi-spaces */
    const addListener = jest.fn();
    const matchMedia = jest
      .fn()
      .mockReturnValueOnce({ addListener, matches: medium })
      .mockReturnValueOnce({ addListener, matches: large });

    window.matchMedia = matchMedia;
    const component = mount(
      <Breakpoint queries={queries}>
        {({ md, lg }) => {
          if (lg) return <h1>Large</h1>;
          if (md) return <h1>Medium</h1>;
          return <h1>Small</h1>;
        }}
      </Breakpoint>
    );
    expect(component.html()).toContain(expected);

    where: {
      medium | large || expected;
      true | false || 'Medium';
      false | true || 'Large';
    }
  });
});
