import React from "react";
import { Form, Button, Input, Typography, Divider } from "antd";

const SignUp = () => {
  return (
    <div className="site-layout-content">
      <div className="login-page">
        <Typography.Title style={{fontWeight:"700"}} level={3}>Welcome to PaperClip Blog</Typography.Title>
        <Typography.Title style={{color:"grey", fontWeight:"400"}} level={5}>
          Paperclip Blog Community is a community of 850,699 amazing developers
        </Typography.Title>
        <Divider>Create New Account</Divider>
        <Form name="signup_form" layout="vertical" hideRequiredMark>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please provide your user email",
              },
            ]}
          >
            <Input type="text" placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please provide your user email",
              },
            ]}
          >
            <Input type="text" placeholder="name" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please provide your user email",
              },
            ]}
          >
            <Input type="text" placeholder="Address" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please provide valid password",
              },
              () => ({
                validator(_, value) {
                  if (value.length > 8) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Password must be at least 8 character long")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Password" />
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
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
          <br />
          <Form.Item>
            <Button size="large" block type="primary" htmlType="submit">
              Create a New Account
            </Button>
          </Form.Item>
        </Form>
        <Divider>Already Have an Account?</Divider>
        <Button size="large" block>
          Login
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
