import { Theme } from '@mui/material/styles'
// components
import Card from './Card'
import Paper from './Paper'
import Input from './Input'
import Button from './Button'
import IconButton from './IconButton'
import Tooltip from './Tooltip'
import Backdrop from './Backdrop'
import Typography from './Typography'
import CssBaseline from './CssBaseline'
import Autocomplete from './Autocomplete'


const ComponentsOverrides = (theme: Theme) => Object.assign(
    Card(theme),
    Input(theme),
    Paper(),
    Button(theme),
    IconButton(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    CssBaseline(),
    Autocomplete(theme)
)

export default ComponentsOverrides
