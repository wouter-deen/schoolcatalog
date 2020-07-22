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
import BackIcon from "@material-ui/icons/ArrowBack"
import Background from "./background.jpg"

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(5),
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
  breadCrumbs: {
    position: "absolute",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3)
  },
  BackButton: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2)
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

function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <img src={Background} className={classes.background}/>
      <div className={classes.breadCrumbs}>
        <Breadcrumbs color="primary" separator="›" aria-label="breadcrumb">
          <Link color="primary" href="/" variant="h6">
            Home
          </Link>
          <Link color="primary" href="/#/vakken" variant="h6">
            Vakken
          </Link>
          <Typography color="primary" variant="h6">Scheikunde</Typography>
        </Breadcrumbs>
      </div>

      <div align="center">
        {/*titel*/}
        <div className={classes.title}>
          {/*<img className={classes.logoImage} src={Logo} alt="logo"/>*/}
          <Box color="#ffffff" fontSize="56px" m={1} fontWeight={"fontWeightBold"}>
            Scheikunde🧪
          </Box>
          <Box color="#ffffff" fontSize="h4.fontSize" m={1} fontWeight={"fontWeightBold"}>
            Bekijk hier al mijn samenvattingen.
          </Box>
        </div>

        <ProjectLijst/>

        <ThemeProvider theme={footerTheme}>
          <footer className={classes.footer}>
            <Typography color="primary" variant="h6" align="center" gutterBottom>
              Gemaakt met ❤️
            </Typography>
            <Typography variant="subtitle1" align="center" color="primary" component="p">
              Dit project is in de testfase en kan fouten bevatten.
              <Link color="primary" href="https://github.com/wouter-deen/schoolcatalog/issues" target="_blank" className={classes.reportFouten}>
                Rapporteer fouten hier.
              </Link>{' '}
            </Typography>
            <Copyright />
          </footer>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Homepage