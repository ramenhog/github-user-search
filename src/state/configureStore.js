import { createStore, applyMiddleware, compose } from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, customMiddleware))
);
