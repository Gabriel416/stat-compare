import React from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router";
import Loading from "../shared/components/Loading";
import Home from "../Home";

const Player = Loadable({
  loader: () => import("../Player"),
  loading: Loading
});

const Routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/player/:id" component={Player} />
      {/* () => import('./views/Auth/Login.vue') */}
      {/* <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Counter} />
      <Route component={NoMatch} /> */}
    </Switch>
  </div>
);

export default Routes;
