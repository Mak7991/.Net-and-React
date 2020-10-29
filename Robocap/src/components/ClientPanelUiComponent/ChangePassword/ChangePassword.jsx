import React from "react";

// component
import Header from "components/shared/Header/Header";
// import DocumentSubHeader from "components/ClientPanelUiComponent/DocumentSubHeader/DocumentSubHeader";
import Report from "components/ClientPanelUiComponent/Reports/Report";
import AccountOpening from "components/ClientPanelUiComponent/AccountOpening/AccountOpening";
import OtherDocuments from "components/ClientPanelUiComponent/OtherDocuments/OtherDocuments";
import CustomBreadcrumb from "components/CustomBreadCrumbs/CustomBreadCrumb";

// library
import { Route, Switch, Link } from "react-router-dom";
import { Row } from "antd";
// scss
// import "./Documents.scss";
import { Container } from "react-bootstrap";

// const crumbs = [
//   {
//     key: 1,
//     data: <text className="breadcrumbs-text-color poppinsLight">MasterData</text>,
//   },
//   {
//     key: 2,
//     data: (
//       <Link className="breadcrumbs-text-color poppinsLight" to={"/Activity"}>
//         Users
//       </Link>
//     ),
//   },
//   {
//     key: 3,
//     data: <text className="text-color poppinsLight">{userName ? userName : "newUser"}</text>,
//   },
// ];

const ChangePassword = () => {
  return (
    <div className="document-page">
      <Header />
      {/* <Row type="flex" justify="start" className="margin-top breadcrumbs-bg-container">
        <CustomBreadcrumb crumbs={crumbs} />
      </Row> */}
      <Container>
        <Switch>
          <Route path="/documents/reports" component={Report} />
          <Route path="/documents/accountopening" component={AccountOpening} />
          <Route path="/documents/otherdocuments" component={OtherDocuments} />
        </Switch>
      </Container>
    </div>
  );
};

export default ChangePassword;
