import React from "react";
import "./OtherDocuments.scss";

import { Table } from "antd";

let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();

var t = new Date().toLocaleTimeString(); // for now

const data = [
  {
    key: "1",
    date: "",
    render:()=>( <iframe src={require("../../../assets/dummyData/DummyFiles/sample_report.pdf")} />),
    description: "sample annual reporting file.",
  },
  {
    key: "2",
    Date: "",
    filename: "$53,706.67",
    description: "IRA Traditional Agreement.",
  },
  {
    key: "3",
    Date: "",
    filename: "$53,706.67",
    description: "	W-9 Tax Form.",
  },
  {
    key: "4",
    Date: "",
    filename: "$53,706.67",
    description: "W-9",
  },
];

const documentsColumn = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    // n: new Date(),
    // y: n.getFullYear(),
    // m: n.getMonth() + 1,
    // d: n.getDate(),
    render: () => (
      <p>
        {t} {m + "/" + d + "/" + y}
      </p>
    ),
  },
  {
    title: "File Name",
    dataIndex: "filename",
    key: "filename",
  render: () => <a>sample report</a>,
  },

  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

const OtherDocuments = () => {
  return (
    <div className="other-documents">
      <div className="inner-div">
        <Table columns={documentsColumn} dataSource={data} className="table" />
      </div>
    </div>
  );
};

export default OtherDocuments;
