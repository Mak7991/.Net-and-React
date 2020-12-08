import {
  // validate user
  // VALIDATE_USER_IN_PROGRESS,
  // VALIDATE_USER_SUCCESS,
  // VALIDATE_USER_FAILED,
  // // login
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "constants/action";
import axios from "axios";
const REACT_APP_SERVER_URL = "http://localhost:8085/api/";

export const userLogin = (emailID, password) => {
  // console.log(emailID + " " + password);
  const request = axios.post(REACT_APP_SERVER_URL + "Login", {
    emailID,
    password,
  });
  return (dispatch) => {
    request
      .then((response) => {
        // console.log(res, "LOGIN_SUCCESS");
        dispatch(setLoginInProgress(response.data));
        const { data } = response;
        // console.log(data);
        if (data !== "Invalid UserName/Password !") {
          if (data.token != null) {
            if (data.roleName === "User") {
              // store username and jwt token in local storage to keep user logged in between page refreshes
              dispatch(setLoginSuccess(data));
              localStorage.setItem("Client", JSON.stringify(response.data));
            } else if (data.roleName === "Admin") {
              // store username and jwt token in local storage to keep user logged in between page refreshes
              dispatch(setLoginSuccess(data));
              localStorage.setItem("Admin", JSON.stringify(response.data));
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
        dispatch(setLoginError(err.message));
        return err;
      });
  };
};

const setLoginInProgress = () => {
  return {
    type: LOGIN_IN_PROGRESS,
    payload: {},
  };
};
const setLoginSuccess = (user) => {
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

// export const validiateUser=()=>{

// }

export const register = (UserName, emailID, code, password, confirmPassword) => {
  return axios.post(REACT_APP_SERVER_URL + "Registration?EmailID=", {
    UserName,
    emailID,
    code,
    password,
    confirmPassword,
  });
};

const logout = () => {
  localStorage.removeItem("data");
};

export default {
  register,
  userLogin,
  logout,
};
