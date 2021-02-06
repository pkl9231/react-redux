import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Main from "./components/Main"
import { Provider } from "react-redux";
import store from "./store/index";
ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
      <Main />
    </Provider>
  </>,
  document.getElementById("root")
);
