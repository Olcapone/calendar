// icons
import { Icon } from '@iconify/react'
// @mui
import { Box } from '@mui/material'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'

type IconifyProps = {
  icon: any,
  sx?: SxProps<Theme>,
}

const Iconify = ({ icon, sx, ...other }: IconifyProps) => <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />

export default Iconify