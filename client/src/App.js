import React from "react";
import {
  Layout,
  Dropdown,
  Menu,
  Avatar,
  Button,
  Space,
  Typography,
} from "antd";
import "./App.css";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

const menu = (
  <Menu style={{marginTop: "8px"}}>
    <Menu.Item key="1">
      <Button type="link">Shams Ibne Noor</Button>
    </Menu.Item>
    <Menu.Item key="1">
      <Button type="link">Logout</Button>
    </Menu.Item>
  </Menu>
);

const App = () => {
  return (
    <div>
      <Layout className="layout">
        <div className="header">
          <div className="logo">
            <Typography.Title level={4}>Paperclip Blog</Typography.Title>
          </div>
          <div className="menu">
            <Space>
              <Button>Login</Button>
              <Button type="primary">Create Account</Button>
              <Dropdown overlay={menu}>
                <Avatar src="https://joeschmoe.io/api/v1/random" />
              </Dropdown>
            </Space>
          </div>
        </div>
        <Content style={{ padding: "75px 50px" }}>
          <div className="site-layout-content">
            <h1 style={{ color: "red" }}>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
