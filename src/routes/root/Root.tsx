import Navbar from './../layout/Navbar'
import { Outlet } from 'react-router-dom'
import { Box, debounce } from '@mui/material'
import { useEffect } from 'react'
import saveState, { loadState } from '../../utils/storage'
import { store } from '../../store'

store.subscribe(
    debounce(() => {
        saveState(store.getState())
        console.log('state saved')
    }, 500)
)

export default function Root() {
    
    useEffect(() => {
        loadState()
    })

    return (
        <Box>
            <Navbar/>
            <Outlet/>
        </Box>
    )
}