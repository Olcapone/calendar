import { matchPath, useLocation, useNavigate } from 'react-router-dom'
import { Box, List } from '@mui/material'
import NavItem from './NavigationItem'


type NavSectionProps = {
  navConfig: NavItemType[],
}

const NavSection = ({ navConfig, ...other }: NavSectionProps) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const match = (path: string) => (path ? !!matchPath({ path, end: false }, pathname) : false)

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} handleClick={() => navigate(item.path, { replace: true })} />
        ))}
      </List>
    </Box>
  );
}

export default NavSection
