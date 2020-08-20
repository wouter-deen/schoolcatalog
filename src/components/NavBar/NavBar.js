import React, { useContext } from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  PropTypes
} from "@material-ui/core"
import AccountIcon from "@material-ui/icons/AccountCircleOutlined"
import Logo from '../School/Vakken/Images/Logo.svg'
import Homepage from "../Homepage/Homepage";
import OpenIcon from "@material-ui/icons/KeyboardArrowRight"

const useStyles = makeStyles((theme) => ({
  logo: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  accountButton: {
    marginRight: theme.spacing(1),
  },
  appbar: {
    //borderRadius: "0px 0px 12px 12px",
    backdropFilter: "blur(7px)",
    position: "fixed"
  },
  samenvattingenButton: {
    marginLeft: theme.spacing(6)
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function NavBar(loggedIn) {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: 'rgba(0,0,0,0.60)',
      }
    },
  });



  const accountButton = (
    <ThemeProvider theme={theme}>
      <IconButton className={classes.accountButton} color="primary" variant="outlined" href="/home">
        <AccountIcon/>
      </IconButton>
    </ThemeProvider>
  )

  const loginButton = (
    <ThemeProvider theme={theme}>
      <Button size="medium" variant="outlined" color="primary" href="/login">
        log in
      </Button>
    </ThemeProvider>
  )

  const samenvattingenButton = (
    <ThemeProvider theme={theme}>
      <Button className={classes.samenvattingenButton} size="medium" variant="outlined" color="primary" href="/#/vakken" endIcon={<OpenIcon/>}>
        samenvattingen
      </Button>
    </ThemeProvider>
  )

  const logo = (
    <a href="/">
      <img className={classes.logo} alt="logo badge" src={Logo} href="/"/>
    </a>
  )

  if(loggedIn === true) {

  } else {
    return (
      <div className={classes.main}>
        <ThemeProvider theme={theme}>
          <AppBar position="static" color="secondary" className={classes.appbar}>
            <Toolbar>
              {logo}
              {/*desktop site navigation buttons*/}
              <div className={classes.sectionDesktop}>
                {samenvattingenButton}
              </div>

              {/*mobile site navigation buttons*/}
              <div className={classes.sectionMobile}>

              </div>
              <div style={{flexGrow: 1}}/>
              {accountButton}
              {loginButton}
            </Toolbar>
          </AppBar>
        </ThemeProvider>

      </div>
    )
  }
}