import React from "react"
import {
  Typography,
  makeStyles,
  Link,
  createMuiTheme,
  ThemeProvider, Breadcrumbs, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider
} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import 'fontsource-roboto';
import VakkenLijst from './VakkenLijst'

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(5),
  },
  footer: {
    padding: theme.spacing(6),
    height: "50px",
    left: 0,
    right: 0,
    paddingBottom: theme.spacing(10)
  },
  reportFouten: {
    marginLeft: "3px"
  },
  main: {

  },
  background: {
    position: "fixed",
    top: 0,
    left: 0,

    /* Preserve aspet ratio */
    maxWidth: "100%",
    minHeight: "100%",
    zIndex: -10
  },
  breadCrumbs: {
    position: "absolute",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3)
  },
  list: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

const footerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  },
});

//copyright
function Copyright() {
  return (
    <ThemeProvider theme={footerTheme}>
      <Typography color="primary" variant="body2" align="center">
        {'Copyright © '}
        <Link color="primary" href="https://github.com/wouter-deen" target="_blank">
          Wouter Deen
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </ThemeProvider>

  );
}

//rendering
function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.breadCrumbs}>

        {/*breadcrumbs*/}
        <Breadcrumbs color="primary" separator="›" aria-label="breadcrumb">
          <Link color="primary" href="/" variant="h6">
            Home
          </Link>
          <Typography color="primary" variant="h6">Vakken</Typography>
        </Breadcrumbs>
      </div>

      <div align="center">
        {/*titel*/}
        <div className={classes.title}>
          {/*<img className={classes.logoImage} src={Logo} alt="logo"/>*/}
          <Box fontSize="75px" m={1} fontWeight={"fontWeightBold"}>
            Vakken
          </Box>
        </div>

        <VakkenLijst/>

      </div>
    </div>
  )
}

export default Homepage