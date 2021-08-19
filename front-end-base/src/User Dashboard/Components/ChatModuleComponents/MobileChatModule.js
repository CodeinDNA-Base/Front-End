import { Grid } from '@material-ui/core';
import React from 'react';
import useWindowDimensions from './useWindowDimensions'
import MessageCompositionOptionsForMobile from './ChatArea/MessageCompositionOptionsForMobile';
function MobileChatModule(props) {
    const {height,width} = useWindowDimensions();
    return (
        <div style={{position:'relative'}}>
            <Grid container>
                <Grid item xs={12}>
                    
                </Grid>
                <Grid item xs={12}  style={{width:'100%',position:'fixed',bottom:0}}>
                    <MessageCompositionOptionsForMobile/>
                </Grid>
            </Grid>
        </div>
    );
}

export default MobileChatModule;