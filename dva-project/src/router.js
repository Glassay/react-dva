import React from 'react';
import { Switch, Router, Route } from 'dva/router';
// import Users from './routes/Users';
import BasicLayout from './layouts/BasicLayout.js';

// export default function ({ history }) {
//   return (
//     <Router history={history}>
//       <Route path="/users" component={Users} />
//     </Router>
//   );
// }

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
