import React from 'react';
import { Router, Route } from 'dva/router';
import Users from './routes/Users';
// import BasicLayout from './layouts/BasicLayout.js';

export default function ({ history }) {
  return (
    <Router history={history}>
      <Route path="/users" component={Users} />
    </Router>
  );
}

// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Switch>
//         <Route path="/" exact component={BasicLayout}>
//           {/* <Route path="Sider" exact conponent={Sider} /> */}
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default RouterConfig;
