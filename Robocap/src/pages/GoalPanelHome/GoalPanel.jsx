import React from "react";

// component
import TotalGraph from "components/GoalPanelUiComponent/AssetsGraph/TotalGraph";
import ReturnGraph from "components/GoalPanelUiComponent/AssetsGraph/ReturnGraph";
import Header from "components/shared/Header/Header";
import UserDetail from "components/GoalPanelUiComponent/UserDetail/UserDetail";
import GoalDetail from "components/GoalPanelUiComponent/GoalDetail/GoalDetail"
// scss
import "./GoalPanel.scss";
import { Container } from "react-bootstrap";

function GoalPanel() {
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
          <GoalDetail/>
        </section>
      </Container>
    </div>
  );
}

export default GoalPanel;
