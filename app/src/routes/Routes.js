import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";

import ROUTES from "./routesNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
      <Route
        exact
        path={ROUTES.COUNTER_PAGE}
        component={CounterPageContainer}
      />
    </Switch>
  );
};

export default Routes;
