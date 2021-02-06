import ChangeNameReducer from "./ChangeNameReducer";
import FetchDataReducer from "./FetchDataReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  Name: ChangeNameReducer,
  FetchData: FetchDataReducer,
});

export default rootReducer;
