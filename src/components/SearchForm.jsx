import React, { useState,useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useSelector,useDispatch} from "react-redux";
import {property_type } from "../features/saleSlice"
import {useNavigate} from 'react-router-dom';
import {Box,TextField,MenuItem,Paper,Divider,InputBase,IconButton,Button} from '@mui/material';



const sale_types = [{value: 'For Sale',label: 'For Buy',},{ value: 'For Rent', label: 'For Rent',},];
const home_types = [{value: 'House',label: 'House',},{ value: 'Condo', label: 'Condo',},
                    {value: 'Townhouse',label: 'Townhouse',}];
const min_prices = [{value: '1000',label: '1000+',},{ value: '5000', label: '5000+',},
                {value: '10000',label: '10000+',},{ value: '15000', label: '15000+',},
                {value: '20000',label: '20000+',},{ value: '50000', label: '50000+',},
                {value: '100000',label: '100000+',},{ value: '500000', label: '500000+',},
                {value: '1000000',label: '100000+',},{ value: '5000000', label: '5000000+',},];
const max_prices = min_prices
const Bedrooms = [{value: '1',label: '1+',},{ value: '2', label: '2+',},
                {value: '3',label: '3+',},{ value: '4', label: '4+',},
                {value: '5',label: '5+',},];
const SquareFoot = [{value: '1000',label: '1000+',},{ value: '2000', label: '2000+',},
                {value: '3000',label: '3000+',},{ value: '5000', label: '5000+',},];


