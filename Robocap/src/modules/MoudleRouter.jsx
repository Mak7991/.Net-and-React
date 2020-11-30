import React from "react";
import { withRouter } from "react-router-dom";
import ClientPanel from "pages/ClientPanelHome/ClientPanel";
// import TeacherRouter from "modules/teacher/TeacherRouter";
import AdminPanel from "pages/AdminPanelHome/AdminPanel";
import NotFound from "pages/NotFound/NotFound";
import { USER, ADMIN } from "constants/roles";

const MoudleRouter = (props) => {
  const { roleroleName } = props;
  switch (roleroleName) {
    case USER:
      return <ClientPanel />;
    case ADMIN:
      return <AdminPanel />;
    default:
      return <NotFound />;
  }
};

export default withRouter(MoudleRouter);
