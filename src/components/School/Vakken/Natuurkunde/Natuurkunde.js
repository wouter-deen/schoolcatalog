import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  Grid,
  makeStyles,
  Link,
  CssBaseline,
  IconButton,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import ProjectLijst from "./ProjectLijst"
import BackIcon from "@material-ui/icons/ArrowBack"
import Logo from "../Images/Logo.svg"
import Background from "./background.jpg"
import {purple} from "@material-ui/core/colors";
import grey from "@material-ui/core/colors/grey";

const backButtonTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  },
});

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(5),
  },
  footer: {
    padding: theme.spacing(6),
    height: "50px",
    bottom: theme.spacing(3),
    left: 0,
    right: 0,
    position: "fixed",
  },
  reportFouten: {
    marginLeft: "3px"
  },
  BackButton: {
    marginLeft: theme.spacing(15),
    marginTop: theme.spacing(5)
  },
  logo: {
    position: "absolute",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  topButtons: {
    position: "absolute"
  },
  main: {
    backgroundImage: `url(${Background})`,
    zIndex: "-2",
    width: "100%",
    height: "100vh",
    backgroundSize: "cover"
  },
  backButtonText: {
    marginBottom: theme.spacing(0.6),
    marginLeft: theme.spacing(1)
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
      <div className={classes.topButtons}>
        <img src={Logo} className={classes.logo}/>
        <ThemeProvider theme={backButtonTheme}>
          <IconButton className={classes.BackButton} href="/schoolcatalog">
            <BackIcon fontSize="large" color="primary"/>
            <Box color="#ffffff" fontWeight="fontWeightRegular" fontSize="30px" className={classes.backButtonText}>
                home
            </Box>
          </IconButton>
        </ThemeProvider>
      </div>

      <div align="center">
        {/*titel*/}
        <div className={classes.title}>
          {/*<img className={classes.logoImage} src={Logo} alt="logo"/>*/}
          <Box color="#ffffff" fontSize="75px" m={1} fontWeight={"fontWeightBold"}>
            Natuurkunde💡
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