import { Box, Link, Typography } from '@mui/material'
import logo from '../../images/afrosoft-logo-text-only.png'

export default function Footer() {
    return (
        <Box padding={5} display='inline-flex'>
            <Typography component='p' >Powererd by</Typography>
            <Link href='www.afrosoft.co.zw' target='_blank' rel='noopener' underline='none'>
                <img src={logo} style={{height: '1.5em', mx: 'auto'}} alt='' />
            </Link>
        </Box>
    )
}
