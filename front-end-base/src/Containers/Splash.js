import React from 'react';
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import * as routeIds from '../Utils/Routing/Routes'
import { GotTo } from "../Utils/Routing/Routing";
import * as actions from '../Utils/Redux/Actions';
import store from "../Utils/Redux/store";
function Splash(props) {
    let history = useHistory();
    var val = GotTo(routeIds.splash,routeIds.Home);
    if(val.isAllowded===true)
    {
      // Asume we have loged in.
      store.dispatch(actions.set_Is_Loged_IN(true));
      history.push("/"+val.path);
    }
    else{
        return <div>Not allow</div>
    }
    return (
        <div>
            <h1>Splash</h1>
        </div>
    );
}

export default Splash;