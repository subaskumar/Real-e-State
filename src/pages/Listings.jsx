import { useState,useEffect,useRef } from "react";
import {Typography, Button,IconButton,
          Grid,Box,Container , InputBase,Pagination,Stack} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';
import ListingCard from '../components/ListingCard'



const Listings = () =>{
  const { Ppage } = useParams()
  const page = parseInt(Ppage)
  
  const navigate = useNavigate();
  const [listings, setListings] = useState([])
  const [count,setCount] = useState(0)
  const total_page = Math.ceil(count/3)

  const nav_btns = ['For Sale', 'Min Price','Max Price', 'Bedrooms','Home Type','Square Foot']

  let url = useRef('')
  
  useEffect(() => {
    document.body.classList.add("scrollBody")
    if(page > 1){
      url.current = `http://127.0.0.1:8000/api/listings/?page=${page}`
    }
    else{
      url.current = 'http://127.0.0.1:8000/api/listings'
    }
    const fetchData = async () => {
        try {
            const res = await axios.get(url.current);
            setListings(res.data.results);
            setCount(res.data.count)
        }
        catch (err) {
        }
    }
    fetchData();
    return () => {
      document.body.classList.remove("scrollBody")
    }
  },[page]);

  const handlePageNumber = (event , value) => {
    navigate(`/listings/${value}`)
  };


  return (
    <>
    <Container maxWidth="xl" sx={{flexGrow: 1,display: { xs: 'none', md: 'block' }, height: '55px',justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', border: '1px solid rgb(204, 204, 204)'}}>
      <Box sx={{padding: '10px 2px', textTransform: 'capitalize'}}>
        <div className="Listing_searchPg" >
          <InputBase
                  sx={{ width: '200px', fontSize: '12px', fontWeight: '600', color: 'black', }}
                  placeholder="ZipCode or City" name="keywords" id="input"
                  
          />
          <IconButton sx={{ p: '2px' }} aria-label="search" type="submit">
            <SearchIcon sx={{ fontSize: '18px', color: 'green'}}/>
          </IconButton>
        </div>
      {
        nav_btns.map((btn) => (
          <Button variant="outlined" size="small" sx={{mx: 1, padding: '2px 20px', textTransform: 'capitalize', borderRadius : '2px',border: '1px solid rgb(209, 209, 213)'}} >
            {btn}</Button>
        )
        )}
        <Button variant="outlined" size="small" sx={{backgroundColor: 'rgb(0, 106, 255)',color: '#fff' ,mx: 1.5, padding: '5px 10px', textTransform: 'capitalize', borderRadius : '5px',border: '1px solid rgb(209, 209, 213)'}} >
            Save search
        </Button>
      </Box>
    </Container>
    <Box>
      <Grid container sx={{margin: 'auto'}}>
          <Grid item md={3.5} sx={{position: 'sticky',display: { xs: 'none', md: 'flex' }}}  >
            <iframe title="google map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60059.627865941715!2d85.821483!3d19.80918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c4180256e495%3A0x496a9d8b30c1fad7!2sPuri%2C%20Odisha%2C%20India!5e0!3m2!1sen!2sus!4v1582097046697!5m2!1sen!2sus" 
                width="100%" height="100%" frameBorder="0" allowFullscreen=""></iframe>
          </Grid>
          <Grid container sm={12} md={8.5} sx={{height:'490px', zIndex: '1', overflow: 'hidden', overflowY: 'scroll',boxShadow: '-2px 2px 5px 0 rgb(0 0 0 / 40%)'}}>
            
              <Box sx={{height: '65px',width: '100%'}}>
                <Typography gutterBottom variant="h5" component="div"
                  sx={{display: 'inline',float: 'left',margin: '10px 15px 3px',borderBottom: '3px double rgb(0, 106, 255)', color: 'rgb(42, 42, 51)', fontSize: {xs: '14px', md: '22px'},fontWeight: '700', fontFamily: "'Ivar Headline', 'Ivar Headline Subset', 'Times New Roman', serif"}}>
                  Real Estate & Homes For Sale
                </Typography>
                <Typography gutterBottom variant="span" component="div" color="text.secondary"
                  sx={{display: 'inline',borderRadius: '24px',padding: {xs: '2px 10px', md: '6px 20px'},backgroundColor: 'rgb(235, 12, 123)',color: '#fff',float: 'right',margin: {xs: '10px 2px 2px', md:'15px 15px 3px'},fontFamily: "'Playfair Display', serif", fontSize: {xs: '13px', md: '17px'},fontWeight: '500'}}>
                    25 Listings found
                </Typography>
              </Box>
              <Grid container sm={12} md={12} sx={{justifyContent: 'center'}} >
                {
                  listings.map((listing)=> (
                    <ListingCard
                     picture={listing.photo_main} 
                     sale_type={listing.sale_type}
                     address={listing.address} zipcode={listing.zipcode}
                     city={listing.city} state={listing.state}
                     price={listing.price}
                     slug={listing.slug}
                     bedrooms={listing.bedrooms} 
                     bathrooms={listing.bathrooms} 
                     sqft={listing.sqft}
                     past_time = {listing.past_time}

                    />
                  ))
                }
              
              </Grid>
              <Grid container sm={12} md={12} sx={{justifyContent: 'center', padding: '40px 0px'}} >
                <Stack spacing={2}>
                  <Pagination count={total_page} onChange={handlePageNumber} color="primary" page={page} />
                  {/* <Pagination count={10} color="secondary" /> */}
                </Stack>
              </Grid>
          </Grid>
      </Grid>
      </Box>
    </>
  );
}
export default Listings;
