import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Styles/StyleSheet.css'
import { Grid,CardMedia} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ServiceImagesCarousel from './ServiceImagesCarousel';

function ServiceDetailsDescriptionArea(props) {
    const classes = useStyles();
    return (
        <div className={classes.serviceDescriptionDiv}>
              <Grid container spacing={1}>
                    <Grid item lg={12} md={12} sm={12} className={classes.titleRow}>
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
       height:350,      
    },
    serviceCarousel:{
        marginLeft:"2%"
    }
    
  }));


export default ServiceDetailsDescriptionArea;