import { createContext, useMemo, useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import GuestUserHomePage from './pages/GuestUserHomePage';

const ColorModeContext = createContext({ toggleColorMode: () => {} })

function App() {
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const[mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light')
    },
  }),[])

  const paletteChooser = (mode) => ({
    palette: {
      mode, ...(mode === 'light')
        ? {
          primary: {
            main: "#6A0000",
          },
          secondary: {
            main: "#191B4C"
          }
        }
        : {
          primary: {
            main: "#9f5b5b",
          },
          secondary: {
            main: "#6b6c8b"
          }
        }
    }
  })

  const theme = useMemo( () =>
    createTheme(
      paletteChooser(mode), [mode]
    )
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
       <div className="App">
        <GuestUserHomePage colorMode={colorMode} theme={theme} />
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
