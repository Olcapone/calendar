import { matchPath, useLocation } from 'react-router-dom'
import { Box, List } from '@mui/material'
import NavItem from './NavigationItem'


type NavSectionProps = {
  navConfig: NavItemType[],
}

const NavSection = ({ navConfig, ...other }: NavSectionProps) => {
  const { pathname } = useLocation();

  const match = (path: string) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
}

export default NavSection
