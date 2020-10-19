import React, { Component } from "react";

// components
import SubNav from "./SubNav/SubNav";
import UserNav from "./UserNav/UserNav";
// library
import { Navbar, Image, Container } from "react-bootstrap";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { MenuFoldOutlined } from "@ant-design/icons";
// scss
import "./Header.scss";

class Header extends Component {
  state = {
    current: "mail",
    is_visible: false,
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
              {/* <Button className="barsMenu" type="primary" onClick={this.showDrawer}> */}
              <MenuFoldOutlined className="barsMenu" type="primary" onClick={this.showDrawer} />
              {/* </Button> */}
              <Drawer
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}>
                <SubNav />
                <UserNav />
              </Drawer>
            </div>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Header;
