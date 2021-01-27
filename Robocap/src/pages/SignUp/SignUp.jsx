import React, {useEffect} from "react";

// component
import Alert from "components/shared/Alert/Alert";
import { SUCCESS, FAILED } from "constants/loader";
import { userSignUp, sentVerificationCode } from "redux/actions/UserSignUp";
// library
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
// scss
import "./SignUp.scss";

const SignUp = (props) => {
  
  const onFinish = async (values) => {
    const response = await props.userSignUp(
      values.userID,
      values.userName,
      values.FirstName,
      values.emailID,
      values.code,
      values.password,
      values.confirmPassword,
      values.PhoneNo
    );
  };

  const verification=()=> {
    var val = document.getElementById("emailID").value;
    let user = document.getElementById("userName").value;
    // let val = event.target.value("emailID", "userName")
    const response = props.sentVerificationCode(val,user);
  }

  const { uiStateUserSignUp, sentVerificatoCodeUiState, errorUserSignUp, error } = props.register;

  // if (uiStateUserSignUp === SUCCESS) {
  //   return <Redirect to="/" />;
  // } else if (uiStateUserSignUp === FAILED) {
  //   return <Alert message={error} type="error" showIcon />;
  // }

  const history = useHistory();

  useEffect(() => {
    const timeout = setTimeout(() => {
       history.push('/');
     }, 90000);
   },[]);

  
  return (
    <div className="signup">
      <div className="signup-body">
        <div className="signup-cover">
          <img src={require("../../assets/images/AuthCover.png")} draggable={false} alt="cover" />
        </div>
        <div className="signup-form">
          <div className="form-logo">
            <img src={require("../../assets/images/logo.png")} alt="logo" />
          </div>
          <div className="signup-title">
            <h1>Let's get started</h1>
          </div>
          <Form layout="vertical" className="form" onFinish={onFinish}>
            <Form.Item
              label="Username:"
              name="userID"
              rules={[
                {
                  required: true,
                  message: "Username is required!",
                },
              ]}>
              <Input type="text" placeholder="Username" />
            </Form.Item>
            <Form.Item
              label="First Name:"
              name="userName"
              rules={[
                {
                  required: true,
                  message: "First Name is required!",
                },
              ]}>
              <Input type="text" placeholder="First Name" />
            </Form.Item>
            <Form.Item
              label="Last Name:"
              name="FirstName"
              rules={[
                {
                  required: true,
                  message: "Last Name is required!",
                },
              ]}>
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              label="Email address:"
              name="emailID"
              rules={[
                {
                  required: true,
                  message: "Email ID is required!",
                },
              ]}>
              <Input type="email" placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              label="Phone No:"
              name="PhoneNo"
              rules={[
                {
                  required: true,
                  message: "PhoneNo is required!",
                },
              ]}>
              <Input type="integer" placeholder="Phone No" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}>
              <Input.Password
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                type="password"
                placeholder="Your password should be 8-12 characters in length"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="Invalid password. Password must contains Minimum eight characters, upper and lower case character, digit and special character!"
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("The two passwords that you entered do not match!");
                  },
                }),
              ]}>
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>

            <div className="get-verfication-code">
              <div style={{ display: "flex" }}>
                <Form.Item
                  label="Verification Code:"
                  name="code"
                  rules={[
                    {
                      required: true,
                      message: "Verification code is required!",
                    },
                  ]}>
                  <Input className="pass-input" type="text" placeholder="Verification code" />
                </Form.Item>
                <Button className="verification-button" onClick={verification}>
                  Get Verification Code
                </Button>
              </div>
            </div>

            <Button
              // loading={uiStateUserSignUp === IN_PROGRESS ? true : false}
              className="submit-button"
              htmlType="submit"
              type="primary">
              SignUp Now
            </Button>
            <span style={{ textAlign: "center", display: "flow-root", marginBottom: "10px" }}>
              Already have an account?{" "}
              <Link className="signup-form-forgot" to="/auth">
                Login here
              </Link>{" "}
            </span>
          </Form>
        </div>
      </div>
      {uiStateUserSignUp === FAILED && (
        <Alert message={errorUserSignUp.message} type="error" showIcon closable />
      )}
      {uiStateUserSignUp === SUCCESS && (
        <Alert message={"The User Has been register"} type="success" showIcon closable />
      )}
      {sentVerificatoCodeUiState === FAILED && (
        <Alert message={error} type="error" showIcon closable />
      )}
      {sentVerificatoCodeUiState === SUCCESS && (
        <Alert
          message={"The Verification code Has been send to the given email"}
          type="success"
          showIcon
          closable
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    register: state.register,
  };
};

const mapDispatchToProps = {
  userSignUp,
  sentVerificationCode,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
