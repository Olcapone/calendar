import { useState } from 'react'
// material
import { alpha, useTheme, styled } from '@mui/material/styles'
import { ListItemText, ListItemIcon, ListItemButton } from '@mui/material'
import Iconify from '../shared/Iconify'

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}))

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

type NavItemProps = {
  item: NavItemType
  active: any,
  handleClick: () => void
}

const NavItem = ({ item, active, handleClick }: NavItemProps) => {
  const theme = useTheme()
  const { title, path, icon, info } = item

  const isActiveRoot = active(path)

  const [open, setOpen] = useState<boolean>(isActiveRoot)

  //const handleOpen = () => setOpen((prev) => !prev)

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }

    return (
        <ListItemStyle
          onClick={handleClick}
          sx={{ ...(isActiveRoot && activeRootStyle) }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Iconify
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>
      )
}

export default NavItem
