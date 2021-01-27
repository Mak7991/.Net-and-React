import {
    // account mapping
    ACCOUNT_MAPPING_IN_PROGRESS,
    ACCOUNT_MAPPING_SUCCESS,
    ACCOUNT_MAPPING_FAILED,
  } from "constants/action";
  import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
  
  const initilastate = {
    uiStateAccountMapping: null,
    errorAccountMapping: "",
    accounts: [],
    account: null,
    uiState: SUCCESS,
    error: "",
  };
  
  const userAccountMapping = (state = initilastate, action) => {
    switch (action.type) {
      case ACCOUNT_MAPPING_IN_PROGRESS:
        return {
          ...state,
          uiStateAccountMapping: IN_PROGRESS,
        };
  
      case ACCOUNT_MAPPING_SUCCESS:
        return {
          ...state,
          uiStateAccountMapping: SUCCESS,
          account: action.payload.account,
          accounts: [...state.accounts, action.payload.account],
        };
  
      case ACCOUNT_MAPPING_FAILED:
        return {
          ...state,
          errorAccountMapping: action.payload.error,
          uiStateAccountMapping: FAILED,
        };
      default:
        return state;
    }
  };
  
  export default userAccountMapping;