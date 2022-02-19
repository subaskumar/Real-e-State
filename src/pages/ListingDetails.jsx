import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
import { styled } from '@mui/material/styles';
import {Box,Typography,Container,
    Grid,CardMedia,Button,ImageList,ImageListItem,TextField} from '@mui/material/';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FullWidthTabs from '../components/tabs';
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from "react-redux";
import { setSnackBar } from '../features/Alert/snackBarSlice'




const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white, position: 'relative', display: 'flex', alignItems: 'center',
  [theme.breakpoints.up('sm')]: { height: '40vh', minHeight: 280,maxHeight: 1300,}, }));

const Background = styled(Box)({
  position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', zIndex: -2,});

const ListingDetails = () =>{
    const { slug } = useParams();
    const dispatch = useDispatch()
    const [listing, setListing] = useState({});
    let photos =[]
    const [TourDate, setTourDate] = useState(new Date());
    const [MailAgent, setMailAgent] = useState({ name: '', phone: '', email: '', message: ''})



    useEffect(() => {
        const slugs = slug
        const config = {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                };

        axios.get(`http://127.0.0.1:8000/api/listings/${slugs}`,config)
        .then(res => {
            setListing(res.data);
            console.log(res.data)
        })
        .catch(err => {

        });
    }, [slug]);
    try {
        if(Object.keys(listing).length !== 0){  // it check for object is empty
            for(let key in listing){
                if(key.startsWith('photo')){
                    if(listing[key]){
                    photos.push(listing[key])
                    }
                }
            }
        }
      } catch (error) {
        console.log(error)
      }


      const onSubmit = (event) =>{
        event.preventDefault();
        console.log(MailAgent)
        MailAgent['AgentEmail'] = listing.realtor.email
        MailAgent['TourDate'] = TourDate
        console.log(MailAgent)


        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
        
        axios.post("http://127.0.0.1:8000/api/contacts/", MailAgent, config)
        .then((res) => {

            if(res.status === 200){
                dispatch(setSnackBar({open: true, message: res.data.success, type: 'success'}))
              
            }
            else if(res.status === 201 ){
                dispatch(setSnackBar({open: true, message: res.data.error, type: 'error'}))
            }
            window.location.reload()
        })
        .catch((error) => {
            console.log(error)
            dispatch(setSnackBar({open: true, message: 'Something is wrong', type: 'error'}))
        })

      }
      const setMailAgentData = (e) =>{
          setMailAgent({...MailAgent,[e.target.name]: [e.target.value]})
      }

    return (
        <>
        <ProductHeroLayoutRoot>
        <Container
            sx={{mt: 3, mb: 14, display: 'flex', flexDirection: 'column',alignItems: 'center',}}
            >
        <Typography
            color="inherit" align="center" variant="h3"
            sx={{ mb: 1, mt: { sx: 4, sm: 10 }, fontFamily: 'italic' }}
        >
            {listing.title}
        </Typography>

        <Typography variant="span" color="inherit" sx={{ mt: 1, fontSize: '22px',color: 'rgb(0, 106, 255)', fontWeight: '500' }}>
            {listing.city},{listing.state},{listing.zipcode}
        </Typography>
            <Box
            sx={{ position: 'absolute', left: 0 ,right: 0, top: 0, bottom: 0, backgroundColor: 'common.black',
                opacity: 0.4, zIndex: -1 }}
            />
            <Background sx={{ backgroundImage: `url(${listing.photo_main})`, backgroundColor: '#7fc7d9', backgroundPosition: 'center'}} />
        
        </Container>
        </ProductHeroLayoutRoot>

        <Container maxWidth="lg" >
            <Grid container sm={12} md={12} p={2}>
                <Grid item xs={12} md={12} sx={{marginBottom: '50px'}}>
                    <Typography
                        color="inherit" align="left" variant="h5"
                        sx={{ mb: 1, mt: { sx: 3, sm: 7 },fontWeight: '500' }}
                    >
                        {listing.title}
                    </Typography>
                    <Typography
                        color="inherit" align="left" variant="span"
                        sx={{ mb: 5, mt: { sx: 3, sm: 7 },fontWeight: '400', fontSize: '14px' }}
                    >
                        <LocationOnIcon sx={{color: '#3c9dff', fontSize: '16px', mr: 1.5}} />
                        {listing.address},{listing.city},{listing.state},{listing.zipcode}
                    </Typography>

                </Grid>
                <Grid item xs={12} md={6.8}>
                    <CardMedia component="img" alt="green iguana" height="350" image={listing.photo_main}>

                    </CardMedia>
                    <ImageList sx={{ maxWidth: 500, height: 120 }} cols={3} gap={8}>
                        {photos.map((item) => (
                            <ImageListItem key={item}>
                            <img
                                src={`${item}?w=161&fit=crop&auto=format`}
                                srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                alt={item}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <FullWidthTabs

                        home_type={listing.home_type}
                        price={listing.price}
                        sqft={listing.sqft}
                        bedrooms={listing.bedrooms}
                        bathrooms={listing.bathrooms}
                        city={listing.city}
                        zipcode={listing.zipcode}
                        past_time={listing.past_time}
                        sale_type={listing.sale_type}
                        description={listing.description}
                    
                    />

              </Grid>
              <Grid item xs={12} sm={12} md={5.1} sx={{pl: {md:7, sm:0}}}>
                  <Box>
                    <Typography
                        color="inherit" align="left" variant="h5"
                        sx={{ mb: 1,fontWeight: '500' }}
                        >
                        Request a tour
                    </Typography>
                    <Typography
                        color="inherit" align="left" variant="span"
                        sx={{ mt: { sx: 3, sm: 5 },fontWeight: '500' }}
                        >
                        select a day when you're available
                    </Typography>
                </Box>
                <Box 
                    component="form" Validate autoComplete="off"
                    onSubmit={onSubmit}
                    sx={{ mt: 2, overflow: 'hidden'}}
                    >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            orientation=""
                            openTo="day"
                            value={TourDate}
                            shouldDisableDate={isWeekend}
                            onChange={(newValue) => {
                                setTourDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <hr/>

                    <Box sx={{ '& > :not(style)': { m: 1.5 }, backgroundColor: 'rgb(233, 229, 229)'}}>
                        <Typography
                            color="inherit" align="left" variant="h6"
                            sx={{ mb: 1,mt: 2,fontWeight: '500' }}
                            >
                            More about this property <span style={{color: 'red'}}>Mail Us</span>

                        </Typography>
                        <FormControl variant="standard" sx={{width: '250px'}}>
                            <InputLabel htmlFor="inputName">Enter Your Name</InputLabel>
                            <Input required
                                id="inputName"
                                value={MailAgent.name}
                                name="name"
                                onChange={setMailAgentData}
                                startAdornment={
                                    <InputAdornment position="start"> <AccountCircle /> </InputAdornment> }
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{width: '250px'}}>
                            <InputLabel htmlFor="inputEmail">Enter Email</InputLabel>
                            <Input required
                                id="inputEmail"
                                value={MailAgent.email}
                                name="email"
                                onChange={setMailAgentData}
                                startAdornment={
                                    <InputAdornment position="start"> <MarkEmailReadIcon /> </InputAdornment> }
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{width: '250px'}}>
                            <InputLabel htmlFor="inputPhone">Enter Phone</InputLabel>
                            <Input required
                                id="inputPhone"
                                value={MailAgent.phone}
                                name="phone"
                                onChange={setMailAgentData}
                                startAdornment={
                                    <InputAdornment position="start"> <PhoneIcon /> </InputAdornment> }
                            />
                          
                        </FormControl>
                        <TextField required
                            id="outlined-multiline-static"
                            multiline
                            value={MailAgent.message}
                            name="message"
                            onChange={setMailAgentData}
                            label="Write a message"
                            rows={3}
                            sx={{width: '250px',pl:0, marginLeft: '-20px'}}
                            />
                        <Button variant="contained" type="submit"
                            sx={{padding: '8px 40px',width: '250px'}}
                            startIcon={<ForwardToInboxIcon />}>
                                Email Agent
                        </Button>
                     
                          
                    </Box>
                
                </Box>

              </Grid>
            </Grid>

        </Container>
        </>
    )
}

export default ListingDetails;



