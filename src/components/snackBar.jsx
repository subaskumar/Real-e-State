import * as React from 'react';
import {Snackbar,Alert,Stack} from '@mui/material';
import {useDispatch, useSelector } from "react-redux";
import { setSnackBar } from '../features/Alert/snackBarSlice';

export default function CustomizedSnackbars() {
  const dispatch = useDispatch()
  const {openSnackBar,message ,type } = useSelector(state => state.snackBar)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setSnackBar({open: false, message: "", type: ''}))
  };
  const vertical = 'top'
  const horizontal='right'

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose} 
      anchorOrigin={{ vertical, horizontal }}
      key={vertical + horizontal} >
        <Alert onClose={handleClose}  severity={type}
        sx={{ width: '100%' , backgroundColor: 'black', color: 'white'}} >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}