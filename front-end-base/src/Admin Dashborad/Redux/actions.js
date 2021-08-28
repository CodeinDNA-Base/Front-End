import * as actions from './actionTypes'
const get_list_of_projects = (startingIndex,endEndIndex) =>{
    return {
        type:actions.GET_LIST_OF_PROJECTS,
        data:{
         startingIndex,
         endEndIndex
        }
    }
}

export {add_Route,set_Is_Loged_IN}