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

  store.dispatch(actions.add_Route(routeIds.Home,""));
  store.dispatch(actions.add_Route(routeIds.ServiceDetails,"ServiceDetails"));
  store.dispatch(actions.add_Route(routeIds.messaging,"messaging"));
  store.dispatch(actions.add_Route(routeIds.orders,"orders"));
  store.dispatch(actions.add_Route(routeIds.postrequest,"postrequest"));
  store.dispatch(actions.add_Route(routeIds.searchProject,"searchProject"));
  store.dispatch(actions.add_Route(routeIds.settings,"settings"));
  store.dispatch(actions.add_Route(routeIds.userdashboard,"userdashboard"));
  store.dispatch(actions.add_Route(routeIds.vieworder,"vieworder"));


  // console.log(store.getState())
}

function Entrance(props) {
  
  setPaths(); //This must be called before the any component is loaded.

  // console.log(store.getState().Routes.ServiceDetails.routeUrl)
   
  useEffect(()=>{
    
  },[])

  return (
    <Router>
      <Switch>
        
        <Route exact path={`/${store.getState().Routes.Home.routeUrl}`} exact>
          <HomeContainer />
        </Route>
        
        <Route exact path={`/${store.getState().Routes.ServiceDetails.routeUrl}`}>
          <ServiceDetailsContainer />
        </Route>

        <Route
          exact
          path={`/${store.getState().Routes.searchProject.routeUrl}`}
          component={SearchProjectsContainer}
        />
        <Route exact path={`/${store.getState().Routes.userdashboard.routeUrl}`} component={UserDashboardContainer} />
        <Route exact path={`/${store.getState().Routes.settings.routeUrl}`} component={UserDashboardSettings} />
        <Route exact path={`/${store.getState().Routes.orders.routeUrl}`} component={UserDashboardOrders} />
        <Route exact path={`/${store.getState().Routes.messaging.routeUrl}`} component={UserDashboardChat} />
        <Route exact path={`/${store.getState().Routes.vieworder.routeUrl}`} component={UserDashboardViewOrder} />
        <Route exact path={`/${store.getState().Routes.postrequest.routeUrl}`} component={PostRequestFromMobileUserDashboard} />
      </Switch>
    </Router>
  );
}

export default Entrance;
