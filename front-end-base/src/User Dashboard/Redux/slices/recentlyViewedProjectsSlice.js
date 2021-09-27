//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { recentlyViewedProjects } from "./dummyData";
//Thunks
export const fetchRecentlyViewedProjects = createAsyncThunk(
  "userDashboard/fetchProjectDetails",
  async () => {                      
    //API call
    return recentlyViewedProjects;
  }
);

const recentlyViewedProjectsSlice = createSlice({
  name: "orders",
  initialState: {
    projects: [],           //this is array of objects that will hold project details once thunk is fulfilled
    isLoading: false,
    hasError: false,
  },

  reducers: {
  },

  extraReducers: {
    [fetchRecentlyViewedProjects.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchRecentlyViewedProjects.fulfilled]: (state, action) => {
      state.projects=action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchRecentlyViewedProjects.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default recentlyViewedProjectsSlice.reducer

export const selectRecentProjects=(state)=>state.recentProjects.projects
export const selectRecentProjectIsLoading=state=>state.recentProjects.isLoading
export const selectRecentProjectHasError=state=>state.recentProjects.hasError
