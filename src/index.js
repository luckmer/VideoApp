import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import Global from "./Global";

ReactDOM.render(
  <Provider store={Store}>
    <Global />
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
