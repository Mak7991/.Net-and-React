import React from "react";
import { withRouter } from "react-router-dom";
import ClientRouter from "pages/ClientPanelHome/ClientPanel";
import AdminRouter from "pages/AdminPanelHome/AdminPanel";
import NotFound from "pages/NotFound/NotFound";
import { USER, ADMIN } from "constants/roles";

const MoudleRouter = (props) => {
  const { roleName } = props;
  switch (roleName) {
    case USER:
      return <ClientRouter {...props} />;
    case ADMIN:
      return <AdminRouter {...props} />;
    default:
      return <NotFound />;
  }
};

export default withRouter(MoudleRouter);
