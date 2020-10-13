import React, { Component } from "react";

// libraries
import { Collapse, Table, Tag, Space } from "antd";
import { FundOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import { Pie } from '@antv/g2plot';
// scss
import "./GoalDetail.scss";

const { Panel } = Collapse;
// const { Option } = Select;

function callback(key) {
  console.log(key);
}

// const data = [
//   { type: 'test1', value: 27 },
//   { type: 'test2', value: 25 },
//   { type: 'test3', value: 18 },
//   { type: 'test4', value: 15 },
//   { type: 'test5', value: 10 },
//   { type: 'test6', value: 5 },
// ];

// const piePlot ={
//   statistic: {
//     title: false,
//     content: {
//       formatter: () => 'AntV\nG2Plot',
//     },
//   },
//   appendPadding: 10,
//   data: data,
//   angleField: 'value',
//   colorField: 'type',
//   radius: 0.8,
//   innerRadius: 0.6,
//   label: {
//     type: 'inner',
//     offset: '-0.5',
//     content: '{percentage}',
//     style: {
//       fill: '#fff',
//       fontSize: 14,
//       textAlign: 'center',
//     },
//   },
// }

const data = [
  {
    key: "1",
    account: "DU1987191",
    netvalue: "$53,706.67",
    earning: "$8,785.81",
    totalreturn: "19.66%",
  },
];
const columns = [
  {
    title: "Account",
    dataIndex: "account",
    key: "account",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Net Asset Value	",
    dataIndex: "netvalue",
    key: "netvalue",
  },
  {
    title: "Earnings",
    dataIndex: "earning",
    key: "earning",
  },
  {
    title: "Total Return",
    key: "totalreturn",
    dataIndex: "totalreturn",
  },
  {
    title: "Status",
    key: "status",
    render: (text, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a>
        <a>Delete</a> */}
        <p>Funded</p>
      </Space>
    ),
  },
];

class GoalDetail extends Component {
  state = {
    expandIconPosition: "right",
  };

  onPositionChange = (expandIconPosition) => {
    this.setState({ expandIconPosition });
  };

  render() {
    const { expandIconPosition } = this.state;
    return (
      <div className="user-goal">
        <Collapse
          defaultActiveKey={["1"]}
          onChange={callback}
          expandIconPosition={expandIconPosition}>
          <Panel
            className="goal-collapse"
            header="Goal College Education "
            key="1"
            style={{ fontWeight: "600", fontSize: "20px" }}>
            <div className="goal-collapse-inner">
              <div className="goal-disc">
                <h5>Description</h5>
                <p>
                  Help your clients find a suitable investment strategy. Your investing strategy
                  should reflect the kind of investor you are your personal investor profile. This
                  goal will help you determine your profile and then match it to an investment
                  strategy that's designed for investors like you.
                </p>
                <Link to="/GoalForecaster">
                  <FundOutlined style={{ marginRight: "5px", fontSize: "20px" }} />
                  Goal ForeCaster
                </Link>
              </div>
              <div className="goal-allocation">
                <h1>Asset Allocation</h1>
                <div></div>
              </div>
            </div>
          </Panel>
          <div className="mannage-acct">
            <h1 >
              Managed Accounts <span>(as of 12/04/2019)</span>
            </h1>
            <Table columns={columns} dataSource={data} />
          </div>
        </Collapse>
        <br />
      </div>
    );
  }
}

export default GoalDetail;

// const piePlot = new Pie('container', {
//   appendPadding: 10,
//   data,
//   angleField: 'value',
//   colorField: 'type',
//   radius: 0.8,
//   innerRadius: 0.6,
//   label: {
//     type: 'inner',
//     offset: '-0.5',
//     content: '{percentage}',
//     style: {
//       fill: '#fff',
//       fontSize: 14,
//       textAlign: 'center',
//     },
//   },
// });

// piePlot.render();
