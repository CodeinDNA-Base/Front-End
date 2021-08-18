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
import RoughImage2 from "../Resources/Rough2.PNG";
import RoughImage3 from "../Resources/Rough3.PNG";

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
    <Box>
<ParallaxSlide renderElements={renderElements} >
        {() =>
          data.map(({ image, id }, i) => (
            <Box>
              <img src={image} id={id} onClick={()=>redirectToTrendingService(id)} className="serviceImage"></img>
            </Box>
          ))
        }
      </ParallaxSlide>
    </Box>
  );
};