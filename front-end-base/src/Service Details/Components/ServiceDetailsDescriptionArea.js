import React,{useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Styles/StyleSheet.css'
import { Grid,useMediaQuery} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import strings from '../Strings/Strings'

import ServiceImagesCarousel from './ServiceImagesCarousel';
import PackageComparator from './PackageComparator';
import ServiceReviews from './ServiceReviews';
import RelatedService from './RelatedService';
import $ from 'jquery'
function ServiceDetailsDescriptionArea(props) {
    const isDesktopOrLaptopOrTabletScreen = useMediaQuery('(min-width: 960px)');
    const classes = useStyles();

    var overviewDiv = document.getElementById('overviewDiv');
    var descriptionDiv =  document.getElementById('descriptionDiv');
    var comparePackagesDiv =  document.getElementById('comparePackagesDiv');
    var serviceREviewsDiv = document.getElementById('serviceREviewsDiv');
    var relatedServicesDiv = document.getElementById('relatedServicesDiv');
    // console.log(overviewDiv.offsetHeight)
    console.log(comparePackagesDiv.offsetHeight)
    useEffect(()=>{
        switch(props.currentSelectedTabIndex)
        {
            case 0:
                    window.scrollTo({ behavior: 'smooth', top:overviewDiv.offsetHeight})
            break;
            case 1:
                    window.scrollTo({ behavior: 'smooth', top:descriptionDiv.offsetHeight+overviewDiv.offsetHeight})
            break;
            case 2:
                    window.scrollTo({ behavior: 'smooth', top:descriptionDiv.offsetHeight+overviewDiv.offsetHeight+descriptionDiv.offsetHeight})
            break;
            case 3:
                    window.scrollTo({ behavior: 'smooth', top:descriptionDiv.offsetHeight+overviewDiv.offsetHeight+descriptionDiv.offsetHeight+serviceREviewsDiv.offsetHeight})
            break;
            case 4:
                    window.scrollTo({ behavior: 'smooth', top:descriptionDiv.offsetHeight+overviewDiv.offsetHeight+descriptionDiv.offsetHeight+serviceREviewsDiv.offsetHeight+relatedServicesDiv.offsetHeight})
            break;
            
            
        }
    },[props.currentSelectedTabIndex])
    

    return (
        <div className={classes.serviceDescriptionDiv}>
              <Grid container spacing={1}>
                    <Grid item lg={12} md={12} sm={12} className={classes.titleRow} style={{marginTop: isDesktopOrLaptopOrTabletScreen ? 0 : '10%'}}>
                            {/* Title */}
                            <div className="ServiceTitle">We will develop java based applications and solve your problems</div>
                            <div className="ServiceRatingText">Rating</div>
                            <div className="ServiceRatingBar"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="small" /></div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} className={classes.imageRow}>
                            {/* Image */}
                            <div className={classes.serviceImageDiv}>
                                <div className={classes.serviceCarousel}>
                                        <ServiceImagesCarousel />
                                </div>
                            </div>    
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} className={classes.overviewrow} >
                            <div id="overviewDiv">    
                            {/* Over view */}
                            <div  className={classes.HeadingContainer} ><div className="HeadingFonts" >Overview</div></div> 
                            <div className={classes.ParaphContainer}> <div className="ParaphFonts">{strings.sampleText}</div></div>   
                            </div>

                            <div id="descriptionDiv">
                            {/* Description */}
                            <div className={classes.HeadingContainer} ><div className="HeadingFonts" >Description</div></div> 
                            <div className={classes.ParaphContainer}> <div className="ParaphFonts">{strings.sampleText}</div></div>   
                            </div>

                            <div id="comparePackagesDiv">
                            {/* Compare packages */}
                            <div className={classes.HeadingContainer} ><div className="HeadingFonts" >Package Comaparison</div></div> 
                            <div className={classes.ParaphContainer}> <div className="ParaphFonts"><PackageComparator/></div></div>   
                            </div>

                            <div id="serviceREviewsDiv">
                            {/* Reviews */}
                            <div className={classes.HeadingContainer} ><div className="HeadingFonts" >Customer Reviews</div></div> 
                            <div className={classes.ParaphContainer}> <div className="ParaphFonts"><ServiceReviews/></div></div>   
                            </div>

                            <div id="relatedServicesDiv">
                            {/* Related Services */}
                            <div className={classes.HeadingContainer} ><div className="HeadingFonts" >Related Services</div></div> 
                            <div className={classes.ParaphContainer}> <div className="ParaphFonts"><RelatedService/></div></div>         
                            </div>
                    </Grid>
                    
                    
              </Grid> 
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    serviceDescriptionDiv:{
    //   backgroundColor:"#f8f9fa",
      marginTop:'4%'
    },
    titleRow:{
        marginTop:"1%",
    },
    imageRow:{
        marginTop:"1%",
        paddingLeft:"10%"
    },
    serviceImageDiv:{
       width:"100%",
            
    },
    serviceCarousel:{
        marginLeft:"2%",
        marginTop:"2%"
    }
    ,
    overviewrow:{
        marginTop:"2%",
    },
    ParaphContainer:{
        paddingLeft:'2%',
        paddingTop:'1%'
    }
    ,
    HeadingContainer:{
        marginTop:'2%'
    },
    packageComparatorContainer:{
        marginTop:'2%'
    }
  }));


export default ServiceDetailsDescriptionArea;