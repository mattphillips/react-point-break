import React from 'react';
import { func } from 'prop-types';

import Breakpoint from '../Breakpoint';
import { Consumer, defaultValue } from '../Context';

const BreakpointConsumer = ({ children, ...queries }) => {
  return (
    <Consumer>
      {value => {
        const providerQueries = value === defaultValue ? {} : value;
        return <Breakpoint queries={{ ...providerQueries, ...queries }}>{children}</Breakpoint>;
      }}
    </Consumer>
  );
};

BreakpointConsumer.propTypes = {
  children: func.isRequired
};

export default BreakpointConsumer;
