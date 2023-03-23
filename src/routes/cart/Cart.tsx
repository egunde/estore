import { Box, Grid, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../utils/hooks'

export default function Catalog() {
    const { cart } = useAppSelector(state => state.shopify)
    let mappedItems

    //Create a grid of cards
    if(cart) {
        mappedItems = cart.lineItems.map((item, index) => {
            return (
                <Grid item key={index}>
                    <Typography>
                        {item.productId}
                    </Typography>
                </Grid>
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
                    <Link to='../login'>
                        <Typography>
                            Please Log In to View Your Cart
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        )
    }
    
    return (
        <Box p='10vh'>
            <Grid 
                container 
                rowSpacing={1} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {mappedItems}
            </Grid> 
        </Box>
        
    )
}

