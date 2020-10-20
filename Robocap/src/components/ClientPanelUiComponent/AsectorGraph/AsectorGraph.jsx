import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { data } from "../../../assets/dummyData/dummy";
import './AsectorGraph.scss';

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

const AsectorGraph = () => (
  <div className="Asector-chart">
    <div className="chart-info">
      <h1>Allocation by Sector</h1>
    </div>
    <HighchartsReact
      className="main-chart"
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  </div>
);

export default AsectorGraph;
