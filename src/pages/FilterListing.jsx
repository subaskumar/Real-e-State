import { useState,useEffect } from "react";
import {Typography,Grid,Box,Container ,Pagination,Stack} from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';
import ListingCard from '../components/ListingCard'
import {Filter} from '../components/SearchForm'
import { useDispatch,useSelector } from "react-redux";
import { setMediaLoading } from '../features/Alert/loading'
import MediaLoading from "../components/Skeleton"




const Listings = () =>{

    const { sale_type,min_price,max_price,bedrooms,home_type,sqft,keywords,Ppage } = useParams()
    const page = parseInt(Ppage)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [listings, setListings] = useState([])
    const [count,setCount] = useState(0)
    const total_page = Math.ceil(count/6)
    const { isLoading } = useSelector(state => state.Loadings);


    
  
  useEffect(() => {
    dispatch(setMediaLoading({isLoading: true}))

    const initialState = {sale_type:sale_type,min_price:min_price,max_price:max_price, 
      bedrooms:bedrooms,home_type:home_type, sqft:sqft,keywords:keywords,page:page}
    // document.body.classList.add("scrollBody")
    const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    const fetchData = async () => {
        try {
            const res = await axios.get(`https://subaskumarmk.pythonanywhere.com/api/listings/search/`, {params: initialState}, config);
            setListings(res.data.results);
            setCount(res.data.count)
            dispatch(setMediaLoading({isLoading: false}))

        }
        catch (err) {
        }
    }
    fetchData();
    // return () => {
    //   document.body.classList.remove("scrollBody")
    // }
  },[sale_type,min_price,max_price,bedrooms,home_type,sqft,keywords,page,dispatch]);

  const handlePageNumber = (event , value) => {
    navigate(`/listings/search/${sale_type}&${min_price}&${max_price}&${bedrooms}&${home_type}&${sqft}&${keywords}&${value}`)
  };

  return (
    <>
    <Container maxWidth="xl" sx={{display: { xs: 'none', sm: 'block' }, height: '60px',
           backgroundColor: '#fff', border: '1px solid rgb(204, 204, 204)'}}>
      <Box sx={{padding: '10px 2px', textTransform: 'capitalize',display: 'flex'}} className="filter_input">
        <Filter 
            sale_type = {sale_type}
            min_price = {min_price}
            max_price = {max_price}
            bedrooms = {bedrooms}
            home_type = {home_type}
            sqft = {sqft}
            keywords = {keywords}
        
          />
      </Box>
    </Container>
    <Container maxWidth="xl">
      <Box sx={{width: '100%'}}>
        <Typography gutterBottom variant="h5" component="div"
            sx={{display: 'inline',float: 'left',margin: '10px 15px 3px',borderBottom: '3px double rgb(0, 106, 255)', color: 'rgb(42, 42, 51)', fontSize: {xs: '14px', md: '22px'},fontWeight: '700', fontFamily: "'Ivar Headline', 'Ivar Headline Subset', 'Times New Roman', serif"}}>
          Real Estate & Homes For Sale
        </Typography>
        <Typography gutterBottom variant="span" component="div" color="text.secondary"
            sx={{display: 'inline',borderRadius: '24px',padding: {xs: '2px 10px', md: '6px 20px'},backgroundColor: 'rgb(235, 12, 123)',color: '#fff',float: 'right',margin: {xs: '10px 2px 2px', md:'15px 15px 3px'},fontFamily: "'Playfair Display', serif", fontSize: {xs: '13px', md: '17px'},fontWeight: '500'}}>
          {count} Listings found
        </Typography>
      </Box>
      <Grid container sx={{justifyContent: 'center'}} >
      {isLoading ? (
        <MediaLoading />
        ) : ( <>
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
                      key={listing.slug}
                    />
                ))}
              </>
            )
      }
      </Grid>
      <Grid container sx={{justifyContent: 'center', padding: '40px 0px'}} >
        <Stack spacing={2}>
          <Pagination count={total_page} onChange={handlePageNumber} color="primary" page={page} />
                  {/* <Pagination count={10} color="secondary" /> */}
        </Stack>
      </Grid>
    </Container>
    </>
  );
}
export default Listings;
