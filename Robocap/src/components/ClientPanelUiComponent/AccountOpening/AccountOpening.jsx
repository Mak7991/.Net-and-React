import React from "react";
import './AccountOpening.scss'
import { Table } from "antd";

const reportsColumn = [
  {
    title: "Account Number",
    dataIndex: "accountnumber",
    key: "accountnumber",
    render: (text) => <a href="/AccountDetail">{text}</a>,
  },
  {
    title: "Customer Type",
    dataIndex: "customertype",
    key: "customertype",
  },
  {
    title: "Account Capability",
    dataIndex: "accountcapability",
    key: "accountcapability",
  },
  {
    title: "Account Status",
    key: "accountstatus",
    dataIndex: "accountstatus",
  },
  {
    title: "Submit Time",
    key: "submittime",
    dataIndex: "submittime",
  },
];

const AccountOpening = () => {
  return (
    <div className="account-opening">
      <div className="inner-div">
        <Table columns={reportsColumn} pagination={false} loading={false} className="table" />
      </div>
    </div>
  );
};

export default AccountOpening;