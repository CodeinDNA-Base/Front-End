import React from 'react';
import { Grid, makeStyles,Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'; 

function DisplayModeSubTab(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            
            <h1>Select display mdoe</h1>
            <Grid container>
                <Grid item xs={2}></Grid>
            <Grid item xs={4}>
            <div className={classes.radioBtnContainer}>

            <FormControl component="fieldset">
            <FormLabel component="legend">Modes</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="Static" control={<Radio />} label="Static" />
                    <FormControlLabel value="Dynamic" control={<Radio />} label="Dynamic" />
                    <FormControlLabel value="Random" control={<Radio />} label="Random" />
                    <FormControlLabel value="High rating" control={<Radio />} label="High rating" />
                    <FormControlLabel value="Hight number of clicks" control={<Radio />} label="Hight number of clicks" />
                    
            </RadioGroup>
            </FormControl>
            </div>
            </Grid>
                <Grid item xs={4}>
                        <div className={classes.modeUpdateControls}>
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
                </Grid>
                <Grid item xs={2}></Grid>
                
            </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    radioBtnContainer:{

    },
    modeUpdateControls:{

    },
    updateButton:{
        marginTop:'20%',
        marginLeft:'50%',
        
    }
}))
export default DisplayModeSubTab;