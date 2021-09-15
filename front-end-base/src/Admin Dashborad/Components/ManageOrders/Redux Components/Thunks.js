import { createAsyncThunk } from "@reduxjs/toolkit"
import { 
    DataLoader_ForListOfCanceledOrder,
    DataLoader_ForListOfCompletedOrders,
    DataLoader_ForListOfDeliveredOrders,
    DataLoader_ForListOfInProgressOrders,
     } from "./APIEndPoints";

export const loadListOfDeliveredOrders =  createAsyncThunk(
    'ordersManagerPanel/loadListOfDeliveredOrders',
    async()=>{
        const response = await DataLoader_ForListOfDeliveredOrders().then((resp)=>{
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
