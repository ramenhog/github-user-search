import { combineReducers } from "redux";
import search from "./search";
import user from "./user";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  form,
  search,
  user
});

export default rootReducer;
