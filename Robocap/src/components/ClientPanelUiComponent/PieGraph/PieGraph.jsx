import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./PieGraph.scss";

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
  },
  title: {
    text: "ETF",
    align: "center",
    verticalAlign: "middle",
    y: 60,
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: "bold",
          color: "white",
        },
      },
      // startAngle: -90,
      endAngle: 360,
      center: ["50%", "50%"],
      size: "60%",
    },
  },
  series: [
    {
      type: "pie",
      name: "ETF",
      innerSize: "65%",
      data: [
        ["", 58.9],
        {
          name: "",
          dataLabels: {
            enabled: false,
          },
        },
      ],
    },
  ],
};

const PieGraph = () => (
  <div className="pie-chart">
    <HighchartsReact className="main-chart" highcharts={Highcharts} options={options} />
  </div>
);

export default PieGraph;
