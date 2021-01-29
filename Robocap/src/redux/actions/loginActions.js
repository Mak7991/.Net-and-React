import {
  // login & logout
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  // validate user
  VALIDATE_USER_IN_PROGRESS,
  VALIDATE_USER_SUCCESS,
  VALIDATE_USER_FAILED,
} from "constants/action";
import axios from "axios";

import { REACT_APP_SERVER_URL } from "server/server";

export const userLogin = (emailID, password) => {
  // console.log(emailID + " " + password);
  const response = axios.post(REACT_APP_SERVER_URL + "Login", {
    emailID,
    password,
  });
  return (dispatch) => {
    dispatch(setLoginInProgress());
    console.log(response,"LOGIN_IN_PROGRESS");
    response
      .then((response) => {
        const { data } = response;
        console.log(response, "LOGIN_SUCCESS");
        if (data.roleName === "User") {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({roleName: data.roleName }));
          dispatch(setLoginSuccess(response.data));
          
        } else if (data.roleName === "Admin") {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('AdminUser', JSON.stringify({roleName: data.roleName }));
          dispatch(setLoginSuccess(response.data));
        }
        else if(dispatch(setLoginError(response.data))){
          console.log(response.data, "LOGIN_FAILED");
          return response.data
        }
      })
      // .catch((response) => {
      //   dispatch(setLoginError(response.data));
      //   console.log(response.data, "LOGIN_FAILED");
      //   return response.data;
      // })
  };
};

const setLoginInProgress = () => {
  return {
    type: LOGIN_IN_PROGRESS,
    payload: {},
  };
};
export const setLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};
const setLoginError = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: {
      error,
    },
  };
};

// validiate user
export const validiateUser = (user) => {
  const response = axios.post(REACT_APP_SERVER_URL + "Login", {
    user,
  });
  return (dispatch) => {
    response
      .then((response) => {
        console.log(response, "LOGIN_SUCCESS");
        dispatch(validationInProgress());
        const { data } = response;
        console.log(data);
        if (data !== "Invalid UserName/Password !") {
          if (data.token != null) {
            if (data.roleName === "User") {
              // store username and jwt token in local storage to keep user logged in between page refreshes
              dispatch(validationSuccessful(data));
              // localStorage.setItem("client", JSON.stringify(response.data));
            } else if (data.roleName === "Admin") {
              // store username and jwt token in local storage to keep user logged in between page refreshes
              dispatch(validationSuccessful(data));
              // localStorage.setItem("admin", JSON.stringify(response.data));
            }
            // return true to indicate successful login
            return data;
          } else {
            // return false to indicate failed login
            return null;
          }
        }
      })
      .catch((err) => {
        // console.log(err.response, "LOGIN_FAILED");
        dispatch(validationError(err.message));
        return err;
      });
  };
};

const validationInProgress = () => {
  return {
    type: VALIDATE_USER_IN_PROGRESS,
    payload: {},
  };
};

const validationSuccessful = (user) => {
  return {
    type: VALIDATE_USER_SUCCESS,
    payload: {
      user,
    },
  };
};
const validationError = (err) => {
  return {
    type: VALIDATE_USER_FAILED,
    payload: {
      err,
    },
  };
};
export const logout = (gotoLogin) => {
  return (dispatch) => {
    dispatch(userLogout());
    console.log("LOGOUT");

    gotoLogin();
  };
};
const userLogout = () => {
  return {
    type: LOGOUT,
    payload: {},
  };
};
// dispatch(setVerificationCodeError(err.message));

export default {
  userLogin,
  validiateUser,
  logout,
};
