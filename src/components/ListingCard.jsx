import {Typography,IconButton,CardContent,
  Card, Grid, CardMedia} from '@mui/material';
import { useNavigate} from 'react-router-dom';
import {useDispatch, useSelector } from "react-redux";
import { openModal} from '../features/modalSlice'
import LogIn from '../pages/LogIn';


const ListingCard = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector(state => state.login);

  const cardDetailClick = () =>{
    if(!isAuthenticated){
      dispatch(openModal(<LogIn />))
    }
    else{
      navigate(`/listing_details/${props.slug}`)
    }

  }
  const Likelisting = (event) =>{
    event.stopPropagation();
    if(!isAuthenticated){
      dispatch(openModal(<LogIn />))
    }
    else{
    }
  }

  return (
    <>
      <Grid item xs={10} sm={5} md={3.8} sx={{margin: '7px 5px', cursor: 'pointer',justifyContent: 'center'}} 
        onClick={cardDetailClick} >
        <Card sx={{ maxWidth: '100%' }} >
          <div style={{position: 'relative' }}>
            <CardMedia
                component="img" height="180" image={props.picture} alt="green iguana"
              />
            <IconButton  aria-label="favorite"  onClick={Likelisting}
            sx={{ color: 'white', position: 'absolute',top: '0', right: '0'}}>
                <i className="far fa-heart" style={{fontSize: '33px',textShadow: '3px 6px #272634'}} />
            </IconButton>
            <Typography variant="body2" component="span" className="listings_card_imageText">
              {props.past_time }
            </Typography>
          </div>
          <CardContent sx={{paddingTop: '7px',height: '105px'}}>
            <Typography variant="body2" component="div" color="text.secondary" sx={{lineHeight: '1.2',paddingBottom: '0px'}}>
              <div>
                <span style={{fontSize: '16px', color: 'rgb(0, 106, 255)', }}>Listing {props.sale_type}</span>
              </div>
              <div style={{fontSize: '20px', fontWeight: '700', marginTop: '5px', color: 'black'}}>Rs. {props.price}</div>
              <div className="listings_detail">
                <ul className="card_text_bold">
                  <li> <span> {props.bedrooms}</span> bed</li>
                  <li> <span> {props.bathrooms}</span> bath</li>
                  <li> <span> {props.sqft} </span> sqft</li>
                </ul>
              </div>
              <div style={{color: 'rgb(51, 51, 51)', fontSize: '14px', marginTop: '-7px'}}>
                {props.address}, {props.city}, {props.state}, {props.zipcode}
              </div>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default ListingCard;
