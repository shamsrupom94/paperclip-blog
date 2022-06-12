import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
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
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/post/:id" element={<Post />} />
            <Route exact path="/add-post" element={<AddPost />} />
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </Layout>
  );
};

export default App;
