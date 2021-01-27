import React, { useState, useEffect } from "react";
import { Button, Badge } from "antd";
import { useHistory } from "react-router-dom";
import PlanGraph from "components/ClientPanelUiComponent/PlanGraph/PlanGraph";
import "./Plan.scss";

const Plan = () => {
  const history = useHistory();
  const gotoSignup = () => {
    history.push("/SignUp");
  };

  var score = Math.floor(Math.random() * 6) + 5;

  const [cash, setCash] = useState(0);
  const [share, setShare] = useState(0);

  useEffect(() => {
    if (score >= 1 && score <= 5) {
      document.getElementById("risklevel").innerHTML = "Conservative";
    } else if (score >= 5 && score <= 7) {
      document.getElementById("risklevel").innerHTML = "Moderately Aggressive ";
    } else if (score >= 7 && score <= 10) {
      document.getElementById("risklevel").innerHTML = "Aggressive ";
    }

    if (score >= 1 && score <= 5) {
      document.getElementById("type").innerHTML = "Individual Account";
    } else if (score >= 5 && score <= 7) {
      document.getElementById("type").innerHTML = "Individual Account";
    } else if (score >= 7 && score <= 10) {
      document.getElementById("type").innerHTML = "Corporate Account";
    }

    if (score >= 1 && score <= 5) {
      document.getElementById("planHeading").innerHTML =
        "30/70 CONSERVATIVE PORTFOLIO | 30% in high risky assets & 70% Lower Risky Assets ";
    } else if (score >= 5 && score <= 7) {
      document.getElementById("planHeading").innerHTML =
        "50/50 MODERATELY AGGRESSIVE PORTFOLIO | 50% in high risky assets & 50% Lower Risky Assets ";
    } else if (score >= 7 && score <= 10) {
      document.getElementById("planHeading").innerHTML =
        "70/30 AGGRESSIVE PORTFOLIO | 70% in high risky assets & 30% Lower Risky Assets ";
    }

    if (score >= 1 && score <= 5) {
      document.getElementById("plandiscription").innerHTML =
        "This is a classic 30/70 portfolio which invests appx. 30% in stocks having equal or higher beta relative to benchmark index and 70% in relatively defensive stocks, cash  or fixed income portfolios. This portfolio is best for investors with a Conservative risk level.";
    } else if (score >= 5 && score <= 7) {
      document.getElementById("plandiscription").innerHTML =
        "This is a classic 50/50 portfolio which invests appx. 50% of the portfolio in stocks having equal or higher beta relative to benchmark index and 50% in relatively defensive stocks, cash or fixed income portfolios. This portfolio is best for investors with a moderately aggressive risk level.";
    } else if (score >= 7 && score <= 10) {
      document.getElementById("plandiscription").innerHTML =
        "This is a classic 70/30 portfolio which invests appx. 70% of the portfolio in stocks having equal or higher beta relative to benchmark index, some high growth value small cap stocks and remaining 30% in relatively defensive or dividend paying stocks, cash or in fixed income portfolios. This portfolio is best for investors with a high risk taking appetite.";
    }

    if (score >= 1 && score <= 5) {
      setCash(30);
      setShare(70);
    } else if (score >= 5 && score <= 7) {
      setCash(50);
      setShare(50);
    } else if (score >= 7 && score <= 10) {
      setCash(70);
      setShare(30);
    }
  }, []);

  return (
    <div className="plan-page">
      <div className="ant-col-md-24 inner-div">
        <h3 className="">Your Investment Plan</h3>
        <h5>We recommend a Balanced Portfolio for you</h5>

        <div className="total-values">
          <div className="value-item total-assets">
            <h4>Score</h4>
            <br />
            <p>{score}</p>
          </div>
          <div className="value-item total-earning">
            <h4>Risk Level</h4>
            <br />
            <p id="risklevel"></p>
          </div>
          <div className="value-item total-return">
            <h4>Customer Type Supported</h4>
            <br />
            <p id="type"></p>
          </div>
        </div>
        <div className="plan-discription">
          <h5 id="planHeading"></h5>
          <p id="plandiscription"></p>
        </div>
      </div>
      <div className="plan-graph">
        <div className="inner-div">
          <PlanGraph cash={cash} share={share} />
          <div className="graph-points">
            <Badge color="rgb(144, 237, 125)" text="Cash" />
            <span><b>{cash}{`%`}</b></span>
            <br />
            <Badge color="rgb(124, 181, 236)" text="Share" />
            <span><b>{share}{`%`}</b></span>
            <br />
          </div>
        </div>
      </div>

      <div className="register-btn">
        <Button
          type="primary"
          htmlType="submit"
          className="ant-btn ant-btn-primary"
          onClick={gotoSignup}>
          Register Here
        </Button>
      </div>
    </div>
  );
};

export default Plan;
