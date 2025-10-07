import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material"
import { theme } from "./theme"

import MainLayout from "./MainLayout"
import ExchangerWrapper from "./components/ExchangerWrapper"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <ExchangerWrapper />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
