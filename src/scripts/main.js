import React, { Component } from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './containers/Home';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
      </Router>
    );
  }
}

render(
  <App />,
  document.getElementById('wrapper')
);
