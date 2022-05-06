import { Theme } from '@mui/material/styles'

const Autocomplete = (theme: Theme) => ({
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.shadows[7]
        }
      }
    }
})
  
export default Autocomplete
