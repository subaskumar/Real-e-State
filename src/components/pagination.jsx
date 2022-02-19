// import {useState, useEffect,useRef} from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// const BasicPagination = (props) => {
  
//   const [page, setPage] = useState(1);
//   const notInitialRender = useRef(false);
//   const handleChange = (event , value) => {
//     setPage(value);
//   };
//   useEffect(() => {
//     if(notInitialRender.current){
//       console.log(page)
//       props.visitPage(page)
//     }
//     else{ 
//       notInitialRender.current = true
//     }
//   },[page])

//   return (
//     <Stack spacing={2}>
//       <Pagination count={5} onChange={handleChange} color="primary" page={page} />
//       {/* <Pagination count={10} color="secondary" /> */}
//     </Stack>
//   );
// }
// export default BasicPagination;
