import { Box, Button, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../utils/hooks'
import { formatCurrency } from '../utilities/formatCurrency'


export default function ProductPage() {
    const { products } = useAppSelector(state => state.shopify)
    //use the id given by the URL to find the product
    const { id } = useParams<"id">()
    const product = products?.find(product => product.id === `gid://shopify/Product/${id}`)

    //this error is okay
    //@ts-ignore
    const price = formatCurrency(product.variants.at(0)?.price.amount)
    
    return (
        <Box p='10vh'>
            <Stack>
                <Stack direction='row' spacing={4}>
                    <Box
                        component='img'
                        src={product?.images.at(0)?.src}
                        height='50vh'
                    />
                    <Box>
                        <Typography variant='h3'>
                            {product?.title} | {price}
                        </Typography>
                        <Typography>
                            {product?.description}
                        </Typography>
                        <Button variant='contained'>
                            BUY
                        </Button>
                    </Box>
                </Stack>
            </Stack>
        </Box>
        
    )
}

