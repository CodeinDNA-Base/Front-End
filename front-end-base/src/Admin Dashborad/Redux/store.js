import { createStore } from "redux";
import reducer from "./reducer";
import { listOfProjects } from "./TempDataCollection";

const storeStructure=
    {
        ProjectsStore:
        {
            ListOfProjectsLoadedFromAPI:{
                data:listOfProjects,
                lastUpdateTime:null,
            }
        },

        // HomeStore:{

        //     ListOfTrendingProjects:{
        //         data://array
        //         lastUpdate
        //     }
        // }
        // AuthenticationStore:{
        //     //Varaibles
        //     //Lists.
        // }
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