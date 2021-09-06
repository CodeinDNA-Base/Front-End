import { createAsyncThunk } from "@reduxjs/toolkit" 
import { 
        OrdersOverViewChartData,AccountsOverViewChartData,ServiceOverViewChartData
    } from "./TempData";
import { 
        DataLoader_ForLoadAccountsOverViewChartData,
        DataLoader_ForLoadOrdersOverViewChartData,
        DataLoader_ForLoadServiceOverViewChartData, 
        DataLoader_ForRatedOrdersPercentageData, 
        DataLoader_ForRatingsData, 
        DataLoader_ForSummuryData
} from "./APIEndPoints";

export const loadOrdersOverViewChartData = createAsyncThunk(
    'homePanel/loadOrdersOverViewChartData',
    async () =>{
        const response = await DataLoader_ForLoadOrdersOverViewChartData().then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response;
    }
)
export const loadAccountsOverViewChartData = createAsyncThunk(
    'homePanel/loadAccountsOverViewChartData',
    async () =>{
        const response = await DataLoader_ForLoadAccountsOverViewChartData().then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response;
    }
)
export const loadServiceOverViewChartData = createAsyncThunk(
    'homePanel/loadServiceOverViewChartData',
    async () =>{
        const response = await DataLoader_ForLoadServiceOverViewChartData().then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response;
    }
)

export const loadSummuryData = createAsyncThunk(
    'homePanel/loadSummuryData',
    async () =>{
        const response = await DataLoader_ForSummuryData().then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response;
    }
)

export const loadRatingsData = createAsyncThunk(
    'homePanel/loadRatingsData',
    async () =>{
        const response = await DataLoader_ForRatingsData().then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response;
    }
)

export const loadRatedOrdersPercentageData = createAsyncThunk(
    'homePanel/loadRatedOrdersPercentageData',
    async () =>{
        const response = await DataLoader_ForRatedOrdersPercentageData().then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response;
    }
)

































// const tempApi = ()=>{
//     return new Promise(function(resolve,rejected){
//         setTimeout(() => {
//            rejected([{test:"tabahi"}]); 
//         }, 5000);
//     })
// }

// export const load = createAsyncThunk(
//     'authentication/callTheAPI',
//     async () => {
//         // const response =  api();
//         console.log("Loading started")
//         const resp = await tempApi().then((success)=>{
//             return success
//         },(error)=>{
//             throw "Failed to load"
//         });
//         console.log("Loading ended with response")
//         console.log(resp)
//         return resp;
//     }
// );
