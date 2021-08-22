import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { Box,Grid,withWidth,AppBar,Hidden} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ViewProjectDescriptionArea from '../ViewProject/Components/ViewProjectDescriptionArea';
import ServiceDetailsFooter from '../ViewProject/Components/ServiceDetailsFooter';
import TrendingServicesSideCarouselContainer from '../ViewProject/Components/TrendingServicesSideCarouselContainer';
import { makeStyles } from '@material-ui/core/styles';
import NavTabBarCollectively from '../ViewProject/Components/NavTabBarCollectively';
import useWindowDimensions from '../ViewProject/Components/useWindowDimensions';
import {Footer} from '../ViewProject/Components/Footer';
import MobileFooter from '../ViewProject/Components/MobileFooter';
import RelatedProjects from '../ViewProject/Components/RelatedProjects';
import RelatedProjectsForMobile from '../ViewProject/Components/RelatedProjectsForMobile';
function ViewProjectContainer(props) {
  
const classes = useStyles();
const { height, width } = useWindowDimensions();
const isDesktopOrLaptopOrTabletScreen = useMediaQuery('(min-width: 960px)');
const [packageContainerStickyNess,setPackageContainerStickyNess]=useState("");
const [sticknessFlag,setSticknessFlag]=useState(true)
const [currentSelectedTabIndex,setCurrentSelectedTabIndex]=useState(0);
const [scrollPosition, setScrollPosition] = useState(0);

const handleScroll = () => {
  setScrollPosition(window.pageYOffset) 
};

useEffect(()=>{
if(scrollPosition>(height*0.9))
{
  console.log("S:"+scrollPosition)
    setPackageContainerStickyNess("UnStickThePackageContainer")
}
else{
    setPackageContainerStickyNess("StickThePackageContainer")
}

},[scrollPosition>(height*0.9)])


const handelTabIndex=(event,index=0)=>{
  setCurrentSelectedTabIndex(index)
}


useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


// console.log("h"+document.documentElement.offsetHeight)
return (
<div className={classes.container}>
<Grid container >

        <Grid item xs={12}>
          <AppBar style={{backgroundColor:"transparent"}}>
                  <NavTabBarCollectively handelTabIndex={handelTabIndex}/>
          </AppBar>
        </Grid>
        <Grid container>
            <Grid lg={1} md={1} sm={1} xs={0}></Grid>
            <Grid item lg={10} sm={10} md={10} xs={12}>
              <Box px={(isDesktopOrLaptopOrTabletScreen) ? 0 : 3} >
              {/* Body */}
                <Grid container spacing={1}  style={{marginTop:"10%"}}>
                  <Grid item lg={8} md={8} xs={12} >
                    {/* Service description container */}
                    <div className={classes.descriptionAreaontainer} >
                          <ViewProjectDescriptionArea currentSelectedTabIndex={currentSelectedTabIndex}/>
                         
                    </div>
                    <div style={{width: (isDesktopOrLaptopOrTabletScreen) ? "70rem" : "100%",marginTop:"5%"}}>
                            
                          {(isDesktopOrLaptopOrTabletScreen) ? <RelatedProjects/> : <RelatedProjectsForMobile/>}  
                    </div>
                            
                  </Grid>
                  <Hidden only="xs">
                  <Grid item lg={4} md={4} xs={12}>
                    {/* package container */}
                    <div className={classes.packageContainer}>
                        <div className={packageContainerStickyNess}>
                              <TrendingServicesSideCarouselContainer/>
                        </div>
                    </div>
                  </Grid>
                  </Hidden>
                  
               </Grid>
             </Box>
            </Grid>
            <Grid lg={1} md={1} sm={1} xs={0}></Grid>
        </Grid>

        {/* <Grid item xs={12} className={classes.footer}> */}
              {/* Footer */}
             {/* <ServiceDetailsFooter/> */}
        {/* </Grid> */}
       
</Grid> 
    <div>
        <Grid container style={{ marginTop: "5%" }} spacing={0}>
          <Grid item md={12} xs={12} sm={12}>
            {isDesktopOrLaptopOrTabletScreen ? <Footer /> : <MobileFooter />}
          </Grid>
        </Grid>
      </div>
</div>  
);
}

const useStyles = makeStyles((theme) => ({
  container:{}
  ,
  visibleNavbar:{
    marginTop:20
  },
  hiddenNavbar:{
    marginTop:0
  },
  footer:{
    
  },
  packageContainer:{
    width:'100%'
    
  },
  descriptionAreaontainer:{
    ['@media (min-width: 960px)']: { // eslint-disable-line no-useless-computed-key
      paddingRight: '10%'
    }
  }
}));

ViewProjectContainer.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(ViewProjectContainer);