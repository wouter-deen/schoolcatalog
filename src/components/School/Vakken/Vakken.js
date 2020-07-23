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
    marginLeft: theme.spacing(3),
    color: '#000000'
  },
  list: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

const footerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    }
  },
});

//rendering
function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {/*breadcrumbs*/}
      <div className={classes.breadCrumbs}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link href="/" variant="h6">
            Home
          </Link>
          <Typography variant="h6">Vakken</Typography>
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