import * as React from 'react';
import Container from '@mui/material/Container';
import { makeStyles} from '@mui/styles';
import { Grid,Typography,IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import Divider from '@mui/material/Divider';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#575757',
        width: `100%`,
        position: "relative",
        overflow: "hidden",
        padding: "2em 0 ",
    },
    footerMain: {
        color: '#fff',
        fontFamily: 'Neonderthaw',
        fontSize: 'clamp(22px, 2vw, 32px)',
        display: 'flex'
    },
    footerMainIcon: {
        color:'rgb(112, 157, 8)',
        fontSize: "clamp(22px, 2vw, 35px)", 
        margin: "0 10px -8px 0px"
    },
    footerHead: {
        color: '#fff', 
        fontWeight: 700,
        fontFamily: 'CoStarBrown-Bold'
    }
})
)

const Footer = () => {

    const classes = useStyles()

  return (
      <>
        <footer className={classes.footer}>
          <Container maxWidth="lg" sx={{height: 'auto'}}>
            <Grid container spacing={2} className="footer_list" >
              <Grid item xs={12} sm={6.5} md={5} sx={{marginRight: "15px"}}>
                <div>
                  <Typography
                    variant="h5"
                    noWrap
                    className={classes.footerMain}
                    >
                    <LanguageIcon className={classes.footerMainIcon} />
                    ZillowClone.com
                  </Typography>
                </div>
                <div style={{marginTop: '35px', color:'#fff'}}>
                    <span style={{marginRight: '20px', fontFamily: 'italic'}}>Follow Us</span>
                    <IconButton size="small" aria-label="upload picture" component="span" sx={{bgcolor: "#fff", marginRight: "5px"}}>
                        <TwitterIcon style={{ fontSize: 20 }} />
                    </IconButton>
                    <IconButton  size="small" aria-label="upload picture" component="span" sx={{bgcolor: "#fff", marginRight: "5px"}}>
                        <LinkedInIcon style={{ fontSize: 20 }}/>
                    </IconButton>
                    <IconButton size="small" aria-label="upload picture" component="span" sx={{bgcolor: "#fff", marginRight: "5px"}}>
                        <MailOutlineIcon style={{ fontSize: 20 }}/>
                    </IconButton>
                    <IconButton href="https://www.facebook.com/subas.mallick.733" size="small" aria-label="upload picture" component="a" sx={{bgcolor: "#fff", marginRight: "5px"}}>
                        <FacebookIcon style={{ fontSize: 20 }}/>
                    </IconButton>
                </div>
              </Grid>
              <Grid item xs={12} sm={4.5} md={2.1} sx={{ marginRight: "15px"}}>
                <Typography
                    variant="h6"
                    noWrap
                    className={classes.footerHead}
                    >
                    Advertisers
                </Typography>
                <div >
                  <ul>
                    <li>Add Property</li>
                    <li>Add Listing Terms of Service</li>
                    <li>Equal Housing</li>
                  </ul>
                </div>

              </Grid>
              <Grid item xs={12} sm={6.5} md={2.2} sx={{marginRight: "15px"}}>
                <Typography
                    variant="h6"
                    noWrap
                    className={classes.footerHead}
                    >
                    Contact Us
                </Typography>
                <div>
                  <ul>
                    <li>Get in touch with us</li>
                    <li><LocationOnIcon sx={{fontSize: '14px',mr: 0.7}}/>Nualgaon,BBSR,Odisha</li>
                    <li><LocalPhoneIcon sx={{fontSize: '14px',mr: 0.7}} />Phone: +919090157148</li>
                    <li><MarkEmailReadIcon sx={{fontSize: '14px',mr: 0.7}} />Email: Nilachal@gmail.com</li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} sm={4.5} md={2} >
                <Typography
                    variant="h6"
                    noWrap
                    className={classes.footerHead}
                    >
                    About Us
                </Typography>
                <div>
                  <ul style={{textAlign: 'left'}}>
                    <li>Company</li>
                    <li>Contact Us</li>
                    <li>Corporate Responsibility</li>
                    <li>Press Room</li>
                  </ul>
                </div>
              </Grid>
            </Grid>
            <Divider sx={{marginTop: '30px'}}/>
            <Grid container spacing={2} sx={{marginTop: '0px', color: '#fff'}}>
              <Grid item xs={6} md={6}>
                <div className="row"> 
                  © 2021 CoStar Group. All Rights Reserved.
                </div>
              </ Grid>
              <Grid item xs={6} md={6} align="right">
                <div className='footrEnd'> 
                  <a href="/advertise/disclaimers/avoid-scams-and-fraud" target="_self">Avoid Scams</a>
                  <a href="http://www.apartments.com/sitemap/" target="_self">Sitemap</a>
                  <a href="/advertise/disclaimers/privacy-statement" target="_self">Privacy Statement</a>
                  <a href="/advertise/disclaimers/terms-of-service" target="_self">Terms of Service</a>
                </div>
              </ Grid >
            </ Grid >
          </Container>
        </footer>
      </>
 
  );
};

export default Footer;