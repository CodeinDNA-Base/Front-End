

import * as actions from './actionTypes'
import produce from 'immer';
import { storeStructure } from './store';

export default function reducer(state=storeStructure,action) {

    switch (action.type) {        
        
        case actions.UPDATE_BASIC_INFO_add_new_projects:
        return produce(state,draft=>{
            draft.ProjectsStore.Drafts.AddNewProject.BasicInfo.title=action.payLoad.title;
            draft.ProjectsStore.Drafts.AddNewProject.BasicInfo.description=action.payLoad.description;
            draft.ProjectsStore.Drafts.AddNewProject.BasicInfo.price=action.payLoad.price;
            draft.ProjectsStore.Drafts.AddNewProject.BasicInfo.listOfKeyWords=action.payLoad.listOfKeyWords;
            draft.ProjectsStore.Drafts.AddNewProject.BasicInfo.isEditingEnabled=action.payLoad.isEditingEnabled;
            return draft;
        });
        break;
        case actions.UPDATE_MEDIA_add_new_projects:
     
            return produce(state,draft=>{
                draft.ProjectsStore.Drafts.AddNewProject.Media.thumbnailImageUri=action.payLoad.thumbnailImageUri;
                draft.ProjectsStore.Drafts.AddNewProject.Media.listOfImages=action.payLoad.listOfImages;
                draft.ProjectsStore.Drafts.AddNewProject.Media.isEditingEnabled=action.payLoad.isEditingEnabled;
                return draft;
            });
            
            break;
        case actions.ADD_PROJECT_IN_STATIC_LIST_OF_PROJECTS_set_trending_projects:

        return produce(state,draft=>{
            draft.ProjectsStore.ListOfStaticProjects.data[action.payLoad.projectIndex].projectTitle=action.payLoad.projectHolder.projectTitle;
            draft.ProjectsStore.ListOfStaticProjects.data[action.payLoad.projectIndex].projectDesc=action.payLoad.projectHolder.projectDesc;
            draft.ProjectsStore.ListOfStaticProjects.data[action.payLoad.projectIndex].projectService=action.payLoad.projectHolder.projectService;
            draft.ProjectsStore.ListOfStaticProjects.data[action.payLoad.projectIndex].projectSubService=action.payLoad.projectHolder.projectSubService;
            draft.ProjectsStore.ListOfStaticProjects.data[action.payLoad.projectIndex].projectEstimatedPrice=action.payLoad.projectHolder.projectEstimatedPrice;
            draft.ProjectsStore.ListOfStaticProjects.data[action.payLoad.projectIndex].projectPublishDate=action.payLoad.projectHolder.projectPublishDate;
            draft.ProjectsStore.ListOfStaticProjects.data[action.payLoad.projectIndex].projectThumbNail=action.payLoad.projectHolder.projectThumbNail;
            draft.ProjectsStore.ListOfStaticProjects.data[action.payLoad.projectIndex].clientSideViewUrl=action.payLoad.projectHolder.clientSideViewUrl;
            draft.ProjectsStore.ListOfStaticProjects.data[action.payLoad.projectIndex].listOfImage=action.payLoad.projectHolder.listOfImage;
            return draft;
        })

            break;
        case actions.ADD_PROJECT_IN_DYNAMIC_LIST_OF_PROJECTS_set_trending_projects:

        return produce(state,draft=>{
            draft.ProjectsStore.listOfDynamicProjectsList=action.payLoad.listOfDynamicProjectsList;
            return draft
        })
            break;
        default:
            return  produce(state,draft=> draft)
            break;
    }
}
