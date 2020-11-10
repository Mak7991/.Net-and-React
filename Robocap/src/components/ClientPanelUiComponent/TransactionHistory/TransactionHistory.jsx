import React from "react";
// component
// import Header from "components/shared/Header/Header";
// import Container from "components/shared/Container/Container";
import NoData from "assets/images/mannageAssets.png";
// library
import { Empty, Tabs } from "antd";
// scss
import "./TransactionHistory.scss";

const { TabPane } = Tabs;

// const customizeRenderEmpty = () => (
//   <div style={{ textAlign: "center" }}>
//     <Empty image={NoData} />
//   </div>
// );

class TransactionHistory extends React.Component {
  //   state = {
  //     customize: true,
  //   };

  render() {
    // const { customize } = this.state;

    return (
      <div className="transc-history">
        <div className="history">
          <span className="per-title">Position Transfer History</span>
          <hr />
          <div className="mt-main-div">
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span>Pending</span>} key="1">
                {/* pending transaction */}
                <div style={{ textAlign: "center" }}>
                  <Empty image={NoData} className="pending-trans" />
                </div>
                {/* pending transaction */}
              </TabPane>
              <TabPane tab={<span>History</span>} key="2">
                {/* transaction history */}
                <div style={{ textAlign: "center" }}>
                  <Empty image={NoData} className="pending-trans" />
                </div>
                {/* transaction history */}
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionHistory;
