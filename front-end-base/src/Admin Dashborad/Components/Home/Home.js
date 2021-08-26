import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Headings } from '../Support/Headings';

function Home(props) {
    const classes = useStyles();
    return (
        <div>
           <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Headings text={"Analytics"} fontSize={'3rem'}/>
                    <Grid container>
                        <Grid item xs={12}>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
           </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({

}))
export default Home;