import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createBrowserHistory } from "history";

const customMiddleware = store => next => action => {
  const { type, data, meta } = action;
  if (process.env.NODE_ENV === "development") {
    console.log({
      type,
      ...data,
      ...meta
    });
  }
  next(action);
};

export const history = createBrowserHistory();

export default createStore(
  rootReducer,
  applyMiddleware(thunk, customMiddleware)
);
