import axios from "axios";
const REACT_APP_SERVER_URL = "http://10.2.0.201:8085/api/";

export const login = axios.post(
  REACT_APP_SERVER_URL + "/login",
  {
    query: `query login($id: Int!, $emailID: String!, $password: String! ) {
    data(id: $id, emailID: $emailID, password: $password){
      token
      user{
        id
        username
        emailID
        password
        roleName
      }
      admin{
        id
        username
        emailID
        password
        roleName
      }
    }
  }`,
    variables: {
      data: {
        emailID: "",
        password: "",
      },
    },
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);

export const authorizeUser = axios.post(
  REACT_APP_SERVER_URL + "/login",
  {
    query: `query authorizeUser($id: Int!, $roleName: String! ) {
    data(id: $id, roleName: $roleName){
      user{
        id
        userName
        emailID
        password
        rolename
      }
      admin{
        id
        userName
        emailID
        password
        rolename
      }
    }
  }`,
    variables: {
      data: {
        roleName: "",
      },
    },
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);
