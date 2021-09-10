
import { configureStore } from "@reduxjs/toolkit"

//Reducers
import userProfileReducer from "./slices/userProfileSlice"
import ordersReducer from "./slices/ordersSlice"
import recentlyViewedProjectsReducer from "./slices/recentlyViewedProjectsSlice"
import recentlyViewedServicesReducer from "./slices/recentlyViewedServicesSlice"
import viewOrderReducer from "./slices/viewOrderSlice"
import allOrdersReducer from "./slices/allOrdersSlice"
import trendingServicesReducer from "./slices/trendingServicesSlice"
import personalInfoReducer from "./slices/personalInfoSlice"
import balanceInfoReducer from "./slices/balanceInfoSlice"
import notificationInfoReducer from "./slices/notificationInfoSlice"
import paymentInfoReducer from "./slices/paymentInfoSlice"
import securityInfoSlice from "./slices/securityInfoSlice"

const store = configureStore({
    reducer:{
        userProfile:userProfileReducer,
        orders: ordersReducer,
        recentProjects:recentlyViewedProjectsReducer,
        recentServices:recentlyViewedServicesReducer,
        viewOrder: viewOrderReducer,
        allOrders:allOrdersReducer,
        trendingServices: trendingServicesReducer,
        
        personalInfo:personalInfoReducer,
        balanceInfo: balanceInfoReducer,
        notificationInfo: notificationInfoReducer,
        paymentInfo:paymentInfoReducer,
        securityInfo: securityInfoSlice,
    }
})

export default store;