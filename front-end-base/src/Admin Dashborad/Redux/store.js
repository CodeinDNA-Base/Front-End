import { createStore } from "redux";
import reducer from "./reducer";
import { listOfProjects,listOfTrendingProjects } from "./TempDataCollection";

const storeStructure=
    {
        ProjectsStore:
        {
            ListOfProjectsLoadedFromAPI:{
                data:listOfProjects,
                lastDataUpdateTime:null,
            },
            ListOfTrendingProjectsLoadedFromAPI:{
                data:listOfTrendingProjects,
                lastUpdateDateAndTime:" Monday, 30 August 2021 (GMT+5) Time in Sukkur 9:11 pm",
                lastChoosedDisplayMode:"Static",
                lastDataUpdateTime:null,
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