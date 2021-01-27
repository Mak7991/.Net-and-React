import axios from "axios";
import {
  // get admin account list
  GET_ACCOUNT_LIST_IN_PROGRESS,
  GET_ACCOUNT_LIST_SUCCESS,
  GET_ACCOUNT_LIST_FAILED,
} from "constants/action";
import { REACT_APP_SERVER_URL } from "server/server";

export const getAccountlist = () => {
  return async (dispatch) => {
    // dispatch(getUserDataInProgress());
    try {
      const res = await axios.post(REACT_APP_SERVER_URL + "Admin/GetAccountList", {});
      // console.log(res, "GET_ACCOUNT_LIST_IN_PROGRESS");
      const { data } = res;
      dispatch(getAccountlistInProgress(data));
      // localStorage.setItem("getAccountlist", JSON.stringify(data));
      dispatch(getAccountlistSuccessful(data));
      // localStorage.setItem("getAccountlist", JSON.stringify(data));
      // console.log(data);
    } catch (err) {
      dispatch(getAccountlistError(err));
      console.error(err);
    }
  };
};
const getAccountlistInProgress = () => {
  return {
    type: GET_ACCOUNT_LIST_IN_PROGRESS,
    payload: {},
  };
};
const getAccountlistSuccessful = (adminAccounts) => {
  return {
    type: GET_ACCOUNT_LIST_SUCCESS,
    payload: {
      adminAccounts,
    },
  };
};
const getAccountlistError = (error) => {
  return {
    type: GET_ACCOUNT_LIST_FAILED,
    payload: {
      error,
    },
  };
};

export default getAccountlist;
