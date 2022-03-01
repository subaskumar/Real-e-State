import { useState,useEffect } from 'react';
import {Box,Typography,Container,Grid,Breadcrumbs,Chip,TextField,Button} from '@mui/material/';
import BannerImg from '../static/About/about.jpg';
import { emphasize, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import Axios from 'axios'
import { setSnackBar } from '../features/Alert/snackBarSlice'
import { useDispatch } from "react-redux";


const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
    color: theme.palette.common.white, position: 'relative', display: 'flex', alignItems: 'center',
    [theme.breakpoints.up('sm')]: { height: '40vh', minHeight: 250,maxHeight: 1300,},
    [theme.breakpoints.down('sm')]: { height: '30vh',minHeight: 200,maxHeight: 300,} }));
  
const Background = styled(Box)({
    position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', zIndex: -2,});

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
        const backgroundColor =
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
        return {
          backgroundColor,
          height: theme.spacing(3),
          color: theme.palette.text.primary,
          fontWeight: theme.typography.fontWeightRegular,
          '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
          },
          '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
          },
    };
})

const sale_types = [{value: 'For Sale',label: 'For Buy',},{ value: 'For Rent', label: 'For Rent',},];
const home_types = [{value: 'House',label: 'House',},{ value: 'Condo', label: 'Condo',},
                    {value: 'Townhouse',label: 'Townhouse',}];
