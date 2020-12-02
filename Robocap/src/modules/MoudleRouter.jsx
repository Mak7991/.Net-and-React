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
      return <ClientRouter />;
    case ADMIN:
      return <AdminRouter />;
    default:
      return <NotFound />;
  }
};

export default withRouter(MoudleRouter);
