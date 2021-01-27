import React from "react";
// library
import { MobileOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import axios from "axios";
// scss
import "./UserDetail.scss";

// getting user data
var data = JSON.stringify({ userID: "Rooma" });

var config = {
  method: "post",
  url: "http://localhost:8085/api/MangedAccount/AccountPosition",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (res) {
    localStorage.setItem("userData", JSON.stringify(res.data));
    console.log(JSON.stringify(res.data));
  })
  .catch(function (error) {
    console.log(error);
  });

var user = JSON.parse(localStorage.getItem("userData"));
// getting user data

const UserDetail = () => {
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
            {/* <div className="new-account">
              <Link to="/newaccount" className="new-account-btn">
                <i className="btn-icon">
                  <PlusOutlined style={{ color: "#fff", width: "20px" }} />
                </i>
                <span>Open a new account</span>
              </Link>
            </div> */}
            <div className="user-assets-detail">
              <Row>
                <img
                  src={require("../../../assets/images/wallet.png")}
                  alt="wallet"
                  className="icon"
                />
                <Col>
                  <h5>Total Net Worth </h5>
                  <p>PKR {user.currentWorth}.0 </p>
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
                  <p>PKR {user.shareWorth}</p>
                </Col>
              </Row>
            </div>
            {/* <div className="user-assets-detail">
              <Row>
                <img
                  src={require("../../../assets/images/link.png")}
                  alt="wallet"
                  className="icon"
                />
                <Col>
                  <h5>
                    Held-away Net Worth <Link to="/Accounts">(2 Accounts)</Link>
                  </h5>
                  <p>PKR 500,000.00</p>
                </Col>
              </Row>
            </div> */}
            <div className="user-assets-detail">
              <Row>
                <img
                  src={require("../../../assets/images/earning.png")}
                  alt="wallet"
                  className="icon"
                />
                <Col>
                  <h5>Total Earnings</h5>
                  <p>-PKR {user.earning} </p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;