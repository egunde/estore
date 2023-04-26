import Navbar from './../layout/Navbar'
import { Outlet } from 'react-router-dom'
import { Box, debounce } from '@mui/material'
import { useEffect } from 'react'
import saveState, { loadState } from '../../utils/storage'
import { store } from '../../store'

/*
*   First element rendered by React Router
*   Also retrieves the state from localStorage when rendered
*/

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
            <Navbar/>
            <Outlet/>
        </Box>
    )
}