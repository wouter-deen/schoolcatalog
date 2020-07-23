import React from "react"
import {
  Typography,
  makeStyles,
  Link,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import ActionCards from '../Homepage/Elements/ActionCards'
import FunctionButtons from './Elements/FunctionButtons'
import Logo from "../School/Vakken/Images/Logo.svg"
import Background from "./Images/bg.jpg"
import 'fontsource-roboto';

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
  logo: {
    position: "absolute",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    width: theme.spacing(13),
    height: theme.spacing(13),
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
      <img src={Background} className={classes.background}/>
      <img src={Logo} className={classes.logo}/>
      <div align="center">
        {/*titel*/}
        <div className={classes.title}>
          {/*<img className={classes.logoImage} src={Logo} alt="logo"/>*/}
          <Box fontSize="75px" m={1} fontWeight={"fontWeightBold"}>
            Hey👋
          </Box>
          <Box fontSize="h4.fontSize" m={1} fontWeight={"fontWeightBold"}>
            Ik ben Wouter, welkom op mijn site.
          </Box>
        </div>

        {/*functieknoppen*/}
        <FunctionButtons/>
        <ActionCards/>

        <ThemeProvider theme={footerTheme}>
          <footer className={classes.footer}>
            <Typography color="primary" variant="h6" align="center" gutterBottom>
              Gemaakt met ❤️
            </Typography>
            <Typography color="primary" variant="subtitle1" align="center" component="p">
              Deze site zit in de testfase en kan fouten bevatten.
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