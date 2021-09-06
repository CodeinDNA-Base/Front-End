import { 
        OrdersOverViewChartData,
        AccountsOverViewChartData,
        ServiceOverViewChartData,
        RatedOrdersPercentageData,
        RatingsData, SummuryData,
        
    } from "./TempData";

export const DataLoader_ForLoadOrdersOverViewChartData = ()=>{
    return new Promise(function(resolve,rejected){
        setTimeout(() => {
            resolve(OrdersOverViewChartData);
        }, 3000);
    })
}
export const DataLoader_ForLoadAccountsOverViewChartData = ()=>{
    return new Promise(function(resolve,rejected){
        setTimeout(() => {
            resolve(AccountsOverViewChartData);
        }, 3000);
    })
}

export const DataLoader_ForLoadServiceOverViewChartData = ()=>{
    return new Promise(function(resolve,rejected){
        setTimeout(() => {
            resolve(ServiceOverViewChartData);
        }, 3000);
    })
}

export const DataLoader_ForSummuryData = ()=>{
    return new Promise(function(resolve,rejected){
        setTimeout(() => {
            resolve(SummuryData);
        }, 3000);
    })
}

export const DataLoader_ForRatingsData = ()=>{
    return new Promise(function(resolve,rejected){
        setTimeout(() => {
            resolve(RatingsData);
        }, 3000);
    })
}

export const DataLoader_ForRatedOrdersPercentageData = ()=>{
    return new Promise(function(resolve,rejected){
        setTimeout(() => {
            resolve(RatedOrdersPercentageData);
        }, 3000);
    })
};