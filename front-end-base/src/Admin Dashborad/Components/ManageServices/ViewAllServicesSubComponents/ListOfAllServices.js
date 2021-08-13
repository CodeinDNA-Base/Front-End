import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ServiceHolder from './ServiceHolder';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
function ListOfAllServices(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                   {/* {
                       props.projectsList.map((item,index)=>{
                           return(
                               <div className={classes.projectHolderContainer}>
                                   <Project ptojectTitle={item.ptojectTitle} key={item.key} cols={item.cols} img={item.img}/>
                               </div>
                           )
                       })
                   }  */}
                   <div className={classes.root}>
                        <ImageList rowHeight={340} className={classes.imageList} cols={3}>
                             {props.projectsList.map((item) => (
                             <ImageListItem key={item.img} cols={item.cols || 1}>
                                <div className={classes.projectHolderContainer}>
                                   <ServiceHolder projectTitle={item.projectTitle} projectKey={item.projectKey} cols={item.cols} img={item.img} handelOptionSelection={props.handelOptionSelection}/>
                                </div>
                             </ImageListItem>
                        ))}
                        </ImageList>
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{

    },
    projectHolderContainer:{
        border:'1px solid #f7f2f7'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      imageList: {
        width: '100%',
        
      },
}))
export default ListOfAllServices;