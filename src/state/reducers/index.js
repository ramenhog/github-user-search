import { combineReducers } from "redux";
import search from "./search";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  form,
  search
});

export default rootReducer;