const SellHome = () =>{
  const dispatch = useDispatch()
  const [Realtors,setRealtors] = useState([])
  const [SellData, setFormData] = useState({ title: '',sale_type: '',home_type: '', price: '',
        bedrooms: '',bathrooms: '', sqft: '',realtor: '',address: '', city: '',state: '',
        zipcode: '',description: '' });

  const [photo_main,setPhoto] = useState()
  const [photo_1,setPhoto1] = useState()
  const [photo_2,setPhoto2] = useState()
  const [photo_3,setPhoto3] = useState()
  // const Datas = {...SellData,...photos}
    const handleChange = (event) => {
        setFormData({...SellData,[event.target.name]: event.target.value})
    }
    // const handleChangeFile = (event) => {
    //   setPhotos({...photos,[event.target.name]: event.target.files[0]}) // }
    useEffect(() => {
      const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
      // http://127.0.0.1:8000
      Axios.get("https://subaskumarmk.pythonanywhere.com/api/realtors",config)
      .then((res) => {
        setRealtors(res.data)
        console.log(Realtors)
      })
      .catch((error) => {
        console.log(error)
        dispatch(setSnackBar({open: true, message: 'LogIn Required...!', type: 'error'}))
      })
    },[Realtors,dispatch])

    const submitListing = (event) => {
      event.preventDefault();
      const ListingData = new FormData()
      ListingData.append('title',SellData.title)
      ListingData.append('sale_type',SellData.sale_type)
      ListingData.append('home_type',SellData.home_type)
      ListingData.append('price',SellData.price)
      ListingData.append('bedrooms',SellData.bedrooms)
      ListingData.append('bathrooms',SellData.bathrooms)
      ListingData.append('sqft',SellData.sqft)
      ListingData.append('realtor',SellData.realtor)
      ListingData.append('address',SellData.address)
      ListingData.append('city',SellData.state)
      ListingData.append('state',SellData.state)
      ListingData.append('zipcode',SellData.zipcode)
      ListingData.append('description',SellData.description)
      ListingData.append('photo_main',photo_main,photo_main.name)
      ListingData.append('photo_1',photo_1,photo_1.name)
      ListingData.append('photo_2',photo_2,photo_2.name)
      ListingData.append('photo_3',photo_3,photo_3.name)

      // Object.entries(SellData).forEach(([key, value]) => formData.append(key, value));
      const config = {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      }
      Axios.post("https://subaskumarmk.pythonanywhere.com/api/listings/add_listing/", ListingData, config)
      .then((res) => {
        console.log(res.data)
        if(res.status === 201 ){
          dispatch(setSnackBar({open: true, message: "You Listing Add sucessfully", type: 'success'}))
          event.target.reset()
          setFormData({ title: '',sale_type: '',home_type: '', price: '', bedrooms: '',bathrooms: '', sqft: '',realtor: '',
                        address: '', city: '',state: '',zipcode: '',description: '' })
        }
      })
      .catch((error) => {
        console.log(error)
        if(error.response.status === 400){
          dispatch(setSnackBar({open: true, message: "You Data is Invalid", type: 'error'}))
        }
        else{
          dispatch(setSnackBar({open: true, message: 'Something is Wrong...!', type: 'error'}))
      }
      })
    }

  return (
    <>
      <ProductHeroLayoutRoot>
        <Container
          sx={{mt: 3, mb: 14, display: 'flex', flexDirection: 'column',alignItems: 'center',}}
          >
          <Typography
            color="inherit" align="center" variant="h4"
              sx={{ mb: 2, mt: 10,fontWeight: 500,fontSize: 'clamp(22px, 3vw, 35px)' }}
          >
            SUBMIT PROPERTY
          </Typography>
          <div role="presentation" >
            <Breadcrumbs aria-label="breadcrumb" sx={{cursor: 'pointer'}}>
              <StyledBreadcrumb
                component="a"
                href="/"
                sx={{cursor: 'pointer'}}
                label="Home"
                icon={<HomeIcon fontSize="small" />}
              />
              <StyledBreadcrumb component="a" href="#" label="Submit Property" />
            </Breadcrumbs>
          </div>
          <Box
            sx={{ position: 'absolute', left: 0 ,right: 0, top: 0, bottom: 0, backgroundColor: 'common.black',
                  opacity: 0.4, zIndex: -1 }}
          />
            <Background sx={{ backgroundImage: `url(${BannerImg})`, backgroundColor: '#7fc7d9', backgroundPosition: 'center'}} />
              
        </Container>
      </ProductHeroLayoutRoot>
      <Container sx={{p:2}}>
        <Box component="form" autoComplete="off"
          onSubmit={submitListing}
            sx={{pt:2,pb:5,pl:{md:2,sm:4,sx:5},pr:{md:2,sm:4,sx:5}}}
          >
          <Grid container rowSpacing={5} columnSpacing={{ xs: 5, sm: 9, md: 15 }} sx={{mt: 7}}>
            <Grid item xs={12} sm={6} md={4}  >
              <TextField required focused
                id="outlined-name1" fullWidth
                    label="Title" name="title"
                    value={SellData.title}
                    onChange={handleChange}
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
              <TextField required focused
                  id="outlined-select-currency-native1"
                  select fullWidth label="Sale / Rent" name="sale_type"
                  value={SellData.sale_type}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                {sale_types.map((option) => (
                  <option key={option.value} value={option.value} style={{padding: '5px 0px'}}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
              <TextField required focused
                id="outlined-select-currency-native2" select
                  fullWidth label="Home Type"
                  name="home_type" value={SellData.home_type}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                {home_types.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField required focused
                id="outlined-name" fullWidth
                label="Price" name="price"
                value={SellData.price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField required focused
                id="outlined-name2"
                fullWidth label="Bedrooms" name="bedrooms"
                value={SellData.bedrooms}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField required focused
                id="outlined-name3"
                fullWidth label="Bathrooms"name="bathrooms"
                value={SellData.bathrooms}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField required focused
                id="outlined-name4"
                fullWidth label="Sqft" name="sqft"
                value={SellData.sqft}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField required focused
                  id="outlined-select-currency-native3"
                  select fullWidth
                  label="Choose Realtor" name="realtor" value={SellData.realtor}
                  onChange={handleChange}
                  SelectProps={{
                      native: true,
                  }}
                    helperText="Only You can sell your Property through Realtors"
                  >
                  {Realtors.map((option) => (
                    <option key={option.name} value={option.id}>
                      {option.name}
                    </option>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField required focused
                id="outlined-name5" fullWidth
                label="Address" name="address"
                value={SellData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField required focused
                id="outlined-name6" fullWidth
                label="City" name="city"
                value={SellData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField required focused
                id="outlined-name7"
                fullWidth label="State"
                name="state" value={SellData.state}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField required focused
                id="outlined-name8" fullWidth
                label="Zipcode" name="zipcode"
                value={SellData.zipcode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField required focused
                    fullWidth
                    id="outlined-multiline-static" label="Property Description"
                    name="description" multiline rows={4}
                    value={SellData.description}
                    onChange={handleChange}
              />
            </Grid>   
            <Grid item xs={12} sm={6} md={4}>
              <label htmlFor="photo_main">Main Photo : </label>
              <input id="photo_main" required
                type="file" accept='image/*'
                label="Main Photo" name="photo_main"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <label htmlFor="photo_1">Photo  1: </label>
              <input id="photo_1" required
                type="file" accept='image/*' name="photo_1"
                onChange={(e) => setPhoto1(e.target.files[0])}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <label htmlFor="photo_2">Photo 2 : </label>
              <input id="photo_2" required
                type="file"  accept='image/*' name="photo_2"
                onChange={(e) => setPhoto2(e.target.files[0])}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <label htmlFor="photo_3">Photo 3: </label>
              <input id="photo_3" required
                type="file" 
                accept='image/*' name="photo_3"
                onChange={(e) => setPhoto3(e.target.files[0])}
              />
            </Grid>    
          </Grid>
          <Button type="submit" variant="outlined" size="large" 
            sx={{float: 'left',mt: {xs:3, md:5}, color: '#fff',pading: '7px 15px', mb:8,
                fontSize: 'clamp(13px,2vw, 16px)',backgroundColor: 'rgb(0, 106, 255)',
                '&:hover': {backgroundColor: 'rgb(0, 106, 255)',opacity: 0.8}}}>
                SUBMIT NOW
          </Button>
        </Box>
      </Container>
    </>
  )
}
export default SellHome;