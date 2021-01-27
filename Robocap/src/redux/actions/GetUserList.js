import axios from "axios";
import {
  // get admin user list
  GET_USER_LIST_IN_PROGRESS,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
} from "constants/action";
import { REACT_APP_SERVER_URL } from "server/server";

export const getUserList = () => {
  return async (dispatch) => {
    // dispatch(getUserDataInProgress());
    try {
      const res = await axios.post(REACT_APP_SERVER_URL + "Admin/GetUserList", {
        
      });
      console.log(res, "GET_USER_LIST_IN_PROGRESS");
    //   const { data } = res;
      dispatch(getUserlistInProgress(res.data));
      // localStorage.setItem("getAdminUserlist", JSON.stringify(res.data));
      dispatch(getUserlistSuccessful(res.data));
      // localStorage.setItem("getAdminUserlist", JSON.stringify(res.data));
      // console.log(res.data);
    } catch (err) {
      dispatch(getUserlistError(err));
      console.error(err);
    }
  };
};
const getUserlistInProgress = () => {
  return {
    type: GET_USER_LIST_IN_PROGRESS,
    payload: {},
  };
};
const getUserlistSuccessful = (adminUsersList) => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: {
        adminUsersList,
    },
  };
};
const getUserlistError = (error) => {
  return {
    type: GET_USER_LIST_FAILED,
    payload: {
      error,
    },
  };
};

export default getUserList;