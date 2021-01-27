import React from "react";
// import { useSelector } from "react-redux";
// component
// import AAclassGraph from "components/ClientPanelUiComponent/AAclassGraph/AAclassGraph";
// import AsectorGraph from "components/ClientPanelUiComponent/AsectorGraph/AsectorGraph";
// import PAclassGraph from "components/ClientPanelUiComponent/PAclassGraph/PAclassGraph";
import TotalGraph from "components/ClientPanelUiComponent/AssetsGraph/TotalGraph";
import ReturnGraph from "components/ClientPanelUiComponent/AssetsGraph/ReturnGraph";
import Header from "components/shared/Header/Header";
import PsectorGraph from "components/ClientPanelUiComponent/PsectorGraph/PsectorGraph";
import { getUserAccount } from "redux/actions/Performance";

// library
import { Container } from "react-bootstrap";
import { Select, Statistic } from "antd";
import { connect } from "react-redux";
import "antd/dist/antd.css";
// scss
import "./Performance.scss";

const { Option } = Select;

let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();

class Performance extends React.Component {
  componentDidMount() {
    const userID = this.props.login.user.userID;

    // console.log(userID);
    this.props.getUserAccount(userID);
  }

  render() {
    const { getAccounts } = this.props.getUserAccountList;
    const { values } = this.props.getUserValues;
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
                      {/* <span className="">
                      <a href="#PerformanceByAssetClass"> Performance by Asset Class</a>
                    </span> */}
                      <span className="">
                        <a href="#PerformanceBySector">Performance by Sector</a>{" "}
                      </span>
                      {/* <span className="">
                      <a href="#AllocationByAssetClass">Allocation by Asset Class</a>{" "}
                    </span> */}
                      {/* <span className="">
                      <a href="#AllocationBySector">Allocation by Sector</a>{" "}
                    </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="performance-graph">
              <div className="radio-tag-root">
                {/* <span className="radio-tag">All</span>
              <span className="radio-tag">DU1987191</span> */}
                <div className="radio-tag">
                  {/* <h4> Type:</h4> */}
                  <Select placeholder="Select Account" allowClear>
                    {/* <Option value="All">All</Option>
                    <Option value="Deposit">Deposit</Option>
                    <Option value="Withdrawal">Withdrawal</Option>
                    <Option value="Dividend">Dividend</Option>
                    <Option value="Fee">Fee</Option>
                    <Option value="Interest">Interest</Option>
                    <Option value="luSecurityTransfercy">Security Transfer</Option>
                    <Option value="Trade">Trade</Option> */}
                    {getAccounts.map((e, i) => {
                      return <Option key={i}>{e}</Option>;
                    })}
                  </Select>
                </div>
              </div>
              <div className="ant-spin-nested-loading">
                <div className="site-carder-box-c">
                  <div className="statistics-overview-header">
                    <span className="statistics-currency"></span>
                    <span className="statistics-date">as of {m + "/" + d + "/" + y}</span>
                  </div>
                  <div className="total-values">
                    <div className="value-item total-assets">
                      <h4>Total Managed Assets</h4>
                      <br />
                      <p>
                        PKR <Statistic value={values.shareWorth} precision={2} />
                      </p>
                    </div>
                    <div className="value-item total-earning">
                      <h4>Total Earnings</h4>
                      <br />
                      <p>
                        PKR <Statistic value={values.earning} precision={2} />
                      </p>
                    </div>
                    <div className="value-item total-return">
                      <h4>Total Return</h4>
                      <br />
                      <p>
                        -PKR <Statistic value={values.cash} precision={2} />{" "}
                      </p>
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
                  {/* <div id="PerformanceByAssetClass" className="performance-by-assets-class">
                  <PAclassGraph/>
                </div> */}
                  <div id="PerformanceBySector" className="performance-by-sector">
                    <PsectorGraph />
                  </div>
                  {/* <div id="AllocationByAssetClass" className="allocation-by-asset-class">
                  <AAclassGraph/>
                </div> */}
                  {/* <div id="AllocationBySector" className="allocation-by-sector">
                  <AsectorGraph/>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getUserAccountList: state.getUserAccountList,
    login: state.login,
    getUserValues: state.getUserValues,
  };
};
const mapDispatchToProps = {
  getUserAccount,
};
export default connect(mapStateToProps, mapDispatchToProps)(Performance);

// export default Performance;
