import React from "react";

// component
import TotalGraph from "components/ClientPanelUiComponent/AssetsGraph/TotalGraph";
import ReturnGraph from "components/ClientPanelUiComponent/AssetsGraph/ReturnGraph";
import Header from "components/shared/Header/Header";
import UserDetail from "components/ClientPanelUiComponent/UserDetail/UserDetail";
import GoalDetail from "components/ClientPanelUiComponent/GoalDetail/GoalDetail";
// library
import { PlusOutlined } from "@ant-design/icons";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// scss
import "./GoalPanel.scss";

function ClientPanel() {
  return (
    <div className="home-page">
      <Header />
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
        </section>
      </Container>
    </div>
  );
}

export default ClientPanel;
