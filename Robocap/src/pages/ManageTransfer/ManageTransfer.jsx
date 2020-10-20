import React from "react";
// component
import Header from "components/shared/Header/Header";
// library
import { Radio, Modal, Button } from "antd";
import { Container } from "react-bootstrap";
// scss
import "./ManageTransfer.scss";

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
          <div className="mt-main-div">
            <div className="mt-inner-div">
              <h1>Deposit Amount</h1>
              <hr />
            </div>
            <div className="account-information">
              <h4>Select an account</h4>
              <span>
                <Radio></Radio>
              </span>
              <div className="select-account">
                <h5>DU1987191</h5>
                <br />
                <div>
                  <Button type="primary" onClick={this.showModal}>
                    Open Modal
                  </Button>
                  <Modal
                    title="Accounts Detail"
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
