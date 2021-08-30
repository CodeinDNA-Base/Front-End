

import * as actions from './actionTypes'
import produce from 'immer';
import { storeStructure } from './store';

export default function reducer(state=storeStructure,action) {

    switch (action.type) {        
        
        case actions.UPDATE_BASIC_INFO_add_new_projects:
            console.log("updating baic info");
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
            console.log("updating media");
        return produce(state,draft=>{
            draft.ProjectsStore.Drafts.AddNewProject.Media.thumbnailImageUri=action.payLoad.thumbnailImageUri;
            draft.ProjectsStore.Drafts.AddNewProject.Media.listOfImages=action.payLoad.listOfImages;
            draft.ProjectsStore.Drafts.AddNewProject.Media.isEditingEnabled=action.payLoad.isEditingEnabled;
            return draft;
        });
            
            break;
        default:
            return  produce(state,draft=> draft)
            break;
    }
}
