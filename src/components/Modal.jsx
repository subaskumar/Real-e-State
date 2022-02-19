import * as React from 'react';
import { Box, Modal } from '@mui/material';
import { useSelector,useDispatch} from "react-redux";
import { closeModal } from '../features/modalSlice'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: '0px 30px 30px'
};

const UserModal = (props) =>{
    const { open , component } = useSelector(state=> state.modal)
    const dispatch = useDispatch()
    
    const handleClose = () => {
        dispatch(closeModal())

    }


  return (
      <>
        
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {component }
            </Box>
        </Modal>
      </>
  );
}

export default UserModal;