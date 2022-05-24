import React from "react";
import { Layout } from "antd";

import Home from "./pages/Home";
import Header from "./components/Header";
import Post from "./pages/Post";

import "antd/dist/antd.css";
import "./App.css";

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: "60px 50px" }}>
        <Home />
        {/* <Post/> */}
      </Content>
    </Layout>
  );
};

export default App;
