import React from "react";

// component
import Container from "components/shared/Container/Container";
import SetNewPassword from "pages/ChangePassword/SetNewPassword";
// library
// import { Route, Switch, Link } from "react-router-dom";
import { Steps, Button, message } from "antd";
// scss
// import "./Documents.scss";
const { Step } = Steps;

const steps = [
  {
    title: "Change login password",
    content: <SetNewPassword />,
  },
  {
    title: "Set new password",
    content: <SetNewPassword />,
  },
];

const ChangePassword = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className="change-passowrd">
        {/* <Header /> */}
        <Container>
          <div className="set-password">
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success("New Password has been set successfully!")}
                  htmlType="submit">
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ChangePassword;
