import { Button, Grid, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { CHECKOUT_CREATED, CHECKOUT_DELETED } from '../../store/shopify/types';
import { useAppDispatch } from '../../utils/hooks';


export default function ThankYou() {
    const dispatch = useAppDispatch()
    const { client } = useAppSelector(state => state.shopify)
    
    useEffect(() => {
        recreateCart()
    }, [])

    const recreateCart = async () => {
        dispatch({type: CHECKOUT_DELETED})
        try {
            const cart = await client?.checkout.create();
            dispatch({ type: CHECKOUT_CREATED, payload: { cart } });
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
                sx={{
                    textAlign: "center"
                }}
            >
                <Typography component="h1" variant="h5">
                    Thank You For Your Purchase
                </Typography>
                
                <Link to='../'>
                    <Button variant="contained">
                        Home
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
}