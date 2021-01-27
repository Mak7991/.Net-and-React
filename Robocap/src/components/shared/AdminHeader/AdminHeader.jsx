import React, { Component } from "react";

// components
// import SubNav from "../SubNav/SubNav";
import UserNav from "./Header/UserNav/UserNav";
// library
import { Navbar, Image } from "react-bootstrap";
import { Layout, Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
} from "@ant-design/icons";
// scss
import "antd/dist/antd.css";
import "./AdminHeader.scss";

const { Sider } = Layout;
const { SubMenu } = Menu;

class AdminHeader extends Component {
  render() {
    return (
      // <div className="nav-container">
      //   <Container>
      //     <Navbar collapseOnSelect expand="lg" className="header">
      //       <Navbar.Brand className="nav-logo">
      //         <Link to="/ClientPanel">
      //           <Image className="logo" src={require("assets/images/logo.png")} draggable={false} />
      //         </Link>
      //       </Navbar.Brand>
      //       <div className="admin-menuCon">
      //         <div className="leftMenu">
      //           {/* <SubNav /> */}
      //         </div>
      //         <div className="rightMenu">
      //           <UserNav />
      //         </div>
      //       </div>
      //     </Navbar>
      //   </Container>
      // </div>
      <>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              // console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              // console.log(collapsed, type);
            }}>
            <Navbar.Brand className="admin-logo">
              <Link to="/adminpanel">
                <Image className="inner-logo" src={require("assets/images/logo.png")} draggable={false} />
              </Link>
            </Navbar.Brand>

            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
              <SubMenu key="sub1" icon={<SettingOutlined />} title="Setup">
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <NavLink to="/adminpanel/RegisterUserlist">Registered User list</NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  <NavLink to="/adminpanel/userStatus">User Status Upload</NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  <NavLink to="/adminpanel/accountMapping">Account Mapping</NavLink>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <div className="rightMenu">
              <UserNav />
            </div>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default AdminHeader;
