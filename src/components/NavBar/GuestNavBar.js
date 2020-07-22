import React, { useContext } from "react"
import {AppBar, Toolbar, IconButton, Button, createMuiTheme, ThemeProvider, makeStyles} from "@material-ui/core"
import HomeIcon from "@material-ui/icons/HomeOutlined"
import Logo from '../School/Vakken/Images/Logo.svg'

export default function LoggedOutNavBar() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#c2c2c2',
      }
    },
  });

  const accountButton = (
    <ThemeProvider theme={theme}>
      <IconButton color="default" variant="outlined" href="/home">
        <HomeIcon/>
      </IconButton>
    </ThemeProvider>
  )

  const loginButton = (
    <ThemeProvider theme={theme}>
      <Button variant="outlined" color="primary" href="/login">
        log in
      </Button>
    </ThemeProvider>
  )
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton size="small" href='/schoolcatalog' width="10%">
              <img width="20%" alt="logo badge" src={Logo}/>
            </IconButton>

            <div style={{flexGrow: 1}}/>
            {loginButton}
          </Toolbar>
        </AppBar>
      </ThemeProvider>

    </div>
  )
}