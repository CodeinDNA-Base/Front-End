import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'
import { loadListOfServices,loadServiceClicksOverViewChartData } from "./Thunks";
const initialState = {
    listOfServices:[],
    tempServiceDataHolder:{
                   
                    BasicInfo:{
                        serviceTitle:null,
                        serviceDesc:null,
                        listOfSubServices:[],
                        listOfKeyWords:[],
                        isEditingEnabled:false
                    },
                    Media:{
                        thumbnailImageUri:null,
                        listOfImages:[],
                        isEditingEnabled:false
                    },
                    Packages:{
                        isEditingEnabled:false,
                        Basic:{
                            packageDescription:null,
                            packagePrice:0,
                            listOfFeatures:[],
                        },
                        Standard:{
                            packageDescription:null,
                            packagePrice:0,
                            listOfFeatures:[],
                        },
                        Premium:{
                            packageDescription:null,
                            packagePrice:0,
                            listOfFeatures:[],
                        }
                    }
    },
    serviceClicksOverViewChartData:[],

    isLoading_LoadListOfServices: false,
    hasError_LoadListOfServices: false,

    isLoading_loadServiceClicksOverViewChartData: false,
    hasError_loadServiceClicksOverViewChartData: false,

}

const options = {
    name:"serviceManagerPanel",
    initialState:initialState,
    reducers:{
        updateTempServiceDataHolderBasicInfo:(state,action)=>{
            return produce(state,draft=>{
                draft.tempServiceDataHolder.BasicInfo = action.payload;
                return draft
            });
        },
        updateTempServiceDataHolderMedia:(state,action)=>{
            return produce(state,draft=>{
                draft.tempServiceDataHolder.Media = action.payload;
                return draft
            });
        },

        updateTempServiceDataHolderPackagesBasic:(state,action)=>{
            return produce(state,draft=>{
                draft.tempServiceDataHolder.Packages.Basic=action.payload;
                return draft
            })
        },
        updateTempServiceDataHolderPackagesStandard:(state,action)=>{
            return produce(state,draft=>{
                draft.tempServiceDataHolder.Packages.Standard=action.payload;
                return draft
            })
        },
        updateTempServiceDataHolderPackagesPremium:(state,action)=>{
            return produce(state,draft=>{
                draft.tempServiceDataHolder.Packages.Premium=action.payload;
                return draft
            })
        },
        updateIsEditingFlagOfBasicInfoForm:(state,action)=>{
            return produce(state,draft=>{
                console.log(action.payload);
                draft.tempServiceDataHolder.Packages.isEditingEnabled=action.payload;
                return draft
            })
        },
        
    },

    extraReducers:{
            // loadListOfServices
            [loadListOfServices.pending]: (state, action) => {
              state.isLoading_LoadListOfServices = true;
              state.hasError_LoadListOfServices = false;
            },
            [loadListOfServices.fulfilled]: (state, action) => {
              state.listOfSubServices = action.payload;
              state.isLoading_LoadListOfServices = false;
              state.hasError_LoadListOfServices = false;
            },
            [loadListOfServices.rejected]: (state, action) => {
              state.isLoading_LoadListOfServices = false;
              state.hasError_LoadListOfServices = true;
            },

            //loadServiceClicksOverViewChartData
            [loadServiceClicksOverViewChartData.pending]: (state, action) => {
                state.isLoading_loadServiceClicksOverViewChartData = true;
                state.hasError_loadServiceClicksOverViewChartData = false;
              },
              [loadServiceClicksOverViewChartData.fulfilled]: (state, action) => {
                state.serviceClicksOverViewChartData = action.payload;
                state.isLoading_loadServiceClicksOverViewChartData = false;
                state.hasError_loadServiceClicksOverViewChartData = false;
              },
              [loadServiceClicksOverViewChartData.rejected]: (state, action) => {
                state.isLoading_loadServiceClicksOverViewChartData = false;
                state.hasError_loadServiceClicksOverViewChartData = true;
              },
  
    }
}
const serviceManagerSlice = createSlice(options);
// export const projectManagerReducer =  projectManagerSlice.reducer;
const { reducer, actions } = serviceManagerSlice;
export { reducer as serviceManagerReducer }
export const {
    updateTempServiceDataHolderBasicInfo,
    updateTempServiceDataHolderMedia,
    updateTempServiceDataHolderPackagesBasic,
    updateTempServiceDataHolderPackagesStandard,
    updateTempServiceDataHolderPackagesPremium,
    updateIsEditingFlagOfBasicInfoForm
} = actions;
