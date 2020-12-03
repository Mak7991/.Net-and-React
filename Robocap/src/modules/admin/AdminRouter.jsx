import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";
import Header from "components/shared/Header/Header";
import AdminPanel from "pages/AdminPanelHome/AdminPanel";
// import AdminHeaderContainer from "modules/admin/views/AdminHeaderContainer/AdminHeaderContainer";

function AdminRouter(props) {
  return (
    <>
      <Header/>
      <Switch>
        <Redirect exact from="/" to="/AdminPanel" />
        <Route path="/AdminPanel" component={AdminPanel} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default AdminRouter;
