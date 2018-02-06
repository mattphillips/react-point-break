import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from '../Context';

const BreakPointProvider = ({ children, ...queries }) => {
  return <Provider value={queries}>{children}</Provider>;
};

BreakPointProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default BreakPointProvider;
