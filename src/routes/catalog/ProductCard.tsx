import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store";
import { formatCurrency } from "../../utils/formatCurrency";
import { colorStyles } from "../../utils/theming/colors";


export default function ProductCard(props: {product: ShopifyBuy.Product}) {
    //used to create Link to Product Page
    const id = props.product.id.toString().substring(22)
    const { client, cart } = useAppSelector(state => state.shopify)
    const [clicked, setClicked] = useState({click: false, index: 0, src: ''});
    const [imgSrc, setImgSrc] = useState("")
    const open = Boolean(imgSrc !== "")
    //this error is okay
    //@ts-ignore
    const price = formatCurrency(props.product.variants.at(0)?.price.amount)
    let mappedColors

    const colors = props.product.options.find(opt => opt.name === "Color")?.values

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        const img = event.currentTarget.getAttribute('data-remove')
        setImgSrc(img!)
    };
    const handlePopoverClose = () => {
        if(!clicked.click){
            setImgSrc("")
        }
    };

    if(colors){
        const boxWidth = `${100/colors.length}%`
        mappedColors = colors.map((color, index) => {
            const imgUrl = props.product.variants.at(index)?.image.src
            const colorStyle = colorStyles.find(col => col.names.includes(color.value))?.value
            return(
                <Box
                    key={index}
                    data-remove={imgUrl}
                    component='div'
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onClick={() => {
                        setClicked({
                            click: clicked.click ? (clicked.index !== index ? true : false) : true, 
                            index: index, 
                            src: imgUrl!
                        })
                        setImgSrc(imgUrl!)
                    }}
                    onMouseEnter={clicked.click ? undefined : handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    sx={{
                        ...colorStyle,
                        width: boxWidth,
                        height: clicked.click && clicked.index === index ? '25px' : '20px',
                        mt: clicked.click && clicked.index === index ? '-5px' : '0px',
                        "&:hover": {
                            height: '25px',
                            border: 1,
                            mt: '-5px' // move the box up by 5px
                        }
                    }} 
                />
            )
        })
    }

    
    const handleAddToCart = async () => {
        const vid = props.product.variants.at(0)!.id
        const lineItemsToAdd = [{
            variantId: vid,
            quantity: 1,
        }]
        if(cart && client){let cid;
            //Error is okay. ShopifyBuy.Cart has no cart.id.value property, but the API returns a Scalar: {type: {<info>}, value: <value>}.
            //@ts-ignore
            if(cart.id.value){
                //@ts-ignore
                cid = cart.id.value as string
            } else {
                cid = cart.id as string
            }
            await client.checkout.addLineItems(cid, lineItemsToAdd).then(() =>{
                //console.log(checkout.lineItems)
            }).catch((error) =>{
                console.log(error)
            })
        }
    }

    return (
        <Box width="30vh" borderRadius={0}>
            <Card>
                <CardMedia
                    component="div"
                >
                    <Box
                        component="img"
                        alt={props.product.title}
                        src={open ? imgSrc : props.product.images.at(0)?.src}
                        sx={{
                            height: "30vh",
                            width: "30vh"
                        }}
                    />
                    <Stack direction='row'>
                        {mappedColors}
                    </Stack>
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
                        <Button variant="contained" size='small' onClick={handleAddToCart}>
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