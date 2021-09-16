export const  selectAll = (state)=>{
    return state.userAccountManagerPanel;
}
export const  selectListOfActiveUserAccounts = (state)=>{
    return state.userAccountManagerPanel.listOfActiveUserAccounts;
}
export const  selectListOfBlockedUserAccounts = (state)=>{
    return state.userAccountManagerPanel.listOfBlockedUserAccounts;
}

