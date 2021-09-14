export const selectAll = (state)=>{
    return state.ordersManagerPanel;
}
export const  selectListOfNewOrders = (state)=>{
    return state.ordersManagerPanel.listOfNewOrders ;
}
export const  selectListOfInProgressOrders = (state)=>{
    return state.ordersManagerPanel.listOfInProgressOrders;
}
export const  selectListOfCompletedOrders = (state)=>{
    return state.ordersManagerPanel.listOfCompletedOrders;
}
export const  selectListOfCanceledOrder = (state)=>{
    return state.ordersManagerPanel.listOfCanceledOrder;
}