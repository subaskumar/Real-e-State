import { styled } from '@mui/material/styles';
import {Box,Typography,Container,
    Grid,CardMedia,Button} from '@mui/material/';
import Aboutbanner from '../static/About/about_banner.jpg';
import Ab_bodyImage from '../static/About/ab.jpg';
import {Link} from 'react-router-dom';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white, position: 'relative', display: 'flex', alignItems: 'center',
  [theme.breakpoints.up('sm')]: { height: '40vh', minHeight: 280,maxHeight: 1300,}, }));

const Background = styled(Box)({
  position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', zIndex: -2,});

const AboutUs = () =>{

   

  return (
      <>
        <ProductHeroLayoutRoot>
        <Container
            sx={{mt: 3, mb: 14, display: 'flex', flexDirection: 'column',alignItems: 'center',}}
            >
        <Typography
            color="inherit" align="center" variant="h3"
            sx={{ mb: 2, mt: { sx: 4, sm: 10 }, fontFamily: 'italic',fontSize: 'clamp(28px,6vw, 40px)' }}
        >
            Build Your Business with Zillow
        </Typography>
        <Typography variant="" color="inherit" sx={{ mt: 2, fontSize: 'clamp(13px,2vw, 17px)' }}>
                Reach millions of buyers, sellers and renters on the largest real estate network on the web.
        </Typography>
        <div style={{height: '3px', backgroundColor: 'gold', width: '35%', marginTop: '15px'}}>

        </div>

        <Typography variant="span" color="inherit" sx={{ mt: 4, fontSize: 'clamp(17px,2vw, 24px)',color: 'rgb(0, 106, 255)', fontWeight: '400' }}>
                Select your industry to get started
        </Typography>
            <Box
            sx={{ position: 'absolute', left: 0 ,right: 0, top: 0, bottom: 0, backgroundColor: 'common.black',
                opacity: 0.4, zIndex: -1 }}
            />
            <Background sx={{ backgroundImage: `url(${Aboutbanner})`, backgroundColor: '#7fc7d9', backgroundPosition: 'center'}} />
        
        </Container>
        </ProductHeroLayoutRoot>

        <Container sx={{pt:10}}>
            <Grid container sx={{margin: '7px 5px', cursor: 'pointer'}} >
              <Grid item xs={12} md={6}>
                <CardMedia component="img" alt="green iguana" height="350" image={Ab_bodyImage}>

                </CardMedia>

              </Grid>
              <Grid item xs={12} md={6} pt={1} sx={{pl: {sx:0,md:5}}} >
                <Typography variant="h4" color="inherit" sx={{ color: '#37404d',fontSize: 'clamp(22px,5vw, 35px)'   }}>
                    Welcome to Nilachal Realtors
                </Typography>
                <Box sx={{padding: '20px 10px', textAlign: 'justify'}}>
                <Typography variant="p" color="inherit" sx={{fontSize: 'clamp(13px,2vw, 16px)'}}>
                    Zillow Group is reimagining real estate to make it easier to unlock life’s next chapter.

                    As the most-visited real estate website in the United States, 
                    Zillow and its affiliates offer customers an on-demand experience for selling,
                    buying, renting and financing with transparency and nearly seamless end-to-end service. 
                    Zillow Offers buys and sells homes directly in dozens of markets across the country, 
                    allowing sellers control over their timeline. Zillow Home Loans, our affiliate lender, 
                    provides our customers with an easy option to get pre-approved and secure financing for 
                    their next home purchase. Zillow recently launched Zillow Homes, Inc.,
                    a licensed brokerage entity, to streamline Zillow Offers transactions.
                    <br/><br/>
                    Our team at My Space Realty provides Real Estate Consultancy in the region of East India mainly 
                    focusing on Bhubaneswar.
                </Typography>
                </Box>
              </Grid>
            </Grid>
        </Container>
        <Container>
            <Typography variant="h5" color="inherit" sx={{ color: '#37404d',fontSize: 'clamp(18px,2vw, 22px)'  }}>
                Our Mission & Vision
            </Typography>
            <Typography variant="p" color="inherit" sx={{fontSize: 'clamp(13px,2vw, 16px)'}}>
                <br/>
            To be the India's preferred real estate firm, providing the most creative and innovative services on a 
            consistent basis, to drive meaningful value to our clients. To be the best at what we do.
            <br/><br/>
            A trust worthy real estate service oriented company that attains customers delight, trust through commitment,
            accountability, discipline and best work processes.
            </Typography>
        </Container>
        <Container maxWidth="xl" sx={{height: '100px', color: '#fff',mt: 7, backgroundColor: '#3c9dff;'}}>
          <Box sx={{padding: {md:'30px 10%',sm: '30px 5%', xs: '15px 2%'},}}>
            <Typography variant="h5" color="inherit" sx={{ color: '', float: 'left',fontSize: 'clamp(17px,2vw, 25px)', fontWeight: '300'  }}>
                    Looking To Sell Or Rent Your Property?
            </Typography>
            <Button component={Link} to="/sell_home" variant="outlined" size="large" 
                sx={{float: 'right',mt: {xs:1}, color: '#fff',fontSize: 'clamp(12px,2vw, 16px)',borderColor: '#fff'}}>
                SUBMIT NOW
            </Button>
          </Box>
        </Container>

    </>
  );
}


export default AboutUs;