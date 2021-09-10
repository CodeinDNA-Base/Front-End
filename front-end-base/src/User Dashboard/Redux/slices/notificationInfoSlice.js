//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunks

export const fetchNotificationInfoDetails = createAsyncThunk(
  "userDashboard/fetchNotificationInfoDetails",                             
  async (user_Id_Or_Email_or_username) => {                             //get this parameter 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    return infoDetails;
  }
);

const notificationInfoSlice = createSlice({
  name: "dashboard/settings/notificationsSettings",
  initialState: {
    notificationInfo: null,         //this is object that contains all the required fields needed to show on personalinfo section of settings/profile
    isLoading: false,
    hasError: false,
  },

  reducers: {},

  extraReducers: {
    [fetchNotificationInfoDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchNotificationInfoDetails.fulfilled]: (state, action) => {
      state.notificationInfo = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchNotificationInfoDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

const { actions, reducer } = notificationInfoSlice;
export default reducer

export const selectNotificationInfo=(state)=>state.notificationInfo.notificationInfo
export const selectIsNotificationInfoLoading=state=>state.notificationInfo.isLoading
export const selectHasNotificationInfoError=state=>state.notificationInfo.hasError