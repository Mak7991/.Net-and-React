import axios from "axios";
import {
  // get user data
  GET_CURRENT_USER_DATA_IN_PROGRESS,
  GET_CURRENT_USER_DATA_SUCCESS,
  GET_CURRENT_USER_DATA_FAILED,
} from "constants/action";
import { REACT_APP_SERVER_URL } from "server/server";

export const getActivity = (userID) => {
  return async (dispatch) => {
    // dispatch(getUserDataInProgress());
    try {
      const res = await axios.post(REACT_APP_SERVER_URL + "Activity", {
        userID,
        accountno: "All",
        startdate: "09/10/1990",
        enddate: "30/12/2030",
      });
      // console.log(res, "GET_CURRENT_USER_DATA_SUCCESS");
      dispatch(getUserDataInProgress(res.data));
      // localStorage.setItem("activity", JSON.stringify(res.data));
      dispatch(getUserDataSuccessful(res.data));
      // localStorage.setItem("activity", JSON.stringify(res.data));
      // console.log(res.data);
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
const getUserDataSuccessful = (activity) => {
  return {
    type: GET_CURRENT_USER_DATA_SUCCESS,
    payload: {
      activity,
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

export default getActivity;
