import React,{useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceDetailsContainer from "./ServiceDetailsContainer";
import HomeContainer from "./HomeContainer";

import store from '../Utils/Redux/store';
import * as actions from '../Utils/Redux/Actions'
import * as routeIds from '../Utils/Redux/routes'

import {
  UserDashboardContainer,
  UserDashboardSettings,
  UserDashboardOrders,
  UserDashboardChat,
  UserDashboardViewOrder,
  PostRequestFromMobileUserDashboard,
} from "./UserDashboardContainer";
import { SearchProjectsContainer } from "./SearchProjectsContainer";

function setPaths() {

  store.dispatch(actions.add_Route(routeIds.Home,"Home"));
  store.dispatch(actions.add_Route(routeIds.ServiceDetails,"ServiceDetails"));
  store.dispatch(actions.add_Route(routeIds.messaging,"messaging"));
  store.dispatch(actions.add_Route(routeIds.orders,"orders"));
  store.dispatch(actions.add_Route(routeIds.postrequest,"postrequest"));
  store.dispatch(actions.add_Route(routeIds.searchProject,"searchProject"));
  store.dispatch(actions.add_Route(routeIds.settings,"settings"));
  store.dispatch(actions.add_Route(routeIds.userdashboard,"userdashboard"));
  store.dispatch(actions.add_Route(routeIds.vieworder,"vieworder"));
  console.log(store.getState())
}

function Entrance(props) {
  
  setPaths();
  const getURL =  (routeIds)=>{
    store.dispatch(actions.get_Route(routeIds));
    return  (store.getState().returnedString===null) ? "Home" : store.getState().returnedString
  }
  

  return (
    <Router>
      <Switch>
        
        <Route exact path={`/${getURL(routeIds.Home)}`} exact>
          <HomeContainer />
        </Route>

        <Route exact path={`/${getURL(routeIds.ServiceDetails)}`}>
          <ServiceDetailsContainer />
        </Route>

        <Route
          exact
          path={`/${getURL(routeIds.searchProject)}`}
          component={SearchProjectsContainer}
        />
        <Route exact path={`/${getURL(routeIds.userdashboard)}`} component={UserDashboardContainer} />
        <Route exact path={`/${getURL(routeIds.settings)}`} component={UserDashboardSettings} />
        <Route exact path={`/${getURL(routeIds.orders)}`} component={UserDashboardOrders} />
        <Route exact path={`/${getURL(routeIds.messaging)}`} component={UserDashboardChat} />
        <Route exact path={`/${getURL(routeIds.vieworder)}`} component={UserDashboardViewOrder} />
        <Route exact path={`/${getURL(routeIds.postrequest)}`} component={PostRequestFromMobileUserDashboard} />
      </Switch>
    </Router>
  );
}

export default Entrance;
