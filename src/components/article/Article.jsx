import { Box } from '@mui/material'
import React from 'react'

export default function Article({ title, article }) {

  return (
    <Box display='block'>
      <div>
        {title}
      </div>
      <div>
        {article}
      </div>
    </Box>
  )
}
