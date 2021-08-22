//ReactJS
import React from "react";

//Material-UI
import Box from "@material-ui/core/Box";
import ParallaxSlide from "@mui-treasury/components/slide/parallax";
import DotIndicator from "@mui-treasury/components/indicator/dot";

//Styles
import './Styles/TrendingServicesStyles.css'

//Strings
import {stringCollection} from '../Strings/StringCollection.js'

//Resources
import RoughImage2 from "./Resources/java2.png";
import RoughImage3 from "./Resources/java1.jpg";
import { Headingfonts } from "../../Theme/fonts";

export const TrendingServicesSideCarousel = () => {
  return (
    <div>
      <p style={{font:Headingfonts.small}}>{stringCollection.TrendingServices.title}</p>
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

const renderElements = ({ index, onChangeIndex }) => (
    <>
      <div>
        {data.map(({ id }, i) => (
          <DotIndicator
            key={id}
            active={i === index}
            onClick={() => onChangeIndex(i)}
          />
        ))}
      </div>
    </>
  );

  function redirectToTrendingService(id){
    alert("I am Trending service with id : "+id)
  }

  return (
    <Box >
    <ParallaxSlide renderElements={renderElements}  >
        {() =>
          data.map(({ image, id }, i) => (
            <Box >
              <img src={image} id={id}  onClick={()=>redirectToTrendingService(id)} className="serviceImage2"></img>
            </Box>
          ))
        }
      </ParallaxSlide>
    </Box>
  );
};