import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
// components
import Async from "components/shared/Async/Async";

//actions
// import { validiateUser } from "redux/actions/loginActions";
import MoudleRouter from "modules/MoudleRouter";

class ProtectedRoutes extends React.Component {
  // componentDidMount() {
  //   this.props.validiateUser();
  // }

  render() {
    const { user } = this.props.login;
    // console.log(user);

    return (
      <Async
        onSuccess={() => <MoudleRouter roleName={user.roleName} />}
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

// const mapDispatchToProps = {
//   validiateUser,
// };

export default connect(mapStateToProps)(ProtectedRoutes);
