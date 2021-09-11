export const tempRed=(payload)=>{
    return {
        type:'projectManagerPanel/tempRed',
        payload
    }
}
export const  updateBasicInfoTempProjectDataHolder=(payload)=>{
    return {
        type:'projectManagerPanel/updateBasicInfoTempProjectDataHolder',
        payload
    }
}
export const  updateMediaTempProjectDataHolder=(payload)=>{
    return {
        type:'projectManagerPanel/updateMediaTempProjectDataHolder',
        payload
    }
}
export const  updateByIdListOfStaticProjects=(payload)=>{
    return {
        type:'projectManagerPanel/updateByIdListOfStaticProjects',
        payload
    }
}
export const  removeProjectByIdFromListOfDrfatProjects=(payload)=>{
    return {
        type:'projectManagerPanel/removeProjectByIdFromListOfDrfatProjects',
        payload
    }
}
export const  addProjectInDynamicListOfProjects=(payload)=>{
    return {
        type:'projectManagerPanel/addProjectInDynamicListOfProjects',
        payload
    }
}
export const  removeProjectByIdFromDynamicListOfProjects=(payload)=>{
    return {
        type:'projectManagerPanel/removeProjectByIdFromDynamicListOfProjects',
        payload
    }
}