import React from "react";
// component
import NoData from "assets/images/mannageAssets.png";
// import Async from "components/shared/Async/Async";
// library
import { Table, ConfigProvider, Empty } from "antd";
// scss
import "./Report.scss";

const reportsColumn = [
  {
    title: "File Name",
    dataIndex: "filename",
    key: "filename",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Account Number",
    dataIndex: "accountnumber",
    key: "accountnumber",
  },
  {
    title: "Type",
    key: "type",
    dataIndex: "type",
  },
];

const customizeRenderEmpty = () => (
  <div style={{ textAlign: "center" }}>
    <Empty image={NoData} />
  </div>
);

class Report extends React.Component {
  state = {
    customize: true,
  };

  render() {
    const { customize } = this.state;
    // const { uiState, error} = this.state;

    return (
      <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
        <div className="reports">
          <div className="reports-inner-div">
            <Table columns={reportsColumn} pagination={false} loading={false} className="table" />
          </div>
        </div>
      </ConfigProvider>

      // <>
      //   <Async
      //     uiState={uiState}
      //     error={error}
      //     onSuccess={() => {
      //       return (
      //         <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
      //           <div className="reports">
      //             <div className="reports-inner-div">
      //               <Table
      //                 columns={reportsColumn}
      //                 pagination={false}
      //                 className="table"
      //               />
      //             </div>
      //           </div>
      //         </ConfigProvider>
      //       );
      //     }}
      //   />
      // </>
      
    );
  }
}

export default Report;