export const Filter = (props) => {

  const navigate = useNavigate()
  const [preventInitial,setPreventInitial] = useState('')

  // const dispatch = useDispatch();
  // const { sale_rent } = useSelector(state => state.SaleRent);
  // const sale_type = sale_rent
  // const saleRentChange = (event) => {
  //   dispatch(property_type(event.target.value))
  //   console.log(event.target.value)
  // }

  const [formData, setFormData] = useState({sale_type: props.sale_type, min_price: props.min_price, max_price: props.max_price,
        bedrooms: props.bedrooms, home_type: props.home_type, sqft: props.sqft, keywords: props.keywords });

  const {sale_type,min_price,max_price, bedrooms, home_type, sqft, keywords } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setPreventInitial('ready')

  };

  useEffect(() => {
    if(preventInitial){
      navigate(`/listings/search/${sale_type}&${min_price}&${max_price}&${bedrooms}&${home_type}&${sqft}&${keywords}&${1}`)
    }
  },[preventInitial,navigate,sale_type,min_price,max_price, bedrooms, home_type, sqft, keywords])


  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/listings/search/${sale_type}&${min_price}&${max_price}&${bedrooms}&${home_type}&${sqft}&${keywords}&${1}`)
   
  }

  return(
    <>
        <div className="Listing_searchPg">
          <InputBase
            sx={{ width: '100px', fontSize: '12px', fontWeight: '600', color: 'black',padding: '5px 5px' }}
            placeholder="ZipCode or City" name="keywords" id="input" value={keywords}  onChange={handleChange}
                    
            />
        </div>
        <TextField select name="sale_type" label="Sale or Rent" sx={{mr:1.5,p:0,width: '130px',}}
            size='small' value={sale_type} onChange={handleChange}
          >
            {sale_types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        <TextField select name="min_price" label="Min Price" sx={{mr:1.5,width: '130px'}}
            size='small' value={min_price} onChange={handleChange}
          >
            {min_prices.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        <TextField select name="max_price" label="Max Price" sx={{mr:1.5,width: '130px'}}
            size='small' value={max_price} onChange={handleChange}
          >
            {max_prices.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        <TextField select name="bedrooms" label="Bedrooms" sx={{mr:1.5,width: '130px'}}
            size='small' value={bedrooms} onChange={handleChange}
          >
            {Bedrooms.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        <TextField select name="home_type" label="Home Type" sx={{mr:1.5,width: '130px'}}
            size='small' value={home_type} onChange={handleChange}
          >
             {home_types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>

        <TextField select name="sqft" label="Square Foot" size='small'
            value={sqft} onChange={handleChange} sx={{mr:1.5,width: '130px'}}
          >
            {SquareFoot.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
      
        <Button type="submit" variant="outlined" size="small" sx={{backgroundColor: 'rgb(0, 106, 255)',color: '#fff' ,mx: 1, 
          padding: '2px 5px', height: '38px',textTransform: 'capitalize', borderRadius : '2px',fontSize: '12px'}}  onClick={onSubmit}>
          Search
        </Button>
    </>
  )
}

export default function SearchForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { sale_rent } = useSelector(state => state.SaleRent);
  const sale_type = sale_rent

    const [formData, setFormData] = useState({ min_price: '1000', max_price: '5000000',
                    bedrooms: '1', home_type: 'House', sqft: '1000', keywords: '' });

    const {min_price,max_price, bedrooms, home_type, sqft, keywords } = formData;
    const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const saleRentChange = (event) => {
      dispatch(property_type(event.target.value))
      console.log(event.target.value)
    }
    const onSubmit = (event) => {
      event.preventDefault();
      // here we can use any symbol to separate the value, and it's not necessary to place symbol.
      navigate(`/listings/search/${sale_type}&${min_price}&${max_price}&${bedrooms}&${home_type}&${sqft}&${keywords}&${1}`)
     
    }

  return (
    <>
      <Box
        component="form" Validate autoComplete="off"
        onSubmit={e => onSubmit(e)}
        sx={{ '& .MuiTextField-root': { m: {xs:0.5,sm:1}, width: { xs: '12ch',sm: '17ch', md: '20ch' } , color: 'white' },}}
      >
        <div>
        <TextField
            id="filled-select-currency" select
            label="Sale or Rent" value={sale_type} name="sale_type"
            size='small' onChange={saleRentChange} variant="filled"
            sx={{color: '#fff', borderColor: "white", bgcolor: "#fff", opacity: "0.7"}}
          >
            {sale_types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="filled-select-currency" select
            label="Minimum Price" value={min_price} name='min_price' size='small'
            onChange={handleChange} variant="filled"
            sx={{color: '#fff', borderColor: "white", bgcolor: "#fff", opacity: "0.7"}}

          >
            {min_prices.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="filled-select-currency" select 
            label="Maximum Price" value={max_price} name='max_price'
            size='small' onChange={handleChange} variant="filled"
            sx={{color: '#fff', borderColor: "white", bgcolor: "#fff", opacity: "0.7"}}
          >
            {max_prices.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="filled-select-currency" select 
            label="Bedrooms" value={bedrooms} name='bedrooms'
            size='small' onChange={handleChange} variant="filled"
            sx={{color: '#fff', borderColor: "white", bgcolor: "#fff", opacity: "0.7"}}
          >
            {Bedrooms.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="filled-select-currency-native" select
            label="Home Type" value={home_type} name='home_type'
            size='small' onChange={handleChange}
            sx={{color: '#fff', borderColor: "white", bgcolor: "#fff", opacity: "0.7"}}

            SelectProps={{
              native: true,
            }}
            variant="filled"
          >
            {home_types.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            id="filled-select-currency" select 
            label="Square Foot" value={sqft} name="sqft"
            size='small' onChange={handleChange} variant="filled"
            sx={{color: '#fff', borderColor: "white", bgcolor: "#fff", opacity: "0.7"}}
          >
            {SquareFoot.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div style={{margin: '0px 2px'}}>
          <Paper
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', }}
              >
              <IconButton sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
              </IconButton>
              <InputBase
                  sx={{ ml: 1, flex: 1,fontSize: '17px', fontWeight: '600', color: 'black', }}
                  placeholder="ZipCode or City" name="keywords" id="input" value={keywords}
                  onChange={handleChange} inputProps={{ 'aria-label': 'search google maps' }}
                  required
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton  type="submit" color="primary" sx={{ p: '10px' }} aria-label="directions">
                  <DirectionsIcon />
              </IconButton>
          </Paper>
        </div>
      </Box>
    </>
  );
}
