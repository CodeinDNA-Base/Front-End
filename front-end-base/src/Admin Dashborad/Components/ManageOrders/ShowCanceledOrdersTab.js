import React,{useState} from 'react';
import {makeStyles } from '@material-ui/core/styles';
import OrdersListContainer from './OrdersListForCanceledOrders/OrdersListContainer';
import OrderView from './OrdersListForCanceledOrders/OrderView';
function ShowCanceledOrdersTab(props) {
    const classes =useStyles();
    const [screenSwitcher,setScreenSwitcher]=useState(true);
    const hanelScreenSwitch = (event,index) =>{
      setScreenSwitcher(!screenSwitcher);
    }
    return (
        <div>
            <div className={classes.topControlsBar}>
                {(screenSwitcher) ? <OrdersListContainer  hanelScreenSwitch={hanelScreenSwitch}/> : <OrderView hanelScreenSwitch={hanelScreenSwitch}/>}
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
export default ShowCanceledOrdersTab;