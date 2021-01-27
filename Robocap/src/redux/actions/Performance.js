import axios from "axios";
import {
  // get user data
  GET_USER_ACCOUNTS_IN_PROGRESS,
  GET_USER_ACCOUNTS_SUCCESS,
  GET_USER_ACCOUNTS_FAILED,
} from "constants/action";
import { REACT_APP_SERVER_URL } from "server/server";

export const getUserAccount = (userID) => {
  return async (dispatch) => {
    // dispatch(getUserDataInProgress());
    try {
      const res = await axios.post(REACT_APP_SERVER_URL + "Performance/GetAccountByUser", {
        userID,
      });
      // console.log(res, "GET_USER_ACCOUNTS_SUCCESS");
      dispatch(getUserAccountInProgress(res.data));
      // localStorage.setItem("userAccount", JSON.stringify(res.data));
      dispatch(getUserAccountSuccessful(res.data));
      // localStorage.setItem("userAccount", JSON.stringify(res.data));
      // console.log(res.data);
    } catch (err) {
      dispatch(getUserAccountError(err));
      console.error(err);
    }
  };
};
const getUserAccountInProgress = () => {
  return {
    type: GET_USER_ACCOUNTS_IN_PROGRESS,
    payload: {},
  };
};
const getUserAccountSuccessful = (getAccounts) => {
  return {
    type: GET_USER_ACCOUNTS_SUCCESS,
    payload: {
      getAccounts,
    },
  };
};
const getUserAccountError = (error) => {
  return {
    type: GET_USER_ACCOUNTS_FAILED,
    payload: {
      error,
    },
  };
};

export default getUserAccount;
