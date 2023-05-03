import { Box, ThemeProvider, createTheme, debounce, responsiveFontSizes } from '@mui/material'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { store } from '../../store'
import saveState, { loadState } from '../../utils/storage'
import Navbar from './../layout/Navbar'
import GoldmanSansWBdWoff2 from '../../utils/theming/fonts/GoldmanSans_W_Bd.woff2'
import GoldmanSansWBdItWoff2 from '../../utils/theming/fonts/GoldmanSans_W_BdIt.woff2'
import GoldmanSansWBlkWoff2 from '../../utils/theming/fonts/GoldmanSans_W_Blk.woff2'
import GoldmanSansWItWoff2 from '../../utils/theming/fonts/GoldmanSans_W_It.woff2'
import GoldmanSansWLtWoff2 from '../../utils/theming/fonts/GoldmanSans_W_Lt.woff2'
import GoldmanSansWMdWoff2 from '../../utils/theming/fonts/GoldmanSans_W_Md.woff2'
import GoldmanSansWMdItWoff2 from '../../utils/theming/fonts/GoldmanSans_W_MdIt.woff2'
import GoldmanSansWRgWoff2 from '../../utils/theming/fonts/GoldmanSans_W_Rg.woff2'
import GoldmanSansWThWoff2 from '../../utils/theming/fonts/GoldmanSans_W_Th.woff2'
import GoldmanSansCdWBdWoff2 from '../../utils/theming/fonts/GoldmanSansCd_W_Bd.woff2'
import GoldmanSansCdWRgWoff2 from '../../utils/theming/fonts/GoldmanSansCd_W_Rg.woff2'

/*
*   First element rendered by React Router
*   Also retrieves the state from localStorage when rendered
*/

const theme = createTheme({
    palette: {
      primary: {
        dark: '#6f00a8',
        main: '#a835ef',
        light: '#f4d9ff'
      },
      secondary: {
        main: '#ffbb00',
      },
    },
    typography: {
      fontFamily: [
        GoldmanSansWBdWoff2,
        GoldmanSansWBdItWoff2,
        GoldmanSansWBlkWoff2,
        GoldmanSansWItWoff2,
        GoldmanSansWLtWoff2,
        GoldmanSansWMdWoff2,
        GoldmanSansWMdItWoff2,
        GoldmanSansWRgWoff2,
        GoldmanSansWThWoff2,
        GoldmanSansCdWBdWoff2,
        GoldmanSansCdWRgWoff2,
        ].join(','),
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
responsiveFontSizes(theme)

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