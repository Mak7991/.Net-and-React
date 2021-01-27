import {
    // get admin students
    GET_USER_VALUES_IN_PROGRESS,
    GET_USER_VALUES_SUCCESS,
    GET_USER_VALUES_FAILED,
  } from "constants/action";
  import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
  
  const initilastate = {
    uiState: SUCCESS,
    error: "",
    values: [],
    uiStateGetUserData: SUCCESS,
    errorGetUserData: "",
  };
  
  const getUserValues = (state = initilastate, action) => {
    switch (action.type) {
      case GET_USER_VALUES_IN_PROGRESS:
        return {
          ...state,
          uiState: IN_PROGRESS,
        };
  
      case GET_USER_VALUES_SUCCESS:
        return {
          ...state,
          uiState: SUCCESS,
          values: action.payload.values,
        };
  
      case GET_USER_VALUES_FAILED:
        return {
          ...state,
          error: action.payload.error,
          uiState: FAILED,
        };
  
      default:
        return state;
    }
  };
  
  export default getUserValues;