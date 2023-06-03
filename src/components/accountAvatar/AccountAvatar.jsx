import { useState } from 'react'
import { Menu, MenuItem, Tooltip, Box, Typography, Avatar, IconButton } from '@mui/material'
import settings from './AppBarSettings.json'

export default function AccountAvatar({ signedInUser, profileImageUrl }) {
    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }
    const handleNavigation = (navlink) => {

    }

    return (
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex'} }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={signedInUser} src={profileImageUrl} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting.id} onClick={handleNavigation(setting.routesTo)}>
                        <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}
