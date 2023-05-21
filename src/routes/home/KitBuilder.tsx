import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Stack, Step, StepLabel, Stepper, Theme, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = (theme: Theme) => ({
    stepContainer: {
        marginLeft:'200px',
        //marginTop: '-100px'
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

export default function KitBuilder() {
    const theme = useTheme()
    const styles = useStyles(theme);
    const [step, setStep] = useState(0)
    const stepLabels = ['Size', 'Build', 'Ship']
    
    const kitSelectionBoxes = Array.from(Array(5).keys()).map((index) => {
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


    const steps = (currentStep: number) => {
        switch (currentStep) {
            case 0:
                return (
                    <Box sx={styles.stepContainer} key={0}>
                        <Typography variant='h1' sx={styles.stepHeading}>
                            Select A Size
                        </Typography>
                        <Stack direction='row' spacing={4} sx={styles.stepStack}>
                            {kitSelectionBoxes}
                        </Stack>
                    </Box>)
                break;
            case 1:
                return (
                    <Box sx={styles.stepContainer} key={1}>
                        <Typography variant='h1' sx={styles.stepHeading}>
                            Build Your Kit
                        </Typography>
                        <Stack direction='row' spacing={4} sx={styles.stepStack}>
                            {kitSelectionBoxes}
                        </Stack>
                    </Box>)
                break;
            case 2:
                return (
                    <Box sx={styles.stepContainer} key={1}>
                        <Typography variant='h1' sx={styles.stepHeading}>
                            Checkout
                        </Typography>
                        <Stack direction='row' spacing={4} sx={styles.stepStack}>
                            {kitSelectionBoxes}
                        </Stack>
                    </Box>)
            default:
                return (
                    <Box sx={styles.stepContainer} key={1}>
                        <Typography variant='h1' sx={styles.stepHeading}>
                            NOT A STEP {step}
                        </Typography>
                    </Box>)
                break;
        }
    }

    const mappedSteps = stepLabels.map((name, index) => {
        return (
            <Step key={index}>
                <StepLabel>{name}</StepLabel>
            </Step>
        )
    })

    const handleNext = () => {
        setStep(step+1)
    }

    const handleBack = () => {
        setStep(step-1)
    }

    const handleReset = () => {
        setStep(0)
    }

    return(
        <Box>
            <Box sx={{
                        maxWidth: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '-100px',
                    }}>
                <Stepper
                    activeStep={step}
                    sx={{width: '100vh'}}
                >
                    {mappedSteps}
                </Stepper>
            </Box>
            {step === stepLabels.length ? (
                <Box>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </Box>
            ) : (
                <Stack direction='row' sx={{justifyContent: 'center', padding: 'auto'}}>
                    <Box sx={{width: '25%'}}/>
                    <Button
                        disabled={step === 0}
                        onClick={handleBack}
                    >
                        <ArrowBackIosNewIcon/>
                    </Button>
                    {steps(step)}
                    <Box sx={{width: '25%'}}/>
                        <Button onClick={handleNext} >
                            <ArrowForwardIosIcon/>
                        </Button>
                    <Box sx={{width: '25%'}}/>
                </Stack>
            )}
        </Box>
    )
}