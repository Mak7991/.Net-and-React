import React from "react";

// component
import TotalGraph from "components/ClientPanelUiComponent/AssetsGraph/TotalGraph";
import ReturnGraph from "components/ClientPanelUiComponent/AssetsGraph/ReturnGraph";
import UserDetail from "components/ClientPanelUiComponent/UserDetail/UserDetail";
import GoalDetail from "components/ClientPanelUiComponent/GoalDetail/GoalDetail";
// library
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// scss
import "./ClientHome.scss";

function ClientHome() {
  return (
    <div className="home-page">
      <Container>
        <section>
          <UserDetail />
        </section>
        <div className="user-graph">
          <div className="user-total-assets-graph">
            <TotalGraph />
          </div>
          <div className="user-total-return-graph">
            <ReturnGraph />
          </div>
        </div>
        <section className="user-goal">
          <GoalDetail />
        </section>
        <section>
          <div className="investment-goal">
            <Link to="/newaccount" className="investment-goal-btn">
              <i className="btn-icon">
                <PlusOutlined style={{ color: "#2196f3", width: "20px" }} />
              </i>
              <span>Learn about more investment goal</span>
            </Link>
          </div>
        </section>
        <section className="manage-assets-summary">
          <h1>Held-away Accounts</h1>
          <div className="account-list-wrap">
            <div className="list-banner">
              <div className="banner-title">Investment</div>
              <div className="banner-value">$500,000.00</div>
            </div>
            <div className="c-external-accounts-item-root">
              <div className="ant-row-flex">
                <div className="ant-col-24 ant-col-md-12">
                  <div>
                    <div className="external-account-name">
                      <h4>BOA - 403K</h4>{" "}
                    </div>
                    <div className="external-account-banner">
                      <div className="type">MANUAL</div>
                      <div className="icon-wrap ant-dropdown-trigger">
                        <span>
                          <MoreOutlined className="icon" />
                        </span>
                      </div>
                    </div>
                    <div className="external-account-content">
                      <div className="external-item">
                        <span className="label">Balance</span>
                        <span className="value">$200,000.00</span>
                      </div>
                      <div className="external-item">
                        <span className="label">Account Type</span>
                        <span className="value">401(k)</span>
                      </div>
                      <div className="external-item">
                        <span className="label">Account Owner</span>
                        <span className="value">client A</span>
                      </div>
                      <div className="external-item">
                        <span className="label">Annual Contribution</span>
                        <span className="value">$20,303.00</span>
                      </div>
                      <div className="external-item">
                        <span className="label">Total Cost</span>
                        <span className="value">40.00%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ant-col-24 ant-col-md-12">
                  <div>
                    <div className="external-account-name">
                      <h4>CITI - Joint Taxable</h4>{" "}
                    </div>
                    <div className="external-account-banner">
                      <div className="type">MANUAL</div>
                      <div className="icon-wrap ant-dropdown-trigger">
                        <span>
                          <MoreOutlined className="icon" />
                        </span>
                      </div>
                    </div>
                    <div className="external-account-content">
                      <div className="external-item">
                        <span className="label">Balance</span>
                        <span className="value">$300,000.00</span>
                      </div>
                      <div className="external-item">
                        <span className="label">Account Type</span>
                        <span className="value">Joint Taxable</span>
                      </div>
                      <div className="external-item">
                        <span className="label">Account Owner</span>
                        <span className="value">client</span>
                      </div>
                      <div className="external-item">
                        <span className="label">Annual Contribution</span>
                        <span className="value">$20,303.00</span>
                      </div>
                      <div className="external-item">
                        <span className="label">Account Fee</span>
                        <span className="value">2.10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default ClientHome;