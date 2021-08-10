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
            
            </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{
        paddingLeft:'10%',
        height:190,
        width:'100%'
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
        width: '50%',
       
      },

}))
export default SelectProject;