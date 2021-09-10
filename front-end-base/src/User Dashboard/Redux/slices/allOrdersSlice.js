//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunks
export const fetchAllOrders = createAsyncThunk(
  "userDashboard/fetchAllOrders",                               
  async (status) => {                      
                                                                  //Get order details:  given status->active, cancelled 
    const orders = await fetch(`https://randomuser.me/api/`);     //send request to custom API
    const allOrders = await orders.json();
    return allOrders;
  }
);

const allOrdersSlice = createSlice({
  name: "orders",
  initialState: {
    allOrders: null,           //this is array of objects that will hold order details once thunk is fulfilled
    isLoading: false,
    hasError: false,
  },

  reducers: {
  },

  extraReducers: {
    [fetchAllOrders.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchAllOrders.fulfilled]: (state, action) => {
        state.allOrders=action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchAllOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default allOrdersSlice.reducer

export const selectAllOrders=(state)=>state.allOrders.allOrders
export const selectAreAllOrdersLoading=state=>state.allOrders.isLoading
export const selectHasError=state=>state.allOrders.hasError