import axios from "axios";
import {
  // get user values
  GET_USER_VALUES_IN_PROGRESS,
  GET_USER_VALUES_SUCCESS,
  GET_USER_VALUES_FAILED,
} from "constants/action";
import { REACT_APP_SERVER_URL } from "server/server";

export const getCurUserData = (userID) => {
  return async (dispatch) => {
    // dispatch(getUserDataInProgress());
    try {
      const res = await axios.post(REACT_APP_SERVER_URL + "MangedAccount/AccountPosition", {
        userID
      });
      // console.log(res, "GET_USER_VALUES_SUCCESS");
      dispatch(getUserValuestInProgress(res.data));
      // localStorage.setItem("allUserData", JSON.stringify(res.data));
      dispatch(getUserValuesSuccessful(res.data));
      // localStorage.setItem("allUserData", JSON.stringify(res.data));
      // console.log(res.data);
    } catch (err) {
      dispatch(getUserValuesError(err));
      // console.error(err);
    }
  };
};
const getUserValuestInProgress = () => {
  return {
    type: GET_USER_VALUES_IN_PROGRESS,
    payload: {},
  };
};
const getUserValuesSuccessful = (values) => {
  return {
    type: GET_USER_VALUES_SUCCESS,
    payload: {
        values,
    },
  };
};
const getUserValuesError = (error) => {
  return {
    type: GET_USER_VALUES_FAILED,
    payload: {
      error,
    },
  };
};

export default getCurUserData;