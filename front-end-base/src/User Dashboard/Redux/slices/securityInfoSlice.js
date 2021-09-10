//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunks

export const fetchSecurityInfoDetails = createAsyncThunk(
  "userDashboard/fetchSecurityInfoDetails",                             
  async (user_Id_Or_Email_or_username) => {                             //get this parameter, get security info of this user 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    return infoDetails;
  }
);

const securityInfoSlice = createSlice({
  name: "security",
  initialState: {
    securityInfo: null,         //this is array of objects that contains all the required fields for user security info
    isLoading: false,
    hasError: false,
  },

  reducers: {},

  extraReducers: {
    [fetchSecurityInfoDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchSecurityInfoDetails.fulfilled]: (state, action) => {
      state.securityInfo = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchSecurityInfoDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

const { actions, reducer } = securityInfoSlice;
export default reducer

export const selectSecurityInfo=(state)=>state.securityInfo.securityInfo
export const selectIsSecurityInfoLoading=state=>state.securityInfo.isLoading
export const selectHasSecurityInfoError=state=>state.securityInfo.hasError