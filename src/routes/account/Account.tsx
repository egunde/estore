import { LoadingButton } from "@mui/lab";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase/Firebase";
import { USER_LOGOUT } from "../../store/user/types";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";



export default function Account() {
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const user = useAppSelector(state => state.user);

    useEffect(() => {
        updateUser()
    }, [])

    //Called in useEffect() to refresh the page and user
    const updateUser = async () => {
        try {
            setIsLoading(true)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    
    //When user clicks logout
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error)
          })
        dispatch({type: USER_LOGOUT, payload: null})
    }

    //If user not logged in
    if(user.id === ''){
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
                    <Link to='../login'>
                        <Typography>
                            Please Log In to View Your Account
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        );
    }

    return (
        <Box>
            <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={4}
                sx={{
                    width: '100%',
                    margin: 0,
                    marginTop: 5
                }}
            >
                <Typography>
                    Welcome: {user.name}
                </Typography>
                <LoadingButton
                    loading={isLoading}
                    onClick={handleLogout}
                    type='submit'
                    variant='contained'
                    sx={{
                        width: '100px'
                    }}
                >
                    Log Out
                </LoadingButton>
            </Stack>
        </Box>
    );
 }