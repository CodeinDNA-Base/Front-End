//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunks

export const fetchBalanceInfoDetails = createAsyncThunk(
  "userDashboard/fetchBalanceInfoDetails",                             
  async (user_Id_Or_Email_or_username) => {                             //get this parameter 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    return infoDetails;
  }
);

const balanceInfoSlice = createSlice({
  name: "dashboardTrendingServices",
  initialState: {
    balanceInfo: null,         //this is object that contains all the required fields needed to show on personalinfo section of settings/profile
    isLoading: false,
    hasError: false,
  },

  reducers: {},

  extraReducers: {
    [fetchBalanceInfoDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchBalanceInfoDetails.fulfilled]: (state, action) => {
      state.balanceInfo = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchBalanceInfoDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

const { actions, reducer } = balanceInfoSlice;
export default reducer

export const selectBalanceInfo=(state)=>state.balanceInfo.balanceInfo
export const selectIsBalanceInfoLoading=state=>state.balanceInfo.isLoading
export const selectHasBalanceInfoError=state=>state.balanceInfo.hasError