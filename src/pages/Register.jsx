import React, { useState } from 'react';
import {Button,Avatar,CssBaseline ,TextField,FormControlLabel,Checkbox,
    Link,Grid,Box,Typography,Container} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { openModal} from '../features/modalSlice'
import { setSnackBar } from '../features/Alert/snackBarSlice'
import LogIn from './LogIn';
import Axios from 'axios'


const theme = createTheme();

const Register = () =>{
    const dispatch = useDispatch()
    const [Perrors , setPassError] = useState({passError: false, passMsg: '', emailError: false,emailMsg:''})
    const [Eerrors , setEmailError] = useState({emailError: false,emailMsg:''})
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: ''
                                    });

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const checkEmailError = (e) =>{
        setEmailError({emailError: false,emailMsg:''})
    }
    const checkPassError = (e) =>{
        
        if(formData.password.startsWith(formData.password2)){ 
            setPassError({passError: false, passMsg: ''})

        }
        else{
            setPassError({passError: true, passMsg: "password don't matched"})
        }
    }
   
  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    Axios.post("http://127.0.0.1:8000/api/accounts/signup", formData, config)
    .then((res) => {
        console.log(res)
        if(res.status === 200){
            if(res.data.email){
                setEmailError({emailError: true,emailMsg: res.data.email})
            }
            if(res.data.password){
                setPassError({passError: true, passMsg: res.data.password})
            }
        }
        else if(res.status === 201 ){
            console.log(res.data.message)
            dispatch(setSnackBar({open: true, message: res.data.message, type: 'success'}))
            swipContent()
        }
       
    })
    .catch((error) => {
        console.log(error)
        dispatch(setSnackBar({open: true, message: 'Something is wrong', type: 'error'}))
    })
   
  };

  const swipContent = () => {
    dispatch(openModal(<LogIn />))
}

  return (
    <>
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main',height: {md:'35px',sm:'32px',xs:'30px'},width: {md:'35px',sm:'32px',xs:'30px'} }}>
                        <LockOutlinedIcon sx={{fontSize: '20px'}}/>
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{fontSize: 'clamp(18px, 3vw, 22px)'}}>
                        Sign up
                    </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3,fontSize: 'clamp(14px, 3vw, 17px)' }}>
                    <Grid container spacing={2} sx={{fontSize: 'clamp(14px, 3vw, 17px)'}}>
                    <Grid item xs={12}>
                        <TextField required fullWidth id="Name" label="Full Name"  autoFocus size="small"
                        name="name" autoComplete="family-name" value={formData.name}  onChange={e => onChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required fullWidth id="email" label="Email Address" size="small" helperText={Eerrors.emailMsg}
                        name="email" autoComplete="email" value={formData.email}  onChange={e => onChange(e)}
                        error={Eerrors.emailError} onKeyUp={checkEmailError}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required fullWidth name="password" label="Password" type="password" size="small"
                        id="password" autoComplete="new-password" value={formData.password}  onChange={e => onChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required fullWidth name="password2" label="Conform password"
                        type="password" id="password2" autoComplete="new-password" 
                        value={formData.password2} error={Perrors.passError} onKeyUp={checkPassError}
                        helperText={Perrors.passMsg} onChange={e => onChange(e)} size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel size="small" sx={{fontSize: '9px'}}
                        control={<Checkbox value="allowExtraEmails" color="primary" size="small" />}
                        label="Send me the latest news about real estate and tips to buy or sell properties."
                        />
                    </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, p:1 }} >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2" onClick={swipContent} sx={{fontSize: 'clamp(12px, 2vw, 15px)'}}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
   
    </>
  );
}

export default Register;