import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./PlanGraph.scss";

let colors = Highcharts.getOptions().colors,
  PlanGraph = (props) => {

    const options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: "",
        align: "center",
        verticalAlign: "middle",
        y: 60,
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
            format: "{point.name}:{point.y:.1f}%",
            style: {
              fontWeight: "bold",
              color: "black",
            },
          },
          // startAngle: -90,
          endAngle: 360,
          center: ["50%", "50%"],
          size: "80%",
        },
      },
      series: [
        {
          type: "pie",
          name: "",
          innerSize: "70%",
          data: [
            // ["Share Worth", values.shareWorth],
            // ["", 0],

            // ["Cash Worth", values.cash],
            // ["", 0],
            {
              color: colors[0],
              name: "Share",
              y: props.share,
            },
            {
              color: colors[2],
              name: "Cash",
              y: props.cash,
            },
          ],
        },
      ],
    };

    return (
      <div className="plan-pie-graph">
        <HighchartsReact className="main-chart" highcharts={Highcharts} options={options} />
      </div>
    );
  };

export default PlanGraph;
