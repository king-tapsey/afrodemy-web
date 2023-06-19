import React from 'react'
import testimonies from './TestimonialsData.json'
import Testimonial from './Testimonial'
import { Grid } from '@mui/material'

export default function Testimonials({ testimonials }) {
    return (
        <Grid container
            spacing={{ xs: 1 }}
            columns={{ xs: 6, md: 8, lg: 12 }}
        >
            {testimonies.map((testimony) => (
                <Grid item xs={6} md={4} lg={4}>
                    <Testimonial testimonial={testimony} />
                </Grid>
            ))}
        </Grid>
    )
}
