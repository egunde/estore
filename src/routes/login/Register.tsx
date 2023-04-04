import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import { LoadingButton } from '@mui/lab';
import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { USER_CREATED } from '../../store/user/types';
import app from '../../utils/firebase/Firebase';
import { useAppDispatch } from '../../utils/hooks';

const userFields = {
    id: '',
    name: '',
    email: '', 
    password: '',
    confirmPassword: '',
    isLoading: false,
    message: ''
}

export default function Register() {
    const dispatch = useAppDispatch()
    const auth = getAuth(app)
    const { cart } = useAppSelector(state => state.shopify)
    const [ user, setUser ] = useState(userFields)

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        try {
            setUser({...user, isLoading: true})
            createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(async (userCredential) => {
                //need to set name
                await updateProfile(userCredential.user, {
                    displayName: user.name
                })

                //get cartID
                const cid = cart?.id

                //update client
                dispatch({type: USER_CREATED,
                    payload: {
                        id: userCredential.user.uid,
                        name: userCredential.user.displayName,
                        email: userCredential.user.email,
                        cartID: cid
                    }
                })
                setUser({...user, message: `Welcome: ${userCredential.user.displayName}`})
            })
            .catch((error) => {
                console.log(error)
                setUser({...user, message: `${error.message}`})
            })
            setUser({...user, isLoading: false})
        } catch (error) {
            console.log(error)
        }
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
            mt={6}
            sx={{
                textAlign: "center",
                width: '70vh'
            }}
        >
            <Typography component="h1" variant="h5">
                Register
            </Typography>
            <Typography component="h1" variant="body1">
                {user.message}
            </Typography>
            <form className="form" noValidate>
                <TextField
                    onChange={(e) => setUser({...user, name: e.target.value})}
                    value={user.name}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoFocus
                />
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
                    label="Password (6+ characters)"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <TextField
                    onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
                    value={user.confirmPassword}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confirm-password"
                    label="Confirm Password"
                    type="password"
                    id="confirm-password"
                    autoComplete="current-password"
                    error={user.password !== user.confirmPassword}
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
                <Box mt={3}/>
                <Grid item>
                    <Link to="../login">
                    {"Already have an account? Log In"}
                    </Link>
                </Grid>
                <Box mt={3}>
                </Box>
            </form>
        </Grid>
    </Grid>
    );
}