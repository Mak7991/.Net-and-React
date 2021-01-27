import React from "react";

// component
import Alert from "components/shared/Alert/Alert";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
import { uploadStatus } from "redux/actions/UserAccountStatus";
// library
import { Button, Form, Input, Select } from "antd";
// import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
// scss
import "./UploadStatus.scss";

const UploadStatus = (props) => {
  const onFinish = async (values) => {
    const response = await props.uploadStatus(values.userID, values.status);
  };
  const { Option } = Select;

  const { uiStateUploadStatus } = props.statusReducer;
  const { adminUsersList } = props.getAdminUserList;

  // function handleChange(value) {
  //   console.log(`selected ${value}`);
  // }

  return (
    <div className="upload-status">
      <div className="status-inner-body">
        <div className="status-form">
          <Form layout="vertical" className="form" onFinish={onFinish}>
            <Form.Item
              label="User ID:"
              name="userID"
              rules={[
                {
                  required: true,
                  message: "UserID is required",
                },
              ]}>
              <Select placeholder="Select User" allowClear>
                {adminUsersList.map((op, i) => {
                  return (
                    <Option value={op.userID} key={i}>
                      {op.userID}
                    </Option>
                  );
                })}
                {/* <Option value="hassan">Hassan</Option> */}
              </Select>
            </Form.Item>
            <Form.Item
              label="Upload Status:"
              name="status"
              rules={[
                {
                  required: true,
                  message: "Status is required",
                },
              ]}>
              <Input.TextArea />
            </Form.Item>
            <Button
              // loading={uiStateUploadStatus === IN_PROGRESS}
              className="submit-button"
              htmlType="submit"
              type="primary">
              Upload Status
            </Button>
          </Form>
        </div>
        {uiStateUploadStatus === FAILED && (
          <Alert message={"error uploading status"} type="error" showIcon />
        )}
        {uiStateUploadStatus === SUCCESS && (
          <Alert message={"The Status Has been uploaded "} type="success" showIcon closable />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    statusReducer: state.statusReducer,
    getAdminUserList: state.getAdminUserList,
  };
};

const mapDispatchToProps = {
  uploadStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadStatus);
