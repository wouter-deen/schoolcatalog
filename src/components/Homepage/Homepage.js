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
import 'fontsource-roboto';
import Footer from "../Footer"
import NavBar from "../NavBar/NavBar";
import bg from "./Images/bg2.jpg";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(12)
  },
  logo: {
    position: "absolute",
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(12),
    width: theme.spacing(20),
    height: theme.spacing(20),
    zIndex: -1,
    transform: "rotate(10deg)"
  },
  main: {
    width: "100%",
    minHeight: "100vh",
    //background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    marginBottom: "0px",
    backgroundImage: "url(" + bg + ")",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    marginLeft: "auto",
    marginRight: "auto",

    /* Preserve aspet ratio */
    minWidth: "100%",
    minHeight: "100vh",
    zIndex: -1,
    display: "flex",
    backgroundPosition: "center"
  },
  footer: {}

}));

const footerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  },
});

//rendering
function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {/*<img src={bg} className={classes.background}/>*/}
      {NavBar(false)}
      <div align="center">
        {/*titel*/}
        <div className={classes.title}>
          {/*<img className={classes.logoImage} src={Logo} alt="logo"/>*/}
          <Box fontSize="75px" m={1} fontWeight={"fontWeightBold"} color="#ffffff">
            Hey👋
          </Box>
          <Box fontSize="h4.fontSize" m={1} fontWeight={"fontWeightBold"} color="#ffffff">
            Ik ben Wouter, welkom op mijn site.
          </Box>
          <FunctionButtons/>
        </div>

        <ActionCards/>
        <Footer/>

        {/*<Footer className={classes.footer}/>*/}

      </div>
    </div>
  )
}

export default Homepage