import React from "react";
import "./Plan.scss";

const Plan = () => {
  var score = Math.floor(Math.random() * 10) + 5;

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
            <p>Agressive</p>
          </div>
          <div className="value-item total-return">
            <h4>Customer Type Supported</h4>
            <br />
            <p>Individual</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
