import React from "react";
// component
import { updatePassword } from "redux/actions/SetPassword";
import Alert from "components/shared/Alert/Alert";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
// library
import { Form, Input, Button, message } from "antd";
import { connect } from "react-redux";
import "./SetPassword.scss";

const SetNewPassword = (props) => {
  // const [form] = Form.useForm();
  // const [, forceUpdate] = useState(); // To disable submit button at the beginning.

  // useEffect(() => {
  //   forceUpdate({});
  // }, []);

  const onFinish = async (values) => {
    const response = await props.updatePassword(values.userID, values.Password, values.NewPassword);
  };

  const { uiStateSetPassword, error } = props.updateNewPassword;
  const { user } = props.login;

  const success = () => {
    message.success({
      content: "New Password has been set successfully!",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };
  return (
    <div className="set-password">
      <div className="inner-form">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="userID">
            <Input type='text' placeholder="Please enter User ID" defaultValue={user.userID} />
          </Form.Item>
          <Form.Item
            name="Password"
            rules={[
              {
                required: true,
                message: "Current login password is required!",
              },
            ]}>
            <Input type="password" placeholder="Please enter current login password" />
          </Form.Item>
          <Form.Item
            name="NewPassword"
            rules={[
              {
                required: true,
                message: "New password is required!",
              },
            ]}>
            <Input type="password" placeholder="Enter New Password " />
          </Form.Item>
          <Button
            // loading={uiStateSetPassword === IN_PROGRESS ? false : true}
            type="primary"
            htmlType="submit">
            Set New Password
          </Button>
        </Form>
      </div>
      {uiStateSetPassword === FAILED && <Alert message={error} type="error" showIcon />}
      {uiStateSetPassword === SUCCESS && (message = { success })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    updateNewPassword: state.updateNewPassword,
    login: state.login,
  };
};

const mapDispatchToProps = {
  updatePassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetNewPassword);

// export default SetNewPassword;
