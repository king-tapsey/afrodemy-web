import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";

export default function PlainDiv({ theme, children }) {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width='auto' height='auto'>
            {children}
        </Box>
    </ThemeProvider>
  )
}
