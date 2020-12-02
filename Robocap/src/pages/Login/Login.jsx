import React from "react";

// component
import Alert from "components/shared/Alert/Alert";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
import { userLogin } from "redux/actions/loginActions";
// library
import { Button, Form, Input } from "antd";
import {Redirect, Link} from "react-router-dom"
import { connect } from "react-redux";
// scss
import "./Login.scss";

class Login extends React.Component {
  onFinish = async (values) => {
    const response = await this.props.userLogin(values.emailID, values.password);
  };
  
  render() {
    const { loginButtonUiState, error } = this.props.login;
    if (loginButtonUiState === SUCCESS) {
      return <Redirect to="/" />;
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
              name="normal_login"
              layout="vertical"
              className="form"
              onFinish={this.onFinish}
              initialValues={{
                remember: true,
              }}>
              <Form.Item
                label="Email Address:"
                name="emailID"
                rules={[
                  {
                    required: true,
                    message: "Email Address is required",
                  },
                ]}>
                <Input
                  rules={[
                    {
                      required: true,
                      message: "Email Address is required",
                    },
                  ]}
                  placeholder="Email Address"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Password is required",
                  },
                ]}>
                <Input type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Link
                  className="login-form-forgot"
                  to="/auth/changePassword"
                  style={{ float: "right" }}>
                  Forgot password
                </Link>
              </Form.Item>
              <Form.Item>
                <Button
                  loading={loginButtonUiState === IN_PROGRESS ? true : false}
                  className="submit-button"
                  htmlType="submit"
                  type="primary">
                  LogIn
                </Button>
              </Form.Item>
            </Form>
          </div>
          {loginButtonUiState === FAILED && <Alert message={error} type="error" showIcon />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = {
  userLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
