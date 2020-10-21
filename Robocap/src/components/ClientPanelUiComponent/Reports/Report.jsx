import React from "react";
import "./Report.scss";
import { Table } from "antd";

const reportsColumn = [
  {
    title: "File Name",
    dataIndex: "filename",
    key: "filename",
    render: (text) => <a href="/AccountDetail">{text}</a>,
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

const Report = () => {
  return (
    <div className="reports">
      <div className="reports-inner-div">
        <Table columns={reportsColumn} pagination={false} loading={false} className="table" />
      </div>
    </div>
  );
};

export default Report;
