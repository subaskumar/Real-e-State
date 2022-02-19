import * as React from 'react';
import {Box,Typography,Tab,Grid,Button} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs(props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',minHeight: '500px' , typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Overview PROPERTY" value="1" />
            <Tab label="Descriptions" value="2" />
            <Tab label="Location" value="3" />
            <Tab label="Realtor" value="4" />
            <Tab label="Reviews" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ml: -1}}>
            <Typography
                color="inherit" align="left" variant="h6"
                sx={{ mb: 3, mt: 1,fontWeight: '500', fontSize: '17px' }}
            >
                PROPERTY DETAILS
            </Typography>
            <Grid container md={12} className='listing_detail'>
                <Grid item md={3.5} >
                    <span >Property Type</span>
                    <p>{props.home_type}</p>
                </Grid>
                <Grid item md={3.5}>
                    <span >Total Rooms</span>
                    <p>{props.bedrooms}</p>
                </Grid>
                <Grid item md={3.5}>
                    <span >Square Foots</span>
                    <p>{props.sqft}</p>
                </Grid>

            </Grid>
            <Grid container md={12} className='listing_detail'>
                <Grid item md={3.5}>
                    <span >Sale/Rent</span>
                    <p>{props.sale_type}</p>
                </Grid>
                <Grid item md={3.5}>
                    <span >Listing Date</span>
                    <p>{props.past_time}</p>
                </Grid>
                <Grid item md={3.5}>
                    <span >Total bathrooms</span>
                    <p>{props.bathrooms}</p>
                </Grid>

            </Grid>
            <Grid container md={12} className='listing_detail'>
                <Grid item md={3.5}>
                    <span >Price</span>
                    <p>{props.price}</p>
                </Grid>
                <Grid item md={3.5}>
                    <span >address</span>
                    <p>{props.city},{props.zipcode}</p>
                </Grid>
               
            </Grid>

        </TabPanel>
        <TabPanel value="2" className='listing_description'>
            <Typography
                color="inherit" align="left" variant="h6"
                sx={{ mb: 3, mt: 1,fontWeight: '500', fontSize: '17px' }}
            >
                ABOUT PROPERTY
            </Typography>
            <p>{props.description}</p>

        </TabPanel>
        <TabPanel value="3">
            <Typography
                color="inherit" align="left" variant="h6"
                sx={{ mb: 3, mt: 1,fontWeight: '500', fontSize: '17px' }}
            >
                Location
            </Typography>
            <Box sx={{height: '250px'}}>
                <iframe title="google map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60059.627865941715!2d85.821483!3d19.80918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c4180256e495%3A0x496a9d8b30c1fad7!2sPuri%2C%20Odisha%2C%20India!5e0!3m2!1sen!2sus!4v1582097046697!5m2!1sen!2sus" 
                    width="100%" height="100%" frameBorder="0" allowFullscreen=""></iframe>
            </Box>
            <Button sx={{backgroundColor: '#3c9dff', p:1.3,
                        "&:hover": {backgroundColor: '#3c9dff'},
                        color:'#fff', fontSize: '11px', marginTop: '20px'}}>
                GET LOCATION AND DERECTION
            </Button>
            
        </TabPanel>
        <TabPanel value="4">
            <Typography
                color="inherit" align="left" variant="h6"
                sx={{ mb: 3, mt: 1,fontWeight: '500', fontSize: '17px' }}
            >
                Contact To Realtor
            </Typography>
        </TabPanel>
        <TabPanel value="5">Item Three</TabPanel>

      </TabContext>
    </Box>
  );
}