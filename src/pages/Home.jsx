import * as React from 'react';
import SearchForm from '../components/SearchForm'
import ProductHeroLayout from '../Layout/ProductHeroLayout';
import {CardContent,CardMedia,Typography,Button, 
        Grid,Box,Paper} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Buy_img from "../static/Home/Buy_a_home.webp"
import Sell_img from "../static/Home/Sell_a_home.webp"
import Rent_img from "../static/Home/Rent_a_home.webp"
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import {property_type } from "../features/saleSlice"

const backgroundImage =
  'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function ImgMediaCard() {
  console.log("Home...")
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const image_obj = [
    {'img' : Buy_img, 'title': 'Buy a home','btn': 'Search homes', 'body': 'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.' },
    {'img': Sell_img,'title': 'Sell a home','btn': 'See options', 'body': 'No matter what path you take to sell your home, we can help you navigate a successful sale.'},
    {'img' : Rent_img,'title': 'Rent a home','btn': 'find rentals','body': 'We’re creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.'}
  ]



  const focusInput = (titles) =>{
    const input = document.getElementById("input");
    if(titles === 'Buy a home'){
      dispatch(property_type("For Sale"))
      input.focus()

    }
    else if(titles === 'Rent a home'){
      dispatch(property_type("For Rent"))
      input.focus()
    }
    else{
      navigate('/sell_home')
    }

  }
    

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 0, sm: 12, md: 12 }}>
      { image_obj.map((obj) => (
        <Grid item xs={12} sm={6} md={4} key={obj.title}>
          <Item sx={{ boxShadow: 3, padding: '30px 10px 15px' }} className='card_home' onClick={() => focusInput(obj.title)}>
            <CardMedia component="img" alt="green iguana" height="180" image={obj.img}
              sx={{padding: '10px 5px 5px' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" 
                sx={{color: 'rgb(42, 42, 51)', fontSize: 'clamp(22px, 3vw, 25px)' ,fontWeight: '700', fontFamily: "'Ivar Headline', 'Ivar Headline Subset', 'Times New Roman', serif"}}>
                {obj.title}
              </Typography>
              <Typography variant="body2" color="text.secondary"
                sx={{color: 'rgb(42, 42, 51)',fontFamily: "'Open Sans', Tahoma, Geneva, sans-serif",
                    fontWeight: '300', fontSize: 'clamp(13px, 3vw, 15px)',lineHeight: 'clamp(20px, 3vw, 22px)',minHeight: {md:'100px',xs: '80px'}}}>
                {obj.body}
              </Typography>
              <div className='btn_card'>
                <Button variant="outlined" size="large" className='card_btn_home'>{obj.btn}</Button>
              </div>
            </CardContent>
          </Item>
        </Grid>
      ))}
    </Grid>
    </>
  );
}

const Home = () =>{


  return (
    <>
      <ProductHeroLayout sxBackground={{ backgroundImage: `url(${backgroundImage})`,
          backgroundColor: '#7fc7d9', backgroundPosition: 'center',}}
        >
        <SearchForm />
      </ProductHeroLayout>
      <div style={{marginBottom: '3rem'}}>
        <div className='home_Service_heading'>
          <h3>
            <span>Whether you're buying, selling or renting, we can help you move forward </span>
          </h3>
        </div>
        <div>
          <Box sx={{ flexGrow: 1, padding: {md:'0px 75px', xs: '0px 20px'} }}>
            <ImgMediaCard/>
          </Box>
        </div>
      </div>
    </>
  );
}
export default Home;

// {/* <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
