import { Grid, makeStyles,TextField,Button,Box} from '@material-ui/core';
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
function Premium(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={4}>
                        {/* Left side */}
                        <Grid container>
                            <Grid item xs={12}>
                                {/* Description */}
                                <TextField
                                             id="filled-multiline-static"
                                             label="Service description"
                                             multiline
                                             rows={3}  
                                             variant="filled"
                                             className={classes.packageDesc}
                                />
                            </Grid>
                            
                            <Grid item xs={12}>
                                {/* Price */}
                                <TextField id="filled-basic" className={classes.priceTextField} label="Price" variant="filled" />                
                            </Grid>

                            <Grid item xs={12}>
                                {/* Delivery days */}
                                <TextField id="filled-basic" className={classes.priceTextField} label="Delivery days" variant="filled" />                
                            </Grid>

                            <Grid item xs={12}>
                                {/* Option selection header */}
                                <Grid container className={classes.optionsHeadContianer}>
                                                <Grid item xs={8}>
                                                <TextField id="filled-basic" className={classes.selectedOptionValue} label="Icon label" variant="filled" />
                                                </Grid>
                                                <Grid item xs={4}>
                                                <Button className={classes.btnAdd} variant="contained" color="primary">
                                                  Add
                                                </Button>
                                                </Grid>
                                </Grid>
                            </Grid>

                           

                            
                            <Grid item xs={12}>
                                {/* Option list */}
                                <Box style={{overflow: 'auto',height:200, width:"90%",marginTop:'10%'}}>

                                            <FormControl component="fieldset">
                                              <FormLabel component="legend">Select the feature to Add</FormLabel>
                                              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                                <FormControlLabel value="radioBtn1" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn2" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn3" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn4" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn5" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn6" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn7" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn8" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn9" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn10" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn11" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn12" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn13" control={<Radio color="primary" />} label="Option 1" />
                                                <FormControlLabel value="radioBtn14" control={<Radio color="primary" />} label="Option 1" />
                                              </RadioGroup>
                                            </FormControl>
                                     </Box>
                            </Grid>
                            
                        </Grid>
                </Grid>
                <Grid item xs={8}>
                        {/* Right side */}
                        {/* Card */}
                        <div className={classes.packageCard}>
                            <h3>Package</h3>
                        </div>
                </Grid>
            </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{
        paddingLeft:"4%"
    },
    packageDesc:{
        width:'100%',
        marginTop:"2%"
    },
    optionsHeadContianer:{
        marginTop:"4%"
    },
    selectedOptionValue:{

    },
    btnAdd:{
        marginTop:"8%"
    },
    packageCard:{
        backgroundColor:"blue",
        width:'50%',
        marginLeft:"25%",
        marginTop:"10%",
        height:400
    },
    priceTextField:{
        marginTop:'5%',
        width:'100%'
    }
}))
export default Premium;