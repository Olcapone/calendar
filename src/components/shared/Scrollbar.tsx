import SimpleBarReact from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'
// @mui
import { alpha, styled } from '@mui/material/styles'


const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}))

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}))


type ScrollbarProps = {
  children: React.ReactNode,
  sx?: SxProps<Theme>,
}

const Scrollbar = ({ children, sx, ...other }: ScrollbarProps) => (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  )

export default Scrollbar
