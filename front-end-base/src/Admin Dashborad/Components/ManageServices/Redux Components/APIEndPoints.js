import { ListOfServices, ServiceOverViewChartData } from "./TempData";

export const DataLoader_ForListOfServices = ()=>{
    return new Promise(new function(resolve,reject){
        console.log("A call has arrived to DataLoader_ForListOfServices")
        setTimeout(() => {
            resolve(ListOfServices)
        }, 3000);
    })
}

export const DataLoader_ForServiceClicksOverViewChartData = ()=>{
    return new Promise(new function(resolve,reject){
        console.log("A call has arrived to DataLoader_ForServiceClicksOverViewChartData")
        setTimeout(() => {
            resolve(ServiceOverViewChartData);
        }, 3000);
    })
}