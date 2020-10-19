import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { data } from "../../../assets/dummyData/dummy";

const options = {
  rangeSelector: {
    selected: 1,
  },
  series: [
    {
      data: data,
      type: "areaspline",
      threshold: null,
      tooltip: {
        valueDecimals: 2,
      },
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get("rgba")],
        ],
      },
    },
  ],
};

const AregionGraph = () => (
  <div className="return-chart">
    <div className="chart-info">
      <h1>Total Return</h1>
      <div className="chart-value">
        <div className="lastdays">
          <h5>Last Seven Days</h5>
          <p>-2.03%</p>
        </div>
        <div className="lastmonth">
          <h5>Last Month</h5>
          <p>0.27%</p>
        </div>
        <div className="overall">
          <h5>Overall</h5>
          <p>15.28%</p>
        </div>
      </div>
    </div>
    <HighchartsReact
      className="main-chart"
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  </div>
);

export default AregionGraph;