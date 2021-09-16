import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataLoader_ForListOfDeclinedOrderRequests, DataLoader_ForListOfNewOrderRequests } from "./APIEndPoints";

export const loadListOfNewOrderRequests =  createAsyncThunk(
    'ordersManagerPanel/loadListOfNewOrderRequests',
    async()=>{
        const response = DataLoader_ForListOfNewOrderRequests().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)

export const loadListOfDeclinedOrderRequests =  createAsyncThunk(
    'ordersManagerPanel/loadListOfDeclinedOrderRequests',
    async()=>{
        const response = DataLoader_ForListOfDeclinedOrderRequests().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)
