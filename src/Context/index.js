import createReactContext from 'create-react-context';

const POINT_BREAK = 'PointBreak';

const { Consumer, Provider } = createReactContext(POINT_BREAK);

export { Consumer, Provider, POINT_BREAK as defaultValue };
