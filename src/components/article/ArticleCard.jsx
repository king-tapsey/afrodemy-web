import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ArticleCard({ article }) {
  return (
    <Box display='block'>
        <Box display='inline-flex'>
            <Typography flexGrow={1} variant='subtitle1'>
                <b>{article.writer}</b> in <b>{article.folder}</b>
            </Typography>
            <Typography variant='captionText'>{article.estimatedReadingTime}</Typography>
        </Box>
        <Box display='block'>
            <Typography variant='p'>{article.title}</Typography>
        </Box>
    </Box>
  )
}
