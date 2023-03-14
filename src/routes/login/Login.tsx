import GoogleIcon from '@mui/icons-material/Google';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import { getAuth, getRedirectResult, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import app, { signInWithGoogle } from '../../utils/firebase/Firebase';
import { USER_CREATED } from '../../store/user/types';
import { useAppDispatch } from '../../utils/hooks';

const userFields = {
    id: '',
    name: '',
    email: '', 
    password: '',
    isLoading: false,
    message: ''
}

export default function Login() {
    const dispatch = useAppDispatch()
    const auth = getAuth(app)
    const [user, setUser] = useState(userFields)


    useEffect(() => {
        loadUser()
    }, [])

    //Updates user on refresh
    const loadUser = async () => {
        //After signInWithGoogle, collect the result
        getRedirectResult(auth)
        .then(async (userCredential) => {
            if(userCredential){
                dispatch({
                    type: USER_CREATED, 
                    payload: {
                        id: userCredential.user.uid,
                        name: userCredential.user.displayName,
                        email: userCredential.user.email
                    }
                })
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    //Call signInWithGoogle() to redirect
    const handleGoogleLogin = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setUser({...user, isLoading: true})
        if(!auth.currentUser){
            try {
                setUser({...user, isLoading: true})
                signInWithGoogle()
                setUser({...user, isLoading: false})
            } catch (error) {
                console.log(error)
            }
        } else {
            auth.signOut()
        }
        setUser({...user, isLoading: false})
    }


    //Handle form information
    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setUser({...user, isLoading: true})
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            dispatch({type: USER_CREATED, 
                payload: {
                    id: userCredential.user.uid,
                    name: userCredential.user.displayName,
                    email: userCredential.user.email
                }
            })
            setUser({...user, message: `Welcome: ${userCredential.user.displayName}`})
        })
        .catch((error) => {
            console.log(error)
            setUser({...user, message: `${error.message}`})
        })
        setUser({...user, isLoading: false})
    }

    return (
        <Grid 
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }}
        >
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                padding={3}
                component={Paper}
                elevation={4}
                square
                sx={{
                    textAlign: "center"
                }}
            >
                <Typography component="h1" variant="h5">
                    Log In
                </Typography>
                <Typography component="h1" variant="body1">
                    {user.message}
                </Typography>
                <form className="form" noValidate>
                    <TextField
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        value={user.email}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoFocus
                    />
                    <TextField
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        value={user.password}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Box mt={3}/>
                    <LoadingButton
                        loading={user.isLoading}
                        type="submit"
                        variant="contained"
                        onClick={handleSubmit}
                        fullWidth
                    >
                        Submit
                    </LoadingButton>
                    <Box mt={2}/>
                    <LoadingButton
                        loading={user.isLoading}
                        type="submit"
                        variant="contained"
                        onClick={handleGoogleLogin}
                        fullWidth
                        startIcon={<GoogleIcon/>}
                        sx={{
                            backgroundColor: '#de5246',
                            color: '#fff',
                            "&:hover": {
                                backgorundColor: '#929292',
                                opacity: [0.9, 0.8, 0.7]
                            },
                        }}
                    >
                        Log In With Google
                    </LoadingButton>
                    <Box mt={3}/>
                    <Grid item>
                        <Link to="../register">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    <Box mt={3}>
                    </Box>
                </form>
            </Grid>
        </Grid>
    );
}