import * as React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import {
  Login,
  NotFound,
  ClientPanel,
  Performance,
  Activity,
  ManageTransfer,
  Documents,
  Settings,
} from "pages";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/clientPanel" component={ClientPanel} />
    <Route path="/performance" component={Performance} />
    <Route path="/activity" component={Activity} />
    <Route path="/managetransfer" component={ManageTransfer} />
    <Route path="/documents" component={Documents} />
    <Route path="/settings" component={Settings} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default AppRouter;
