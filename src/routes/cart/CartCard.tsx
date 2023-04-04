import { Button, Card, CardContent, CardMedia, Grid, Stack, Typography, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import { CHECKOUT_CREATED } from "../../store/shopify/types";
import { formatCurrency } from "../../utils/formatCurrency";

const StyledCard = styled(Card)({
    display: 'flex',
    raised: true,
    color: '#000',
    backgroundColor: '#f5f5f5',
    height: 200,
    width: '80%',
    '.MuiCardMedia-root': {
        backgroundColor: '#fff',
        width: '200px',
        height: '200px',
        objectFit: 'contain',
        justifyContent: 'center',
        alignContent: 'center'
    },
    '.MuiCardContent-root': {
        textAlign: 'center',
        fontWeight: '500',
    },
    '.MuiButtonBase-root': {
        color: '#000',
    }
})

export default function CartCard(props: {item: ShopifyBuy.LineItem}) {
    const dispatch = useAppDispatch();
    const { client, cart } = useAppSelector(state => state.shopify)
    //this error is okay
    //@ts-ignore
    const price = formatCurrency((props.item.variant.price.amount as number) * props.item.quantity)


    const handleAddToCart = async () => {
        const itemId = [props.item.id as string]
        if(cart && client){
            let cid;
            //Error is okay. ShopifyBuy.Cart has no cart.id.value property, but the API returns a Scalar: {type: {<info>}, value: <value>}.
            //@ts-ignore
            if(cart.id.value){
                //@ts-ignore
                cid = cart.id.value as string
            } else {
                cid = cart.id as string
            }

            client.checkout.removeLineItems(cid, itemId).then((checkout) => {
                dispatch({ type: CHECKOUT_CREATED, payload: {cart: checkout}});
            });
        }
    }

    return (
            <StyledCard>
                <Grid container justifyContent='space-between' sx={{width: '100%'}}>
                    <Grid item xs={4}>
                        <CardMedia
                            component="img"
                            //@ts-ignore
                            src={props.item.variant.image.src}
                            sx={{
                                width: '200px',
                                height: '200px'
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {props.item.title}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            Quantity: {props.item.quantity}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            {price}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack direction='row' spacing={2}>
                            <Button variant="contained" size='small' onClick={handleAddToCart}>
                                Remove From Cart
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </StyledCard>
    );
}