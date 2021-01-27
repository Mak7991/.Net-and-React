import React from "react";
// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ClientRouter from "pages/ClientPanelHome/ClientPanel";
import AdminRouter from "pages/AdminPanelHome/AdminPanel";
import NotFound from "pages/NotFound/NotFound";
import { USER, ADMIN } from "constants/roles";

const MoudleRouter = (props) => {
  const { roleName } = props.login;
  switch (roleName) {
    case USER:
      return <ClientRouter {...props} />;
    case ADMIN:
      return <AdminRouter {...props} />;
    default:
      return <NotFound />;
  }
};
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(MoudleRouter);

// export default withRouter(MoudleRouter);
