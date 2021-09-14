import { listOfCanceledOrders, listOfCompletedOrders, listOfInProgressOrders, ListOfNewOrders } from "./TempData";

export const  DataLoader_ForListOfNewOrders = ()=>{
     return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForListOfNewOrders")
        setTimeout(() => {
            resolve(ListOfNewOrders)
        }, 3000);
    })
}
export const  DataLoader_ForListOfInProgressOrders = ()=>{
     return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForListOfInProgressOrders")
        setTimeout(() => {
            resolve(listOfInProgressOrders)
        }, 3000);
    })
}
export const  DataLoader_ForListOfCompletedOrders = ()=>{
     return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForListOfCompletedOrders")
        setTimeout(() => {
            resolve(listOfCompletedOrders)
        }, 3000);
    })
}
export const  DataLoader_ForListOfCanceledOrder = ()=>{
     return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForListOfCanceledOrder")
        setTimeout(() => {
            resolve(listOfCanceledOrders)
        }, 3000);
    })
}
