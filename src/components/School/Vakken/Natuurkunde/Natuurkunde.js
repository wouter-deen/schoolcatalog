import React from "react";
import {
  Typography,
  makeStyles,
  Link,
  createMuiTheme,
  ThemeProvider,
  Breadcrumbs, Card
} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import ProjectLijst from "./ProjectLijst"
import Footer from "../../../Footer";
import bg from "./floral-tropical-seamless-pattern-palm-leaves-background_1016-51.jpg";
import NavBar from "../../../NavBar/NavBar";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(12),
  },
  footer: {
    padding: theme.spacing(6),
    height: "50px",
    left: 0,
    right: 0,
    paddingBottom: theme.spacing(14)
  },
  reportFouten: {
    marginLeft: "3px"
  },
  BackButton: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2)
  },
  main: {
    width: "100%",
    minHeight: "100vh",
    marginBottom: "0px",
    backgroundImage: "url(" + bg + ")",
    backgroundSize: "400px 400px",
    zIndex: "0"
  },
  background: {
    position: "fixed",
    top: 0,
    left: 0,

    /* Preserve aspet ratio */
    maxWidth: "100%",
    minHeight: "100%",
    zIndex: -10
  }
}));

const footerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    }
  },
});

//copyright
function Copyright() {
  return (
    <ThemeProvider theme={footerTheme}>
      <Typography variant="body2" color="primary" align="center">
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

export default function Natuurkunde() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {NavBar(false)}

      <div align="center">
        {/*titel*/}
        <div className={classes.title}>
          {/*<img className={classes.logoImage} src={Logo} alt="logo"/>*/}
          <Box color="#ffffff" fontSize="56px" m={1} fontWeight={"fontWeightBold"}>
            Natuurkunde💡
          </Box>
          <Box color="#ffffff" fontSize="h4.fontSize" m={1} fontWeight={"fontWeightBold"}>
            Bekijk hier al mijn samenvattingen.
          </Box>
        </div>

        <ProjectLijst/>
        <Footer/>
      </div>
    </div>
  )
}