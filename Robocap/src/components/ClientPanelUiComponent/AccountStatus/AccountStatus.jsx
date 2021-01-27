import React from "react";
// library
import { Carousel } from "antd";
import { getAccountStatus } from "redux/actions/UserAccountStatus";
import { connect } from "react-redux";
import "./AccountStatus.scss";

class AccountStatus extends React.Component {
  componentDidMount() {
    const userID = this.props.login.user.userID;
    this.props.getAccountStatus(userID);
  }

  render() {
    const { status } = this.props.statusReducer;
    // console.log(status);
    return (
      <div className="account-status">
        <Carousel autoplay>
          <div className="slick-slide">
            <h2>Application Status</h2>
            <p>{status}</p>
          </div>
          <div className="slick-slide">
            <h2>Application Status</h2>
            <p>{status}</p>
          </div>
          <div className="slick-slide">
            <h2>Application Status</h2>
            <p>{status}</p>
          </div>
          {/* <div>
            <h3 style={contentStyle}>4</h3>
          </div> */}
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    statusReducer: state.statusReducer,
    login: state.login,
  };
};
const mapDispatchToProps = {
  getAccountStatus,
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountStatus);

// export default AccountStatus;
