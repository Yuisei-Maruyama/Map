import React from 'react'
import { createStyles, createMuiTheme, makeStyles, Theme, MuiThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { Menu } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#78C5DC',
    },
    secondary: {
      main: '#f06292',
    },
    text: {
      primary: '#ffffff',
    },
    type: 'dark',
  },
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    }
  })
)

const options = ['All', 'Food', 'Art', 'Cafe']

const ITEM_HEIGHT = 48

const Header: React.FC = ({ children }) =>  {
  const classes = useStyles()
  // const [isOpenDrawer, setDrawerState] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="default"
              aria-label="menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
            <Typography variant="h6" className={classes.title} color="textPrimary">
              MY Maps
            </Typography>
            <Button color="default">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  )
}

export default Header
