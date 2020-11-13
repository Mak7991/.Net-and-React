import React from "react";
// component
import Header from "components/shared/Header/Header";
// import ChangePassword from "components/ClientPanelUiComponent/ChangePassword/ChangePassword";
// library
// import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "react-bootstrap";
// scss
import "./Settings.scss";

class Settings extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="setting-page">
        <Header />
        <Container>
          <div className="setting-inner-div">
            <div
              className="ant-col-xs-24 ant-col-md-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}>
              <div className="link-box-root">
                <h4 className="link-title">Password</h4>
                <div className="link-text">Change your login password.</div>
                <div className="link-btn-wrap">
                  <Link className="ant-btn ant-btn-primary" to="/auth/changePassword">
                    Forgot password
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="ant-col-md-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}>
              <div className="link-box-root">
                <h4 className="link-title">Investor Profile Questionnaire</h4>
                <div className="link-text">
                  Help your clients find a suitable investment strategy. Your investing strategy
                  should reflect the kind of investor you are—your personal investor profile. This
                  quiz will help you determine your profile and then
                </div>
                <div className="">
                  <Link className="ant-btn ant-btn-primary" to="/auth/registerform">
                    Preview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Settings;
