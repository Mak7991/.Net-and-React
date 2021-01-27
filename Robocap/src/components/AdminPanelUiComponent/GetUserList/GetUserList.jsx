import React, { useEffect } from "react";
// component
// import Async from "components/shared/Async/Async";
import { getUserList } from "redux/actions/GetUserList";
// libraries
import { Table } from "antd";
import { connect } from "react-redux";
// scss
import "./GetUserList.scss";

const userList = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    fixed: true,
    width: 100,
    className:"id-row",
    render: (text) => (
      <>
        <p>{text}</p>
      </>
    ),
  },
  {
    title: "User ID",
    dataIndex: "userID",
    key: "userID",
    className: "userID-row",
    render: (text) => (
      <>
        <p>{text}</p>
      </>
    ),
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    className:"name-row",
    render: (text) => (
      <>
        <p>{text}</p>
      </>
    ),
  },
  {
    title: "Email ID",
    key: "emailID",
    dataIndex: "emailID",
    className:"email-row",
    render: (text) => (
      <>
        <p>{text}</p>
      </>
    ),
  },
  {
    title: "Phone No",
    key: "phoneNo",
    dataIndex: "phoneNo",
    className:"phone-row",
    render: (text) => (
      <>
        <p>{text}</p>
      </>
    ),
  },
  {
    title: "CreateDate",
    key: "createDate",
    dataIndex: "createDate",
    className:"date-row",
    render: (text) => (
      <>
        <p>{new Date(text).toLocaleDateString()}</p>
      </>
    ),
  },
];

const GetUserList = (props) => {
  useEffect(() => {
    props.getUserList();
  }, []);

  const { uiState, error } = props.getAdminUserList;
  const data = props.getAdminUserList.adminUsersList?.map((userList) => {
    // console.log(userList);
    return {
      key: userList.id,
      id: userList.id,
      userID: userList.userID,
      firstName: userList.firstName,
      emailID: userList.emailID,
      phoneNo: userList.phoneNo,
      createDate: userList.createDate,
    };
  });

  return (
    <Table
      className="users-table"
      uiState={uiState}
      error={error}
      columns={userList}
      dataSource={data}
      pagination={false}
      scroll={{ x: 2000 }}
      bordered
      pagination={{ pageSize: 5 }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    getAdminUserList: state.getAdminUserList,
  };
};

const mapDispatchToProps = {
  getUserList,
};
export default connect(mapStateToProps, mapDispatchToProps)(GetUserList);
