import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import './SubNav.scss';

const SubNav = () => {
  return (
    <Menu mode="horizontal" className="leftMenu">
      <Menu.Item key="mail" >
        <Link to="/ClientPanel">Home</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="/performance">Performance</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="/activity">Activity</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="/transfer/deposit">Manage Transfer</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="/documents/reports">Documents</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="/settings">Setting</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SubNav;
