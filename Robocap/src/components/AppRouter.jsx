// import * as React from "react";
// import { Route, Switch } from "react-router-dom";

// //Components
import {
  Performance,
  Activity,
  ManageTransfer,
  Documents,
  // Settings,
  ChangePassword,
  RegisterForm,
  Plan,
  NotFound,
  ClientPanel,
} from "pages";

// const AppRouter = () => (
//   <Switch>
//     <Route exact path="/" component={Login} />
//     <Route path="/clientPanel" component={ClientPanel} />
//     <Route path="/performance" component={Performance} />
//     <Route path="/activity" component={Activity} />
//     <Route path="/transfer" component={ManageTransfer} />
//     <Route path="/documents" component={Documents} />
//     <Route path="/settings" component={Settings} />
//     <Route path="/auth/changePassword" component={ChangePassword} />
//     <Route path="/auth/registerform" component={RegisterForm} />
//     <Route path="/plan" component={Plan}/>
//     <Route path="*" component={NotFound} />
//   </Switch>
// );

// export default AppRouter;

import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//Components
import AuthContainer from "pages/AuthContainer";
// import NotFound from "pages/NotFound/NotFound";
// import ProtectedRoutes from "components/ProtectedRoute";

const AppRouter = () => (
  <Switch>
    <Redirect exact from="/" to="/auth" />
    <Route path="/auth" component={AuthContainer} />
    {/* <Route path="/" component={ProtectedRoutes} /> */}
    <Route path="/clientpanel" component={ClientPanel} />
    <Route path="/performance" component={Performance} />
    <Route path="/activity" component={Activity} />
    <Route path="/transfer/history" component={ManageTransfer} />
    <Route path="/documents" component={Documents} />
    {/* <Route path="/settings" component={Settings} /> */}
    <Route path="/auth/changePassword" component={ChangePassword} />
    <Route path="/registerform" component={RegisterForm} />
    <Route path="/plan" component={Plan} />
    <Route component={NotFound} />
  </Switch>
);

export default AppRouter;
