import React from "react"
import {makeStyles} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import ActionCards from '../Homepage/Elements/ActionCards'
import FunctionButtons from './Elements/FunctionButtons'
import 'fontsource-roboto';
import Footer from "../Footer"
import NavBar from "../NavBar/NavBar";
import bg from "./Images/bg2.jpg";
import app from "../Firebase/base";
import UserInfoDialog from "./UserInfoDialog";

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
  bottomSpacing: {
    paddingBottom: theme.spacing(5)
  }
}));


//rendering
function Homepage() {
  const classes = useStyles();
  const currentUser = app.auth().currentUser
  if(currentUser) {
    console.log("DisplayName: " + currentUser.displayName)
  }

  const [openUserInfoDialog, setOpenUserInfoDialog] = React.useState(false);
  const [checkedLogin, setCheckedLogin] = React.useState(false);

  const handleCloseUserInfoDialog = (value) => {
    setOpenUserInfoDialog(false);
  };

  if(checkedLogin === false) {
    if(currentUser) {
      if (currentUser.displayName === null || !currentUser.displayName) {
        setOpenUserInfoDialog(true);
        setCheckedLogin(true)
      }
    }
  }

  return (
    <div className={classes.main}>
      {/*<img src={bg} className={classes.background}/>*/}
      <NavBar/>
      <div align="center">
        {/*titel*/}
        <div className={classes.title}>
          {/*<img className={classes.logoImage} src={Logo} alt="logo"/>*/}
          {currentUser ? <Box fontSize="60px" m={1} fontWeight="fontWeightBold" color="#ffffff">Hey {currentUser.displayName}<span role="img" aria-label="emoji">👋</span></Box>
            : <Box fontSize="75px" m={1} fontWeight="fontWeightBold" color="#ffffff">Hey <span role="img" aria-label="emoji">👋</span></Box>}
          {currentUser ? <Box fontSize="h4.fontSize" m={1} fontWeight="fontWeightBold" color="#ffffff">Welkom terug!</Box>
            : <Box fontSize="h4.fontSize" m={1} fontWeight="fontWeightBold" color="#ffffff">Ik ben Wouter, welkom op mijn site.</Box>}
          <FunctionButtons/>
        </div>
        <ActionCards/>
        <Footer/>
        <div className={classes.bottomSpacing}/>
      </div>
      <UserInfoDialog open={openUserInfoDialog} onClose={handleCloseUserInfoDialog}/>
    </div>
  )
}

export default Homepage