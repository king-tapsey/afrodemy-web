import { Button, Container, CssBaseline, Divider, Grid, Stack, ThemeProvider, Typography, duration } from '@mui/material';
import { DivWithFullScreenSizeImage, ResponsiveAppBar, HomeCard, PlainDiv, Testimonials } from '../components';
import backgroundImage from '../images/students-background.jpg'
import RightIcon from '@mui/icons-material/ChevronRightRounded';
import Footer from '../components/footer/Footer';

const cardData = [
  {
    "heading": "Ask questions in the forum",
     "subText": "You will not get confused alone. Ask questions in the main forum, or course dedicated forums " +
                "and get answers from a community of tutors and fellow students!"
  },
  {
    "heading": "Showcase your discoveries in flex-center",
    "subText": "Just discovered something, or finished working on an amazing project? Why not write a whole article " +
                "and let the whole community learn from you?"
  },
  {
    "heading": "Timely assessments for all learning material",
    "subText": "We have assessment excercises at the end of every topic to allow you to mearsure your progress, " +
                "and we are Strict about it too. In the same way, our courses require you to pass a series of " +
                "topic exercises and the final exam before you are granted completion status."
  },
]
const content = ({ theme }) => {
  return(
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
}
const gridContainer = (
  <Grid container 
    spacing={{ xs: 1, }}
    columns={{ xs: 6, md: 8, lg: 12 }}
  >
    {cardData.map((item) => (
      <Grid item xs={6} md={4} lg={4}>
        <HomeCard heading={item.heading} supportingText={item.subText} />
      </Grid>
    ))}
  </Grid>
)

export default function GuestUserHomePage({ colorMode, theme }) {
  const divContent = content({theme})
  
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar colorMode={colorMode} theme={theme} />
        <DivWithFullScreenSizeImage backgroundImage={backgroundImage} theme={theme} childFromParent={divContent} />
        <PlainDiv theme={theme} children={gridContainer} />
        <Container>
          <Typography padding={5} variant='h3' color='primary'>Testimonials</Typography>
        </Container>
        <PlainDiv theme={theme} children={<Testimonials />} />
        <Divider />
        <Footer />
    </ThemeProvider>
  )
}
