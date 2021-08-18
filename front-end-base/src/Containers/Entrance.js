/**
 * This is the main entry point of whole application.
 * This file contains
 *      ->The all routes of application.
 *      ->
 */

//Define exact paths here to containers

import React from 'react';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import ServiceDetailsContainer from './ServiceDetailsContainer';
import {SearchProjectsContainer} from './SearchProjectsContainer';
import { UserDashboardContainer } from './UserDashboardContainer';
import { OrdersContainer} from './OrdersContainer'

function Entrance(props) {
    return (
        <Router>
          <Switch>

          <Route exact path="/">
                {/* SearchProjects
                <SearchProjectsContainer/> */}
                <UserDashboardContainer />
            </Route>          
            <Route exact path="/ServiceDetails">
                <ServiceDetailsContainer/>
            </Route>

            {/* <Route exact path="/Orders">
                <OrdersContainer/>
            </Route>
             */}

          </Switch>
      </Router>
    );
}

export default Entrance;