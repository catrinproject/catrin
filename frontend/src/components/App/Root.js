import React from "react";
import { setConfig } from "react-hot-loader";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import App from "components/App/App";

setConfig({ trackTailUpdates: false });

export const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

export default hot(Root);
