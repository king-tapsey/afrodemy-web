import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'

export default function ArticleComment({ username, comment, commentTime }) {
  return (
    <Box display='block' flexShrink={0} sx={{ border: `1px solid ${theme.palette.primary.dark}` }}>
        <Box display='inline-flex'>
            <Typography component='h2' variant='subtitle1'>
                {username}
            </Typography>
            <Typography component='h3' variant='body2'>
                {commentTime}
            </Typography>
            <IconButton /> {/*functionality for editing posts to be added later*/}
        </Box>
        <Typography component='body1' variant='body1'>
            {comment}
        </Typography>
        {/*add buttons for replying and etc*/}
    </Box>
  )
}
