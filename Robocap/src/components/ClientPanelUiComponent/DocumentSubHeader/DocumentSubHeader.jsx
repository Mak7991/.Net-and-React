import React from "react";
import { Layout, Menu } from "antd";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import { Login, NotFound } from "pages";
const { Header } = Layout;

const DocumentSubHeader = (props) => {
  const { location } = props;
  return (
    <div>
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              onClick={(e) => console.log(e)}
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={[location.pathname]}
              defaultOpenKeys={["sub1"]}>
              <Menu.Item key="/documents/Login">
                <NavLink to="/documents/Login">Report</NavLink>
              </Menu.Item>
              <Menu.Item key="2">Account Openning</Menu.Item>
              <Menu.Item key="3">Other Documents</Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </div>
      <Switch>
        <Route path={`${this.props.match.url}/documents/Login`} exact component={Login} />
        {/* <Route component={NotFound} /> */}
      </Switch>
      );
    </div>
  );
};

export default withRouter(DocumentSubHeader);
