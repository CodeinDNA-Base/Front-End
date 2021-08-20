/**
 * Stucture of store
 * store = 
 *  {
 *      Routes:[
 *                  {
 *                      routeId:Home,
 *                      routeUrl:""
 *                  },
 *                  {
 *                      routeId:1,
 *                      routeUrl:"/ServiceDetails"
 *                  },
 *                  
 *             ]
 *      ,
 *      LoginStatus:
 *      {
 *          isLoggedIn:true,
 *          lastLogedInDateAndTime:......
 *      }
 *      .
 *      .
 *      .
 *      .
 *  }
 */

import * as actions from './actionTypes'
import produce from 'immer';

export default function reducer(state={Routes:[],returnedString:null},action) {

    switch (action.type) {

        case actions.GET_ROUTE:
            let index = state.Routes.findIndex((obj => obj.routeId == action.data.routeId));
            return produce(state,draft=>{
                draft.returnedString=draft.Routes[index].routeUrl;
            });
            break;

        case actions.ADD_ROUTES:
           
            return produce(state,draft =>{
                draft.Routes.push({
                    routeId:action.data.routeId,
                    routeUrl:action.data.routeUrl
                })
            })    
        break;
        case actions.UPDATE_ROUTES:
        let objIndex = state.Routes.findIndex((obj => obj.routeId == action.data.routeId));
        return produce(state,draft =>{
          draft.Routes[objIndex].routeUrl=action.data.routeUrl;
        })
            break;
        default:
            return  produce(state,draft=> draft)
            break;
    }
}
