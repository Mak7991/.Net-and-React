import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import ClientPanel from "modules/student/views/StudentHome/StudentHome";
import NotFound from "components/shared/NotFound/NotFound";
import Header from "components/shared/Header/Header";
function ClientRouter(props) {
  return (
    <>
      <Header/>
      <Switch>
        <Route path={`/clientpanel`} component={ClientPanel} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default ClientRouter;
