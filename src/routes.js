import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Pin from "./components/Pin/Pin";

export default (
  <Switch>
    <Route path="/dash" component={Dashboard} />
    <Route path="/" component={Pin} />
  </Switch>
);
