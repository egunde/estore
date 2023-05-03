import { Box, Button, Fade, Slide, Stack, Typography } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const useStyles = (theme: Theme) => ({
    stepContainer: {
        marginLeft:'200px',
        marginTop: '-100px'
    },
    stepHeading: {
        color: '#fff',
        fontWeight:'bold',
    },
    stepStack: {
        marginTop: '40px'
    },
    kitSelectionBox: {
        height: '100px',
        width: '100px',
        border: '2px dashed',
        borderRadius: 4,
        backgroundColor: theme.palette.primary.main,
    },
    plus: {
        display: 'flex',
        color: '#fff',
        fontWeight: 'bold',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '4px'
    }
})

export default function Home() {
    const theme = useTheme()
    const styles = useStyles(theme);
    const [step, setStep] = useState(1);
    const containerRef = React.useRef(null);

    const KitSelectionBoxes = Array.from(Array(5).keys()).map((index) => {
        return (
            <Box 
                key={index}
                sx={styles.kitSelectionBox}
            >
                
                <Link to='/catalog' style={{textDecoration: 'none'}}> 
                <Typography 
                    variant='h2'
                    sx={styles.plus}
                >   
                    +
                </Typography>
                </Link>
            </Box>
        )
    })

    return (
        <Stack>
            <Box
                sx={{
                    marginTop: '-100px'
                }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill={theme.palette.primary.dark} d="M0,192L60,186.7C120,181,240,171,360,160C480,149,600,139,720,149.3C840,160,960,192,1080,192C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.dark,
                    height: '300px',
                }}
            >
                <Slide direction="left" in={step===1} mountOnEnter unmountOnExit style={{position: 'absolute',zIndex: 0}}>
                    <Box sx={styles.stepContainer}>
                        <Typography variant='h1' sx={styles.stepHeading}>
                            Build Your Kit
                        </Typography>
                        <Button onClick={() => {setStep(step+1)}}>
                            1
                        </Button>
                        <Button onClick={() => {setStep(step-1)}}>
                            -1
                        </Button>
                        <Stack direction='row' spacing={4} sx={styles.stepStack}>
                            {KitSelectionBoxes}
                        </Stack>
                    </Box>
                </Slide>
                <Slide direction="left" in={step===2} mountOnEnter unmountOnExit style={{transform: 'translateY(-300px)',position: 'absolute', marginTop: -100, left: 0, zIndex: 1}}>
                    <Box sx={styles.stepContainer}>
                        <Typography variant='h1' sx={styles.stepHeading}>
                            Build Your Kit
                        </Typography>
                        <Button onClick={() => {setStep(step+1)}}>
                            1
                        </Button>
                        <Button onClick={() => {setStep(step-1)}}>
                            -1
                        </Button>
                        <Stack direction='row' spacing={4} sx={styles.stepStack}>
                            {KitSelectionBoxes}
                        </Stack>
                    </Box>
                </Slide>
            </Box>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill={theme.palette.primary.dark} d="M0,192L60,186.7C120,181,240,171,360,160C480,149,600,139,720,149.3C840,160,960,192,1080,192C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
            </Box>
        </Stack>
    )
}