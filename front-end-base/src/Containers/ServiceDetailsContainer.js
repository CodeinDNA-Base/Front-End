import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { Box,Grid,withWidth,AppBar } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ServiceDetailsDescriptionArea from '../Service Details/Components/ServiceDetailsDescriptionArea';
import ServiceDetailsFooter from '../Service Details/Components/ServiceDetailsFooter';
import Packages from '../Service Details/Components/Packages';
import { makeStyles } from '@material-ui/core/styles';
import NavTabBarCollectively from '../Service Details/Components/NavTabBarCollectively';
import useWindowDimensions from '../Service Details/Components/useWindowDimensions';
function ServiceWorkerContainer(props) {

const classes = useStyles();
const { height, width } = useWindowDimensions();
const isDesktopOrLaptopOrTabletScreen = useMediaQuery('(min-width: 960px)');
const [packageContainerStickyNess,setPackageContainerStickyNess]=useState("StickThePackageContainer");
const [currentSelectedTabIndex,setCurrentSelectedTabIndex]=useState(0);
const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {setScrollPosition(window.pageYOffset)};
const handelTabIndex=(event,index=0)=>{setCurrentSelectedTabIndex(index)}


useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
console.log("s"+scrollPosition)
console.log("h"+document.documentElement.offsetHeight)
return (
<div >
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
                    <div className={classes.descriptionAreaontainer}>
                    <ServiceDetailsDescriptionArea currentSelectedTabIndex={currentSelectedTabIndex}/>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} xs={12}>
                    {/* package container */}
                    <div className={classes.packageContainer}>
                        <div className={packageContainerStickyNess}>
                              <Packages/>
                        </div>
                    </div>
                  </Grid>
               </Grid>
             </Box>
            </Grid>
            <Grid lg={1} md={1} sm={1} xs={0}></Grid>
        </Grid>

        <Grid item xs={12} className={classes.footer}>
              {/* Footer */}
             <ServiceDetailsFooter/>
        </Grid>
       
</Grid> 
</div>  
);
}

const useStyles = makeStyles((theme) => ({
  visibleNavbar:{
    marginTop:20
  },
  hiddenNavbar:{
    marginTop:0
  },
  footer:{
 
  },
  packageContainer:{
    width:'100%',
    backgroundColor:"blue"
  },
  descriptionAreaontainer:{
    
    ['@media (min-width: 960px)']: { // eslint-disable-line no-useless-computed-key
      paddingRight: '10%'
    }
  }
}));

ServiceWorkerContainer.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(ServiceWorkerContainer);