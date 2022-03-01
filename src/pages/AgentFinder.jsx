import {Box,Typography,Container,Breadcrumbs,Chip,} from '@mui/material/';
import BannerImg from '../static/About/about.jpg';
import { emphasize, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
    color: theme.palette.common.white, position: 'relative', display: 'flex', alignItems: 'center',
    [theme.breakpoints.up('sm')]: { height: '40vh', minHeight: 250,maxHeight: 1300,}, 
    [theme.breakpoints.down('sm')]: { height: '30vh',minHeight: 200,maxHeight: 300,}, }));
  
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

const AgentFinder = () =>{

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
                Contact With Realtors For Rent / Sale
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
                <StyledBreadcrumb component="a" href="#" label="Agent" />
                </Breadcrumbs>
            </div>
            <Box
                sx={{ position: 'absolute', left: 0 ,right: 0, top: 0, bottom: 0, backgroundColor: 'common.black',
                    opacity: 0.4, zIndex: -1 }}
            />
                <Background sx={{ backgroundImage: `url(${BannerImg})`, backgroundColor: '#7fc7d9', backgroundPosition: 'center'}} />
                
            </Container>
        </ProductHeroLayoutRoot>
        <Container>
            <Box sx={{p: '20px 50px', mt:10,mb:15}}>
                <Typography color="inherit" align="center" variant="h4" >

                    No Agent Here

                </Typography>
                
            </Box>
        </Container>

    </>
    )
}

export default AgentFinder;