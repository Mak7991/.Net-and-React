// import {
//   // validate user
//   VALIDATE_USER_IN_PROGRESS,
//   VALIDATE_USER_SUCCESS,
//   VALIDATE_USER_FAILED,
//   // login
//   LOGIN_IN_PROGRESS,
//   LOGIN_SUCCESS,
//   LOGIN_FAILED,
// } from "constants/action";
// import message from "redux/reducers/message";
// import client from "setup/graphql";
import axios from "axios";
const REACT_APP_SERVER_URL = "http://10.2.0.201:8085/api/";

export const userLogin = (emailID, password,roleName) => {
  const request = axios.post(REACT_APP_SERVER_URL + "login", {
    emailID,
    password,
    roleName
  });
  return (dispatch) => {
    request
      .then((res) => {
        console.log(res, "LOGIN_SUCCESS");
        dispatch({
          type: "LOGIN_SUCCESS",
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response, "LOGIN_FAILED");
        dispatch({
          type: "LOGIN_FAILED",
          message: err.response.data.message,
        });
      });
  };
};

// const userLogin = async (emailID, password) => {
//   const response = await axios
//     .post(REACT_APP_SERVER_URL + "login", {
//       emailID,
//       password,
//     });
//   if (response.data.accessToken) {
//     localStorage.setItem("user", JSON.stringify(response.data));
//   }
//   return response.data;
// };



const logout = () => {
  localStorage.removeItem("user");
};

export default {
  // register,
  userLogin,
  logout,
};
