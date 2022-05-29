import React from "react";
import { Form, Button, Input, Typography, Divider } from "antd";

const Login = () => {
  return (
    <div className="site-layout-content">
      <div className="login-page">
        <Typography.Title style={{ fontWeight: "700" }} level={3}>
          Welcome to PaperClip Blog
        </Typography.Title>
        <Typography.Title
          style={{ color: "grey", fontWeight: "400" }}
          level={5}
        >
          Paperclip Blog Community is a community of 850,699 amazing developers
        </Typography.Title>
        <Divider>Login</Divider>
        <Form name="login_form" layout="vertical" hideRequiredMark>
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
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please provide valid password",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <br />
          <Form.Item>
            <Button size="large" block type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <Divider>Don't have an Account?</Divider>
        <Button size="large" block>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default Login;
