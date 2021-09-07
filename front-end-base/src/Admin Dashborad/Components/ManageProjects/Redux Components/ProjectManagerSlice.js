import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'

const initialState = {
    listOfProjects:[],
    listOfDraftProjects:[],
    tempProjectDataHolder:{
        BasicInfo:{
                projectTitle:null,
                projectDesc:null,
                projectService:null,
                projectSubService:null,
                projectEstimatedPrice:null,
                projectPublishDate:null,
                clientSideViewUrl:null,
                listOfKeyWords:[],
                isEditingEnabled:false
                },
        Media:{
                thumbnailImageUri:null,
                listOfImages:[],
                isEditingEnabled:false
            }
    },
    listOfStaticProjects:[],
    listOfDynamicProjectsList:[],
    lastUpdateDateAndTime:" Monday, 30 August 2021 (GMT+5) Time in Sukkur 9:11 pm",
    lastChoosedDisplayMode:"Static",
    lastDataUpdateTime:null,
}

const options = {
    name:"projectManagerPanel",
    initialState:initialState,
    reducer:{
        updateBasicInfoTempProjectDataHolder:(state,action)=>{
            return produce(state,draft=>{
                draft.tempProjectDataHolder.BasicInfo=action.payload;
                return draft
            })
        },
        updateMediaTempProjectDataHolder:(state,action)=>{
            return produce(state,draft=>{
                draft.tempProjectDataHolder.Media=action.payload;
                return draft
            })
        },

        updateByIdListOfStaticProjects:(state,action)=>{
            return produce(state,draft=>{
                draft.listOfStaticProjects.map((item,index)=>{
                    if(item.projectId===action.payload.projectId)
                    {
                        return action.payload;
                    }
                    else
                    {
                        return item
                    }
                });
                //While on sending side now only need to add a object.
                return draft
            })
        },

    },

    extraReducers:{
            // loadAccountsOverViewChartData
            // [loadAccountsOverViewChartData.pending]: (state, action) => {
            //   state.isLoading_LoadAccountsOverViewChartData = true;
            //   state.hasError_LoadAccountsOverViewChartData = false;
            // },
            // [loadAccountsOverViewChartData.fulfilled]: (state, action) => {
            //   state.accountsOverViewChartData = action.payload;
            //   state.isLoading_LoadAccountsOverViewChartData = false;
            //   state.hasError_LoadAccountsOverViewChartData = false;
            // },
            // [loadAccountsOverViewChartData.rejected]: (state, action) => {
            //   state.isLoading_LoadAccountsOverViewChartData = false;
            //   state.hasError_LoadAccountsOverViewChartData = true;
            // },
    }
}


const projectManagerSlice = createSlice(options);
export const projectManagerReducer =  projectManagerSlice.reducer;