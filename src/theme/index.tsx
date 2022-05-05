import { useMemo } from 'react'
// material
import { CssBaseline } from '@mui/material'
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
//components
import palette from './palette'
import typography from './typography'
import componentsOverride from './overrides'
import { customShadows, shadows } from './shadows'

type ThemeProviderProps = {
  children: React.ReactNode,
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows,
    }),
    []
  )

  const theme = createTheme(themeOptions)
  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider 
