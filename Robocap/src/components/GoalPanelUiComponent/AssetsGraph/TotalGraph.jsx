import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./TotalGraph.scss";
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

const TotalGraph = () => (
  <div className="total-chart">
    <div className="chart-info">
      <h1>Total Managed Assets</h1>
      <div className="chart-value">
        <div>
          <h5>Beginning</h5>
          <p>44.28k</p>
        </div>
        <div>
          <h5>Ending</h5>
          <p>53.71k</p>
        </div>
        <div>
          <h5>Overall</h5>
          <p>21.28%</p>
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

export default TotalGraph;
