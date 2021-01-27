import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";
import AdminHeader from "components/shared/AdminHeader/AdminHeader";
import AdminPanel from "pages/AdminPanelHome/AdminPanel";
// import AdminHeaderContainer from "modules/admin/views/AdminHeaderContainer/AdminHeaderContainer";

function AdminRouter(props) {
  return (
    <>
      <AdminHeader/>
      <Switch>
        <Redirect exact from="/" to="/adminPanel" />
        <Route path="/adminPanel" component={AdminPanel} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default AdminRouter;
