import * as actions from './actionTypes'
const add_Route = (routeId,routeUrl) =>{
    return {
        type:actions.ADD_ROUTES,
        data:{
          routeId,  
          routeUrl
        }
    }
}

const update_Route = (routeId,updatedRouteUrl) =>{
  return {
      type:actions.UPDATE_ROUTES,
      data:{
        routeId,  
        routeUrl:updatedRouteUrl
      }
  }
}

const get_Route = (routeId) =>{
  return {
      type:actions.GET_ROUTE,
      data:{
        routeId
      }
  }
}



export {add_Route,update_Route,get_Route}