import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./PAclassGraph.scss";

const options = {
  chart: {
    type: "column",
  },
  credits: {
    enabled: false,
  },
  title: {
    text: ''
  },
  series: [
    {
      name: "ETF",
      data: [
        2,
        2,
        1,
        3,
        4,
        -2,
        -3,
        -2,
        -3,
        4,
        2,
        1,
        3,
        4,
        4,
        -2,
        -3,
        2,
        1,
        5,
        3,
        4,
        7,
        2,
        2,
        -2,
        -3,
        -2,
        -3,
        -2,
        -3,
        2,
        1,
        3,
        4,
        4,
        -2,
        5,
      ],
    },
  ],
};

const PAclassGraph = () => (
  <div className="PAclass-chart">
    <div className="chart-info">
      <h1>Performance by Asset Class</h1>
    </div>
    <HighchartsReact className="main-chart" highcharts={Highcharts} options={options} />
  </div>
);

export default PAclassGraph;