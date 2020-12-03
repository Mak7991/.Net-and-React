import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Dropdown, Menu } from "antd";
import { MailOutlined, DownOutlined, PoweroffOutlined, MessageOutlined } from "@ant-design/icons";
import "./UserNav.scss";

// pageChangeHandler = () => {
//   window.location.replace("/");
// };
const pageChangeHandler = () => {
  window.location.replace("/");
};

const UserNav = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">robocapgoal@demo.com</Menu.Item>
      <Menu.Item key="2">
        <Link to="/auth/changePassword">
          <MessageOutlined style={{ fontSize: "15px", color: "#888e98", padding: "10px" }} />
          Set Password
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <div onClick={pageChangeHandler}>
          <PoweroffOutlined style={{ fontSize: "15px", color: "#888e98", padding: "10px" }} />
          <span>Log out</span>
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <Breadcrumb className="user-dropdown">
      <Breadcrumb.Item href="">
        <MailOutlined style={{ fontSize: "20px", color: "#888e98" }} />
        <Dropdown overlay={menu}>
          <Link className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            robocap goal cl.. <DownOutlined style={{ fontSize: "15px", color: "#888e98" }} />{" "}
          </Link>
        </Dropdown>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default UserNav;
