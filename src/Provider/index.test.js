import React from 'react';
import { shallow } from 'enzyme';

import Provider from './';

const queries = {
  md: '(min-width: 801px) and (max-width: 900px)',
  lg: '(min-width: 901px)'
};

describe('<Provider />', () => {
  it('renders given children', () => {
    const component = shallow(
      <Provider>
        <h1>Hello, world!</h1>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('renders provider with given queries', () => {
    const component = shallow(
      <Provider {...queries}>
        <h1>Hello, world!</h1>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
