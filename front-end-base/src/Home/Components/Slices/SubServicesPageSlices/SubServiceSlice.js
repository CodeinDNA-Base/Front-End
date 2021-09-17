import { topRatedSubServicesData } from "./temp";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SUBSERVICES } from "./SubServiceConstants";

// think
export const loadSubServices = createAsyncThunk(
  `${SUBSERVICES}/getsubServices`,
  async (args, thunkAPI) => {
    const data = await fetch(
      "https://randomuser.me/api/0.6/?format=SQL&results=10"
    );
    console.log('loading')
    const json = await data.json();
    return topRatedSubServicesData;
  }
);

// slice
const sliceOptions = {
  name: `${SUBSERVICES}`,
  initialState: {
    hasError: false,
    isLoading: true,
    // push each time data is loaded
    allSubServices: [],
  },
  reducers: {},
  extraReducers: {
    [loadSubServices.pending]: (state, action) => {
      state.hasError = false;
      state.isLoading = true;
    },
    [loadSubServices.fulfilled]: (state, action) => {
      state.hasError = false;
      state.isLoading = false;
       state.allSubServices=action.payload
      
    },
    [loadSubServices.rejected]: (state, action) => {
      state.hasError = false;
      state.isLoading = false;
    },
  },
};

const subServiceSlice = createSlice(sliceOptions);

// selectors
export const selectSubServices = (state) => state.subServices.allSubServices;

//reducer
export default subServiceSlice.reducer;
