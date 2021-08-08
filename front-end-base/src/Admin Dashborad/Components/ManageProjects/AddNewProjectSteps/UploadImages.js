import React,{useState} from 'react';
import { Grid,makeStyles,Button,Box} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { setGlobal } from 'jest-util';
function UploadImages(props) {
    const classes = useStyles();
    const [thumbnail,setThumbnail]=useState("https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg")
    const [gallaryImages,setGallaryImages]=useState([])
    
    const handelSelection = (event)=>{
        setThumbnail(URL.createObjectURL(event.target.files[0]))
    }
    const handSelectImagesForGallary = (event)=>{
      let tempKey = 0;
      let tempData = gallaryImages.map((item)=> { 
        tempKey=item.key;
      return  item
      })

      tempData.push(
        {
                    img:URL.createObjectURL(event.target.files[0]),
                    key:tempKey,
                    cols: 1,
        })
      setGallaryImages(tempData);
    }
    



    return (
        <div>
            <Grid container className={classes.mainContainer}>
                <Grid item xs={6} className={classes.leftSide}>
                   
                    <Grid container>
                    <Grid item xs={6}>
                    <h3>Upload Images</h3>
                        <Grid container >
                         {/* <Button
                           variant="contained"
                           color="default"
                           className={classes.button}
                           startIcon={<CloudUploadIcon />}
                         >
                           Upload
                           <input
                              type="file"
                                
                            />
                            
                         </Button> */}
                                <Button
                                  variant="contained"
                                  component="label"
                                  className={classes.button}
                                  startIcon={<CloudUploadIcon />}
                                >
                                  Select thumbnail
                                  <input
                                    type="file"
                                    hidden
                                    onChange={handelSelection}
                                  />
                                </Button>
                         

                         <Button
                                  variant="contained"
                                  component="label"
                                  className={classes.button}
                                  startIcon={<CloudUploadIcon />}
                                >
                                  Select Image
                                  <input
                                    type="file"
                                    hidden
                                    onChange={handSelectImagesForGallary}
                                  />
                         </Button>

                         <div>
                             <p>
                                 Please select image whose size should be less than 200kb
                             </p>
                            
                         </div>
                        </Grid>
                    </Grid>
                        <Grid item xs={6}>
                            <Grid container className={classes.imageContainer}>
                            {/* Image preview */}
                            <img className={classes.image} src={thumbnail}/>   
                            <div><p className={classes.thumbnailText}>Thumbnail</p></div> 
                            </Grid>
                        </Grid>
                    </Grid>
                   
                   
                </Grid>
                <Grid item xs={6} className={classes.rightSide}>
                <div><h3>Gallary</h3></div>   
                <Box style={{overflow: 'auto',height:200, width: '100%',}}>
                <div className={classes.rootList}>
                      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
                        {gallaryImages.map((item) => (
                          <ImageListItem key={item.img} cols={item.cols || 1}>
                            <img  src={item.img} alt={item.title} />
                            
                          </ImageListItem>
                        ))}
                      </ImageList>
                </div>
                                
                </Box>    
                <Button
                                  variant="contained"
                                  component="label"
                                  className={classes.clearButton}
                                  startIcon={<DeleteIcon />}
                                >
                                  Clear
                                  <input
                                    type="file"
                                    hidden
                                    // onChange={handelClear}
                                  />
                                </Button>
                </Grid>
                
            </Grid>

        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    mainContainer:{
        // backgroundColor:"blue",
        width:'100%',
        height:300
    },
    leftSide:{
        // backgroundColor:"blue"
    }
    ,
    rightSide:{
          // backgroundColor:"gold"
    }
    ,
    imageContainer:{
        // backgroundColor:"green",
        width:250,
        height:230,
        marginTop:'10%',
        border: '1px solid black'
    },
    button:{
        marginTop:'5%',
        marginLeft:'10%',
        width:120

    },
    image:{
        resize:'contain',
        width:250,
        height:230,
    },
    thumbnailText:{
        marginLeft:'120%'
    },
    rootList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      imageList: {
        width: 500,
        height: 450,
      },
      clearButton:{
          marginTop:'2%'
      }
 }));
 
export default UploadImages;