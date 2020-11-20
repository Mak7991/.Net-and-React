import React from "react";
import { Button, Form, Input } from "antd";
// import login from "../../services/auth.service";
import "antd/dist/antd.css";
import "./Login.scss";

const Login = () => {
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
            // onFinish={onFinish}
            initialValues={{
              remember: true,
            }}>
            <Form.Item
              label="Email Address:"
              name="emailAddress"
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
              <a className="login-form-forgot" href="/" style={{ float: "right" }}>
                Forgot your password?
              </a>
            </Form.Item>
            <Form.Item>
              <Button
                className="submit-button"
                htmlType="submit"
                type="primary"
                href="/ClientPanel">
                LogIn
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
