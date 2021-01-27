import React from "react";

// component
import Alert from "components/shared/Alert/Alert";
import { SUCCESS, FAILED } from "constants/loader";
import { accountMapping } from "redux/actions/AccountMapping";
// library
import { Button, Form, Select } from "antd";
// import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
// scss
import "./AccountMapping.scss";

const AccountMapp = (props) => {
  const onFinish = async (values) => {
    const response = await props.accountMapping(values.AccountId, values.UserID);
    console.log(values);
  };

  const { Option } = Select;

  const { uiStateAccountMapping } = props.userAccountMapping;
  const { adminUsersList } = props.getAdminUserList;
  const { adminAccounts } = props.adminAccountList;

  return (
    <div className="upload-status">
      <div className="status-inner-body">
        <div className="status-form">
          <Form layout="vertical" className="form" onFinish={onFinish}>
            <Form.Item
              label="User ID:"
              name="UserID"
              rules={[
                {
                  required: true,
                  message: "User ID is required",
                },
              ]}>
              <Select type="string" placeholder="Select User ID" allowClear>
                {adminUsersList.map((op, i) => {
                  return (
                    <Option value={op.userID} key={i}>
                      {op.userID}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Account ID:"
              name="AccountId"
              rules={[
                {
                  required: true,
                  message: "Account ID is required",
                },
              ]}>
              <Select placeholder="Select Account ID" allowClear>
                {adminAccounts.map((accounts, i) => {
                  return (
                    <Option value={accounts.accountId} key={i}>
                      {accounts.accountId}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Button
              // loading={uiStateAccountMapping === IN_PROGRESS ? false : true}
              className="submit-button"
              htmlType="submit"
              type="primary">
              Mapp Account
            </Button>
          </Form>
        </div>
        {uiStateAccountMapping === FAILED && (
          <Alert message={"error account mapping"} type="error" showIcon />
        )}
        {uiStateAccountMapping === SUCCESS && (
          <Alert message={"Account Mapped succesfully "} type="success" showIcon closable />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userAccountMapping: state.userAccountMapping,
    getAdminUserList: state.getAdminUserList,
    adminAccountList: state.adminAccountList,
  };
};

const mapDispatchToProps = {
  accountMapping,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountMapp);
