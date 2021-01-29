import {
  // get total graph data
  GET_TOTAL_GRAPH_DATA_IN_PROGRESS,
  GET_TOTAL_GRAPH_DATA_SUCCESS,
  GET_TOTAL_GRAPH_DATA_FAILED,
  //get return graph data
  GET_RETURN_GRAPH_DATA_IN_PROGRESS,
  GET_RETURN_GRAPH_DATA_SUCCESS,
  GET_RETURN_GRAPH_DATA_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initilastate = {
  uiState: IN_PROGRESS,
  error: "",
  totalManageGraph: [],
  totalReturnGraph:[],
  uiStateGetTotalManageGraphData: null,
  errorTotalManageGraphData: "",
  uiStateGetTotalReturnGraphData: null,
  errorTotalReturnGraphData: "",
};

const getGraphData = (state = initilastate, action) => {
  switch (action.type) {
    case GET_TOTAL_GRAPH_DATA_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
      };

    case GET_TOTAL_GRAPH_DATA_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        totalManageGraph: action.payload.totalManageGraph,
      };

    case GET_TOTAL_GRAPH_DATA_FAILED:
      return {
        ...state,
        error: action.payload.error,
        uiState: FAILED,
      };
      case GET_RETURN_GRAPH_DATA_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
      };

    case GET_RETURN_GRAPH_DATA_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        totalReturnGraph: action.payload.totalReturnGraph,
      };

    case GET_RETURN_GRAPH_DATA_FAILED:
      return {
        ...state,
        error: action.payload.error,
        uiState: FAILED,
      };

    default:
      return state;
  }
};
export default getGraphData;
