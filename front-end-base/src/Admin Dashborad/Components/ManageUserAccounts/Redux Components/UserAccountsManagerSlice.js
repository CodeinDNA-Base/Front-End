import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'
import { loadListOfActiveUserAccounts,loadListOfBlockedUserAccounts } from "./Thunks";
const initialState={
    listOfActiveUserAccounts:[],
    listOfBlockedUserAccounts:[],

    isLoading_LoadListOfActiveUserAccounts: false,
    hasError_LoadListOfActiveUserAccounts: false,

    isLoading_LoadListOfBlockedUserAccounts: false,
    hasError_LoadListOfBlockedUserAccounts: false,
}

const options = {
    name: "userAccountManagerPanel",
    initialState: initialState,
    reducers: {
        
    },
    extraReducers: {
        // // loadListOfActiveUserAccounts
         [loadListOfActiveUserAccounts.pending]: (state, action) => {
            state.isLoading_LoadListOfActiveUserAccounts = true;
            state.hasError_LoadListOfActiveUserAccounts = false;
        },
        [loadListOfActiveUserAccounts.fulfilled]: (state, action) => {
            state.listOfActiveUserAccounts = action.payload;
            state.isLoading_LoadListOfActiveUserAccounts = false;
            state.hasError_LoadListOfActiveUserAccounts = false;
        },
        [loadListOfActiveUserAccounts.rejected]: (state, action) => {
            state.isLoading_LoadListOfActiveUserAccounts = false;
            state.hasError_LoadListOfActiveUserAccounts = true;
        },

         // // loadListOfBlockedUserAccounts
         [loadListOfBlockedUserAccounts.pending]: (state, action) => {
            state.isLoading_LoadListOfBlockedUserAccounts = true;
            state.hasError_LoadListOfBlockedUserAccounts = false;
        },
        [loadListOfBlockedUserAccounts.fulfilled]: (state, action) => {
            state.listOfBlockedUserAccounts = action.payload;
            state.isLoading_LoadListOfBlockedUserAccounts = false;
            state.hasError_LoadListOfBlockedUserAccounts = false;
        },
        [loadListOfBlockedUserAccounts.rejected]: (state, action) => {
            state.isLoading_LoadListOfBlockedUserAccounts = false;
            state.hasError_LoadListOfBlockedUserAccounts = true;
        },
    }
}



const userAccountsManagerSlice = createSlice(options);
// export const projectManagerReducer =  projectManagerSlice.reducer;
const { reducer, actions } = userAccountsManagerSlice;
export { reducer as userAccountManagerReducer }
export const {} = actions;