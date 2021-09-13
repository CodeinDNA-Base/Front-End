import React,{useState} from 'react';
import {makeStyles } from '@material-ui/core/styles';
import OrdersListContainer from './CanceledOrdersSubComponents/OrdersListContainer';
import OrderView from './CanceledOrdersSubComponents/OrderView';
function ShowCanceledOrdersTab(props) {
    const classes =useStyles();
    const [screenSwitcher,setScreenSwitcher]=useState(true);
    const hanelScreenSwitch = (event,index) =>{
      setScreenSwitcher(!screenSwitcher);
    }
    return (
        <div>
          <h1>Canceled orders</h1>
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