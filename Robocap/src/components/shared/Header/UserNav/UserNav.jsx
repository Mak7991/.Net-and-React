import React from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, Dropdown, Menu } from "antd";
import { PoweroffOutlined, LockOutlined } from "@ant-design/icons";
import { userLogin } from "redux/actions/loginActions";
import "./UserNav.scss";

const UserNav = (props) => {
  const pageChangeHandler = () => {
    window.location.replace("/");
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
        <div onClick={pageChangeHandler}>
          <PoweroffOutlined style={{ fontSize: "15px", color: "#888e98", padding: "10px" }} />
          <span>Log out</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  // const user = useSelector((state) => state);
  const { user } = props;
  console.log(user);
  return (
    <Breadcrumb className="user-dropdown">
      <Breadcrumb.Item href="">
        {/* <MailOutlined style={{ fontSize: "20px", color: "#888e98" }} /> */}
        <Dropdown overlay={menu}>
          <Link to="/clientpanel" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {/* robocapgoal@demo.com */}
            {user.userID}
          </Link>
        </Dropdown>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

const mapStateToProps = (state) => {
  const { user } = state.login;
  return {
    user,
  };
};

export default connect(mapStateToProps)(UserNav);

// export default UserNav;
