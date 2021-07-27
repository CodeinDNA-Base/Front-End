import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Box,Grid,withWidth, } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ServiceDetailsNavbar from '../Service Details/Components/ServiceDetailsNavbar';
import { StickyContainer, Sticky } from 'react-sticky';
import ServiceDetailsTabs from '../Service Details/Components/ServiceDetailsTabs';
import useStyles from '../Service Details/Components/Styles/StyleSheet';
import ServiceDetailsDescriptionArea from '../Service Details/Components/ServiceDetailsDescriptionArea';
import ServiceDetailsFooter from '../Service Details/Components/ServiceDetailsFooter';
import Packages from '../Service Details/Components/Packages';
function ServiceWorkerContainer(props) {

const classes = useStyles();
const isDesktopOrLaptopOrTabletScreen = useMediaQuery('(min-width: 960px)');
const [currentSelectedTabIndex,setCurrentSelectedTabIndex]=useState(0);

const handelTabChangeEvent = (event,indexSelected)=>{setCurrentSelectedTabIndex(indexSelected);}

return (
  
<StickyContainer>
  <Sticky>
    {({style,isSticky,wasSticky,distanceFromTop,distanceFromBottom,calculatedHeight}) => (
      <body style={style}>
        <Grid container >
          <Grid item xs={12} style={{marginTop:distanceFromTop}}>
              {/* Navbar container */}
               <ServiceDetailsNavbar/>
           </Grid>
          <Grid item xs={12} >
            <Box px={(isDesktopOrLaptopOrTabletScreen) ? 6 : 0} >
              {/* Tabs container */}
              <ServiceDetailsTabs handelTabChangeEvent={handelTabChangeEvent} />
           </Box>         
          </Grid>
        </Grid>
      </body>
    )}
  </Sticky>
   <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box px={(isDesktopOrLaptopOrTabletScreen) ? 6 : 3}>
             {/* Body */}
             <Grid container spacing={1}>
                  <Grid item lg={8} md={8} xs={12} >
                    {/* Service description container */}
                    <ServiceDetailsDescriptionArea currentSelectedTabIndex={currentSelectedTabIndex}/>
                  </Grid>
                  <Grid item lg={4} md={4} xs={12}>
                    {/* package container */}
                    <Packages/>
                  </Grid>
             </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.footer}>
              {/* Footer */}
             <ServiceDetailsFooter/>
        </Grid>
      </Grid>
</StickyContainer>
  );
}

ServiceWorkerContainer.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
export default withWidth()(ServiceWorkerContainer);