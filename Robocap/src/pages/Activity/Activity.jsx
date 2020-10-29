import React from "react";

// component
import Header from "components/shared/Header/Header";
// library
import { Select, DatePicker, Space, Table } from "antd";
import { Container } from "react-bootstrap";
import moment from "moment";
// scss
import "./Activity.scss";

const { Option } = Select;

const dateFormat = "YYYY/MM/DD";

// const customFormat = value => {
//   return `custom format: ${value.format(dateFormat)}`;
// };

const accountsColumns = [
  {
    title: "Account",
    dataIndex: "account",
    key: "account",
    render: (text) => <a href="/AccountDetail">{text}</a>,
  },
  {
    title: "Trade Date",
    dataIndex: "tradedate",
    key: "tradedate",
  },
  {
    title: "Ticker",
    dataIndex: "ticker",
    key: "ticker",
  },
  {
    title: "Type",
    key: "type",
    dataIndex: "type",
  },
  {
    title: "Currency",
    key: "currency",
    dataIndex: "currency",
  },
  {
    title: "Quantity",
    key: "quantity",
    dataIndex: "quantity",
  },
  {
    title: "Price",
    key: "price",
    dataIndex: "price",
  },
  {
    title: "Amount",
    key: "amount",
    dataIndex: "amount",
  },
  {
    title: "Description",
    key: "discription",
    dataIndex: "discription",
  },
];

const Activity = () => {
  return (
    <div className="activity-page">
      <Header />
      <Container>
        <section className="account-activity">
          <div className="filter-bar">
            <div className="account-field">
              <h4> Account:</h4>
              <Select style={{ width: 200 }} allowClear>
                <Option value="DU1987191">DU1987191</Option>
              </Select>
            </div>
            <div className="type-field">
              <h4> Type:</h4>
              <Select style={{ width: 200 }} allowClear>
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
              <Space direction="vertical" size={12}>
                <DatePicker
                  defaultValue={moment("2001/01/01", dateFormat)}
                  format={dateFormat}
                  style={{ width: 200 }}
                />
              </Space>
            </div>
            <div className="end-date">
              <h4>Select End Date:</h4>
              <Space direction="vertical" size={12}>
                <DatePicker
                  defaultValue={moment("2001/01/01", dateFormat)}
                  format={dateFormat}
                  style={{ width: 200 }}
                />
              </Space>
            </div>
          </div>
          <div className="activity-table">
            <Table columns={accountsColumns} pagination={true} className="table" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Activity;
