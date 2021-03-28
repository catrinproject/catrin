import React from "react";
import { Route, Switch } from "react-router-dom";
import ROUTES from "routes";
import AuthenticatedRoute from "components/Auth/Auth";

const App = () => (
  <Switch>
    <AuthenticatedRoute exact path="/" component={ROUTES.MainPage} />
    <Route exact path="/login" component={ROUTES.LoginPage} />
  </Switch>
);

export default App;
