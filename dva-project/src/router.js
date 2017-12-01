import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layouts/BasicLayout.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BasicLayout}>
          {/* <Route path="Sider" exact conponent={Sider} /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
