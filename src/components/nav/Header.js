import React, { useState } from "react";
import { Button } from "antd";
import { Menu } from "antd";
import {
  HomeOutlined,
  LoginOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const { Item } = Menu;

const CustomHeader = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        padding: "0 16px",
        background: "white",
        borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
      }}
    >
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Item>
        <Item key="username" icon={<LoginOutlined />}>
          Username
        </Item>
      </Menu>
      <div>
        <Button type="login" icon={<UserOutlined />}>
          <Link to="/login">Login</Link>
        </Button>
        <Button type="register" icon={<UserAddOutlined />}>
          <Link to="/register">Register</Link>
        </Button>
      </div>
    </div>
  );
};

export default CustomHeader;
