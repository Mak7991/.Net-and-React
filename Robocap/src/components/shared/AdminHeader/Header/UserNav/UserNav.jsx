import React from "react";
// library
// import { useSelector } from "react-redux";
import { Link, useHistory, Redirect } from "react-router-dom";
import { Breadcrumb, Dropdown, Menu } from "antd";
import { PoweroffOutlined, LockOutlined, DownOutlined } from "@ant-design/icons";
import { logout } from "redux/actions/loginActions";
import { connect } from "react-redux";
// scss
import "./UserNav.scss";

const UserNav = (props) => {
  
  // console.log(props.login);
  const { user } = props.login;
  // console.log(user);

  const history = useHistory();
  const gotoLogin = () => {
    // localStorage.removeItem("persist:auth");
    // return <Redirect path="/" component={Login}/>
    history.push("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/auth/changePassword">
          <LockOutlined style={{ fontSize: "15px", color: "#888e98", padding: "10px" }} />
          Set Password
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <div to="/" onClick={() => props.logout(gotoLogin)}>
          <PoweroffOutlined style={{ fontSize: "15px", color: "#888e98", padding: "10px" }} />
          <span to="/"></span>Log out
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Breadcrumb className="user-dropdown">
      <Breadcrumb.Item href="">
        {/* <MailOutlined style={{ fontSize: "20px", color: "#888e98" }} /> */}
        <Dropdown overlay={menu}>
          <Link to="/adminpanel" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {/* robocapgoal@demo.com */}
            {user.userID}
            <DownOutlined />
          </Link>
        </Dropdown>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = {
  logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserNav);

// export default UserNav;
