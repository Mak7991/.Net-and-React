import * as React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import { Login, NotFound, ClientPanel, Performance, Activity } from "pages";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/ClientPanel" component={ClientPanel} />
    <Route path="/Performance" component={Performance} />
    <Route path="/activity" component={Activity} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default AppRouter;
