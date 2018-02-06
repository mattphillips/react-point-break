import { Component } from 'react';
import { func, object } from 'prop-types';

class Breakpoint extends Component {
  static propTypes = {
    children: func.isRequired,
    queries: object.isRequired // eslint-disable-line
  };

  static defaultProps = {
    queries: []
  };

  constructor(props) {
    super(props);
    this.state = Object.entries(props.queries).reduce((acc, [name]) => ({ ...acc, [name]: false }), {});
  }

  componentDidMount() {
    this.queries = Object.entries(this.props.queries).map(([name, query]) => {
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
