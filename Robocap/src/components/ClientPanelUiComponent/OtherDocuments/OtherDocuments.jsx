import React, { Component } from "react";
import "./OtherDocuments.scss";
import { Table, Modal } from "antd";
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
    filename: "Sample Report",
    description: "sample annual reporting file.",
  },
  {
    key: "2",
    Date: "",
    filename: "Sample Report",
    description: "IRA Traditional Agreement.",
  },
  {
    key: "3",
    Date: "",
    filename: "Sample Report",
    description: "	W-9 Tax Form.",
  },
  {
    key: "4",
    Date: "",
    filename: "Sample Report",
    description: "W-9",
  },
];

class OtherDocuments extends Component {
  state = {
    Visible: false,
  };

  setVisible(Visible) {
    this.setState({ Visible });
  }

  documentsColumn = [
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
      // title: "File Name",
      // dataIndex: "filename",
      // key: "filename",
      // render: () => (
      //   <div className="modelContent">
      //     <iframe title="Reports" src={SampleReport} style={{width:"600px", height:"500px"}} frameborder={0}>Hello</iframe>
      //   </div>
      // ),
    },
    {
      title: "File Name",
      dataIndex: "filename",
      key: "filename",
      render: (text) => (
        <>
          <a type="primary" onClick={() => this.setVisible(true)}>
            {text}
          </a>
          <Modal
            style={{ top: 20 }}
            width={1200}
            height={1600}
            visible={this.state.Visible}
            onOk={() => this.setVisible(false)}
            onCancel={() => this.setVisible(false)}>
            <iframe
              title="Reports"
              src={SampleReport}
              style={{ width: "100%", height: "600px" }}
              frameborder={0}></iframe>
          </Modal>
        </>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  render() {
    return (
      <div className="other-documents">
        <div className="inner-div">
          <Table columns={this.documentsColumn} dataSource={data} className="table" />
        </div>
      </div>
    );
  }
}

export default OtherDocuments;
