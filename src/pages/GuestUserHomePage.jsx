import { Button, Container, CssBaseline, Stack, ThemeProvider, Typography, duration } from '@mui/material';
import { DivWithFullScreenSizeImage, ResponsiveAppBar } from '../components';
import backgroundImage from '../images/students-background.jpg'
import RightIcon from '@mui/icons-material/ChevronRightRounded';

export default function GuestUserHomePage({ colorMode, theme }) {
  const content =  (
    <Container 
      spacing={2} 
      sx={{
        display:'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height:'100vh',
      }}
    >
      <Stack 
        alignItems='center' 
        spacing={2} 
        sx={{ 
          mx: {xs: 'auto', md: '20%'},
          backgroundColor: `${theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'transparent'}`,
          borderRadius: '25px',
          paddingBottom: '5px'
        }}
      >
        <Typography
          component='h1'
          variant='h5'
          paddingX={2}
          color='secondary'
        >
          Learning from industry experts
        </Typography>
        <Typography
          component='p'
          variant='body1'
          sx={{ 
            mx: { xs: 'auto', md: '20%'}, 
          }}
        >
          It makes a difference when you are learning from an industry expert. 
          You get to learn the best practices from the word go, and as a developer, 
          there's nothing more important!
        </Typography> 
        <Button 
          variant='contained' 
          color='secondary' 
          size='large' 
          endIcon={<RightIcon />} 
          sx={{ 
            borderRadius: '50px',
          }}
        >
          Register now
        </Button>
      </Stack>
    </Container>
  )
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar colorMode={colorMode} theme={theme} />
        <DivWithFullScreenSizeImage backgroundImage={backgroundImage} theme={theme} childFromParent={content} />
    </ThemeProvider>
  )
}
