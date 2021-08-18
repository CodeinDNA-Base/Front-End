import { makeStyles,Button} from '@material-ui/core';
import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
function UpdatePackage(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Button
               variant="contained"
               color="default"
               className={classes.button}
               startIcon={<CloudUploadIcon />}
            >
                Save
            </Button>
            <Button
               variant="contained"
               color="default"
               className={classes.button}
               startIcon={<CloudUploadIcon />}
            >
                Update
            </Button>
            <Button
               variant="contained"
               color="default"
               className={classes.button}
               startIcon={<CloudUploadIcon />}
            >
                Discard
            </Button>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{
        height:500
    },
    button:{
        width:200,
        display:'block',
        marginTop:"3%",
        marginLeft:"40%"
    }
}))
export default UpdatePackage;