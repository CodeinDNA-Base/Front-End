import React,{useState} from 'react';
import {makeStyles } from '@material-ui/core/styles';
import BlockedAccountsListContainer from './BlockedAccountsSubComponents/BlockedAccountsListContainer';
import ViewAccount from './BlockedAccountsSubComponents/ViewAccount';
function ShowBlockedUserAccounts(props) {
    const classes =useStyles();
    const [screenSwitcher,setScreenSwitcher]=useState(true);
    const hanelScreenSwitch = (event,index) =>{
      setScreenSwitcher(!screenSwitcher);
    }
    return (
        <div>
            <div className={classes.topControlsBar}>
                {(screenSwitcher) ? <BlockedAccountsListContainer  hanelScreenSwitch={hanelScreenSwitch}/> : <ViewAccount hanelScreenSwitch={hanelScreenSwitch}/>}
            </div>
        </div>
    );
}

const useStyles=makeStyles((theme)=>({
    topControlsBar:{
        // backgroundColor:"blue",
        height:70,
        border:'1px solid #f7f2f7',
        marginTop:"1%"
      },
   
    
}))
export default ShowBlockedUserAccounts;