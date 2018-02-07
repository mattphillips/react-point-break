import React from 'react';
import PropTypes from 'prop-types';

const entries = o => Object.keys(o).map(key => [key, o[key]]);

class Breakpoint extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    queries: PropTypes.object.isRequired // eslint-disable-line
  };

  static defaultProps = {
    queries: []
  };

  constructor(props) {
    super(props);
    this.state = entries(props.queries).reduce((acc, [name]) => ({ ...acc, [name]: false }), {});
  }

  componentDidMount() {
    this.queries = entries(this.props.queries).map(([name, query]) => {
      const mql = window.matchMedia(query);
      mql.addListener(this.update);
      return { mql, name };
    });

    this.update();
  }

  componentWillUnmount() {
    this.queries.forEach(({ mql }) => {
      mql.removeListener(this.update);
    });
  }

  update = () =>
    this.setState(this.queries.reduce((acc, { mql, name }) => ({ ...acc, [name]: mql.matches }), this.state));

  render() {
    return this.props.children(this.state);
  }
}

export default Breakpoint;
