import React from "react";
// component
// library
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
// scss
import "./MTSubHeader.scss";

const MTSubHeader = () => {
  return (
    <div className="performance-nav-pc">
      <div className="performance-sidebar-root">
        <div className="sidebar-box">
          <div className="sector-box">
            <Menu theme="light" mode="vertical">
              <div className="per-title">Transfer Funds</div>
              <Menu.Item key="1" className="sub-links">
                <NavLink to="/transfer/deposit">Deposit</NavLink>
              </Menu.Item>
              <div className="per-title">Transfer Positions</div>
              <Menu.Item key="2" className="sub-links">
                <NavLink to="/transfer/history">Transaction History</NavLink>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MTSubHeader;
