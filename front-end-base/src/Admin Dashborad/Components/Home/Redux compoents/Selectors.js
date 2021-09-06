export const selectAll = ((state)=>{
    return state;
})
export const  selectEarnings = ((state)=>{
    return state.earnings
})
export const  selectAvgSellingPrice = ((state)=>{
    return state.avgSellingPrice
})
export const  selectOrdersCompleted = ((state)=>{
    return state.ordersCompleted
})
export const  selectOnlineUsers = ((state)=>{
    return state.onlineUsers
})
export const  selectOnlineTeamMembers = ((state)=>{
    return state.onlineTeamMembers
})
export const  selectEarnedInThisMonth = ((state)=>{
    return state.earnedInThisMonth
})
export const  selectAllOrdersOverViewChartData = ((state)=>{
    return state.ordersOverViewChartData
})
export const  selectAllAccountsOverViewChartData = ((state)=>{
    return state.accountsOverViewChartData
})
export const  selectAllServiceOverViewChartData = ((state)=>{
    return state.serviceOverViewChartData
})

export const  selectByIdOrdersOverViewChartData =(args)=>(state)=>{
    return state.ordersOverViewChartData.filter((item)=>{
        if(item.id===args.id)
        {
            return item
        }
    })
}
export const  selectByIdAccountsOverViewChartData =(args)=>(state)=>{
    return state.accountsOverViewChartData.filter((item)=>{
        if(item.id===args.id)
        {
            return item
        }
    })
}
export const  selectByIdServiceOverViewChartData =(args)=>(state)=>{
    return state.serviceOverViewChartData.filter((item)=>{
        if(item.id===args.id)
        {
            return item
        }
    })
}

export const selectRatings = (state)=>{
    return state.ratings
}
export const selectRatedOrdersPercentage =(state)=>{
    return state.ratedOrdersPercentage
}
