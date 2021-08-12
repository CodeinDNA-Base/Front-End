import React,{useState,useEffect} from 'react';
import ServiceDetailsDescriptionArea from '../../../../Service Details/Components/ServiceDetailsDescriptionArea'
import Packages from '../../../../Service Details/Components/Packages';
import { makeStyles,Grid,Hidden,Box} from '@material-ui/core';
import useWindowDimensions from '../../../../Service Details/Components/useWindowDimensions';
function Preview(props) {
    const classes = useStyles();

    return (
        <div>
             <Grid container>
            {/* <Grid lg={1} md={1} sm={1} xs={0}></Grid> */}
            <Grid item lg={10} sm={10} md={10} xs={12}>
              <Box px={0} >
              {/* Body */}
                <Grid container spacing={0}  style={{marginTop:"1%"}}>
                  <Grid item lg={7} md={7} xs={12} >
                    {/* Service description container */}
                    <div className={classes.descriptionAreaontainer}>
                          <ServiceDetailsDescriptionArea currentSelectedTabIndex={0}/>
                    </div>
                  </Grid>
                  <Hidden only="xs">
                  <Grid item lg={5} md={5} xs={12}>
                    {/* package container */}
                    <div className={classes.packageContainer}>
                        <div >
                              <Packages/>
                        </div>
                    </div>
                  </Grid>
                  </Hidden>
                  
               </Grid>
             </Box>
            </Grid>
            {/* <Grid lg={1} md={1} sm={1} xs={0}></Grid> */}
        </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    descriptionAreaontainer:{
        ['@media (min-width: 960px)']: { // eslint-disable-line no-useless-computed-key
          paddingRight: '1%'
        }
      },
      packageContainer:{
        width:'100%',
        marginLeft:30,
        // backgroundColor:"blue"
      },
}))
export default Preview;