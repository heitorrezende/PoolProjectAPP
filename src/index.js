import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducers";
import middleware from "./redux/middlewares";

import CostumeRouter from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer, middleware);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CostumeRouter />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
