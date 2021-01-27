import React from "react";
// component
// import { Graph } from "assets/dummyData/dummy";
import { getTotalManageGraph } from "redux/actions/ClientPanelGraphData";
import Async from "components/shared/Async/Async";
import { IN_PROGRESS } from "constants/loader";
// library
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";
import { DatePicker, Space } from "antd";
import moment from "moment";
// scss
import "./TotalGraph.scss";

const dateFormat = "MM/DD/YYYY";
const { RangePicker } = DatePicker;

class TotalGraph extends React.Component {
  componentDidMount() {
    const userID = this.props.login.user.userID;

    // console.log(userID);

    this.props.getTotalManageGraph(userID);
  }

  render() {
    const {
      totalManageGraph,
      uiStateGetTotalManageGraphData,
      uiState,
      error,
    } = this.props.getGraphData;
    // console.log(totalManageGraph);

    let arr = [];

    for (let i = 0; i < totalManageGraph.length; i++) {
      arr.push([totalManageGraph[i].netValue]);
      // console.log(arr);
    }

    const options = {
      rangeSelector: {
        allButtonsEnabled: true,
        inputEnabled: false,
        buttons: [
          {
            type: "month",
            count: 1,
            text: "1m",
            dataGrouping: {
              forced: true,
              units: [["day", [1]]],
            },
          },
          {
            type: "month",
            count: 1,
            text: "3m",
            dataGrouping: {
              forced: true,
              units: [["day", [1]]],
            },
          },
          {
            type: "month",
            count: 1,
            text: "6m",
            dataGrouping: {
              forced: true,
              units: [["day", [1]]],
            },
          },
          {
            type: "ytd",
            count: 1,
            text: "YTD",
            dataGrouping: {
              forced: true,
              units: [["year", [1]]],
            },
          },
          {
            type: "year",
            count: 1,
            text: "1y",
            dataGrouping: {
              forced: true,
              units: [["week", [1]]],
            },
          },
          {
            type: "all",
            text: "All",
            count: 3,
            // dataGrouping: {
            //     forced: true,
            //     units: [['year', [2]]]
            // }
          },
        ],
        buttonTheme: {
          width: 30,
        },
        selected: 5,
      },

      // scrollbar: {
      //   enabled: false
      // },
      series: [
        {
          data: arr,
          type: "areaspline",
          threshold: null,
          tooltip: {
            valueDecimals: 1,
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

    return (
      <div className="total-chart">
        <div className="chart-info">
          <h1>Total Managed Assets</h1>
          <div className="chart-value">
            <div className="beginning">
              <h5>Beginning</h5>
              <p>44.28k</p>
            </div>
            <div className="Ending">
              <h5>Ending</h5>
              <p>53.71k</p>
            </div>
            <div className="Overall">
              <h5>Overall</h5>
              <p>13.28%</p>
            </div>
          </div>
        </div>
        <Space direction="vertical" className="date-select">
          <RangePicker
            defaultValue={[moment("01/01/2019", dateFormat), moment("12/30/2021", dateFormat)]}
            format={dateFormat}
          />
        </Space>
        <Async
          uiState={uiState}
          error={error}
          onSuccess={() => {
            return (
              <HighchartsReact
                loading={uiStateGetTotalManageGraphData === IN_PROGRESS ? true : false}
                className="main-chart"
                highcharts={Highcharts}
                constructorType={"stockChart"}
                options={options}
              />
            );
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getGraphData: state.getGraphData,
    login: state.login,
  };
};
const mapDispatchToProps = {
  getTotalManageGraph,
};
export default connect(mapStateToProps, mapDispatchToProps)(TotalGraph);

// export default TotalGraph;
