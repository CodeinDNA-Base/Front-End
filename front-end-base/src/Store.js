import { configureStore } from "@reduxjs/toolkit";
import latestProjectsReducer from "./Home/Components/Slices/HomePageSlices/LatestProjectSlice";
import allServicesReducer from "./Home/Components/Slices/HomePageSlices/ServicesSlices";
import latestReviewsReducer from "./Home/Components/Slices/HomePageSlices/UserReviewsSlice";
import loginDetialsReducer from "./Home/Components/Slices/AuthenticationPageSlices/LoginFormSlicer";
import {
  LATESTPROJECTS,
  ALLSERVICES,
  LATESTREVIEWS,
  SEARCHBYCATEGORY,
} from "./Home/Components/Slices/HomePageSlices/HomePageConstants";
import { LOGININDETAILS } from "./Home/Components/Slices/AuthenticationPageSlices/AuthenticationPageConstants";
import {
  TEAMDETAIL,
  CONTACTFORMDETAILS,
} from "./Home/Components/Slices/AboutPageSlices/AboutPageConstant";
import teamDetailReducer from "./Home/Components/Slices/AboutPageSlices/OurTeamSlices";
import searchbyCategoryReducer from "./Home/Components/Slices/HomePageSlices/SearchCardSlice";
import contactFormDetaildReducer from "./Home/Components/Slices/AboutPageSlices/ContactUsGlobalFormSlicer";

export default configureStore({
  reducer: {
    [LATESTPROJECTS]: latestProjectsReducer,
    [ALLSERVICES]: allServicesReducer,
    [LATESTREVIEWS]: latestReviewsReducer,
    [LOGININDETAILS]: loginDetialsReducer,
    [TEAMDETAIL]: teamDetailReducer,
    [SEARCHBYCATEGORY]: searchbyCategoryReducer,
    [CONTACTFORMDETAILS]: contactFormDetaildReducer,
  },
});
