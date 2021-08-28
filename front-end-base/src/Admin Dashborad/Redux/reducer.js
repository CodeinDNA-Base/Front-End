

import * as actions from './actionTypes'
import produce from 'immer';
import { storeStructure } from './store';

export default function reducer(state=storeStructure,action) {

    switch (action.type) {        
        
        // Define reducers.

        default:
            return  produce(state,draft=> draft)
            break;
    }
}
