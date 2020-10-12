import React, { Component } from "react";

// libraries
import { Collapse } from "antd";

// scss
import "./GoalDetail.scss";

const { Panel } = Collapse;
// const { Option } = Select;

function callback(key) {
  console.log(key);
}

class GoalDetail extends Component {
  state = {
    expandIconPosition: "right",
  };

  onPositionChange = (expandIconPosition) => {
    this.setState({ expandIconPosition });
  };

  render() {
    const { expandIconPosition } = this.state;
    return (
      <div className="user-goal">
        <Collapse
          defaultActiveKey={["1"]}
          onChange={callback}
          expandIconPosition={expandIconPosition}>
          <Panel header="Goal College Education " key="1" style={{ fontWeight: "600" }}>
            <div className="goal-collapse">
              <h5>Description</h5>
              <p>
                Description Help your clients find a suitable investment strategy. Your investing
                strategy should reflect the kind of investor you are your personal investor profile.
                This goal will help you determine your profile and then match it to an investment
                strategy that's designed for investors like you.
              </p>
            </div>
          </Panel>
        </Collapse>
        <br />
      </div>
    );
  }
}

export default GoalDetail;
