import {
  // validate user
  VALIDATE_USER_IN_PROGRESS,
  VALIDATE_USER_SUCCESS,
  VALIDATE_USER_FAILED,
  // login
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "constants/action";
import client from "setup/graphql";
import { login, authorizeUser } from "queries/auth";

// validiate user
export const validateUser = () => {
  return async (dispatch) => {
    dispatch(validationInProgress());
    try {
      const { data } = await client.query({
        query: authorizeUser,
      });
      if (data.authorizeUser.user) {
        dispatch(validationSuccessful(data.authorizeUser.user));
      } else if (data.authorizeUser.admin) {
        dispatch(validationSuccessful(data.authorizeUser.admin));
      }
      // else if (data.authorizeUser.superAdmin) {
      //   dispatch(validationSuccessful(data.authorizeUser.superAdmin));
      // }
      return;
    } catch (err) {
      //handle error condition if required
      dispatch(validationError(err));
      return err;
    }
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

//login
export const userLogin = (emailID, password) => {
  return async (dispatch) => {
    dispatch(setLoginInProgress());
    try {
      const response = await client.query({
        query: login,
        variables: {
          data: {
            emailID,
            password,
          },
        },
      });
      const { data } = response;
      localStorage.setItem("token", data.login.token);
      if (data.login.user) {
        dispatch(setLoginSuccess(data.login.user));
        localStorage.setItem("id", data.login.user.id);
        localStorage.setItem("emailID", data.login.user.email);
      } else if (data.login.admin) {
        dispatch(setLoginSuccess(data.login.admin));
        localStorage.setItem("id", data.login.admin.id);
        localStorage.setItem("emailID", data.login.admin.email);
      }
      return data;
    } catch (err) {
      dispatch(setLoginError(err.message));
      return err;
    }
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
