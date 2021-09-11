//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunks

export const fetchPurchaseHistory = createAsyncThunk(
  "userDashboard/fetchPurchaseHistory",
  async (user_Id_Or_Email_or_username) => {
    //get this parameter
    const info = await fetch(`https://randomuser.me/api/`); //send request to custom API
    const infoDetails = await info.json();
    return infoDetails;
  }
);

export const fetchBalance = createAsyncThunk(
  "userDashboard/fetchBalance",
  async (user_Id_Or_Email_or_username) => {
    //get this parameter
    const info = await fetch(`https://randomuser.me/api/`); //send request to custom API
    const infoDetails = await info.json();
    return infoDetails;
  }
);

const balanceInfoSlice = createSlice({
  name: "dashboardTrendingServices",
  initialState: {
    balance: null, //this is object that contains all the required fields needed to show on personalinfo section of settings/profile
    purchaseHistory: null,
    isLoading: false,
    hasError: false,
  },

  //in future, i will store balance in variable, will extract it from action.payload in fulfilled
  //while store all purchases in purchaseHistory array of objects
  reducers: {
    getThisMonthPurchaseHistory: (state, action) => {
      //return for this month
    },
    getLast3MonthsPurchaseHistory: (state, action) => {
      //return for last 3
    },
    getLast1YearPurchaseHistory: (state, action) => {
      //return for last this month
    },
    getAllTimePurchaseHistory: (state, action) => {
      return state.purchaseHistory;
    },
  },

  extraReducers: {
    [fetchPurchaseHistory.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPurchaseHistory.fulfilled]: (state, action) => {
      state.purchaseHistory = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchPurchaseHistory.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [fetchBalance.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchBalance.fulfilled]: (state, action) => {
      state.balance = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchBalance.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

const { actions, reducer } = balanceInfoSlice;
export default reducer;

export const {
  getThisMonthPurchaseHistory,
  getLast3MonthsPurchaseHistory,
  getLast1YearPurchaseHistory,
  getAllTimePurchaseHistory,
} = actions;

export const selectBalance = (state) => state.balanceInfo.balance;
export const selectIsBalanceLoading = (state) =>
  state.balanceInfo.isLoading;
export const selectHasBalanceError = (state) => state.balanceInfo.hasError;

export const selectPurchaseHistory = (state) =>
  state.balanceInfo.purchaseHistory;
export const selectIsPurchaseHistoryLoading = (state) =>
  state.balanceInfo.isLoading;
export const selectHasPurchaseHistoryError = (state) =>
  state.balanceInfo.hasError;
