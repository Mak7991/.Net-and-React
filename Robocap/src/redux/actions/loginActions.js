import {
  // validate user
  // VALIDATE_USER_IN_PROGRESS,
  // VALIDATE_USER_SUCCESS,
  // VALIDATE_USER_FAILED,
  // // login
  // LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "constants/action";
// import message from "redux/reducers/message";
// import client from "setup/graphql";
import axios from "axios";
const REACT_APP_SERVER_URL = "http://10.2.0.201:8085/api/";

export const userLogin = (emailID, password) => {

  console.log(emailID + " " + password);
  const request = axios.post(REACT_APP_SERVER_URL + "Login", {
    emailID,
    password,
  });
  return (dispatch) => {
    request
      .then((res) => {
        console.log(res, "LOGIN_SUCCESS");
        dispatch({
          type: "LOGIN_SUCCESS",
          data: res.data,
        });
        const { data } = res;
        console.log(data);
        if(data !="Invalid UserName/Password !"){
          if (data.token != null)
                {
                    if (data.roleName == "User") {
                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify({ username: data.userName, token: data.token ,EmailID:data.EmailID}));
                    }
                    else if (data.roleName == "admin") {
                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('AdminUser',JSON.stringify({ username: data.userName, token: data.token ,EmailID:data.EmailID}));
                    }
                    // return true to indicate successful login
                    return data;
                } else {
                    // return false to indicate failed login
                    return null;
                }
      }
        return data;
      })
      .catch((err) => {
        console.log(err.response, "LOGIN_FAILED");
        dispatch(setLoginError(err.message));
        return err;
      });
  };
};

// const setLoginInProgress = () => {
//   return {
//     type: LOGIN_IN_PROGRESS,
//     payload: {},
//   };
// };
// const setLoginSuccess = (data) => {
//   return {
//     type: LOGIN_SUCCESS,
//     payload: {
//       data,
//     },
//   };
// };
const setLoginError = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: {
      error,
    },
  };
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  // register,
  userLogin,
  logout,
};
