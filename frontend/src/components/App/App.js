import React from "react";
import { Route, Switch } from "react-router-dom";
import ROUTES from "routes";
import AuthenticatedRoute from "components/Auth/Auth";

const App = () => (
  <Switch>
    <Route exact path="/login" component={ROUTES.LoginPage} />
    <Route exact path="/register" component={ROUTES.RegisterPage} />
    <AuthenticatedRoute exact path="/" component={ROUTES.MainPage} />
    <AuthenticatedRoute
      exact
      path="/new-workout"
      component={ROUTES.NewWorkoutPage}
    />
    <AuthenticatedRoute
      exact
      path="/my-workouts"
      component={ROUTES.MyWorkoutsPage}
    />
    <AuthenticatedRoute
      exact
      path="/statistics"
      component={ROUTES.StatisticsPage}
    />
    <AuthenticatedRoute exact path="/mi-band" component={ROUTES.MiBandPage} />
    <AuthenticatedRoute exact path="/profile" component={ROUTES.ProfilePage} />
  </Switch>
);

export default App;
