

import * as actions from './actionTypes'
import produce from 'immer';
import { storeStructure } from './store';

export default function reducer(state=storeStructure,action) {

    switch (action.type) {

        case actions.GET_LIST_OF_PROJECTS:
            // This will return the list of projects from store.
            // This will return according to recieved indexex.
            return  state.ProjectsStore.ListOfProjectsLoadedFromAPI.data;
        break;

        default:
            return  produce(state,draft=> draft)
            break;
    }
}
