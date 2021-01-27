import {
   // get admin user list
  GET_USER_LIST_IN_PROGRESS,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
  } from "constants/action";
  import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
  
  const initilastate = {
    uiState: SUCCESS,
    error: "",
    adminUsersList: [],
    uiStateGetAdminUserList: IN_PROGRESS,
    errorGetAdminUserList: "",
  };
  
  const getAdminUserList = (state = initilastate, action) => {
    switch (action.type) {
      case GET_USER_LIST_IN_PROGRESS:
        return {
          ...state,
          uiState: IN_PROGRESS,
        };
  
      case GET_USER_LIST_SUCCESS:
        return {
          ...state,
          uiState: SUCCESS,
          adminUsersList: action.payload.adminUsersList,
        };
  
      case GET_USER_LIST_FAILED:
        return {
          ...state,
          error: action.payload.error,
          uiState: FAILED,
        };
  
      default:
        return state;
    }
  };
  
  export default getAdminUserList;