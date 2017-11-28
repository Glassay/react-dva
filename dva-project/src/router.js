import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import Products from './routes/Products';
import BasicLayout from './layouts/BasicLayout.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
