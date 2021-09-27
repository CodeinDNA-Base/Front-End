//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { recentlyViewedServices } from "./dummyData";
//Thunks
export const fetchRecentlyViewedServices = createAsyncThunk(
  "userDashboard/fetchRecentlyViewedServices",
  async () => {                      
    //API call
    return recentlyViewedServices;
  }
);

const recentlyViewedServicesSlice = createSlice({
  name: "orders",
  initialState: {
    services: [],           //this is array of objects that will hold project details once thunk is fulfilled
    isLoading: false,
    hasError: false,
  },

  reducers: {
  },

  extraReducers: {
    [fetchRecentlyViewedServices.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchRecentlyViewedServices.fulfilled]: (state, action) => {
      state.services=action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchRecentlyViewedServices.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default recentlyViewedServicesSlice.reducer

export const selectRecentServices=(state)=>state.recentServices.services
export const selectRecentServiceIsLoading=state=>state.recentServices.isLoading
export const selectRecentServiceHasError=state=>state.recentServices.hasError
