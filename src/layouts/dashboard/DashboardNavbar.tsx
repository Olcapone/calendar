// material
import { alpha, styled } from '@mui/material/styles'
import { AppBar, Toolbar, IconButton } from '@mui/material'
// components
import Iconify from 'components/shared/Iconify'
import { APP_BAR_DESKTOP, APP_BAR_MOBILE, DRAWER_WIDTH } from '../constants'


const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APP_BAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APP_BAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));


type DashboardNavbarProps = {
  onOpenSidebar: () => void,
}

const DashboardNavbar = ({ onOpenSidebar }: DashboardNavbarProps) => {
  
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      </ToolbarStyle>
    </RootStyle>
  )}

export default DashboardNavbar
