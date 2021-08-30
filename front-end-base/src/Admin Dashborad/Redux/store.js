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
            },
            Drafts:{

                AddNewProject:{
                    BasicInfo:{
                        title:null,
                        description:null,
                        price:0,
                        listOfKeyWords:[],
                        isEditingEnabled:false
                    },
                    Media:{
                        thumbnailImageUri:null,
                        listOfImages:[],
                        isEditingEnabled:false
                    }
                }
            }

        },


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