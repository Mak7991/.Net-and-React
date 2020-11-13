import React, { useState, useEffect } from "react";
import { Form, Button, Radio, Select } from "antd";
// import { LockOutlined } from "@ant-design/icons";
import "./RegisterForm.scss";
import Header from "components/shared/Header/Header";

const { Option } = Select;

const RegisterForm = () => {
  // const [form] = Form.useForm();
  // const [, forceUpdate] = useState(); // To disable submit button at the beginning.

  // useEffect(() => {
  //   forceUpdate({});
  // }, []);

  // const onFinish = (values) => {
  //   console.log("Finish:", values);
  // };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  // const onChange = (e) => {
  //   console.log("radio checked", e.target.value);
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };

  return (
    <>
      <Header />
      <div className="register-form">
        <div>
          <Form
            className="inner-div"
            // form={form}
            name="horizontal_login"
            layout="vertical"
            // onFinish={onFinish}
          >
            <div className="select-type">
              <h4>Account Type</h4>
              <Select placeholder="Select Type" allowClear>
                <Option value="Deposit">individual</Option>
                <Option value="Withdrawal">individual IRA Joint</Option>
                {/* <Option value="Dividend">Dividend</Option>
                <Option value="Fee">Fee</Option>
                <Option value="Interest">Interest</Option>
                <Option value="luSecurityTransfercy">Security Transfer</Option>
                <Option value="Trade">Trade</Option> */}
              </Select>
            </div>
            <div className="ant-col-md-24" style={{ paddingLeft: "8px", paddingRight: "8px" }}>
              <div className="link-box-root">
                <h4 className="link-title">
                  Q1: I plan to begin withdrawing money from my investments in:
                </h4>
                <Radio.Group defaultValue={1}>
                  <Radio style={radioStyle} value={1}>
                    Less than 3 years
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    3–5 years
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    6–10 years
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    11 years or more
                  </Radio>
                </Radio.Group>
              </div>
            </div>
            <div className="ant-col-md-24" style={{ paddingLeft: "8px", paddingRight: "8px" }}>
              <div className="link-box-root">
                <h4 className="link-title">Q2: When I invest my money, I am:</h4>
                <Radio.Group defaultValue={1}>
                  <Radio style={radioStyle} value={1}>
                    Most concerned about my investment losing value
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Equally concerned about my investment losing or gaining value
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    Most concerned about my investment gaining value
                  </Radio>
                  {/* <Radio style={radioStyle} value={3}>
                  11 years or more
                </Radio> */}
                </Radio.Group>
              </div>
            </div>
            <div className="ant-col-md-24" style={{ paddingLeft: "8px", paddingRight: "8px" }}>
              <div className="link-box-root">
                <h4 className="link-title">
                  Q3: Imagine that in the past three months, the overall stock market lost 35% of
                  its value. An individual stock investment you own also lost 35% of its value. What
                  would you do?
                </h4>
                <Radio.Group defaultValue={1}>
                  <Radio style={radioStyle} value={1}>
                    Sell all of my shares
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Sell some of my shares
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    Do nothing
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    Buy more shares
                  </Radio>
                </Radio.Group>
              </div>
            </div>
            <Form.Item shouldUpdate={true}>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  // disabled={
                  //   !form.isFieldsTouched(true) ||
                  //   form.getFieldsError().filter(({ errors }) => errors.length).length
                  // }
                  href="/auth/changePassword"
                >
                  Submit
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
