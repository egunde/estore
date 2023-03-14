import styled from '@emotion/styled'
import { Card, CardContent, CardMedia, Grid, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { Link, Outlet } from 'react-router-dom'

const StyledCard = styled(Card)({
    raised: true,
    color: '#fafafa',
    backgroundColor: '#004a9f',
    height: 250,
    width: 200,
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
        //fontFamily: theme.
    },
    '.MuiButtonBase-root': {
        color: '#000',
    }
})

export default function Home() {

    return (
    <Stack>
        <Box
            component='img'
            alt='Banner Graphic'
            display='flex'
            src="images/first-sale-banner.png"
            sx={{
                width: '100%',
                height: '100%',
                padding: 0,
                margin: 0,
            }}
        />
        <Grid 
            container
            justifyContent='center'
            spacing={4}
            sx={{
                width: '100%',
                margin: 0,
                height: 500,
            }}
        >
            <Grid item sx={{width: '250px', height: '100px'}}>
                <Link
                    to='/catalog'
                    style={{textDecoration: 'none'}}
                >
                    <StyledCard>
                        <CardMedia 
                            component="img"
                            height="180"
                            alt="category image"
                            src="images/product5.png"   
                        />
                        <CardContent>
                            Desk
                        </CardContent>
                    </StyledCard>
                </Link>
            </Grid>
            
            <Grid item sx={{width: '250px', height: '100px'}}>
                <Link
                    to='/catalog'
                    style={{textDecoration: 'none'}}
                >
                    <StyledCard>
                        <CardMedia 
                            component="img"
                            height="180"
                            alt="category image"
                            src="images/product10.png"
                        />
                        <CardContent>
                            Drinkware
                        </CardContent>
                    </StyledCard>
                </Link>
            </Grid>

            <Grid item sx={{width: '250px', height: '100px'}}>
                <Link
                    to='/catalog'
                    style={{textDecoration: 'none'}}
                >
                    <StyledCard>
                        <CardMedia 
                            component="img"
                            height="180"
                            alt="category image"
                            src="images/product15.png"
                        />
                        <CardContent>
                            Productivity
                        </CardContent>
                    </StyledCard>
                </Link>
            </Grid>

            <Grid item sx={{width: '250px', height: '100px'}}>
                <Link
                    to='/catalog'
                    style={{textDecoration: 'none'}}
                >
                    <StyledCard>
                        <CardMedia 
                            component="img"
                            height="180"
                            alt="category image"
                            src="images/product20.png"
                        />
                        <CardContent>
                            Art & Decor
                        </CardContent>
                    </StyledCard>
                </Link>
            </Grid>

            <Grid item sx={{width: '250px', height: '100px'}}>
                <Link
                    to='/catalog'
                    style={{textDecoration: 'none'}}
                >
                    <StyledCard>
                        <CardMedia 
                            component="img"
                            height="180"
                            alt="category image"
                            src="images/product25.png"   
                        />
                        <CardContent>
                            Apparel
                        </CardContent>
                    </StyledCard>
                </Link>
            </Grid>
        </Grid>
        <Outlet />
        </Stack>
    )
}