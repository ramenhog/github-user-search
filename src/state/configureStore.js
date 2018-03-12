import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export default createStore(rootReducer, applyMiddleware(thunk));
