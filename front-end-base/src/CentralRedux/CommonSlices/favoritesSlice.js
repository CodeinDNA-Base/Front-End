//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import { favoriteServices } from "./tempData";
import { favoriteProjects } from "./tempData";

//Thunks

export const fetchFavoriteServices = createAsyncThunk(
  "userDashboard/fetchFavoriteServices",                               
  async () => {                    
    //API call
    return favoriteServices
  }
);

export const fetchFavoriteProjects = createAsyncThunk(
    "userDashboard/fetchFavoriteProjects",                               
    async () => {                    
      //API call
      return favoriteProjects
    }
  );


const favoritesSlice = createSlice({
  name: "dashboard/favorites",
  initialState: {
    projects:[],
    services:[],
    isLoadingProjects:false,
    isLoadingServices:false,
    hasErrorProjects:false,
    hasErrorServices:false,
  },
  reducers: {},
  extraReducers:{
    [fetchFavoriteServices.pending]: (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      },
      [fetchFavoriteServices.fulfilled]: (state, action) => {
        state.services=action.payload;
        state.isLoading = false;
        state.hasError = false;
      },
      [fetchFavoriteServices.rejected]: (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      },
      [fetchFavoriteProjects.pending]: (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      },
      [fetchFavoriteProjects.fulfilled]: (state, action) => {
        state.projects=action.payload;
        state.isLoading = false;
        state.hasError = false;
      },
      [fetchFavoriteProjects.rejected]: (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      },
  }
});

const { actions, reducer } = favoritesSlice;
export default reducer

export const selectFavoriteServices=(state)=>state.favorites.services
export const selectIsLoadingFavoriteServices=(state)=>state.favorites.isLoadingServices
export const selectHasErrorFavoriteServices=(state)=>state.favorites.hasErrorServices

export const selectFavoriteProjects=(state)=>state.favorites.projects
export const selectIsLoadingFavoriteProjects=(state)=>state.favorites.isLoadingProjects
export const selectHasErrorFavoriteProjects=(state)=>state.favorites.hasErrorProjects