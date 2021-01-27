import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Breadcrumb, Dropdown, Menu } from "antd";
import { PoweroffOutlined, LockOutlined, DownOutlined } from "@ant-design/icons";
import { logout } from "redux/actions/loginActions";
import "./UserNav.scss";

const UserNav = (props) => {
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
          Log out
        </div>
      </Menu.Item>
    </Menu>
  );
  // console.log(props.login);
  const { user } = props.login;
  // console.log(user);

  return (
    <Breadcrumb className="user-dropdown">
      <Breadcrumb.Item href="">
        {/* <MailOutlined style={{ fontSize: "20px", color: "#888e98" }} /> */}
        <Dropdown overlay={menu}>
          <Link to="" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
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
