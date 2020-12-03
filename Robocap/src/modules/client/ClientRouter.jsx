import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import ClientPanel from "pages/ClientPanelHome/ClientPanel";
import NotFound from "components/shared/NotFound/NotFound";
import Header from "components/shared/Header/Header";
function ClientRouter(props) {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={`/clientpanel`} exact component={ClientPanel} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default ClientRouter;
