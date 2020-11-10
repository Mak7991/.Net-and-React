import React from "react";
// component
// import Header from "components/shared/Header/Header";
// import Container from "components/shared/Container/Container";
// library
import { Radio, Modal, Button } from "antd";
// scss
import "./DepositAccount.scss";

class DepositAccount extends React.Component {
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
      <div className="deposit-account">
        <div className="select-account">
          <span className="per-title">Deposit</span>
          <span className="per-disc">
            (This function is only limited to accounts opened under MARSCO)
          </span>

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
              <br />
              <div className="select-account">
                <h5>
                  Account Type <span>IRA-Traditional Rollover</span> <br /> <br /> Total Balance{" "}
                  <span>$53,706.67</span>{" "}
                </h5>
                <br />
                <div>
                  <Button type="primary" onClick={this.showModal}>
                    Open Account Details
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
        </div>
      </div>
    );
  }
}

export default DepositAccount;
