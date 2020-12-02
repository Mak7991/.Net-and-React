import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "modules/user/node_modules/components/shared/NotFound/NotFound";
// import Header from "components/shared/Header/Header";
import AdminPanel from "pages/AdminPanelHome/AdminPanel";
// import AdminHeaderContainer from "modules/admin/views/AdminHeaderContainer/AdminHeaderContainer";

function AdminRouter(props) {
  return (
    <>
      {/* <AdminHeaderContainer /> */}
      <Switch>
        <Redirect exact from="/" to="/admin" />
        <Route path="/admin" component={AdminPanel} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default AdminRouter;
