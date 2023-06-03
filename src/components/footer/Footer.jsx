import { Container, Link, Typography } from '@mui/material'
import logo from '../../images/afrosoft-logo-text-only.png'

export default function Footer() {
    return (
        <Container padding={5} display='inline'>
            <Typography component='p' padding='1em'>Powererd by</Typography>
            <Link href='www.afrosoft.co.zw' underline='none'>
                <img src={logo} style={{height: '1em'}} alt='' />
            </Link>
        </Container>
    )
}
