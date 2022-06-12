import React from "react";
import { Layout } from "antd";

import Home from "./pages/Home";
import Header from "./components/Header";
import Post from "./pages/Post";
import AddPost from "./pages/AddPost";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

import "antd/dist/antd.min.css";
import "./App.css";

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: "60px 50px" }}>
        <Home />
        {/* <Post/> */}
        {/* <AddPost/> */}
        {/* <Profile/> */}
        {/* <Login/> */}
        {/* <SignUp/> */}
      </Content>
    </Layout>
  );
};

export default App;
