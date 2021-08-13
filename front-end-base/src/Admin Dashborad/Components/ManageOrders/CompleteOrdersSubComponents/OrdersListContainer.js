import React,{useState} from 'react';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MomentUtils from '@date-io/moment';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@material-ui/core';
// import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker,} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OrdersList from './OrdersList';
import OrderView from './OrderView';

function OrdersListContainer(props) {
    const classes =useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };             
    const [age, setAge] = React.useState('');

    const handleChangeSelect = (event) => {
      setAge(event.target.value);
    };    
    
    return (
        <div>
            <div className={classes.topControlsBar}>
                                  <Grid container spacing={3}>
                                  {/*  */}
                                    <Grid item xs={3}>

                                      {/* Search bar */}
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
                                    <Grid item xs={2}>
                                      {/* Todays orders */}
                                      
                                    </Grid>
                                    <Grid item xs={2}>
                                      {/* Todays orders */}
                                     
                                    </Grid>
                                  
                                    <Grid item xs={2}>
                                      {/* Todays orders */}
                                     
                                    </Grid>
                                    <Grid item xs={3}>
                                      {/* Todays orders */}
                                      <div className={classes.optControlsBtnContainer}>
                                      <FormControl variant="filled" className={classes.formControl}>
                                          <InputLabel id="demo-simple-select-filled-label">Sort by service  </InputLabel>
                                          <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={age}
                                            onChange={handleChangeSelect}
                                            className={classes.sortByService}
                                            
                                          >
                                            <MenuItem value="">
                                              <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                          </Select>
                                        </FormControl>
                                      </div>
                                    </Grid>
                                  </Grid>
                              </div>
                        <div className={classes.orderListContainer}>
                          <OrdersList hanelScreenSwitch={props.hanelScreenSwitch}/>
                        </div>
        </div>
    );
}

const useStyles=makeStyles((theme)=>({
    topControlsBar:{
        // backgroundColor:"blue",
        height:70,
        // border:'1px solid #f7f2f7',
        marginTop:"1%"
      },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#efbaf5",
      '&:hover': {
        backgroundColor: "#efbaf5",
      },
      marginLeft: "10%",
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
      marginTop:"4%"
    },
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
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    optControlsBtnContainer:{
    //   borderLeft:"1px solid #efbaf5",
    //   borderRight:"1px solid #efbaf5",
      height:65,
      paddingTop:"1%",
      textAlign:"center",
      marginTop:-10,
      marginLeft:"10%",
      cursor:'pointer',
      '&:hover': {
        backgroundColor: "#efbaf5",
      },

    },
    dataPicker:{
      
    },
    formControl: {
      marginBottom:8,    
      minWidth: 220,
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    sortByService:{
     
    },
    orderListContainer:{
      marginTop:'4%'
    }
    
}))
export default OrdersListContainer;