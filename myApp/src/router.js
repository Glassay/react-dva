import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './components/CountApp';
import PingLun from './components/Comment';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={PingLun} />
        <Route path="/a" exact component={HomePage} />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
