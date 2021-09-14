import { createAsyncThunk } from "@reduxjs/toolkit"
import { 
    DataLoader_ForListOfCanceledOrder,
    DataLoader_ForListOfCompletedOrders,
    DataLoader_ForListOfInProgressOrders,
    DataLoader_ForListOfNewOrders } from "./APIEndPoints";

export const loadListOfNewOrders =  createAsyncThunk(
    'ordersManagerPanel/loadListOfNewOrders',
    async()=>{
        const response = await DataLoader_ForListOfNewOrders().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)
export const loadListOfInProgressOrders =  createAsyncThunk(
    'ordersManagerPanel/loadListOfInProgressOrders',
    async()=>{
        const response = await DataLoader_ForListOfInProgressOrders().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)
export const loadListOfCompletedOrders =  createAsyncThunk(
    'ordersManagerPanel/loadListOfCompletedOrders',
    async()=>{
        const response = DataLoader_ForListOfCompletedOrders().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)
export const loadListOfCanceledOrder =  createAsyncThunk(
    'ordersManagerPanel/loadListOfCanceledOrder',
    async()=>{
        const response = DataLoader_ForListOfCanceledOrder().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)
