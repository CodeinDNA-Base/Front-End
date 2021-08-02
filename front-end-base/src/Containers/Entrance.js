/**
 * This is the main entry point of whole application.
 * This file contains
 *      ->The all routes of application.
 *      ->
 */

import React from 'react';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import ServiceDetailsContainer from './ServiceDetailsContainer';
import AdminDashboardContainer from './AdminDashboardContainer'
function Entrance(props) {
    return (
        <Router>
          <Switch>
            <Route path="/ServiceDetails">
                <ServiceDetailsContainer/>
            </Route>
            <Route path="/AdminDashborad">
                <AdminDashboardContainer/>
            </Route>
            
          </Switch>
      </Router>
    );
}

export default Entrance;