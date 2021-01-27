import React, { Component } from "react";

// components
import SubNav from "./SubNav/SubNav";
import UserNav from "./UserNav/UserNav";
// library
import { Navbar, Image, Container } from "react-bootstrap";
import { Drawer, Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import { MenuFoldOutlined } from "@ant-design/icons";
// scss
import "./Header.scss";

const { SubMenu } = Menu;

class Header extends Component {
  state = {
    current: "mail",
    is_visible: false,
    userID: "",
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  toggleVisibility() {
    if (window.pageYOffset > 300) this.setState({ is_visible: true });
    else this.setState({ is_visible: false });
  }

  render() {
    return (
      <div className="nav-container">
        <Container>
          <Navbar collapseOnSelect expand="lg" className="header">
            <Navbar.Brand className="nav-logo">
              <Link to="/ClientPanel">
                <Image className="logo" src={require("assets/images/logo.png")} draggable={false} />
              </Link>
            </Navbar.Brand>
            <div className="menuCon">
              <div className="leftMenu">
                <SubNav />
              </div>
              <div className="rightMenu">
                <UserNav />
              </div>
              <div className="side-menu ">
                <Drawer
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}>
                  <div className="rightMenu">
                    <UserNav />
                  </div>
                  <Menu theme="light" mode="inline">
                    <Menu.Item key="1">
                      <NavLink to="/clientpanel">Home</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <NavLink to="/performance">Performance</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <NavLink to="/activity">Activity</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <NavLink to="/transfer/history">Manage Transfer</NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <NavLink to="/documents/reports">Documents</NavLink>
                    </Menu.Item>
                  </Menu>
                </Drawer>
              </div>
              <MenuFoldOutlined className="barsMenu" type="primary" onClick={this.showDrawer} />

              {/* <Drawer
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}>
                <SubNav />
                <UserNav />
              </Drawer> */}
            </div>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Header;
