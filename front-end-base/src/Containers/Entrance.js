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
import ViewProjectContainer from "./ViewProjectContainer";
function Entrance(props) {
  return (
    <Router>
      <Switch>
        <Route path="/ServiceDetails">
          <ServiceDetailsContainer />
        </Route>
        <Route path="/Home" exact>
          <HomeContainer />
        </Route>
        <Route path="/UserDashboardContainer">
          <UserDashboardContainer />
        </Route>
        <Route path="/ViewProjectContainer">
          <ViewProjectContainer />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default Entrance;
