import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "components/App/Root";
// import reportWebVitals from "./reportWebVitals";
import { history } from "services/config";
import store from "store";
import "antd/dist/antd.css";
import { Layout } from "antd";

var mountNode = document.getElementById("container");
// const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);
