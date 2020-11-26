import axios from "axios";
import client  from "setup/graphql";
import { LOGIN_IN_PROGRESS, LOGIN_SUCCESS, LOGIN_FAILED } from "constants/action";

const REACT_APP_SERVER_URL = "http://10.2.0.201:8085/api/";

const login = axios.post(
  REACT_APP_SERVER_URL,
  {
    query: `query login($id: Int!, $emailID: String!, $password: String! ) {
    data(id: $id, emailID: $emailID, password: $password){
      token
      user{
        id
        username
        emailID
        password
        rolename
      }
      admin{
        id
        username
        emailID
        password
        rolename
      }
    }
  }`
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);

// const register = (username, email, password) => {
//   return axios.post(REACT_APP_SERVER_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };

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
        localStorage.setItem("email", data.login.user.email);
      } else if (data.login.admin) {
        dispatch(setLoginSuccess(data.login.admin));
        localStorage.setItem("id", data.login.admin.id);
        localStorage.setItem("email", data.login.admin.email);
      } 
      // else if (data.login.superAdmin) {
      //   dispatch(setLoginSuccess(data.login.superAdmin));
      //   localStorage.setItem("id", data.login.superAdmin.id);
      //   localStorage.setItem("email", data.login.superAdmin.email);
      // }
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
