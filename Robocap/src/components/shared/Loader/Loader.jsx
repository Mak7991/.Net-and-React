import React from "react";
import { Spin, Space } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";
import "./Loader.scss";

const Loader = (props) => {
  return (
    // <Spin
    //   size="large"
    //   indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />}
    //   className="loader-center1"
    // />
    <Space size="middle">
      <Spin className="loader-center1" />
    </Space>
  );
};

export default Loader;
