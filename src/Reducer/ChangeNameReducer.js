import { ONCHANGE, GETDATA, FETCH_DATA } from "../actions/index";

const initialState = {
  firstName: "Purushottam",
  lastName: "Kumar",
};

const ChangeNameReducer = (state = initialState, action) => {
  console.log("payload data", action.payload);
  switch (action.type) {
    case ONCHANGE:
      console.log(action.payload);
      return {
        ...state,
        firstName: action.payload,
      };
    case GETDATA:
      return {
        ...state,
        lastName: action.payload.lastName,
      };
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

export default ChangeNameReducer;
