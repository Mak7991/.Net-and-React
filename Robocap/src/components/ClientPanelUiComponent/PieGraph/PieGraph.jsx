import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { getCurUserData } from "redux/actions/CurUserData";
// import axios from "axios";
import { connect } from "react-redux";
import "./PieGraph.scss";

let colors = Highcharts.getOptions().colors,

  PieGraph = (props) => {

    useEffect(() => {
      const userID = props.login.user.userID;
      props.getCurUserData(userID);
    }, []);

    const { values } = props.getUserValues;
    // console.log(values);

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
          innerSize: "65%",
          data: [
            // ["Share Worth", values.shareWorth],
            // ["", 0],

            // ["Cash Worth", values.cash],
            // ["", 0],
            {
              color: colors[0],
              name: "Share",
              y: values.shareWorth,
            },
            {
              color: colors[2],
              name: "Cash",
              y: values.cash,
            },
          ],
        },
      ],
    };

    return (
      <div className="pie-chart">
        <HighchartsReact className="main-chart" highcharts={Highcharts} options={options} />
      </div>
    );
  };

const mapStateToProps = (state) => {
  return {
    getUserValues: state.getUserValues,
    login: state.login,
  };
};

const mapDispatchToProps = {
  getCurUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PieGraph);

// export default PieGraph;
