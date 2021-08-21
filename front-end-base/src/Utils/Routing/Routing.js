import * as routeIds from './Routes';
import store from '../Redux/store';

/**
 * ->Whatever state we need to decide to either should allow the path switching, we will get that
 * state from store [Redux]. 
 * ->What ever API we need to call, for the purpose of setting permission to chage route, will be 
 * called here.
 * 
 */

export const GotTo=(currentPage,destinationPage)=>{
    var requestedPath = `From_${currentPage}_TO_${destinationPage}`;
    switch (requestedPath) {
        case `From_${routeIds.splash}_TO_${routeIds.Home}`: //FROM_HOME_TO_SERVICEDETAILS
            
                // Define the logic to decide the switching path permision
            
            return {
                isAllowded:true,
                path:store.getState().Routes.Home.routeUrl
            }
            
            break;
        case `From_${routeIds.Home}_TO_${routeIds.ServiceDetails}`: //FROM_HOME_TO_SERVICEDETAILS
            
                // Define the logic to decide the switching path permision
            
            return {
                isAllowded:true,
                path:store.getState().Routes.ServiceDetails.routeUrl
            }

            break;

    
        default:
            break;
    }
}