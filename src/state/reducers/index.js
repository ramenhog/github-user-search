import { combineReducers } from "redux";
import search from "./search";
import profile from "./profile";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  form,
  search,
  profile
});

export default rootReducer;
