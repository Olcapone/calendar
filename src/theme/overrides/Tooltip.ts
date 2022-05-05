import { Theme } from '@mui/material/styles'

const Tooltip = (theme: Theme) => ({
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
})
  
export default Tooltip
