import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CHECKOUT_CREATED } from '../../store/shopify/types';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import CartCard from './CartCard';


export default function Catalog() {
    const dispatch = useAppDispatch();
    const { client, cart } = useAppSelector(state => state.shopify);
    let mappedItems;

    useEffect(() => {
        updateCart();
    }, [])

    const updateCart = async () => {
        if(cart && client){
            let cid;
            /*
            Errors for cart.id.value are okay.
            When the cart is created, it has a cart.id property based on the ShopifyBuy.Cart,
            but the Storefront API returns the GraphQL version which contains a cart.id.value and cart.id.type properties.
            */
            //@ts-ignore
            if(cart.id.value){
                //@ts-ignore
                cid = cart.id.value as string
            } else {
                cid = cart.id as string
            }
            await client.checkout.fetch(cid).then((checkout) => {
                dispatch({ type: CHECKOUT_CREATED, payload: {cart: checkout}});
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    //Create a grid of cards
    if(cart && cart.lineItems.length > 0) {
        mappedItems = cart.lineItems.map((item, index) => {
            return (
                <CartCard key={index} item={item}/>
            )
        })
    } else {
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
                    <Link to='../catalog'>
                        <Typography>
                            Please Add Items to View Your Cart
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        )
    }

    return (
        <Box p='10px'>
            <Stack 
                    justifyContent='center'
                    alignItems='center'
                    spacing={4}
                    sx={{
                        width: '100%',
                        margin: 0,
                        marginTop: 5
                    }}
                >
                    {mappedItems}
                    
                    <Grid
                        container
                        direction='row'
                        pr={16}
                        spacing={3}
                        sx={{
                            justifyContent: 'right'
                        }}
                    >
                        <Grid
                            item
                        >
                            <Typography align='left'>
                                Subtotal:
                            </Typography>
                        </Grid>

                        <Grid
                            item
                        >
                            <Typography align='right'>
                                {//@ts-ignore
                                cart?.subtotalPrice.amount}
                            </Typography>
                        </Grid>
                        
                    </Grid>
                    <Button variant="contained" onClick={() => {window.location.href = cart.webUrl}}>
                        Bogus Checkout
                    </Button>
                </Stack>
        </Box>
        
    )
}

