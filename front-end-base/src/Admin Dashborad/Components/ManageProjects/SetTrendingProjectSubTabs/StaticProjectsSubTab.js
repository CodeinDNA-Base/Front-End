import { Grid, makeStyles,InputBase,MenuItem,Select,InputLabel,FormControl,Button} from '@material-ui/core';
import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'; 
function StaticProjectsSubTab(props) {
    const classes = useStyles();
    const projects = [
      {
          ptojectTitle:"Project 1",
          key:0,
          cols:1
      },
      {
          ptojectTitle:"Project 2"
          ,
          key:1,
          cols:1
      },
      {
          ptojectTitle:"Project 3"
          ,
          key:2,
          cols:1
      },
      {
          ptojectTitle:"Project 4",
          key:3,
          cols:1
      },
      
  ]

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  
    return (
        
        <div >
            <Grid container className={classes.container}>
                <Grid item xs={6}>
                      <div className={classes.projectSearchControlsContainer}>

                          <Grid container>
                            <Grid item xs={7}>
                            <div className={classes.search}>
                            <div className={classes.searchIcon}>
                              <SearchIcon />
                            </div>
                            <InputBase
                              placeholder="Search…"
                              classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                              }}
                              inputProps={{ 'aria-label': 'search' }}
                              />
                              </div>
                            </Grid>
                            <Grid item xs={5}>
                            <FormControl variant="filled" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-filled-label">Search</InputLabel>
                                <Select
                                  labelId="demo-simple-select-filled-label"
                                  id="demo-simple-select-filled"
                                  value={age}
                                  onChange={handleChange}
                                >
                                  <MenuItem value="">
                                    <em>All</em>
                                  </MenuItem>
                                  <MenuItem value={10}>Project ID Number</MenuItem>
                                  <MenuItem value={20}>Project Title</MenuItem>
                                 
                                </Select>
                              </FormControl>
                            </Grid>


                          </Grid>
                            

                      </div>
                      <div className={classes.searchedProjectContainer}>
                                <h3>Search results</h3>
                      </div>
                </Grid>


                <Grid item xs={6}>
                <div className={classes.root}>
                   <ImageList rowHeight={190} className={classes.imageList} cols={2}>
                     {projects.map((item) => (
                       <ImageListItem key={item.img} cols={item.cols || 1}>
                         <div className={classes.projectCardContainer}>
                            <h4>{item.ptojectTitle}</h4>
                         </div>
                       </ImageListItem>
                     ))}
                   </ImageList>
                 </div>
                </Grid>
            </Grid>
            <div className={classes.updateButton}>
            <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                   >
                     Update
                   </Button>
            </div>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{
        width:'100%'
    }
    ,
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%'
      },
      search: {
        display:'block',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor:"#aecaf5",
        marginRight: theme.spacing(2),
        marginLeft: 10,
        width: '90%',
        marginTop:'10%'
       
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
        height: 450,
        paddingTop:'3%'
      },
      formControl: {
        marginTop: theme.spacing(3),
        minWidth: 100,
      },
      selectEmpty: {
      marginTop: theme.spacing(2),
      },
      projectCardContainer:{
        // backgroundColor:'green',
        height:170,
        border: '1px solid black',
        textAlign:'center'
    },
    projectSearchControlsContainer:{

    },
    searchedProjectContainer:{
      width:'90%',
      border: '1px solid black',
      height:350,
      marginTop:'3%',
      marginLeft:"3%",
      textAlign:'center'
    },
    updateButton:{
      marginLeft:"40%",
      marginTop:'2%'
    }

}))
export default StaticProjectsSubTab;