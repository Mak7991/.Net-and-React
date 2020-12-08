import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
// components
import Async from "components/shared/Async/Async";

//actions
import { userLogin } from "redux/actions/loginActions";
import MoudleRouter from "modules/MoudleRouter";

class ProtectedRoutes extends React.Component {
  componentDidMount() {
    this.props.userLogin();
  }

  render() {
    const { uiState, error, data } = this.props.login;
    console.log(data);

    return (
      <Async
        uiState={uiState}
        error={error}
        onSuccess={() => <MoudleRouter roleName={data.roleName} />}
        onFailure={() => <Redirect to="/auth/login" />}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = {
  userLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutes);
