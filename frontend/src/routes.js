import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <div className="content">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
