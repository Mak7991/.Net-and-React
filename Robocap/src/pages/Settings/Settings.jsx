import React from "react";
// component
import Header from "components/shared/Header/Header";
// library
import { Modal } from "antd";
import { Container } from "react-bootstrap";
import "react-bootstrap";
// scss
import "./Settings.scss";

class ManageTransfer extends React.Component {
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
      <div className="managa-transfer-page">
        <Header />
        <Container>
          <div
            className="ant-col-xs-24 ant-col-md-8"
            style={{ paddingLeft: "8px", paddingRight: "8px" }}>
            <div className="link-box-root">
              <h4 className="link-title">Password</h4>
              <div className="link-text">Change your login password.</div>
              <div className="link-btn-wrap">
                <button type="button" class="ant-btn ant-btn-primary" onClick={this.showModal}>
                  <span>Change</span>
                </button>
                <div>
                  <Modal
                    title="Accounts Detail"
                    style={{ textAlign: "center" }}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <h2>DU19871914764763463863468</h2>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default ManageTransfer;
