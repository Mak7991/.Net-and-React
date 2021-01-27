import axios from "axios";
import {
  // get user data
  GET_TRANSACTION_DATA_IN_PROGRESS,
  GET_TRANSACTION_DATA_SUCCESS,
  GET_TRANSACTION_DATA_FAILED,
} from "constants/action";
import { REACT_APP_SERVER_URL } from "server/server";

export const getTransactionHistory = (userID) => {
  return async (dispatch) => {
    // dispatch(getUserDataInProgress());
    try {
      const res = await axios.post(REACT_APP_SERVER_URL + "ManagedTransfer", {
        userID,
      });
      // console.log(res, "GET_TRANSACTION_DATA_SUCCESS");
      dispatch(getUserDataInProgress(res.data));
      // localStorage.setItem("transHistory", JSON.stringify(res.data));
      dispatch(getUserDataSuccessful(res.data));
      // localStorage.setItem("transHistory", JSON.stringify(res.data));
      // console.log(res.data);
    } catch (err) {
      dispatch(getUserDataError(err));
      console.error(err);
    }
  };
};
const getUserDataInProgress = () => {
  return {
    type: GET_TRANSACTION_DATA_IN_PROGRESS,
    payload: {},
  };
};
const getUserDataSuccessful = (history) => {
  return {
    type: GET_TRANSACTION_DATA_SUCCESS,
    payload: {
      history,
    },
  };
};
const getUserDataError = (error) => {
  return {
    type: GET_TRANSACTION_DATA_FAILED,
    payload: {
      error,
    },
  };
};

export default getTransactionHistory;
