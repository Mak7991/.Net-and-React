import React from "react";
import Header from "components/shared/Header/Header";
import "./Performance.scss";
import { Container } from "react-bootstrap";
import "antd/dist/antd.css";
import TotalGraph from "components/ClientPanelUiComponent/AssetsGraph/TotalGraph";
import ReturnGraph from "components/ClientPanelUiComponent/AssetsGraph/ReturnGraph";
import PAclassGraph from "components/ClientPanelUiComponent/PAclassGraph/PAclassGraph";
import PsectorGraph from "components/ClientPanelUiComponent/PsectorGraph/PsectorGraph";
import AAclassGraph from "components/ClientPanelUiComponent/AAclassGraph/AAclassGraph";
import AsectorGraph from "components/ClientPanelUiComponent/AsectorGraph/AsectorGraph";
import AregionGraph from "components/ClientPanelUiComponent/AregionGraph/AregionGraph";

const Performance = () => {
  return (
    <div className="performance-page">
      <Header />
      <Container>
        <div className="performance-inner-div">
          <div className="performance-nav-pc">
            <div className="performance-sidebar-root">
              <div className="sidebar-box">
                <div className="sector-box">
                  <div className="per-title">Sector</div>
                  <div className="sector-item-box">
                    <span className="active">
                      <a href="#TotalAssets">Total Managed Assets</a>
                    </span>
                    <span className="">
                      <a href="#Growth">Total Return</a>{" "}
                    </span>
                    <span className="">
                      <a href="#PerformanceByAssetClass"> Performance by Asset Class</a>
                    </span>
                    <span className="">
                      <a href="#PerformanceBySector">Performance by Sector</a>{" "}
                    </span>
                    <span className="">
                      <a href="#AllocationByAssetClass">Allocation by Asset Class</a>{" "}
                    </span>
                    <span className="">
                      <a href="#AllocationBySector">Allocation by Sector</a>{" "}
                    </span>
                    <span className="">
                      <a href="#AllocationByRegion">Allocation by Region</a>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="performance-graph">
            <div className="radio-tag-root">
              <span className="radio-tag">All</span>
              <span className="radio-tag">DU1987191</span>
            </div>
            <div className="ant-spin-nested-loading">
              <div className="site-carder-box-c">
                <div class="statistics-overview-header">
                  <span class="statistics-currency"></span>
                  <span class="statistics-date">as of 12/04/2019</span>
                </div>
                <div className="total-values">
                  <div className="value-item total-assets">
                    <h4>Total Managed Assets</h4>
                    <br />
                    <p>$53,706.67</p>
                  </div>
                  <div className="value-item total-earning">
                    <h4>Total Earnings</h4>
                    <br />
                    <p>-$45,295.98</p>
                  </div>
                  <div className="value-item total-return">
                    <h4>Total Return</h4>
                    <br />
                    <p>-44.84%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-carder-box-c">
              <div className="main-graph-div">
                <div id="TotalAssets" className="total-assets-graph">
                  <TotalGraph />
                </div>
                <div id="Growth" className="total-return-grapgh">
                  <ReturnGraph />
                </div>
                <div id="PerformanceByAssetClass" className="performance-by-assets-class">
                  <PAclassGraph/>
                </div>
                <div id="PerformanceBySector" className="performance-by-sector">
                  <PsectorGraph/>
                </div>
                <div id="AllocationByAssetClass" className="allocation-by-asset-class">
                  <AAclassGraph/>
                </div>
                <div id="AllocationBySector" className="allocation-by-sector">
                  <AsectorGraph/>
                </div>
                <div id="AllocationByRegion" className="allocation-by-region">
                  <AregionGraph/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Performance;
