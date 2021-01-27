// import * as React from "react";
// import { Route, Switch } from "react-router-dom";

// //Components
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

// import UploadStatus from "components/AdminPanelUiComponent/UploadStatus/UploadStatus.";
// import AccountMapp from "components/AdminPanelUiComponent/AccountMapping/AccountMapping";

import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//Components
import AuthContainer from "pages/AuthContainer";

const AppRouter = () => (
  <Switch>
    <Redirect exact from="/" to="/auth" />
    <Route path="/auth" component={AuthContainer} />
    <Route path="/adminpanel" component={AdminPanel} />
    <Route path="/clientpanel" component={ClientPanel} />
    <Route path="/performance" component={Performance} />
    <Route path="/activity" component={Activity} />
    <Route path="/transfer/history" component={ManageTransfer} />
    <Route path="/documents" component={Documents} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/client/questionnaire/questions" component={QuestionnaireForm} />
    <Route path="/client/questionnaire/plan" component={Plan} />
    <Route component={NotFound} />
  </Switch>
);

export default AppRouter;
