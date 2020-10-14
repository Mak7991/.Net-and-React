import React from "react";
import Header from "components/shared/Header/Header";
import "./Performance.scss";
import { Container } from "react-bootstrap";

const Performance = () => {
  return (
    <div className="performance-page">
      <Header />
      <Container>
        <section className="account-activity">
          <div className="filter-bar">
            <div className="search-fields">
            <h1>Account</h1>
          </div>
          </div>
          
        </section>
      </Container>
    </div>
  );
};

export default Performance;
