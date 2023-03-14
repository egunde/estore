import { Box, Grid } from '@mui/material'
import { useAppSelector } from '../../utils/hooks'
import ProductCard from './ProductCard'

export default function Catalog() {
    const { products } = useAppSelector(state => state.shopify)
    let mappedProducts

    //Create a grid of cards
    if(products) {
        mappedProducts = products.map((product, index) => {
            return (
                <Grid item key={index}>
                    <ProductCard product={product} />
                </Grid>
            )
        })
    }
    
    return (
        <Box p='10vh'>
            <Grid 
                container 
                rowSpacing={1} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {mappedProducts}
            </Grid> 
        </Box>
        
    )
}

