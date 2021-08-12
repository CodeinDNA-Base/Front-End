
import React, { useState } from 'react';
import { Grid,makeStyles,TextField,Button,Box} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
function PackageContainer(props) {
    const classes =  useStyles();
    const [keyWordText,setKeyWordText]=useState();
   
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
    const [chipData, setChipData] = useState([
        {
            label:"key word",
            key:0
        },
        {
            label:"key word",
            key:1
        },
        {
            label:"key word",
            key:2
        },
        {
            label:"key word",
            key:3  
        },
        {
            label:"key word",
            key:4   
        },
        {
            label:"key word",
            key:5   
        },
        {
            label:"key word",
            key:6   
        },
        {
            label:"key word",
            key:7 
        },
        {
            label:"key word",
            key:8   
        },
        {
            label:"key word",
            key:9   
        },
        {
            label:"key word",
            key:10  
        },
        {
            label:"key word",
            key:11  
        },
        {
            label:"key word",
            key:12  
        },
        {
            label:"key word",
            key:13   
        },
        
        
        ])

     
    return (
        <div>
            <div>
                            <h4>Offered things in package</h4>
                            <Grid container className={classes.keyWordsInputContainer}>
                            <Grid item xs={12} className={classes.textFields}>
                                {/*  */}
                                <TextField id="outlined-basic" label="Price" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} className={classes.textFields}>
                                {/*  */}
                                <TextField id="outlined-basic" label="Delivery days" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} className={classes.textFields}>
                                {/*  */}
                                <TextField id="outlined-basic" label="Description" variant="outlined" />
                            </Grid>

                            <Grid item xs={8} style={{marginTop:"2%"}}>
                                    {/*  */}
                                    <TextField id="filled-basic" label="New offer text"  variant="filled" onChange={(e)=>{
                                      setKeyWordText(e.target.value)
                                    }}/>
                                </Grid>
                                <Grid item xs={4} >
                                    {/* Add key word btn */}
                                    <Button className={classes.addBtn} variant="contained" color="primary" onClick={handelAddBtnEvent}>
                                      Add
                                    </Button>
                                </Grid>
                          </Grid>     
                          
                         </div>       
                        <Box style={{overflow: 'auto',height:140, width: '80%',marginLeft:'3%'}}>
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
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    keyWordsInputContainer:{
        paddingBottom:'5%'
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
      keyWordsInputContainer:{
        paddingBottom:'5%'
    }, 
    textFields:{
        marginTop:'3%'
    },
}))
export default PackageContainer;