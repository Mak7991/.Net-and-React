import React from "react";

// component
import Header from "components/shared/Header/Header";
import DocumentSubHeader from "components/ClientPanelUiComponent/DocumentSubHeader/DocumentSubHeader";
import Report from "components/ClientPanelUiComponent/Reports/Report";
import AccountOpening from "components/ClientPanelUiComponent/AccountOpening/AccountOpening";
import OtherDocuments from "components/ClientPanelUiComponent/OtherDocuments/OtherDocuments"

// library
import { Route, Switch } from "react-router-dom";
// scss
import "./Documents.scss";
import { Container } from "react-bootstrap";

const Documents = () => {
  return (
    <div className="document-page">
      <Header />
      <DocumentSubHeader />
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

export default Documents;
