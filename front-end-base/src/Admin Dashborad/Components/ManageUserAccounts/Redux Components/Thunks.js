import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataLoader_ForListActiveUserAccounts, DataLoader_ForListBlockedUserAccounts } from "./APIEndPoints";

export const loadListOfActiveUserAccounts =  createAsyncThunk(
    'userAccountManagerPanel/loadListOfActiveUserAccounts',
    async()=>{
        const response = DataLoader_ForListActiveUserAccounts().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)

export const loadListOfBlockedUserAccounts =  createAsyncThunk(
    'userAccountManagerPanel/loadListOfBlockedUserAccounts',
    async()=>{
        const response = DataLoader_ForListBlockedUserAccounts().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)

