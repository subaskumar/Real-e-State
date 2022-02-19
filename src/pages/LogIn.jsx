import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,
        Link,Grid,Box,Typography,Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Register from './Register';
import { useDispatch } from "react-redux";
import { openModal, closeModal} from '../features/modalSlice'
// import {useNavigate} from 'react-router-dom';
import Axios from 'axios'
import {useState} from "react"
import { loginPending, loginSuccess, loginFail } from "../features/Auth/loginSlice"
import { setSnackBar } from '../features/Alert/snackBarSlice'

import jwt_decode from "jwt-decode";
const theme = createTheme();

const LogIn = (props) =>{
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const { isAuthenticated,isLoading, error } = useSelector(state => state.login);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginPending());
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        const body = JSON.stringify({ email, password });

        Axios.post("http://127.0.0.1:8000/api/token/gettoken",  body, config)
            .then((res) => {
               
                localStorage.setItem('user', jwt_decode(res.data.access))
                dispatch(loginSuccess(res.data))
                dispatch(closeModal())
                dispatch(setSnackBar({open: true, message: "User sucess login", type: 'success'}))
            })
            .catch((error) => {
                console.log(error)
                dispatch(loginFail(error.response.data))
                dispatch(setSnackBar({open: true, message: "Invalid Credential", type: 'error'}))

        
            })
    }
    const swipContent = () => {
        dispatch(openModal(<Register />))

        
    }

  return (
    <>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
              <Box sx={{marginTop: 2,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" 
                    autoFocus onChange={(e) => setEmail(e.target.value)} value={email}
                   />
                  <TextField margin="normal" required fullWidth name="password"
                        label="Password" type="password" id="password" autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)} value={password}
                    />
                  <FormControlLabel 
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    />
                  <Button
                        type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2,p:1 }}
                    >
                        Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2" onClick={swipContent}>
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
        </ThemeProvider>
      </>
    )
}

export default LogIn;