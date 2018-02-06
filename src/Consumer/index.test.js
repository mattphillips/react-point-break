import React from 'react';
import { mount } from 'enzyme';

import Provider from '../Provider';
import Consumer from './';

const noop = () => {};
const queries = {
  md: '(min-width: 801px) and (max-width: 900px)',
  lg: '(min-width: 901px)'
};

describe('<Consumer />', () => {
  it('renders given children render function', () => {
    const component = mount(<Consumer>{() => <h1>Hello, world!</h1>}</Consumer>);
    expect(component).toMatchSnapshot();
  });

  it('renders Consumer with given queries', () => {
    window.matchMedia = () => ({ addListener: noop });

    const component = mount(
      <Consumer {...queries}>
        {({ md, lg }) => {
          if (lg) return <h1>Large</h1>;
          if (md) return <h1>Medium</h1>;
          return <h1>Small</h1>;
        }}
      </Consumer>
    );
    expect(component).toMatchSnapshot();
  });

  it('renders Consumer with provider queries and given queries', () => {
    window.matchMedia = () => ({ addListener: noop });

    const component = mount(
      <Provider sm="small query">
        <Consumer {...queries}>
          {({ sm, md, lg }) => {
            if (lg) return <h1>Large</h1>;
            if (md) return <h1>Medium</h1>;
            if (sm) return <h1>Small</h1>;
            return <h1>Extra Small</h1>;
          }}
        </Consumer>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('overrides matching provider queries with given consumer queries', () => {
    window.matchMedia = () => ({ addListener: noop });

    const component = mount(
      <Provider {...queries}>
        <Consumer lg="large override" md="medium override">
          {({ md, lg }) => {
            if (lg) return <h1>Large</h1>;
            if (md) return <h1>Medium</h1>;
            return <h1>Small</h1>;
          }}
        </Consumer>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
