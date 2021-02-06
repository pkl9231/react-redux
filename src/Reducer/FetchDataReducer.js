import { FETCH_DATA } from "../actions/index";

const initialState = {
  firstName: "Purushottam",
  lastName: "Kumar",
};

const FetchDataReducer = (state = initialState, action) => {
  console.log("payload data", action.payload);
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        lastName: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default FetchDataReducer;
