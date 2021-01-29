import React, { useState } from "react";

// component
import Alert from "components/shared/Alert/Alert";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
import { userLogin } from "redux/actions/loginActions";
// library
import { Button, Form, Input } from "antd";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
// scss
import "./Login.scss";

const Login = (props) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onFinish = async (values) => {
    const response = await props.userLogin(values.emailID, values.password);
    // setIsAuthenticated(true);
  };

  const { loginButtonUiState, user } = props.login;

  if (loginButtonUiState === SUCCESS) {
    if (user.roleName === "User") {
      return <Redirect to="/clientpanel" />;
    } else if (user.roleName === "Admin") {
      return <Redirect to="/adminpanel/RegisterUserlist" />;
    }
  } 

  return (
    <div className="login">
      <div className="login-body">
        <div className="login-cover">
          <img src={require("../../assets/images/AuthCover.png")} draggable={false} alt="cover" />
        </div>
        <div className="login-form">
          <div className="form-logo">
            <img src={require("../../assets/images/logo.png")} alt="logo" />
          </div>
          <div className="login-title">
            <h1>Login To Your Account</h1>
          </div>
          <Form
            layout="vertical"
            className="form"
            onFinish={onFinish}
            initialValues={{
              remember: true,
            }}>
            <Form.Item
              label="Email Address:"
              name="emailID"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}>
              <Input type="email" placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              label="Password:"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
              ]}>
              <Input.Password
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="Invalid password. Password must contains upper and lower case character, digit and special character!"
              />
            </Form.Item>
            <Form.Item>
              <Link className="login-form-forgot" to="/auth/setpassword" style={{ float: "right" }}>
                Forgot password
              </Link>
            </Form.Item>
            <Button
              loading={loginButtonUiState === IN_PROGRESS ? true : false }
              className="submit-button"
              htmlType="submit"
              type="primary">
              LogIn
            </Button>
          </Form>
        </div>
        {loginButtonUiState === FAILED && <Alert message={"Invalid UserID / Password "} type="error" showIcon closable />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = {
  userLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
