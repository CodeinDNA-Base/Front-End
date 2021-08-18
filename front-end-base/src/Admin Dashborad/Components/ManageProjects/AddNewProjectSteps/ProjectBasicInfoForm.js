import React,{useState} from 'react';
import { Grid,makeStyles,TextField,Button,Box} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
 

function ProjectBasicInfoForm(props) {
 
    const classes = useStyles()
    const [currency, setCurrency] = useState('React Js');
    const [chipData, setChipData] = useState([])
    const [estimatedPrice,setEstimatedPrice]=useState(0);
    const [keyWordText,setKeyWordText]=useState();
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    const handleDelete = (chipToDelete) => () => {
      setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const handelAddBtnEvent=()=>{
      let tempKey = 0;
      let tempData = chipData.map((item)=> { 
        tempKey=item.key;
      return  item
      })
      tempData.push({key:tempKey+1,label:keyWordText})
      setChipData(tempData);
    }

    return (
        <div className={classes.mainContainer}>
               {/* Main Grid */}
               <Grid container className={classes.container}>
                    
                    <Grid item lg={5} className={classes.formContainer}>
                        {/* Left side */}
                        
                        {/* <div>Fill the form</div> */}
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
                             rows={8}  
                             variant="filled"
                           />
                        </form>                       
                    </Grid>
                    <Grid item lg={7} className={classes.imageAndOtherOptionsContainer}>
                        <Grid container className={classes.catagoriesSelector}>
                          <Grid item xs={6}>
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
                          </Grid>
                          <Grid item xs={6}>
                          <TextField id="filled-basic" label="Estimated Price"  variant="filled" onChange={(e)=>{
                                      setEstimatedPrice(e.target.value)
                                    }}/>
                          </Grid>
                        </Grid>

                         <Grid container className={classes.keyWordsInputContainer}>
                                <Grid item lg={8}>
                                    {/* Key work text field */}
                                    <TextField id="filled-basic" label="Key word"  variant="filled" onChange={(e)=>{
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
                          <Box style={{overflow: 'auto',height:140, width: '80%',}}>
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
      width:'100%',
      height:300,
      // backgroundColor:"blue"
    },
    
    container:{
        width:'100%',
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width:330 ,
        },
      },
    formContainer:{
        marginTop:'3%'
        // backgroundColor:"blue"
    }
      ,
    imageAndOtherOptionsContainer:{
       
        // backgroundColor:'gold'
    },
    addBtn:{
        
        marginTop:'5%'
    },
    keyWordsListContainer:{
      height:300,
      width:'90%',
      // backgroundColor:'blue'
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
  catagoriesSelector:{
    marginTop:'6%'
  },
  keyWordsInputContainer:{
    // backgroundColor:"blue"
  }
}));


export default ProjectBasicInfoForm;