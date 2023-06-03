import { Box, CssBaseline } from '@mui/material'

export default function DivWithFullScreenSizeImage({ backgroundImage, theme, childFromParent }) {
    const content = childFromParent
    return (
        <Box 
            height='100vh' 
            width='100%' 
            sx={{ 
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: theme.palette.background.default,
                backgroundBlendMode: 'multiply',
            }}
        >
            
            <CssBaseline />
            {content}
        </Box>
    )
}
