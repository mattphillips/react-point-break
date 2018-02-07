import React from 'react';
import PropTypes from 'prop-types';

import Breakpoint from '../Breakpoint';
import { Consumer, defaultValue } from '../Context';

const BreakpointConsumer = ({ children, render, ...queries }) => {
  const renderFunction = render !== undefined ? render : children;
  return (
    <Consumer>
      {value => {
        const providerQueries = value === defaultValue ? {} : value;
        return <Breakpoint queries={{ ...providerQueries, ...queries }}>{renderFunction}</Breakpoint>;
      }}
    </Consumer>
  );
};

BreakpointConsumer.propTypes = {
  children: PropTypes.func,
  render: PropTypes.func
};

export default BreakpointConsumer;
