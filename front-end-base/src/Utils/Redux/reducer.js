

import * as actions from './actionTypes'
import produce from 'immer';
import { storeStructure } from './store';

export default function reducer(state=storeStructure,action) {

    switch (action.type) {

        case actions.ADD_ROUTES:
            var route = {
                [action.data.routeId]:{
                    routeUrl:action.data.routeUrl
                },
              }
            return produce(state,draft =>{
                draft.Routes={...state.Routes,...route}
            }) 

        break;
       

        case actions.SET_IS_LOGED_IN:

            return produce(state,draft=>{
                draft.Authentication.isLogedIn=action.data.isLogedIn;
            })    
            
        break;
        default:
            return  produce(state,draft=> draft)
            break;
    }
}
