import React from 'react';
import { element } from 'prop-types';

import { Provider } from '../Context';

const BreakPointProvider = ({ children, ...queries }) => {
  return <Provider value={queries}>{children}</Provider>;
};

BreakPointProvider.propTypes = {
  children: element.isRequired
};

export default BreakPointProvider;
