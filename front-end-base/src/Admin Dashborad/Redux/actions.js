import * as actions from './actionTypes'
const update_baic_info_ADD_NEW_PROJECTS = (projectData)=>{
    return {
        type:actions.UPDATE_BASIC_INFO_add_new_projects,
        payLoad:{
            projectData:projectData,
        }
    }
   
}

const update_baic_info_ADD_NEW_SERVICE = (serviceData)=>{
    return {
        type:actions.UPDATE_BASIC_INFO_add_new_service,
        payLoad:{
            serviceData:serviceData,
        }
    }
   
}

const update_media_ADD_NEW_PROJECTS = (thumbnailImageUri,listOfImages,isEditingEnabled)=>{
    return {
        type:actions.UPDATE_MEDIA_add_new_projects,
        payLoad:{
            thumbnailImageUri:thumbnailImageUri,
            listOfImages:listOfImages,
            isEditingEnabled:isEditingEnabled
        }
    }
   
}

const update_media_ADD_NEW_SERVICE = (thumbnailImageUri,listOfImages,isEditingEnabled)=>{
    return {
        type:actions.UPDATE_MEDIA_add_new_service,
        payLoad:{
            thumbnailImageUri:thumbnailImageUri,
            listOfImages:listOfImages,
            isEditingEnabled:isEditingEnabled
        }
    }
   
}

const add_projects_in_static_projects_list_SET_TRENDING_PROJECTS = (projectDataHolder,index)=>{
    
    return {

        type:actions.ADD_PROJECT_IN_STATIC_LIST_OF_PROJECTS_set_trending_projects,
        payLoad:{
            projectHolder:projectDataHolder,
            projectIndex:index
        }
        
    }
}
const add_projects_in_dynamic_projects_list_SET_TRENDING_PROJECTS = (projectsList)=>{
    
    return {

        type:actions.ADD_PROJECT_IN_DYNAMIC_LIST_OF_PROJECTS_set_trending_projects,
        payLoad:{
            listOfDynamicProjectsList:projectsList,
        }
        
    }
}

const update_packages_ADD_NEW_SERVICE = (packagContainer)=>{
    
    return {

        type:actions.UPDATE_PACKAGES_add_new_service,
        payLoad:{
            packagContainer:packagContainer,
        }
        
    }
}



export {
        update_baic_info_ADD_NEW_PROJECTS,
        update_media_ADD_NEW_PROJECTS,
        add_projects_in_static_projects_list_SET_TRENDING_PROJECTS,
        add_projects_in_dynamic_projects_list_SET_TRENDING_PROJECTS,

        update_media_ADD_NEW_SERVICE,
        update_baic_info_ADD_NEW_SERVICE,
        update_packages_ADD_NEW_SERVICE
    }
