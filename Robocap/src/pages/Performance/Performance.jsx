import React from "react";
import Header from "components/shared/Header/Header";
import "./Performance.scss";
import { Container } from "react-bootstrap";
import { Menu } from "antd";
import "antd/dist/antd.css";
// import { Link } from "react-router-dom";

const Performance = () => {
  return (
    <div className="performance-page">
      <Header />
      <Container>
        <div className="performance-inner-div">
          <div className="performane-bar">
            <h1>Sector</h1>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="light">
              <Menu.Item key="1">
                <a href="#TotalAssets"> Total Managed Assets</a>
              </Menu.Item>
              <Menu.Item key="2">
                <a href="#Growth">Total Return</a>{" "}
              </Menu.Item>
              <Menu.Item key="3">
                <a href="#PerformanceByAssetClass">Performance by Asset Class</a>{" "}
              </Menu.Item>
              <Menu.Item key="4">
                <a href="#PerformanceBySector">Performance by Sector</a>
              </Menu.Item>
              <Menu.Item key="5">
                <a href="#AllocationByAssetClass">Allocation by Asset Class</a>
              </Menu.Item>
              <Menu.Item key="6">
                <a href="#AllocationBySector">Allocation by Sector</a>
              </Menu.Item>
              <Menu.Item key="7">
                <a href="#AllocationByRegion">Allocation by Region</a>
              </Menu.Item>
            </Menu>
          </div>
          <div className="performance-graph">
            <div
              id="TotalAssets"
              style={{ height: 500, width: "60%", backgroundColor: "#fff" }}></div>
            <div id="Growth" style={{ height: 500, width: "70%", backgroundColor: "#fff" }}></div>
            <div
              id="PerformanceByAssetClass"
              style={{ height: 500, width: "60%", backgroundColor: "#fff" }}></div>
            <div
              id="PerformanceBySector"
              style={{ height: 500, width: "60%", backgroundColor: "#fff" }}></div>
            <div
              id="AllocationByAssetClass"
              style={{ height: 500, width: "60%", backgroundColor: "#fff" }}></div>
            <div
              id="AllocationBySector"
              style={{ height: 500, width: "60%", backgroundColor: "#fff" }}></div>
            <div
              id="AllocationByRegion"
              style={{ height: 500, width: "60%", backgroundColor: "#fff" }}></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Performance;
