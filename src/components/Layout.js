
import { Box } from '@mui/material'
import React from 'react'
import SideNav from './SideNav'


export default function Layout(props) {


    return (


        <Box sx={{ display: 'flex' }}>
            <Box>
                <SideNav />
            </Box>
            <Box sx={{
                backgroundColor: '#f9f9f9',
                width: '100%',
                padding: {
                    sm: 3
                }
            }}>
                {props.children}
            </Box>
        </Box>
    )
}
