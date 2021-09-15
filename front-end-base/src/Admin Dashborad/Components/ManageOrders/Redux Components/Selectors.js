export const selectAll = (state)=>{
    return state.ordersManagerPanel;
}
export const  selectListOfDeliveredOrders = (state)=>{
    return state.ordersManagerPanel.listOfDeliveredOrders ;
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