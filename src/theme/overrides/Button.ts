import { Theme } from '@mui/material/styles'

const Button = (theme: Theme) => ({
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none'
          }
        },
        sizeLarge: {
          height: 48
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.shadows[7],
          '&:hover': {
            backgroundColor: theme.palette.grey[400]
          }
        },
        containedPrimary: {
          boxShadow: theme.shadows[7]
        },
        containedSecondary: {
          boxShadow: theme.shadows[7]
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }
      }
    }
})
  
export default Button
