import React, { Component } from "react";
import "./Report.scss";
import { Table, ConfigProvider, Empty } from "antd";
import NoData from 'assets/images/mannageAssets.png'

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

class Report extends Component {
  state = {
    customize: true,
  };

  render() {
    const { customize } = this.state;

    return (
      <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
        <div className="reports">
          <div className="reports-inner-div">
            <Table columns={reportsColumn} pagination={false} loading={false} className="table" />
          </div>
        </div>
      </ConfigProvider>
    );
  }
}

export default Report;
