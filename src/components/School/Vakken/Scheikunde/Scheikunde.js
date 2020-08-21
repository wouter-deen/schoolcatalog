import React from "react";
import {
  Typography,
  makeStyles,
  Link,
  createMuiTheme,
  ThemeProvider,
  Breadcrumbs
} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import ProjectLijst from "./ProjectLijst"
import Background from "./bg.jpg"
import Footer from "../../../Footer";
import bg from "./bg.jpg";
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
    backgroundSize: "400px 400px"
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

export default function Scheikunde() {
  const classes = useStyles();
  document.addEventListener('contextmenu', event => event.preventDefault());
  return (
    <div className={classes.main}>
      {NavBar(false)}

      <div align="center">
        {/*titel*/}
        <div className={classes.title}>
          {/*<img className={classes.logoImage} src={Logo} alt="logo"/>*/}
          <Box color="#000000" fontSize="56px" m={1} fontWeight={"fontWeightBold"}>
            Scheikunde🧪
          </Box>
          <Box color="#000000" fontSize="h4.fontSize" m={1} fontWeight={"fontWeightBold"}>
            Bekijk hier al mijn samenvattingen.
          </Box>
        </div>

        <ProjectLijst/>

        <Footer/>
      </div>
    </div>
  )
}