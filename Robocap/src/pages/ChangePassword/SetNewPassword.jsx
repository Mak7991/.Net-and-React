import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import "./ChangePassword.scss"

const SetNewPassword = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div className="set-password">
      <div>

        <Form className="inner-form" form={form} name="horizontal_login" layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="currentPassword"
            rules={[
              {
                required: true,
                message: "Current login password is required!",
              },
            ]}>
            <Input type="password" placeholder="Please enter current login password" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Verification code is required!",
              },
            ]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item shouldUpdate={true}>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  form.getFieldsError().filter(({ errors }) => errors.length).length
                }>
                Get Verification email
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SetNewPassword;
