import React from "react"
import {
  makeStyles,
} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import 'fontsource-roboto';
import VakkenLijst from './VakkenLijst'
import NavBar from "../../NavBar/NavBar";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(12),
  },
  footer: {
    padding: theme.spacing(6),
    height: "50px",
    left: 0,
    right: 0,
    paddingBottom: theme.spacing(10)
  },
  main: {
  },
  breadCrumbs: {
    position: "absolute",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    color: '#000000',
    background: "rgba(117, 125, 232, .9)",
    padding: "5px",
    borderRadius: "10px",
  },
  list: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

//rendering
export default function Vakken() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {NavBar(false)}

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