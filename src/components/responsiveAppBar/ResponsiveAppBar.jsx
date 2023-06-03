import { useState } from 'react'
import { AppBar, Box, Button, Container, CssBaseline, Divider, Drawer, IconButton } from '@mui/material'
import { Link, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import logo from '../../images/afrocodemy-logo.png'
import logoDarkTheme from '../../images/afrocodemy-logo-dark.png'
import pages from './AppBarData.json'
import AccountAvatar from '../accountAvatar/AccountAvatar';

function ResponsiveAppBar({ colorMode, theme }) {
    const [open, setOpen] = useState(false)

    const handleOpenDrawer = () => {
        setOpen(true)
    }
    const handleCloseDrawer = () => {
        setOpen(false)
    }
    
    
    const  DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0,1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    }))

    return (
        <AppBar position="static" color="inherit">
            <CssBaseline />
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenDrawer}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            // width='50%'
                            // flexGrow={1}
                            anchor="left"
                            open={open}
                            onClose={handleCloseDrawer}
                            sx={{ width: 500, flexGrow: 1, boxSizing: 'border-box' }}
                        >
                            <DrawerHeader>
                                <IconButton onClick={handleCloseDrawer}>
                                    <ChevronLeftIcon />
                                </IconButton>
                            </DrawerHeader>
                            <Divider />
                            {pages.map((page) => (
                                <ListItem key={page.id} disablePadding>
                                    <ListItemButton href={page.routesTo} >
                                        <ListItemText primary={page.name}  />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemButton href='/settings'>
                                    <ListItemText primary="SETTINGS" />
                                </ListItemButton>
                            </ListItem>
                        </Drawer>
                    </Box>
                    <Link href="/" underline='none' 
                        sx={{ 
                            flexGrow: 0,
                            display: {xs: 'block', md: 'flex' }
                        }}
                    >
                        <img 
                            src={theme.palette.mode === 'light' ? logo : logoDarkTheme} 
                            style={{ height: '4em' }} 
                            alt=''
                        />
                    </Link>
                    <Typography sx={{ flexGrow: 1 }} />
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, mr: 3 }}>
                        {pages.map((page) => (
                            <Button
                                size='large'
                                key={page.id}
                                href={page.routesTo}
                                sx={{ marginY: 0,  display: 'inline-flex' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <IconButton sx={{ ml: 1, mr: 2 }} onClick={colorMode.toggleColorMode} color='inherit'>
                        {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                    <AccountAvatar signedInUser='Tapiwa Magondo' profileImageUrl="/static/images/avatar/2.jpg" />
                </Toolbar>
            </Container>
        </AppBar>
    )

}
export default ResponsiveAppBar