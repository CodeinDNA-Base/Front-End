import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'

const initialState ={
    listOfAllOffers:[],
    tempCreateNewOfferDataHolder:{
        BasicInfo:{
        offerPunchLine:null,
        offerCreationDate:null,
        offerCreationTime:null,
        offerCatagory:null,
        offerSubCatagory:null,
        offerStatus:null,//Not Published
        isEditingEnabled: false
        },
        Media:{
            offerImage:null,
            isEditingEnabled: false
        }
    }
    
}

const options = {
    name: "offersManagerPanel",
    initialState: initialState,
    reducers: {
        updateBasicInfoOfCreateNewOffer:(state,action)=>{
            return produce(state,draft=>{
                draft.tempCreateNewOfferDataHolder.BasicInfo=action.payload;
                return draft
            })
        },
        updateMediaOfCreateNewOffer:(state,action)=>{
            return produce(state,draft=>{
                draft.tempCreateNewOfferDataHolder.Media=action.payload;
                return draft
            })
        }
    },
    extraReducers: {
        // loadDataOfLastChoosedDisplayMode
        // [loadDataOfLastChoosedDisplayMode.pending]: (state, action) => {
        //     state.isLoading_LastChoosedDisplayMode = true;
        //     state.hasError_LastChoosedDisplayMode = false;
        // },
        // [loadDataOfLastChoosedDisplayMode.fulfilled]: (state, action) => {
        //     state.lastChoosedDisplayMode = action.payload;
        //     state.isLoading_LastChoosedDisplayMode = false;
        //     state.hasError_LastChoosedDisplayMode = false;
        // },
        // [loadDataOfLastChoosedDisplayMode.rejected]: (state, action) => {
        //     state.isLoading_LastChoosedDisplayMode = false;
        //     state.hasError_LastChoosedDisplayMode = true;
        // },

    },
}

const offersManagerSlice = createSlice(options);
// export const projectManagerReducer =  projectManagerSlice.reducer;
const { reducer, actions } = offersManagerSlice;
export { reducer as offersManagerReducer }
export const {
    updateBasicInfoOfCreateNewOffer,
    updateMediaOfCreateNewOffer
} = actions;
