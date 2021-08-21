import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';



export const SnackbarNotification=(props)=>{


  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message={props.message}
        key={transition ? transition.name : ''}
      />
    </div>
  );
}
