import React from "react";
import "./OtherDocuments.scss";
import { Table } from "antd";
import SampleReport from "assets/dummyData/DummyFiles/sample_report.pdf";

let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();

var t = new Date().toLocaleTimeString(); // for current date and time



const data = [
  {
    key: "1",
    date: "",
    filename: {},
    description: "sample annual reporting file.",
  },
  {
    key: "2",
    Date: "",
    filename: "",
    description: "IRA Traditional Agreement.",
  },
  {
    key: "3",
    Date: "",
    filename: "",
    description: "	W-9 Tax Form.",
  },
  {
    key: "4",
    Date: "",
    filename: "",
    description: "W-9",
  },
];

const documentsColumn = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
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
    render: () => (
      <div className="modelContent">
        <iframe title="Reports" src={SampleReport} style={{width:"600px", height:"500px"}} frameborder={0}>Hello</iframe>
      </div>
    ),
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
