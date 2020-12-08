import React from "react";
// component
import Header from "components/shared/Header/Header";
import Container from "components/shared/Container/Container";
import MTSubHeader from "components/ClientPanelUiComponent/MTSubHeader/MTSubHeader";
// import DepositAccount from "components/ClientPanelUiComponent/DepositAccount/DepositAccount"
import TransactionHistory from "components/ClientPanelUiComponent/TransactionHistory/TransactionHistory";
// library
import { Route, Switch } from "react-router-dom";
// scss
import "./ManageTransfer.scss";


class ManageTransfer extends React.Component {
  render() {
    return (
      <div className="managa-transfer-page">
        <Header />
        <Container>
          <div className="performance-inner-div">
            <MTSubHeader />
            <Switch>
              {/* <Route path="/transfer/deposit" component={DepositAccount} /> */}
              <Route path="/transfer/history" component={TransactionHistory} />
            </Switch>
          </div>
        </Container>
      </div>
    );
  }
}

export default ManageTransfer;
