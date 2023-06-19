import { Avatar, Container, Stack, Typography, Box } from '@mui/material'
import React from 'react'

export default function Testimonial({ testimonial }) {
    return (
        <Container sx={{ width: '100%' }}>
            <Stack 
                spacing={2} 
                paddingX={3} 
                paddingBottom={5}
                alignItems='center'
                direction='column'
                justifyContent='center'
            >
                <Box justifyContent='center' flexGrow={1}>
                    <Avatar alt={testimonial.name} src={testimonial.imageSource} />
                </Box>
                <Typography component='h4' color='primary'>{testimonial.name}</Typography>
                <Typography component='body1'>{testimonial.testimony}</Typography>
            </Stack>
        </Container>
    )
}
