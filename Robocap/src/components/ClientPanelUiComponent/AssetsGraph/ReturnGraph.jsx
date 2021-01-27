import React, { useEffect } from "react";
// component
import { getTotalReturnGraph } from "redux/actions/ClientPanelGraphData";
import Async from "components/shared/Async/Async";
import { IN_PROGRESS } from "constants/loader";
// import { Graph } from "../../../assets/dummyData/dummy";
// library
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";
import { DatePicker, Space } from "antd";
import moment from "moment";
// scss
import "./ReturnGraph.scss";

const dateFormat = "MM/DD/YYYY";
const { RangePicker } = DatePicker;

const ReturnGraph = (props) => {
  useEffect(() => {
    const userID = props.login.user.userID;
    // console.log(userID);

    props.getTotalReturnGraph(userID);
  }, []);

  const {
    totalReturnGraph,
    uiState,
    error,
    uiStateGetTotalReturnGraphData,
  } = props.getGraphData;
  // console.log(totalReturnGraph);

  const returnData = totalReturnGraph ? Object.values(totalReturnGraph):[]
  // console.log(returnData)

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
        data: returnData,
        type: "areaspline",
        threshold: null,
        tooltip: {
          valueDecimals: 0,
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
              loading={uiStateGetTotalReturnGraphData === IN_PROGRESS ? true : false}
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
};

const mapStateToProps = (state) => {
  return {
    getGraphData: state.getGraphData,
    login: state.login,
  };
};
const mapDispatchToProps = {
  getTotalReturnGraph,
};
export default connect(mapStateToProps, mapDispatchToProps)(ReturnGraph);

// export default ReturnGraph;
