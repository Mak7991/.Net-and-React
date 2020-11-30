import React, { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Login from "pages/Login/Login";
import ChangePassword from "pages/ChangePassword/ChangePassword";
import SetNewPassword from "pages/ChangePassword/SetNewPassword";
import NotFound from "pages/NotFound/NotFound";
// import Header from "components/shared/Header/Header";

class AuthContainer extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path={`${this.props.match.url}/login`} exact component={Login} />
          <Route
            path={`${this.props.match.url}/forgot-password`}
            exact
            component={ChangePassword}
          />
          <Route path={`${this.props.match.url}/set-password`} exact component={SetNewPassword} />
          <Route
            path={this.props.match.url}
            exact
            component={() => <Redirect to={`${this.props.match.url}/login`} />}
          />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default AuthContainer;
