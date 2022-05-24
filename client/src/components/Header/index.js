import React from "react";
import {
  Dropdown,
  Menu,
  Avatar,
  Button,
  Space,
  Typography,
} from "antd";

const menu = (
  <Menu style={{ marginTop: "8px" }}>
    <Menu.Item key="1">
      <Button type="link">Shams Ibne Noor</Button>
    </Menu.Item>
    <Menu.Item key="1">
      <Button type="link">Logout</Button>
    </Menu.Item>
  </Menu>
);

const Header = () => {
  return (
    // <Layout.Header style={{backgroundColor:"white"}}>
    <div className="header">
      <div className="logo">
        <Typography.Title level={4}>PaperClip Blog</Typography.Title>
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
    // </Layout.Header>
  );
};

export default Header;
