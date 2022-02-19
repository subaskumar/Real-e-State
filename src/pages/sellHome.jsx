import { useState } from 'react';
import {Box,Typography,Container,Grid,Breadcrumbs,Chip,TextField} from '@mui/material/';
import BannerImg from '../static/About/about.jpg';
import { emphasize, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
    color: theme.palette.common.white, position: 'relative', display: 'flex', alignItems: 'center',
    [theme.breakpoints.up('sm')]: { height: '40vh', minHeight: 250,maxHeight: 1300,}, }));
  
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
    const [SellData, setFormData] = useState({ sale_type: 'For Sale',price: '0',
                bedrooms: '1', home_type: 'House', sqft: '1000'});


    const handleChange = (event) => {
        setFormData({...SellData,[event.target.name]: event.target.value})
    }

    return (
        <>
          <ProductHeroLayoutRoot>
        <Container
            sx={{mt: 3, mb: 14, display: 'flex', flexDirection: 'column',alignItems: 'center',}}
            >
        <Typography
            color="inherit" align="center" variant="h4"
            sx={{ mb: 2, mt: { sx: 4, sm: 10 },fontWeight: 500 }}
        >
            SUBMIT PROPERTY
        </Typography>
        <div role="presentation" >
            <Breadcrumbs aria-label="breadcrumb" sx={{cursor: 'pointer'}}>
                <StyledBreadcrumb
                component="a"
                href="/"
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
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 10 }} sx={{mt: 7}}>
            <Grid item xs={3}>
                <TextField
                    id="filled-select-currency-native" select
                    label="Sale/Rent" name="sale_type" value={SellData.sale_type}
                    onChange={handleChange}
                    SelectProps={{ native: true,}}
                    helperText="Please select your currency" variant="filled"
                    >
                    {sale_types.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={3}>
            <TextField
                    id="filled-select-currency-native" select
                    label="Property Type" name="home_type" value={SellData.home_type}
                    onChange={handleChange}
                    SelectProps={{ native: true,}}
                    >
                    {home_types.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default SellHome;
