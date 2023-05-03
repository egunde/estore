import { Box, ThemeProvider, createTheme, debounce } from '@mui/material'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { store } from '../../store'
import saveState, { loadState } from '../../utils/storage'
import Navbar from './../layout/Navbar'
import GoldmanSansWRgWoff2 from '../../utils/theming/fonts/GoldmanSans_W_Rg.woff2'

/*
*   First element rendered by React Router
*   Also retrieves the state from localStorage when rendered
*/

const theme = createTheme({
    palette: {
      primary: {
        main: '#a835ef',
      },
      secondary: {
        main: '#ffbb00',
      },
    },
    typography: {
      fontFamily: GoldmanSansWRgWoff2,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'GoldmanSansWRgWoff2',
            font-style: normal,
            font-weight: 400,
            src: local('GoldmanSans Regular'), url('/fonts/GoldmanSans_W_Rg.woff2') format('woff2')
          }
        `
      }
    }
  });

store.subscribe(
    debounce(() => {
        saveState("redux", store.getState())
        console.log('state saved')
    }, 500)
)

export default function Root() {
    
    useEffect(() => {
        loadState("redux")
    })

    return (
        <Box>
            <ThemeProvider theme={ theme }>
                <Navbar/>
                <Outlet/>
            </ThemeProvider>
        </Box>
    )
}