import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'
import { loadListOfNewOrders,loadListOfInProgressOrders,loadListOfCompletedOrders,loadListOfCanceledOrder } from "./Thunks";
const initialState={
    listOfNewOrders:[],
    listOfInProgressOrders:[],
    listOfCompletedOrders:[],
    listOfCanceledOrder:[],

    isLoading_LoadListOfNewOrders: false,
    hasError_LoadListOfNewOrders: false,

    isLoading_LoadListOfInProgressOrders: false,
    hasError_LoadListOfInProgressOrders: false,
    
    isLoading_LoadListOfCompletedOrders: false,
    hasError_LoadListOfCompletedOrders: false,

    isLoading_LoadListOfCanceledOrder: false,
    hasError_LoadListOfCanceledOrder: false,

}

const options = {
    name: "ordersManagerPanel",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        // loadListOfNewOrders
        [loadListOfNewOrders.pending]: (state, action) => {
            state.isLoading_LoadListOfNewOrders = true;
            state.hasError_LoadListOfNewOrders = false;
        },
        [loadListOfNewOrders.fulfilled]: (state, action) => {
            state.listOfNewOrders = action.payload;
            state.isLoading_LoadListOfNewOrders = false;
            state.hasError_LoadListOfNewOrders = false;
        },
        [loadListOfNewOrders.rejected]: (state, action) => {
            state.isLoading_LoadListOfNewOrders = false;
            state.hasError_LoadListOfNewOrders = true;
        },

         // loadListOfInProgressOrders
         [loadListOfInProgressOrders.pending]: (state, action) => {
            state.isLoading_LoadListOfInProgressOrders = true;
            state.hasError_LoadListOfInProgressOrders = false;
        },
        [loadListOfInProgressOrders.fulfilled]: (state, action) => {
            state.listOfInProgressOrders = action.payload;
            state.isLoading_LoadListOfInProgressOrders = false;
            state.hasError_LoadListOfInProgressOrders = false;
        },
        [loadListOfInProgressOrders.rejected]: (state, action) => {
            state.isLoading_LoadListOfInProgressOrders = false;
            state.hasError_LoadListOfInProgressOrders = true;
        },

         // loadListOfCompletedOrders
         [loadListOfCompletedOrders.pending]: (state, action) => {
            state.isLoading_LoadListOfCompletedOrders = true;
            state.hasError_LoadListOfCompletedOrders = false;
        },
        [loadListOfCompletedOrders.fulfilled]: (state, action) => {
            state.listOfCompletedOrders = action.payload;
            state.isLoading_LoadListOfCompletedOrders = false;
            state.hasError_LoadListOfCompletedOrders = false;
        },
        [loadListOfCompletedOrders.rejected]: (state, action) => {
            state.isLoading_LoadListOfCompletedOrders = false;
            state.hasError_LoadListOfCompletedOrders = true;
        },

         // loadListOfCanceledOrder
         [loadListOfCanceledOrder.pending]: (state, action) => {
            state.isLoading_LoadListOfCanceledOrder = true;
            state.hasError_LoadListOfCanceledOrder = false;
        },
        [loadListOfCanceledOrder.fulfilled]: (state, action) => {
            state.listOfCanceledOrder = action.payload;
            state.isLoading_LoadListOfCanceledOrder = false;
            state.hasError_LoadListOfCanceledOrder = false;
        },
        [loadListOfCanceledOrder.rejected]: (state, action) => {
            state.isLoading_LoadListOfCanceledOrder = false;
            state.hasError_LoadListOfCanceledOrder = true;
        },

    }
}

const ordersManagerSlice = createSlice(options);
// export const projectManagerReducer =  projectManagerSlice.reducer;
const { reducer, actions } = ordersManagerSlice;
export { reducer as ordersManagerReducer }
export const {} = actions;

