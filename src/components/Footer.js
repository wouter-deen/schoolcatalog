import React from "react"
import {
  makeStyles,
  Link,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
    height: "50px",
    left: 0,
    right: 0,
  },
  reportFouten: {
    marginLeft: "4px",
    color: "#ffffff"
  },
  disclaimer: {
    marginTop: theme.spacing(1)
  },
  copyright: {
    paddingTop: theme.spacing(.5)
  }
}));

const whiteTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  },
});

//rendering
export default function Footer() {
  const classes = useStyles();
    return (
      <div className={classes.main}>
        <footer className={classes.footer}>
          <Box color="#ffffff" fontWeight="fontWeightMedium" fontSize="20px" align="center">
            Gemaakt met ❤️
          </Box>
          <Box color="#ffffff" align="center" className={classes.disclaimer}>
            Deze site komt net uit de testfase (v1.0.3) en kan fouten bevatten.
            <Link href="https://github.com/wouter-deen/schoolcatalog/issues" target="_blank" className={classes.reportFouten}>
              Rapporteer fouten hier.
            </Link>
          </Box>
          <Box color="#ffffff" fontSize="14px" align="center" className={classes.copyright}>
            {'Copyright © '}
            <ThemeProvider theme={whiteTheme}>
              <Link color="primary" href="https://www.instagram.com/wouter_deen/" target="_blank">
                Wouter Deen
              </Link>{' '}
            </ThemeProvider>
            {new Date().getFullYear()}
            {'.'}
          </Box>
        </footer>
      </div>
    )
}