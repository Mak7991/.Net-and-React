import axios from "axios";
import {
  // account mapping
  ACCOUNT_MAPPING_IN_PROGRESS,
  ACCOUNT_MAPPING_SUCCESS,
  ACCOUNT_MAPPING_FAILED,
} from "constants/action";
import { REACT_APP_SERVER_URL } from "server/server";

// account mapping
export const accountMapping = (AccountId, userID) => {
  // console.log(emailID + " " + password);
  const res = axios.post(REACT_APP_SERVER_URL + "Admin/AccountMapping", [
    {
      AccountId,
      userID,
    },
  ]);
  return (dispatch) => {
    res
      .then((res) => {
        const { data } = res;
        dispatch(setAccountMappingInProgress(data));
        // console.log(res, "ACCOUNT_MAPPING_IN_PROGRESS");
        dispatch(setAccountMappingSuccess(data));
        // console.log(res, "ACCOUNT_MAPPING_SUCCESS");
      })
      .catch((err) => {
        // console.log(err.response, "ACCOUNT_MAPPING_FAILED");
        dispatch(setAccountMappingError(err.message));
        return err;
      });
  };
};

const setAccountMappingInProgress = () => {
  return {
    type: ACCOUNT_MAPPING_IN_PROGRESS,
    payload: {},
  };
};
const setAccountMappingSuccess = (accounts) => {
  return {
    type: ACCOUNT_MAPPING_SUCCESS,
    payload: {
      accounts,
    },
  };
};
const setAccountMappingError = (error) => {
  return {
    type: ACCOUNT_MAPPING_FAILED,
    payload: {
      error,
    },
  };
};

export default accountMapping;
