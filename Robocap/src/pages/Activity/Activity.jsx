import React, { Component } from "react";

// component
import Header from "components/shared/Header/Header";
import Container from "components/shared/Container/Container";
import Async from "components/shared/Async/Async";
import { getActivity } from "redux/actions/Activity";
import NoData from "assets/images/mannageAssets.png";
import { IN_PROGRESS} from "constants/loader"; 
// library
import { Select, DatePicker, Space, Table, ConfigProvider, Empty } from "antd";
import { connect } from "react-redux";
import moment from "moment";
// scss
import "./Activity.scss";

const { Option } = Select;

const dateFormat = "MM/DD/YYYY";

const customizeRenderEmpty = () => (
  <div style={{ textAlign: "center" }}>
    <Empty image={NoData} />
  </div>
);

const activityColumns = [
  {
    title: "Account No",
    dataIndex: "accountNo",
    key: "accountNo",
    className:"account-row",
    render: (text) => (
      <>
        <p>{text}</p>
      </>
    ),
  },
  {
    title: "Symbol",
    dataIndex: "symbol",
    key: "symbol",
    render: (text) => (
      <>
        <p >{text}</p>
      </>
    ),
  },
  {
    title: "Order Type",
    dataIndex: "orderType",
    key: "orderType",
    className:"order-row",
    render: (text) => (
      <>
        <p>{text}</p>
      </>
    ),
  },

  {
    title: "Volume",
    dataIndex: "volume",
    key: "volume",
    align:"right",
    className:"volume-row",
    render: (text) => (
      <>
        <p>
          {new Intl.NumberFormat().format(text)}.{`00`}
        </p>
      </>
    ),
  },
  {
    title: "Price",
    key: "price",
    dataIndex: "price",
    align:"right",
    className:"price-row",
    render: (text) => (
      <>
        <p>
          {text}.{`00`}
        </p>
      </>
    ),
  },
  // {
  //   title: "Market Rate",
  //   key: "marketRate",
  //   dataIndex: "marketRate",
  //   render: (text) => (
  //     <>
  //       <p style={{ textAlign: "right" }}>
  //         {text}.{`00`}
  //       </p>
  //     </>
  //   ),
  // },
  // {
  //   title: "Profit Loss",
  //   key: "profitloss",
  //   dataIndex: "profitloss",
  //   render: (text) => (
  //     <>
  //       <p style={{ textAlign: "right" }}>
  //         {new Intl.NumberFormat().format(text)}.{`00`}
  //       </p>
  //     </>
  //   ),
  // },
  {
    title: "Trade Date",
    key: "tradeDate",
    dataIndex: "tradeDate",
    align:"right",
    render: (text) => (
      <>
        <p>{new Date(text).toLocaleDateString()}</p>
      </>
    ),
  },
];

class Activity extends Component {
  state = {
    customize: true,
  };
  componentDidMount() {
    const userID = this.props.login.user.userID;

    // console.log(userID);
    this.props.getActivity(userID);
  }

  render() {
    const { customize } = this.state;
    const { uiStateGetUserData, uiState, error } = this.props.getUserActivity;
    const activity = this.props.getUserActivity.activity?.map((activityData) => {
      // console.log(activityData);
      return {
        key: activityData.id,
        accountNo: activityData.accountNo,
        orderType: activityData.orderType,
        symbol: activityData.symbol,
        volume: activityData.volume,
        price: activityData.price,
        tradeDate: activityData.tradeDate,
      };
    });
    const { getAccounts } = this.props.getUserAccountList;

    return (
      <div className="activity-page">
        <Header />
        <Container>
          <section className="account-activity">
            <div className="filter-bar">
              <div className="account-field">
                <h4> Account:</h4>
                <Select placeholder="Select Account" defaultValue="All" allowClear>
                  {getAccounts.map((e, i) => {
                    return <Option key={i}>{e}</Option>;
                  })}
                </Select>
              </div>
              <div className="type-field">
                <h4> Type:</h4>
                <Select placeholder="Select Type" defaultValue="All" allowClear>
                  <Option value="All">All</Option>
                  <Option value="Deposit">Deposit</Option>
                  <Option value="Withdrawal">Withdrawal</Option>
                  <Option value="Dividend">Dividend</Option>
                  <Option value="Fee">Fee</Option>
                  <Option value="Interest">Interest</Option>
                  <Option value="luSecurityTransfercy">Security Transfer</Option>
                  <Option value="Trade">Trade</Option>
                </Select>
              </div>
              <div className="start-date">
                <h4>Select Start Date:</h4>
                <Space direction="vertical">
                  <DatePicker defaultValue={moment("8/10/2010", dateFormat)} format={dateFormat} />
                </Space>
              </div>
              <div className="end-date">
                <h4>Select End Date:</h4>
                <Space direction="vertical">
                  <DatePicker defaultValue={moment("12/30/2020", dateFormat)} format={dateFormat} />
                </Space>
              </div>
            </div>
            <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
            <div className="activity-table">
              <Async
                uiState={uiState}
                error={error}
                onSuccess={() => {
                  return (
                    <div>
                      <Table
                      loading={uiStateGetUserData === IN_PROGRESS ? false : true}
                       className="activity-row"
                        columns={activityColumns}
                        dataSource={activity}
                        bordered
                        pagination={{ pageSize: 10 }}
                      />
                    </div>
                  );
                }}
              />
            </div>
            </ConfigProvider>
          </section>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getUserActivity: state.getUserActivity,
    login: state.login,
    getUserAccountList: state.getUserAccountList,
  };
};

const mapDispatchToProps = {
  getActivity,
};
export default connect(mapStateToProps, mapDispatchToProps)(Activity);
