import React, { Component } from "react";

// component
import PieGraph from "components/ClientPanelUiComponent/PieGraph/PieGraph";
import TotalGraph from "components/ClientPanelUiComponent/AssetsGraph/TotalGraph";
import ReturnGraph from "components/ClientPanelUiComponent/AssetsGraph/ReturnGraph";
// import Async from "components/shared/Async/Async";
import { getUserData } from "redux/actions/UserData";
import NoData from "assets/images/mannageAssets.png";
// libraries
// Empty, ConfigProvider
import { Collapse, Table, Empty, ConfigProvider } from "antd";
import { connect } from "react-redux";
// import axios from "axios"
// scss
import "./GoalDetail.scss";

const { Panel } = Collapse;

function callback(key) {
  // console.log(key);
}

let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();

const customizeRenderEmpty = () => (
  <div style={{ textAlign: "center" }}>
    <Empty image={NoData} />
  </div>
);

const accountColumns = [
  {
    title: "AccountID",
    dataIndex: "acccountID",
    key: "acccountID",
    className: "accountID-row",
  },
  {
    title: "Current Worth",
    dataIndex: "currentWorth",
    key: "currentWorth",
    align: "right",
    className: "worth-row",
    render: (text) => (
      <>
        <p>
          {new Intl.NumberFormat().format(text)}.{`00`}
        </p>
      </>
    ),
  },
  {
    title: "Earnings",
    dataIndex: "earning",
    key: "earning",
    align: "right",
    className: "earning-row",
    render: (text) => (
      <>
        <p>
          {new Intl.NumberFormat().format(text)}.{`00`}
        </p>
      </>
    ),
  },
  {
    title: "Investment",
    key: "investment",
    dataIndex: "investment",
    align: "right",
    className: "invest-row",
    render: (text) => (
      <>
        <p>
          {new Intl.NumberFormat().format(text)}.{`00`}
        </p>
      </>
    ),
  },
];

class GoalDetail extends Component {
  state = {
    expandIconPosition: "right",
    customize: true,
  };

  componentDidMount() {
    const userID = this.props.login.user.userID;
    this.props.getUserData(userID);
  }

  onPositionChange = (expandIconPosition) => {
    this.setState({ expandIconPosition });
  };
  render() {
    const { expandIconPosition, customize } = this.state;
    // const { uiState, error } = this.props.curUserData;
    const data = this.props.curUserData.accountlist?.map((userData) => {
      // console.log(userData);
      return {
        key: userData.id,
        acccountID: userData.acccountID,
        currentWorth: userData.currentWorth,
        earning: userData.earning,
        investment: userData.investment,
      };
    });

    return (
      <div className="user-goal">
        <div className="mannage-acct">
          <h1>
            Managed Accounts <span>(as of {m + "/" + d + "/" + y})</span>
          </h1>
          <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
            <div className="accounts-table">
              <Table columns={accountColumns} dataSource={data} bordered className="accounts-row" />
            </div>
          </ConfigProvider>
          {/* <Table columns={accountColumns} dataSource={data} pagination={false} /> */}
        </div>
        <div className="user-graph">
          <div className="user-total-assets-graph">
            <TotalGraph />
          </div>
          <div className="user-total-return-graph">
            <ReturnGraph />
          </div>
        </div>
        <Collapse
          defaultActiveKey={["1"]}
          onChange={callback}
          expandIconPosition={expandIconPosition}>
          <Panel
            className="goal-collapse"
            header="Goal College Education "
            key="1"
            style={{ fontWeight: "600", fontSize: "20px" }}>
            <div className="goal-collapse-inner">
              <div className="goal-disc">
                <h5>Description</h5>
                <p>
                  Help your clients find a suitable investment strategy. Your investing strategy
                  should reflect the kind of investor you are your personal investor profile. This
                  goal will help you determine your profile and then match it to an investment
                  strategy that's designed for investors like you.
                </p>
              </div>
              <div className="goal-allocation">
                <h1>Asset Allocation</h1>
                <div>
                  <PieGraph />
                </div>
              </div>
            </div>
          </Panel>
        </Collapse>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curUserData: state.curUserData,
    login: state.login,
  };
};

const mapDispatchToProps = {
  getUserData,
};
export default connect(mapStateToProps, mapDispatchToProps)(GoalDetail);

// export default GoalDetail;
