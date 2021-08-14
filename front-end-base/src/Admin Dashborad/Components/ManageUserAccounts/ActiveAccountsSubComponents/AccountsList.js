import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import AccountRowCardHolder from './AccountRowCardHolder';
function AccountsList(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                        <AccountRowCardHolder hanelScreenSwitch={props.hanelScreenSwitch}/>
                       
                        <AccountRowCardHolder hanelScreenSwitch={props.hanelScreenSwitch}/>
                       
                        <AccountRowCardHolder hanelScreenSwitch={props.hanelScreenSwitch}/>
                       
                        
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{

    },

}))
export default AccountsList;