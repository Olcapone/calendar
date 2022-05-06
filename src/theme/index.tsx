// material
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
//components
import palette from './palette'
import typography from './typography'
import componentsOverride from './overrides'
import { shadows } from './shadows'


  const theme = createTheme(
    {
      palette,
      shape: { borderRadius: 8 },
      typography,
      shadows, 
    } 
  )
  
  theme.components = componentsOverride(theme)

export default responsiveFontSizes(theme) 
