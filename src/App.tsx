import Router from 'routes'
import ThemeProvider from './theme'

const App: React.FC = (): JSX.Element => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
)

export default App
