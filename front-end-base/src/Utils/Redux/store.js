import { createStore } from "redux";
import reducer from "./reducer";

const storeStructure=
    {
        Routes:{},
        Authentication:{
            isLogedIn:null,
            lastLoginDate:"Sat 21 August 2021",
            lastLoginTime:"2:26 PM",
            timeZone:"Time zone in Sukkur (GMT+5)"
        },
        returnedString:null,
    }
const store = createStore(reducer);
export {storeStructure, store as default}  ;

/**
 * Stucture of store
 * store = 
 *  {
 *      Routes:[
 *                 [Home]:
 *                          {
 *                              routeUrl:""
 *                          },
 *                 [Userdashboard]:
 *                          {
 *                              routeUrl:""
 *                          }
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