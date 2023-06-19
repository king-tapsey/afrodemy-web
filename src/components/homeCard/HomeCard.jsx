import React from 'react'
import { Stack, Container, Typography } from '@mui/material'

export default function HomeCard({ heading, supportingText }) {
    return (
        <Container 
            spacing={2} 
            sx={{
                display:'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                paddingTop: '15px'
            }}
        >
            <Stack 
                alignItems='Left' 
                spacing={2} 
                paddingX={3}
            >
                <Typography
                component='h1'
                variant='subtitle1'
                paddingX={1}
                color='primary'
                >
                    {heading}
                </Typography>
                <Typography
                component='p'
                variant='body2'
                sx={{ 
                    mx: { xs: 'auto', md: '20%'}, 
                }}
                >
                    {supportingText}
                </Typography> 
            </Stack>
        </Container>
    )
}
