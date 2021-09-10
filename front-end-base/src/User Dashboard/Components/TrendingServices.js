//ReactJS
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//Material-UI
import Box from "@material-ui/core/Box";

//Styles
import "./Styles/TrendingServicesStyles.css";

//Strings
import { stringCollection } from "../Strings/StringCollection.js";

//Resources
import RoughImage2 from "../Resources/Rough2.PNG";
import RoughImage3 from "../Resources/Rough3.PNG";

//react-redux
import { useDispatch, useSelector } from "react-redux";

//Thunks
import { fetchTrendingServiceDetails } from "../Redux/slices/trendingServicesSlice";

//selectors
import {
  selectTrendingServices,
  selectIsTrendingServiceLoading,
  selectHasTrendingServiceError,
} from "../Redux/slices/trendingServicesSlice";

//actionCreators
export const TrendingServices = () => {
  return (
    <div>
      <h1>{stringCollection.TrendingServices.title}</h1>
      <TrendingServiceCarousel />
    </div>
  );
};

const TrendingServiceCarousel = () => {
  const data = [
    {
      id: 1,
      image: RoughImage2,
    },
    {
      id: 2,
      image: RoughImage3,
    },
    {
      id: 3,
      image: RoughImage2,
    },
    {
      id: 4,
      image: RoughImage3,
    },
  ];

  //Redux store: operations

  const dispatch = useDispatch();
  const services = useSelector(selectTrendingServices);
  const isLoading = useSelector(selectIsTrendingServiceLoading);
  const encounteredError = useSelector(selectHasTrendingServiceError);

  useEffect(() => {
    dispatch(fetchTrendingServiceDetails()); //dispatch thunk to bring all trending services for
  }, [dispatch]);

  function redirectToTrendingService(id) {
    alert("I am Trending service with id : " + id);
  }

  return (
    <Carousel
      axis="horizontal"
      infiniteLoop
      autoPlay
      interval={3000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      {data.map(({ image, id }, i) => (
        <Box>
          <img
            src={image}
            id={id}
            onClick={() => redirectToTrendingService(id)}
            className="serviceImage"
          ></img>
        </Box>
      ))}
    </Carousel>
  );
};
