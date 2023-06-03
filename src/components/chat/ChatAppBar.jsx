import { AppBar, Box, Button, Container, IconButton, Menu, Typography } from '@mui/material'
import BackIcon from '@mui/icons-material/ArrowBack'
import AudioCallIcon from '@mui/icons-material/AddIcCall'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import { useState } from 'react'

export default function ChatAppBar({ chatProps }) {
    const [onlineStatus, setOnlineStatus] = useState('')
    const [anchorEl, setAnchorEl] = useState(null)

    const openPreviousPage = (previousPage) => {
        //TODO
    }
    const openChatDetails = () => {
        //TODO
    }
    const startAudioCall = () => {
        //TODO
    }
    const startVideoCall = () => {
        //TODO
    }

    return (
        <AppBar position='static'>
            <Container display='inline-flex'>
                <IconButton 
                    edge='start' 
                    color='inherit' 
                    aria-label='go back'
                    onClick={openPreviousPage}
                    sx={{ mx: 2 }}
                >
                    <BackIcon />
                </IconButton>
                <Button flexGrow={1} onClick={openChatDetails}>
                    <Box display='block'>
                        <Typography component='p'>{chatProps.chatName}</Typography>
                        {chatProps.chatType === 'individualChat' ? 
                            <Typography variant='caption'>{onlineStatus}</Typography> :
                            <Typography variant='caption'>{chatProps.groupMembers}</Typography>
                        }
                    </Box>
                </Button>
                <IconButton onClick={startAudioCall} sx={{ px: 2 }}>
                    <AudioCallIcon />
                </IconButton>
                <IconButton onClick={startVideoCall} sx={{ px: 2 }}>
                    <VideoCallIcon />
                </IconButton>
            </Container>
        </AppBar>
    )
}
