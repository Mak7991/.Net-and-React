import React from "react";
// component
import Async from "components/shared/Async/Async";
import { getTransactionHistory } from "redux/actions/ManageTransfer";
import NoData from "assets/images/mannageAssets.png";
// library
import { Tabs, Table, ConfigProvider, Empty } from "antd";
import { connect } from "react-redux";
// scss
import "./TransactionHistory.scss";

const { TabPane } = Tabs;

const customizeRenderEmpty = () => (
  <div style={{ textAlign: "center" }}>
    <Empty image={NoData} />
  </div>
);

const historyColumn = [
  {
    title: "Account",
    dataIndex: "account",
    key: "account",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Account Name",
    dataIndex: "accountName",
    key: "accountName",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Transaction Type",
    dataIndex: "transactionType",
    key: "transactionType",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    align: "right",
    render: (text) => (
      <>
        <p>
          {new Intl.NumberFormat().format(text)}.{`00`}
        </p>
      </>
    ),
  },
  {
    title: "Transaction Date",
    key: "tranactionDate",
    dataIndex: "tranactionDate",
    align: "right",
    render: (text) => (
      <>
        <p>{new Date(text).toLocaleDateString()}</p>
      </>
    ),
  },
];

class TransactionHistory extends React.Component {
  state = {
    customize: true,
  };
  componentDidMount() {
    const userID = this.props.login.user.userID;

    // console.log(userID);
    this.props.getTransactionHistory(userID);
  }

  render() {
    const { customize } = this.state;
    const { uiState, error } = this.props.getHistory;
    const data = this.props.getHistory.history?.map((transacHistory) => {
      // console.log(transacHistory);
      return {
        key: transacHistory.id,
        account: transacHistory.account,
        accountName: transacHistory.accountName,
        transactionType: transacHistory.transactionType,
        amount: transacHistory.amount,
        tranactionDate: transacHistory.tranactionDate,
      };
    });

    return (
      <div className="transc-history">
        <div className="history">
          <span className="per-title">Position Transfer History</span>
          <hr />
          <div className="mt-main-div">
            <Tabs defaultActiveKey="1">
              {/* <TabPane tab={<span>Pending</span>} key="1"> */}
              {/* pending transaction */}
              {/* <div style={{ textAlign: "center" }}>
                  <Empty image={NoData} className="pending-trans" />
                </div> */}
              {/* pending transaction */}
              {/* </TabPane> */}
              <TabPane tab={<span>History</span>} key="2">
                {/* transaction history */}
                <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
                  <div className="history-table">
                    <Async
                      uiState={uiState}
                      error={error}
                      onSuccess={() => {
                        return (
                          <div>
                            <Table
                              className="inner-table"
                              uiState={uiState}
                              error={error}
                              pagination={true}
                              columns={historyColumn}
                              dataSource={data}
                              bordered
                            />
                          </div>
                        );
                      }}
                    />
                  </div>
                </ConfigProvider>
                {/* transaction history */}
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getHistory: state.getHistory,
    login: state.login,
  };
};

const mapDispatchToProps = {
  getTransactionHistory,
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistory);
