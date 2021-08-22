import React from 'react';
import range from 'lodash/range';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft,faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
// import ItemsCarousel from '../../src/ItemsCarousel';
import ItemsCarousel from 'react-items-carousel';
import {ProjectCardForMobile} from './ProjectCardForMobile';
const noOfItems = 12;
const noOfCards = 1;
const autoPlayDelay = 2000;
const chevronWidth = 50;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width:100%;
  margin: 0 auto;
`;

// const SlideItem = 

const carouselItems = range(noOfItems).map(index => (
//   <SlideItem key={index}>
//     {index+1}
//   </SlideItem>
<ProjectCardForMobile  key={index}/>
));

export default class RelatedProjectsForMobile extends React.Component {
  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={<FontAwesomeIcon icon={faArrowAltCircleRight} size="lg"/>}
          leftChevron={<FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg"/>}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
      </Wrapper>
    );
  }
}
