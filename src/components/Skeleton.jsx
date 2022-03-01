// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from "react-redux";
import { Skeleton,Grid } from '@mui/material';


function MediaLoading() {
  const { isLoading } = useSelector(state => state.Loadings);



  return (
    <>
    {isLoading ? (
      <>
      <Grid container >
        <Grid item xs={12} sm={6} md={4} >
          <Skeleton width="95%" height={218} sx={{marginTop: '-50px',bgcolor: '#e0e0e0' }}  />
          <Skeleton width="95%" height={118} sx={{marginTop: '-30px',bgcolor: '#e0e0e0' }} />
          <Skeleton width="95%" height={70} sx={{marginTop: '-20px',bgcolor: '#e0e0e0' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <Skeleton width="95%" height={218} sx={{marginTop: '-50px',bgcolor: '#e0e0e0' }}  />
          <Skeleton width="95%" height={118} sx={{marginTop: '-30px',bgcolor: '#e0e0e0' }} />
          <Skeleton width="95%" height={70} sx={{marginTop: '-20px',bgcolor: '#e0e0e0' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <Skeleton width="95%" height={218} sx={{marginTop: '-50px',bgcolor: '#e0e0e0' }}  />
          <Skeleton width="95%" height={118} sx={{marginTop: '-30px',bgcolor: '#e0e0e0' }} />
          <Skeleton width="95%" height={70} sx={{marginTop: '-20px',bgcolor: '#e0e0e0' }} />
        </Grid>
      </Grid>

      </>

    ) : (
      <>
      </>

    )}
        {/* <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}
    </>
  )
}
export default MediaLoading;