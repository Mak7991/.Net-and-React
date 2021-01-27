import React from "react";

// component
// import TotalGraph from "components/ClientPanelUiComponent/AssetsGraph/TotalGraph";
// import ReturnGraph from "components/ClientPanelUiComponent/AssetsGraph/ReturnGraph";
// import UserDetail from "components/ClientPanelUiComponent/UserDetail/UserDetail";
// import GoalDetail from "components/ClientPanelUiComponent/GoalDetail/GoalDetail";
import AdminHeader from "components/shared/AdminHeader/AdminHeader";
import GetUserList from "components/AdminPanelUiComponent/GetUserList/GetUserList";
import UploadStatus from "components/AdminPanelUiComponent/UploadStatus/UploadStatus.";
import AccountMapp from "components/AdminPanelUiComponent/AccountMapping/AccountMapping";
import { getAccountlist } from "redux/actions/GetAccountList";
// library
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
// scss
import "./AdminPanel.scss";

class AdminPanel extends React.Component {
  state = {
    expandIconPosition: "right",
  };
  onPositionChange = (expandIconPosition) => {
    this.setState({ expandIconPosition });
  };

  componentDidMount() {
    const userID = this.props.login.user.userID;

    // console.log(userID);
    this.props.getAccountlist(userID);
  }

  render() {
    // const { expandIconPosition } = this.state;
    // const { adminAccounts } = this.props.adminAccountList;
    // console.log(adminAccounts);
    return (
      <div className="admin-page">
        <div>
          <AdminHeader />

          <section className="inner-div">
            <Container>
              <Switch>
                <Route path="/adminpanel/RegisterUserlist" component={GetUserList} />
                <Route exact path="/adminpanel/userStatus" component={UploadStatus} />
                <Route exact path="/adminpanel/accountMapping" component={AccountMapp} />
              </Switch>
            </Container>
          </section>
        </div>

        {/* <section>
            <div className="user-list">
              <GetUserList />
            </div>
          </section>
          <section className="setup-form">
            <Collapse
              defaultActiveKey={["1"]}
              onChange={callback}
              expandIconPosition={expandIconPosition}>
              <Panel
                className="setup-collapse"
                header="Setup  "
                key="1"
                style={{ fontWeight: "600", fontSize: "20px" }}
                extra={genExtra()}>
                <section className="accounts-list-status">
                  <section className="account-status">
                    <div className="upload-status">
                      <UploadStatus />
                    </div>
                  </section>
                </section>
                <section className="account-mapping">
                  <div>
                    <AccountMapp />
                  </div>
                </section>
              </Panel>
            </Collapse>
          </section> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adminAccountList: state.adminAccountList,
    login: state.login,
  };
};
const mapDispatchToProps = {
  getAccountlist,
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);

// export default AdminPanel;
