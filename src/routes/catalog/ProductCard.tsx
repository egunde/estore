import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utilities/formatCurrency";



export default function ProductCard(props: {product: ShopifyBuy.Product}) {
    //used to create Link
    const id = props.product.id.toString().substring(22)
    //this error is okay
    //@ts-ignore
    const price = formatCurrency(props.product.variants.at(0)?.price.amount)

    return (
        <Box width="30vh">
            <Card>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    image={props.product.images.at(0)?.src}
                    sx={{
                        height: "30vh",
                        width: "30vh"
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {props.product.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                    {price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Stack direction='row' spacing={2}>
                        <Button variant="contained" size='small'>
                            Add To Cart
                        </Button>
                        <Link 
                            to={`product/${id}`} 
                            state={{backgroundLocation: location}}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button variant="contained" size='small'>
                                See More
                            </Button>
                        </Link>
                    </Stack>
                </CardActions>
            </Card>
        </Box>
    );
}