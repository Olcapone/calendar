import { CssBaseline } from '@mui/material'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import Router from 'routes'
import theme from 'theme'


const App: React.FC = (): JSX.Element => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </StyledEngineProvider>
)

export default App
