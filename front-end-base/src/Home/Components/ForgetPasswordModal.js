import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { StandardTextField } from '../../CustomComponents/UI/Form/StandardTextField';
import { RoundButton } from '../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../Theme/colors';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '2% 5% 2% 5%',
  },
}));

export default function ForgetPasswordModal({open, handleClose}) {
  const classes = useStyles();


  return (
 
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Reset Password</h2>
            <p>We will set you a link to reset your password</p>
            <StandardTextField label='Enter your Email' variant='outlined' margin={'2% 0% 2% 0%'} type='email' />
            <RoundButton  color={colors.white} bgColor={colors.secondary} title={'Submit'} width='100%'  margin={'8% 0% 5% 0%' }/>
          </div>
        </Fade>
      </Modal>
   
  );
}