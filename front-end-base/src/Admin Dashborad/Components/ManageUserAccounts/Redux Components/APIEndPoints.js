import { listOfActiveUserAccounts } from "./TempData";

export const  DataLoader_ForListActiveUserAccounts = ()=>{
    return new Promise(function(resolve,rejected){
       console.log("A call has arrived to DataLoader_ForListActiveUserAccounts")
       setTimeout(() => {
           resolve(listOfActiveUserAccounts)
       }, 3000);
   })
}

export const  DataLoader_ForListBlockedUserAccounts = ()=>{
    return new Promise(function(resolve,rejected){
       console.log("A call has arrived to DataLoader_ForListBlockedUserAccounts")
       setTimeout(() => {
           resolve()
       }, 3000);
   })
}

