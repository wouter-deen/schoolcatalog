import React, {useContext} from "react";
import {
  Box
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import NavBar from "../../NavBar/NavBar";
import Cards from "./Cards/Cards"
import {AuthContext} from "../Auth";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    minHeight: "100vh",
    marginBottom: "0px",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  title: {
    paddingTop: theme.spacing(12),
    margin: "0"
  },
}))

export default function Dashboard() {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  if(!currentUser) {
    window.location.href = '/'
  }

  return (
    <div align="center" className={classes.main}>
      <NavBar/>
      <Box fontSize="4rem" fontWeight="fontWeightBold" color="#000000" className={classes.title}>
        Dashboard <span role="img" aria-label="emoji">📊</span>
      </Box>
      <Cards/>
    </div>
  )
}