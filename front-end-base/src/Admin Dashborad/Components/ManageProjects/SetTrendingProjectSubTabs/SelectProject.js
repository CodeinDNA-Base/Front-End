import { Grid, makeStyles,InputBase,MenuItem,Select,Button} from '@material-ui/core';
import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
function SelectProject(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        
        <div >
            <Grid container className={classes.container}>
            <Grid item xs={4} className={classes.leftSide}>
                    <Grid container>
                        <Grid item xs={12}>
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
                        <Grid item xs={12}>
                        <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              onChange={handleChange}
                              className={classes.SelectContainer}
                        >
                           <MenuItem value={10}>By Project Id</MenuItem>
                           <MenuItem value={20}>By Project Title</MenuItem>
                           <MenuItem value={30}>By Catagory</MenuItem>
                         </Select>
                        </Grid>

                        <Grid item xs={12}>
                        <Button
                                   variant="contained"
                                   color="primary"
                                  
                                   className={classes.button}
                                 >
                                  Select
                        </Button>
                        </Grid>
                    </Grid>
               
                </Grid>

                <Grid xs={8} className={classes.rightSide}>
                </Grid>                
                
            
            </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{
        paddingLeft:'10%',
        height:190,
        width:'190%'
    },
    leftSide:{
        // backgroundColor:"blue",
        width:'100%'
    },
    rightSide:{
        // backgroundColor:"blue",
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
        marginLeft: 0,
        width: '90%',
       
      },

        formControl: {
          margin: theme.spacing(1),
          minWidth: 150,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
        SelectContainer:{
            width:160,
            marginTop:'5%',
            marginLeft:'3%'
        },

        button:{
            marginTop:'5%',
            marginLeft:"15%"
        }
}))
export default SelectProject;