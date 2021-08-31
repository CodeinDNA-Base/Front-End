import * as actions from './actionTypes'
const update_baic_info_ADD_NEW_PROJECTS = (projectTitle,projectDescription,estimatedPrice,listOfKeyWords,isEditingEnabled)=>{
    return {
        type:actions.UPDATE_BASIC_INFO_add_new_projects,
        payLoad:{
            title:projectTitle,
            description:projectDescription,
            price:estimatedPrice,
            listOfKeyWords:listOfKeyWords,
            isEditingEnabled:isEditingEnabled
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

export {
        update_baic_info_ADD_NEW_PROJECTS,
        update_media_ADD_NEW_PROJECTS,
        add_projects_in_static_projects_list_SET_TRENDING_PROJECTS,
        add_projects_in_dynamic_projects_list_SET_TRENDING_PROJECTS
    }
