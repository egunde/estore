import { Box, Button, Card, CardActions, CardContent, CardMedia, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utilities/formatCurrency";



export default function ProductCard(props: {product: ShopifyBuy.Product}) {
    const [page, setPage] = useState(1)
    //used to create Link
    const id = props.product.id.toString().substring(22)
    //this error is okay
    //@ts-ignore
    const price = formatCurrency(props.product.variants.at(0)?.price.amount)

    const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        console.log(value)
    };

    return (
        <Box width="30vh">
            <Card>
                <CardMedia
                    component="div"
                >
                    <Box
                        component="img"
                        alt={props.product.title}
                        src={props.product.images.at(page-1)?.src}
                        sx={{
                            height: "30vh",
                            width: "30vh"
                        }}
                    />
                    <Pagination 
                        count={props.product.images.length} 
                        siblingCount={0} 
                        page={page} 
                        onChange={handlePage}
                    />
                </CardMedia>
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