import React,{useState} from 'react';
import { Grid,makeStyles,TextField,Button,Box} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import PackageContainer from './PackageContainer';
function PreviewProjectTab(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [keyWordText,setKeyWordText]=useState();
   
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    const [gallaryImages,setGallaryImages]=useState([
        {
            img:"https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
            imagekey:1,
            cols: 1,
        },
        {
            img:"https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
            imagekey:2,
            cols: 1,
        },
        {
            img:"https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
            imagekey:3,
            cols: 1,
        },
        {
            img:"https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
            imagekey:4,
            cols: 1,
        },
        {
            img:"https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
            imagekey:5,
            cols: 1,
        },
        
    ]);
   
    const [thumbnail,setThumbnail]=useState("https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg")
       const options = [
            'Delete',
          ];
          
          const ITEM_HEIGHT = 30;
         
        // Menue bar options
          const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
          };
        
          const handleClose = (event,selectedIndex) => {
            setAnchorEl(null);
           
          };
        //   Switch
        const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
          };
        const handelSelection = (event)=>
        {
            setThumbnail(URL.createObjectURL(event.target.files[0]))
        }
    
       
        const handSelectImagesForGallary = (event)=>{
            let tempKey = 0;
            let tempData = [{}]
            tempData = gallaryImages.map((item)=> { 
              tempKey=item.key;
              return  item
            
            })
            try{
              tempData.push(
                {
                            img:URL.createObjectURL(event.target.files[0]),
                            key:tempKey,
                            cols: 1,
                })
        
              setGallaryImages(tempData);
            }catch(e){
              alert("here is the error")
            }
            
          }
      
   
        return (
        <div className={classes.container}> 
            <Grid container>
                <Grid item xs={4} className={classes.leftSide}>
                        
                        <Grid container>
                            <Grid item xs={12} className={classes.textFields}>
                                {/* Project title */}
                                <TextField id="outlined-basic" label="Service description" variant="outlined" />
                            </Grid>
                           
                           
                            <Grid item xs={12}>
                            <Grid container className={classes.imageContainer}>
                            {/* Image preview */}
                                <Grid item xs={12}>
                                        <img className={classes.image} src={thumbnail}/>   
                                        {/* <div><p className={classes.thumbnailText}>Thumbnail</p></div>  */}
                                </Grid>

                                <Grid item xs={12}>
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
                                </Grid>
                                
                            </Grid>
                            </Grid>                            

                            <Grid item xs={8} className={classes.visibilityControl}>
                            <FormGroup>
                                   
                                   <FormControlLabel
                                     control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                     label="Visible "
                                   />
                                  
                            </FormGroup>
                            </Grid>
                        </Grid>
                </Grid>
                <Grid item xs={8} className={classes.rightSide}>
                        
                      <Grid container>
                        <Grid item xs={12}>
                                {/* Project description */}
                            <TextField
                             id="filled-multiline-static"
                             label="Service overview"
                             multiline
                             rows={18}  
                             variant="outlined"
                             className={classes.multilineTextField}
                            />
                        <div className={classes.editorOptions}>
                          <h4>Editor options</h4>
                        </div>
                        </Grid>
                        

                      </Grid>
                </Grid>
            </Grid>

            <Grid container>
            <Grid item xs={12}>
                <div className={classes.selectBtnForGallaryImages} >
                    <h3>Gallary</h3>
                            <Button
                                  variant="contained"
                                  component="label"
                                  
                                  startIcon={<CloudUploadIcon />}
                                >
                                  Select Image
                                  <input
                                    type="file"
                                    hidden
                                    onChange={handSelectImagesForGallary}
                                  />
                            </Button>
                </div>   
                <Box style={{overflow: 'auto',height:500, width: '100%', border: '1px solid black'}}>
                <div className={classes.rootList}>
                      <ImageList rowHeight={260} className={classes.imageList} cols={3}>
                        {gallaryImages.map((item,listIndex) => (
                        
                          <ImageListItem key={item.img} cols={item.cols || 1}>
                                    <Card className={classes.root}>
                                      <CardHeader
                                        
                                        action={
                                          <IconButton aria-label="settings">
                                            <div>
                                               <IconButton
                                                 aria-label="more"
                                                 aria-controls="long-menu"
                                                 aria-haspopup="true"
                                                 onClick={handleClick}
                                               >
                                                 <MoreVertIcon />
                                               </IconButton>
                                               <Menu
                                                 id="long-menu"
                                                 anchorEl={anchorEl}
                                                 keepMounted
                                                 open={open}
                                                 onClose={handleClose}
                                                 PaperProps={{
                                                   style: {
                                                     maxHeight: ITEM_HEIGHT * 4.5,
                                                     width: '20ch',
                                                   },
                                                 }}
                                               >
                                                 {options.map((option,index) => (
                                                   <MenuItem key={option} selected={option === 'Pyxis'} onClick={(e)=>{
                                                            handleClose(e,item);
                                                   }}>
                                                     {option}
                                                   </MenuItem>
                                                 ))}
                                               </Menu>
                                             </div>
                                          </IconButton>
                                        }
                                       
                                      />
                                      <CardMedia
                                        className={classes.media}
                                        image={item.img}
                                        title="Paella dish"
                                      />
                                    </Card>

                          </ImageListItem>
                        ))}
                      </ImageList>
                </div>
                                
                </Box>    
                
                </Grid>
            </Grid>
            <div>
              <h2>Edit packages</h2>
            </div>
            
            <Grid container>
             
              <Grid item xs={4}>
                            <h3>Basic</h3>
                              {/* Package container */}
                                      <PackageContainer/>
                           
              </Grid>
              <Grid item xs={4}>
                            <h3>Standard</h3>
                              {/* Package container */}
                                      <PackageContainer/>
                            
              </Grid>
              
              <Grid item xs={4}>
                            <h3>Premium</h3>
                              {/* Package container */}
                                      <PackageContainer/>
                            
              </Grid>
            </Grid>
                  
            <div className={classes.bottomBtn}>
                    <Button 
                    className={classes.addBtn} 
                    variant="contained"
                    color="primary" 
                    >
                      Update Changes
                    </Button>
            </div>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{

    },
    leftSide:{
        // backgroundColor:"blue"
    }
    ,
    rightSide:{
        // backgroundColor:"green"
    },
    textFields:{
        marginTop:'3%'
    },
    multilineTextField:{
        marginTop:"3%",
        width:'100%'
    },
    rootChips: {
        display: 'flex',
        justifyContent: 'start',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        marginTop: 0, 
      },
      chip: {
        margin: theme.spacing(0.5),
      },
      imageContainer:{
        // backgroundColor:"green",
        width:'100%',
        height:230,
        marginTop:'10%',
        // border: '1px solid black'
    },
    button:{
        marginTop:'2%',
        marginLeft:'13%',
        width:150

    },
    imageList: {
        width: '100%',
        
      },
    image:{
        resize:'contain',
        width:250,
        height:230,
    },
    thumbnailText:{
        marginLeft:'120%'
    },
    keyWordsInputContainer:{
        paddingBottom:'5%'
    },
    selectBtnForGallaryImages:{
        paddingBottom:'2%'
    },
    root: {
        maxWidth: '90%',
        height:250
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      avatar: {
        backgroundColor: red[500],
      },
      bottomBtn:{
          marginTop:'3%',
          marginLeft:"35%"
      },
      visibilityControl:{
          marginTop:'25%',
          marginLeft:"2%",
          border:'1px solid black',
          height:40,
          paddingLeft:"20%",
  
      },
      editorOptions:{
        backgroundColor:"green",
        height:50
      }
}))
export default PreviewProjectTab;