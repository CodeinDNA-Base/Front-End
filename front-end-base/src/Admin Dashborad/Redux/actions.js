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
export {update_baic_info_ADD_NEW_PROJECTS,update_media_ADD_NEW_PROJECTS}