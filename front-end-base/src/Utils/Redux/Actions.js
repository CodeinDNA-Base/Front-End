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


const set_Is_Loged_IN = (isLogedIn)=>{
  return {
    type:actions.SET_IS_LOGED_IN,
    data:{
      isLogedIn
    }
  }
}


export {add_Route,set_Is_Loged_IN}