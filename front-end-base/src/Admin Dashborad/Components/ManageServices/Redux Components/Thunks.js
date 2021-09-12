import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataLoader_ForListOfServices, DataLoader_ForServiceClicksOverViewChartData } from "./APIEndPoints";


export const  loadListOfServices = createAsyncThunk(
    'serviceManagerPanel/loadListOfServices',
    async()=>{
        const response = await DataLoader_ForListOfServices().then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response
    }

    )

export const  loadServiceClicksOverViewChartData = createAsyncThunk(
    'serviceManagerPanel/loadServiceClicksOverViewChartData',
    async()=>{
        const response = await DataLoader_ForServiceClicksOverViewChartData().then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response
    }

    )