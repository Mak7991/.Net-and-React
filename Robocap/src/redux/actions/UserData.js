import axios from "axios";
import {
  // get user data
  GET_CURRENT_USER_DATA_IN_PROGRESS,
  GET_CURRENT_USER_DATA_SUCCESS,
  GET_CURRENT_USER_DATA_FAILED,
} from "constants/action";
import { REACT_APP_SERVER_URL } from "server/server";


export const getUserData = (userID) => {
  return async (dispatch) => {
    // dispatch(getUserDataInProgress());
    try {
      const res = await axios.post(REACT_APP_SERVER_URL + "MangedAccount/AccountPosition", {
        userID
      });
      // console.log(res, "GET_CURRENT_USER_DATA_SUCCESS");
      dispatch(getUserDataInProgress(res.data.accountlist));
      // localStorage.setItem("CurData", JSON.stringify(res.data.accountlist));
      dispatch(getUserDataSuccessful(res.data.accountlist));
      // localStorage.setItem("CurData", JSON.stringify(res.data.accountlist));
      // console.log(res.data.accountlist);
    } catch (err) {
      dispatch(getUserDataError(err));
      console.error(err.message);
    }
  };
};
const getUserDataInProgress = () => {
  return {
    type: GET_CURRENT_USER_DATA_IN_PROGRESS,
    payload: {},
  };
};
const getUserDataSuccessful = (accountlist) => {
  return {
    type: GET_CURRENT_USER_DATA_SUCCESS,
    payload: {
      accountlist,
    },
  };
};
const getUserDataError = (error) => {
  return {
    type: GET_CURRENT_USER_DATA_FAILED,
    payload: {
      error: error.message,
    },
  };
};
