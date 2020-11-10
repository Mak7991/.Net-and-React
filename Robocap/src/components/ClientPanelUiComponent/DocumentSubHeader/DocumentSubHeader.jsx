import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import './DocumentSubHeader.scss'

const { Header } = Layout;

const DocumentSubHeader = () => {
  return (
    <div>
      <Layout className="layout">
        <Header className="sub-header">
          <Container>
            <Menu theme="light" mode="horizontal" className="sub-links">
              <Menu.Item key="1">
                <NavLink to="/documents/reports" className="active">
                  Report
                </NavLink>
              </Menu.Item>
              {/* <Menu.Item key="2">
                <NavLink to="/documents/accountopening">Account Openning</NavLink>
              </Menu.Item> */}
              <Menu.Item key="2">
                <NavLink to="/documents/otherdocuments">Other Documents</NavLink>
              </Menu.Item>
            </Menu>
          </Container>
        </Header>
      </Layout>
    </div>
  );
};

export default DocumentSubHeader;
