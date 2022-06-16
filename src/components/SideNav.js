import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const drawWidth = 240

export default function SideNav() {

    const navItems = [
        {
            text: "My Notes",
            icon: <SubjectOutlinedIcon color='secondary' />,
            path: '/'
        },
        {
            text: "Create Note",
            icon: <AddCircleOutlineOutlinedIcon color='secondary' />,
            path: '/create'
        }
    ]

    const navigate = useNavigate()
    const location = useLocation()

    const checkActive = (path) => {
        if (path === location.pathname) {
            return "#f4f4f4"
        }
    }

    return (
        <div>
            <Drawer sx={{
                width: drawWidth,
            }}
                variant={'permanent'}
                anchor={'left'}
                PaperProps={{
                    sx: {
                        width: drawWidth
                    }
                }}
            >
                <div>

                    <Typography variant='h5' sx={{
                        padding: {
                            sm: 3
                        }
                    }}>
                        De Notes
                    </Typography>
                </div>
                <div>
                    <List>
                        {navItems.map(item => (
                            <ListItemButton key={item.text} sx={{ backgroundColor: checkActive(item.path) }}>
                                <ListItem onClick={() => navigate(item.path)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>{console.log(item.path)}
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            </ListItemButton>
                        ))}
                    </List>
                </div>


            </ Drawer >
        </div>
    )
}
