import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
//Components
import AuthContainer from "pages/AuthContainer";
import {
  Performance,
  Activity,
  ManageTransfer,
  Documents,
  SignUp,
  // ChangePassword,
  QuestionnaireForm,
  Plan,
  NotFound,
  ClientPanel,
  AdminPanel,
} from "pages";
// import ProtectedRoute from "components/ProtectedRoute"

const AppRouter = () => {
  // const { user } = props.login;
  // var role = JSON.parse(localStorage.getItem("roleName"));


  return (
    <Switch>
      <Redirect exact from="/" to="/auth" />
      <Route path="/auth" component={AuthContainer} />
      {/* admin route */}
      <Route path="/adminpanel" component={AdminPanel} />
      {/* client routes */}
      {/* <ProtectedRoute component={ClientPanel} exact path="/clientpanel"  /> */}
      <Route path="/clientpanel" component={ClientPanel} />
      <Route path="/performance" component={Performance} />
      <Route path="/activity" component={Activity} />
      <Route path="/transfer/history" component={ManageTransfer} />
      <Route path="/documents" component={Documents} />
      {/* public routes */}
      <Route path="/SignUp" component={SignUp} />
      <Route path="/client/questionnaire/questions" component={QuestionnaireForm} />
      <Route path="/client/questionnaire/plan" component={Plan} />
      <Route component={NotFound} />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(AppRouter);
