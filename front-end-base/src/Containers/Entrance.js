/**
 * This is the main entry point of whole application.
 * This file contains
 *      ->The all routes of application.
 *      ->
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceDetailsContainer from "./ServiceDetailsContainer";
import HomeContainer from "./HomeContainer";
import { UserDashboardContainer } from "./UserDashboardContainer";
import AuthenticationContainer from "./AuthenticationContainer";
import SubServicesContainer from "./SubServicesContainer";
function Entrance(props) {
  return (
    <Router>

      <Switch>
      <Route path="/" exact>
          <HomeContainer />
        </Route>
        <Route path="/ServiceDetails">
          <ServiceDetailsContainer />
        </Route>

        <Route path="/Login" exact>
          <AuthenticationContainer />
        </Route>
        <Route path="/SubServices" exact>
          <SubServicesContainer />
        </Route>
        <Route path="/UserDashboardContainer">
          <UserDashboardContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default Entrance;
