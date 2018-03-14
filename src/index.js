import React from "react";
import ReactDOM from "react-dom";

// Store related deps
import { Provider } from "react-redux";
import store from "./state/configureStore.js";

import "./App.scss";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
