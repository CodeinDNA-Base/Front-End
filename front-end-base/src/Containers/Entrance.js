import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceDetailsContainer from "./ServiceDetailsContainer";
import HomeContainer from "./HomeContainer";
import { UserDashboardContainer, UserDashboardSettings, UserDashboardOrders, UserDashboardChat, UserDashboardViewOrder } from "./UserDashboardContainer";
import {SearchProjectsContainer} from "./SearchProjectsContainer";

function Entrance(props) {
  return (
    <Router>
        <Switch>
        <Route exact path="/" exact>
          <HomeContainer />
        </Route>

        <Route exact path="/ServiceDetails">
          <ServiceDetailsContainer />
        </Route>
        
      <Route exact path="/searchProject" component={SearchProjectsContainer} />
      <Route exact path="/userdashboard" component={UserDashboardContainer} />
      <Route exact path="/settings" component={UserDashboardSettings} />
      <Route exact path="/orders" component={UserDashboardOrders} />
      <Route exact path="/messaging" component={UserDashboardChat} />
      <Route exact path="/vieworder" component={UserDashboardViewOrder} />
        
        </Switch>
    </Router>
  );
}

export default Entrance;