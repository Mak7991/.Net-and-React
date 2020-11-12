import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
// import { data } from "../../../assets/dummyData/dummy";
import "./PsectorGraph.scss";

const options = {
  chart: {
    type: "column",
    threshold: null,
      tooltip: {
        valueDecimals: 2,
      },
  },
  // rangeSelector: {
  //   selected: 1,
  // },
  credits: {
    enabled: true,
  },
  title: {
    text: "",
  },
  
  series: [
    {
      name: "Communication Services",
      data: [2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3],
    },
    {
      name: "Health Care",
      data: [2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3],
    },
    {
      name: "Energy",
      data: [2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3],
    },
    {
      name: "Materials",
      data: [2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3],
    },
    {
      name: "Financials",
      data: [2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3],
    },
    {
      name: "Industrials",
      data: [2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3]
    },
    {
      name: "Consumer Discretionary",
      data: [2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3]
    },
    {
      name: "Information Technology",
      data: [2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3, 2, 2, 1, 3, 4, -2, -3, -2, -3]
    }
  ],
};

const PsectorGraph = () => (
  <div className="Psector-chart">
    <div className="chart-info">
      <h1>Performance by Sector</h1>
    </div>
    <HighchartsReact
      className="main-chart"
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  </div>
);

export default PsectorGraph;
