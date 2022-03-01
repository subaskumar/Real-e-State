import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from "react-redux";


function BackdropLoading() {
  const { isBackDrop } = useSelector(state => state.Loadings);

  return (
    <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isBackDrop}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    </>
  )
}
export default BackdropLoading;