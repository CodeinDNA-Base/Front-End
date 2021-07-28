import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { Box,Grid,withWidth,AppBar } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ServiceDetailsDescriptionArea from '../Service Details/Components/ServiceDetailsDescriptionArea';
import ServiceDetailsFooter from '../Service Details/Components/ServiceDetailsFooter';
import Packages from '../Service Details/Components/Packages';
import { makeStyles } from '@material-ui/core/styles';
import NavTabBarCollectively from '../Service Details/Components/NavTabBarCollectively';
function ServiceWorkerContainer(props) {
const classes = useStyles();
const isDesktopOrLaptopOrTabletScreen = useMediaQuery('(min-width: 960px)');

const [currentSelectedTabIndex,setCurrentSelectedTabIndex]=useState(0);
const [top,setTop]=useState();
const [scrollPosition, setScrollPosition] = useState(0);
const handelTabChangeEvent = (event,indexSelected)=>{setCurrentSelectedTabIndex(indexSelected)}
const handleScroll = () => {setScrollPosition(window.pageYOffset)};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

return (
<div >
<Grid container >
        <Grid item xs={12}>
          <AppBar style={{backgroundColor:"transparent"}}>
                  <NavTabBarCollectively/>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <Box px={(isDesktopOrLaptopOrTabletScreen) ? 6 : 3}>
             {/* Body */}
             <Grid container spacing={1}  style={{marginTop:"10%"}}>
                  <Grid item lg={8} md={8} xs={12}>
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
  
}));


ServiceWorkerContainer.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
export default withWidth()(ServiceWorkerContainer);