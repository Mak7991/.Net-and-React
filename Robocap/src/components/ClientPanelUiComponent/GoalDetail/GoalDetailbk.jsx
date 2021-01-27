import React, { Component } from "react";

// component
import PieGraph from "components/ClientPanelUiComponent/PieGraph/PieGraph";
import TotalGraph from "components/ClientPanelUiComponent/AssetsGraph/TotalGraph";
import ReturnGraph from "components/ClientPanelUiComponent/AssetsGraph/ReturnGraph";
// import {getUserData} from "redux/actions/currentUserData"
// libraries
// Empty, ConfigProvider
import { Collapse, Table } from "antd";
import axios from "axios";
// import { FundOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";
// import NoData from "assets/images/mannageAssets.png";
// scss
import "./GoalDetail.scss";
const REACT_APP_SERVER_URL = "http://localhost:8085/api/";

const { Panel } = Collapse;
// const { Option } = Select;

function callback(key) {
  // console.log(key);
}
const [userData, setUserData] = useState([]);

useEffect(() => {
  getUserData = () => {
    return async (dispatch) => {
      // dispatch(getUserDataInProgress());
      try {
        const data = await axios.post(
          REACT_APP_SERVER_URL + "MangedAccount/AccountPosition?userID=Rooma"
        );
        // dispatch(getUserDataSuccessful(data))
        setUserData(data.userData)
        console.log(data);
      } catch (error) {
        // dispatch(getUserDataError(err));
        console.error(error);
      }
    };
  };
}, []);

const accountColumns = [
  {
    title: "AccountID",
    dataIndex: "accountID",
    key: "accountID",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Current Worth",
    dataIndex: "currentWorth",
    key: "netvalue",
  },
  {
    title: "Earnings",
    dataIndex: "earning",
    key: "earning",
  },
  {
    title: "Investment",
    key: "investment",
    dataIndex: "investment",
  },
  // {
  //   title: "Status",
  //   key: "status",
  //   render: () => (
  //     <Space size="middle">
  //       <p>Funded</p>
  //     </Space>
  //   ),
  // },
];
// const assetsColumns = [
//   {
//     title: "Account",
//     dataIndex: "account",
//     key: "account",
//     render: (text) => <a href="/AccountDetail">{text}</a>,
//   },
//   {
//     title: "Balance",
//     dataIndex: "netvalue",
//     key: "netvalue",
//   },
//   {
//     title: "Institute",
//     dataIndex: "earning",
//     key: "earning",
//   },
//   {
//     title: "Account Type",
//     key: "totalreturn",
//     dataIndex: "totalreturn",
//   },
//   {
//     title: "Operation",
//     key: "status",
//     render: () => (
//       <Space size="middle">
//         <p>Funded</p>
//       </Space>
//     ),
//   },
// ];

// const customizeRenderEmpty = () => (
//   <div style={{ textAlign: "center" }}>
//     <Empty image={NoData} />
//     <div className="link-account">
//       <p>Link New Held-away Account</p>
//       <Link className="link-acc-btn" to="/HeldAwayAccount">
//         Link Held-away Acct
//       </Link>
//     </div>
//   </div>
// );

class GoalDetail extends Component {
  state = {
    expandIconPosition: "right",
    // customize: true,
  };

  onPositionChange = (expandIconPosition) => {
    this.setState({ expandIconPosition });
  };

  render() {
    const { expandIconPosition } = this.state;
    // const { customize } = this.state;

    return (
      <div className="user-goal">
        <div className="mannage-acct">
          <h1>
            Managed Accounts <span>(as of 12/04/2019)</span>
          </h1>
          <Table columns={accountColumns} dataSource={data} pagination={false} />
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
                {/* <Link to="/GoalForecaster">
                  <FundOutlined style={{ marginRight: "5px", fontSize: "16px" }} />
                  <a href="/GoalForeCaster">Goal Forecaster</a>
                </Link> */}
              </div>
              <div className="goal-allocation">
                <h1>Asset Allocation</h1>
                <div>
                  <PieGraph />
                </div>
              </div>
            </div>
          </Panel>

          {/* <div>
            <div className="mannage-assets">
              <h1>Held-away Accounts</h1>
              <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
                <Table
                  columns={assetsColumns}
                  pagination={false}
                  loading={false}
                  className="table"
                />
              </ConfigProvider>
            </div>
          </div> */}
        </Collapse>
        <br />
      </div>
    );
  }
}

export default GoalDetail;
