import axios from "axios";
import {
  // get account status
  GET_ACCOUNT_STATUS_IN_PROGRESS,
  GET_ACCOUNT_STATUS_SUCCESS,
  GET_ACCOUNT_STATUS_FAILED,
  // upload status
  UPLOAD_STATUS_IN_PROGRESS,
  UPLOAD_STATUS_SUCCESS,
  UPLOAD_STATUS_FAILED,
} from "constants/action";
import { REACT_APP_SERVER_URL } from "server/server";

// get status
export const getAccountStatus = (userID) => {
  return async (dispatch) => {
    // dispatch(getUserDataInProgress());
    try {
      const res = await axios.post(REACT_APP_SERVER_URL + "MangedAccount/UserApplicationStatus", {
        userID,
      });
      // console.log(res.data, "GET_ACCOUNT_STATUS_IN_PROGRESS");
      dispatch(getAccounStatustInProgress(res.data));
      // console.log(res.data)
      // localStorage.setItem("userStatus", JSON.stringify(res.data));
      dispatch(getAccounStatusSuccessful(res.data));
      // localStorage.setItem("userStatus", JSON.stringify(res.data));
      // console.log(res.data);
    } catch (err) {
      dispatch(getAccountStatusError(err));
      // console.error(err);
    }
  };
};
const getAccounStatustInProgress = () => {
  return {
    type: GET_ACCOUNT_STATUS_IN_PROGRESS,
    payload: {},
  };
};
const getAccounStatusSuccessful = (status) => {
  return {
    type: GET_ACCOUNT_STATUS_SUCCESS,
    payload: {
      status,
    },
  };
};
const getAccountStatusError = (error) => {
  return {
    type: GET_ACCOUNT_STATUS_FAILED,
    payload: {
      error,
    },
  };
};

// Upload status
export const uploadStatus = (userID, status) => {
  const res = axios.post(REACT_APP_SERVER_URL + "Admin/UserAccountStatus", {
    userID,
    status,
  });
  return (dispatch) => {
    res
      .then((res) => {
        const { data } = res;
        dispatch(setAccountStatusInProgress(data));
        console.log(res, "UPLOAD_STATUS_IN_PROGRESS");
        dispatch(setAccountStatusSuccess(data));
        console.log(res, "UPLOAD_STATUS_SUCCESS");
      })
      .catch((err) => {
        console.log(err.response, "UPLOAD_STATUS_FAILED");
        dispatch(setAccountStatusError(err.message));
        return err;
      });
  };
};

const setAccountStatusInProgress = () => {
  return {
    type: UPLOAD_STATUS_IN_PROGRESS,
    payload: {},
  };
};
const setAccountStatusSuccess = (uploadStatus) => {
  return {
    type: UPLOAD_STATUS_SUCCESS,
    payload: {
      uploadStatus,
    },
  };
};
const setAccountStatusError = (error) => {
  return {
    type: UPLOAD_STATUS_FAILED,
    payload: {
      error,
    },
  };
};

export default {
  getAccountStatus,
  uploadStatus,
};
