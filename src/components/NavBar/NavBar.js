import React, {useContext} from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core"
import AccountIcon from "@material-ui/icons/AccountCircleOutlined"
import Logo from '../School/Vakken/Images/Logo.svg'
import OpenIcon from "@material-ui/icons/KeyboardArrowRight"
import LoginDialog from "../Firebase/LoginDialog";
import LogoutDialog from "../Firebase/LogoutDialog";
import app from "../Firebase/base";

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

export default function NavBar() {
  const classes = useStyles();
  const [openLoginDialog, setOpenLoginDialog] = React.useState(false);
  const [openLogoutDialog, setOpenLogoutDialog] = React.useState(false);
  const currentUser = app.auth().currentUser

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

  const handleClickOpenLogin = () => {
    setOpenLoginDialog(true);
  };

  const handleCloseLogin = (value) => {
    setOpenLoginDialog(false);
  };

  const handleClickOpenLogout = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogout = (value) => {
    setOpenLogoutDialog(false);
  };

  function LoginLogoutButton() {
    if (currentUser) {
      return (
        <div>
          <ThemeProvider theme={theme}>
            <IconButton className={classes.accountButton} color="primary" variant="outlined" href="/dashboard/">
              <AccountIcon/>
            </IconButton>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Button size="medium" variant="outlined" color="primary" onClick={handleClickOpenLogout}>
              log uit
            </Button>
          </ThemeProvider>
        </div>

      )
    } else {
      return (
        <ThemeProvider theme={theme}>
          <Button size="medium" variant="outlined" color="primary" onClick={handleClickOpenLogin}>
            log in
          </Button>
        </ThemeProvider>
      )
    }
  }

  const samenvattingenButton = (
    <ThemeProvider theme={theme}>
      <Button className={classes.samenvattingenButton} size="medium" variant="outlined" color="primary" href="/vakken/" endIcon={<OpenIcon/>}>
        samenvattingen
      </Button>
    </ThemeProvider>
  )

  const logo = (
    <a href="/">
      <img className={classes.logo} alt="logo badge" src={Logo} href="/"/>
    </a>
  )
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
            <LoginLogoutButton/>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <LoginDialog open={openLoginDialog} onClose={handleCloseLogin}/>
      <LogoutDialog open={openLogoutDialog} onClose={handleCloseLogout}/>
    </div>
  )
}