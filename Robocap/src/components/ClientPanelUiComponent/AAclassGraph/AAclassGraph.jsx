import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { data } from "../../../assets/dummyData/dummy";
import "./AAclassGraph.scss";

const options = {
  rangeSelector: {
    selected: 1,
  },
  series: [
    {
      data: data,
      type: "column",
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

const AAclassGraph = () => (
  <div className="AAclass-chart">
    <div className="chart-info">
      <h1>Allocation by Asset Class</h1>
    </div>
    <HighchartsReact
      className="main-chart"
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  </div>
);

export default AAclassGraph;
