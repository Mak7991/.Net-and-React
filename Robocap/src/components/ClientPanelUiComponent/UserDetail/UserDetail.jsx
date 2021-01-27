import React from "react";
// component
import { getCurUserData } from "redux/actions/CurUserData";
// library
import { MobileOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Col, Row, Statistic } from "antd";
// import axios from "axios";
// scss
import "./UserDetail.scss";

class UserDetail extends React.Component {
  componentDidMount() {
    const userID = this.props.login.user.userID;
    this.props.getCurUserData(userID);
  }

  render() {
    const { values } = this.props.getUserValues;

    let val = values.toLocaleString("en-US", {
      valute: "USD",
    });
    // console.log(val);

    return (
      <div className="detail-panel">
        <div className="sub-detail-panel">
          <div className="user-detail">
            <div>
              <h5>Your Advisor</h5>
              <h1>EK Global Capital (Pvt.) Ltd</h1>
              <div className="contact">
                <MobileOutlined /> <p>+92-21-35344581</p>
              </div>
              <div className="email">
                <MailOutlined /> <p>support@ekglobalcapital.com</p>
              </div>
              <div className="address">
                <HomeOutlined />
                <p>10-C, 3rd Floor, Lane-9, Ittehad Commercial, Phase-VI, DHA, Karachi, Pakistan</p>
              </div>
            </div>
          </div>
          <div className="assets-detail">
            <div className="total-values">
              <div className="user-assets-detail">
                <Row>
                  <img
                    src={require("../../../assets/images/wallet.png")}
                    alt="wallet"
                    className="icon"
                  />
                  <Col>
                    <h5>Total Net Worth </h5>
                    <p>
                      PKR <Statistic value={values.currentWorth} precision={2} />
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="user-assets-detail">
                <Row>
                  <img
                    src={require("../../../assets/images/assets.png")}
                    alt="wallet"
                    className="icon"
                  />
                  <Col>
                    <h5>Total Managed Assets </h5>
                    <p>
                      PKR <Statistic value={values.shareWorth} precision={2} />
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="user-assets-detail">
                <Row>
                  <img
                    src={require("../../../assets/images/earning.png")}
                    alt="wallet"
                    className="icon"
                  />
                  <Col>
                    <h5>Total Earnings</h5>
                    <p>
                      PKR
                      <Statistic value={values.earning} precision={2} />
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getUserValues: state.getUserValues,
    login: state.login,
  };
};
const mapDispatchToProps = {
  getCurUserData,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);

// export default UserDetail;
