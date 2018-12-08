import React from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router";
import Home from "../Home";
import Loading from "../shared/components/Loading";

const Player = Loadable({
  loader: () => import("../Player"),
  loading: Loading
});

const Routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/player/:id" component={Player} />
      <Route component={Home} />
    </Switch>
  </div>
);

export default Routes;
