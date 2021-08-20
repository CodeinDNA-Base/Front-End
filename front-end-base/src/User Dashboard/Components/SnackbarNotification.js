import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';



export const SnackbarNotification=(props)=>{

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }
  
  const handleClick = () => () => {
    setTransition(() => TransitionUp);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
