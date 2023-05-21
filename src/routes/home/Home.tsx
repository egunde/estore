import { Box, Stack, useTheme } from '@mui/material';
import KitBuilder from './KitBuilder';


export default function Home() {
    const theme = useTheme();
    

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
                <KitBuilder/>
            </Box>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill={theme.palette.primary.dark} d="M0,192L60,186.7C120,181,240,171,360,160C480,149,600,139,720,149.3C840,160,960,192,1080,192C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
            </Box>
        </Stack>
    )
}