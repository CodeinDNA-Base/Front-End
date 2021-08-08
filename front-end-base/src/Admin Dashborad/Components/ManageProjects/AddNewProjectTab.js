import React,{useState} from 'react';
import { Grid,makeStyles,TextField,Button,Box} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

function AddNewProjectTab(props) {
    const classes = useStyles()
    const [currency, setCurrency] = useState('React Js');
    const [chipData, setChipData] = useState([])
    const [keyWordText,setKeyWordText]=useState();
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    const handleDelete = (chipToDelete) => () => {
      setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const handelAddBtnEvent=()=>{
      let tempData = chipData.map((item)=>  item)
      tempData.push({key:0,label:keyWordText})
      setChipData(tempData);
    }

    return (
        <div className={classes.mainContainer}>
               {/* Main Grid */}
               <Grid container className={classes.container}>
                    
                    <Grid item lg={5} className={classes.formContainer}>
                        {/* Left side */}
                        
                        <div>Fill the form</div>
                        <form className={classes.root} onSubmitCapture={(e)=>{ 
                            e.preventDefault();
                            alert("Implete the submition")
                            }} autoComplete="on">

                            {/* Form container */}
                           <TextField id="filled-basic" label="Project Title" variant="filled" />
                           


                           <TextField
                             id="filled-multiline-static"
                             label="Project description"
                             multiline
                             rows={3}  
                             variant="filled"
                           />


                           <TextField
                            id="filled-select-currency"
                            select
                            label="Select"
                            value={currency}
                            onChange={handleChange}
                            helperText="Please select catagor to which it belongs"
                            variant="filled"
                          >
                            {catagories.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                          
                          <Grid container>
                                <Grid item lg={8}>
                                    {/* Key work text field */}
                                    <TextField id="filled-basic" label="Key word" variant="filled" onChange={(e)=>{
                                      setKeyWordText(e.target.value)
                                    }}/>
                                </Grid>
                                <Grid item lg={4} >
                                    {/* Add key word btn */}
                                    <Button className={classes.addBtn} variant="contained" color="primary" onClick={handelAddBtnEvent}>
                                      Add
                                    </Button>
                                </Grid>
                          </Grid>

                          <Box style={{overflow: 'auto',height:60, width: '80%',}}>
                          <Grid container>
                              <Paper component="ul" className={classes.rootChips}>
                                  {chipData.map((data) => {
                                   let icon;
                           
                                   return(
                                     <span key={data.key}>
                                       <Chip
                                         icon={icon}
                                         label={data.label}
                                         onDelete={handleDelete(data)}
                                         className={classes.chip}
                                       />
                                     </span>
                                   )
                                 })}
                               </Paper>
                          </Grid>
                          </Box>
                                    
                          
                        </form>
                       
                    </Grid>
                    <Grid item lg={7} className={classes.imageAndOtherOptionsContainer}>
                        {/* Other options contianer container */}
                    </Grid>
               </Grid>

        </div>
    );
}

const catagories = [
    {
      value: 'Java',
      label: 'Java',
    },
    {
      value: 'React Js',
      label: 'React Js',
    },
    {
      value: 'React Native',
      label: 'React Native',
    },
  ];

const useStyles = makeStyles((theme)=>({
    mainContainer:{
        width:850
    },
    container:{
        width:'120%',
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width:330 ,
        },
      },
    formContainer:{

        // backgroundColor:"blue"
    }
      ,
    imageAndOtherOptionsContainer:{
       
        backgroundColor:'gold'
    },
    addBtn:{
        marginLeft:'10%',
        marginTop:'9%'
    },
    keyWordsListContainer:{
      height:35,
      width:'90%',
      backgroundColor:'blue'
    },
  rootChips: {
    display: 'flex',
    justifyContent: 'start',
    // flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0, 
    
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default AddNewProjectTab;