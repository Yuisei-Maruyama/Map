import React from 'react'
import { createStyles, createMuiTheme, makeStyles, Theme, MuiThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Menu } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import * as Icons from "@material-ui/icons"
// import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Style from './Header.module.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#34f5a8',
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

// const options = [
//   {
//     disc: 'All',
//     tagName: 'Map'
//   },
//   {
//     disc: 'Food',
//     tagName: 'FastFood'
//   },
//   {
//     disc: 'Art',
//     tagName: 'Museum'
//   },
//   {
//     disc: 'Cafe',
//     tagName: 'LocalCafe'
//   }
// ]

const ITEM_HEIGHT = 48

const Header: React.FC = ({ children }) => {
  const history = useHistory()
  const classes = useStyles()
  // const [isOpenDrawer, setDrawerState] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  // const handleClickOption = (option: string) => {
  //   console.log(option)
  //   this.props.history.push(`/${option}`)
  // }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // const titleStyle = {
  //   textShadow: rgb(9, 177, 110) 0px 0px 8px;
  //   color: rgb(52, 245, 168);
  //   backgroundColor: rgb(15, 16, 17);
  // };

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
              {/* {options.map((option) => (
                <>
                  <MenuItem key={option.disc} onClick={() => history.push(`/${option}`)}>
                    <ListItemIcon>
                      {option.disc}
                    </ListItemIcon>
                  </MenuItem>
                </>
              ))} */}
              {/* 動的タグの生成方法を模索中のため、とりあえずベタ書き */}
              <MenuItem>
                <ListItemIcon className={Style.grow}>
                  <Box display="flex" flexDirection="column">
                    <Box display="flex" flexDirection="row" mb={ 2 } onClick={() => history.push('/')}>
                      <Icons.Map />
                      <Typography>All</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" mb={ 2 } onClick={() => history.push('/food')}>
                      <Icons.Fastfood />
                      <Typography>Food</Typography>
                    </Box>
                   <Box display="flex" flexDirection="row" mb={ 2 } onClick={() => history.push('/art')}>
                      <Icons.Museum />
                      <Typography>Art</Typography>
                    </Box>
                   <Box display="flex" flexDirection="row" onClick={() => history.push('/cafe')}>
                      <Icons.LocalCafe />
                      <Typography>Cafe</Typography>
                    </Box>
                  </Box>
                </ListItemIcon>
              </MenuItem>
            </Menu>
            <Typography variant="h6" className={Style.grow} color="textPrimary">
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
