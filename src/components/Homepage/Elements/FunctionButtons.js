import React from "react";
import {makeStyles} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AppsIcon from '@material-ui/icons/Apps';
import NavigationIcon from '@material-ui/icons/SchoolRounded';
import app from "../../Firebase/base";
import LoginDialog from "../../Firebase/LoginDialog";

const useStyles = makeStyles((theme) => ({
  FunctionButtons: {
    '& > *': {
      margin: theme.spacing(1),
    },
    marginBottom: theme.spacing(4),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  dialogButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  dialogTitle: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6)
  }
}));

function FButtons() {
  const classes = useStyles();
  const currentUser = app.auth().currentUser
  const [openLoginDialog, setOpenLoginDialog] = React.useState(false);

  const handleClickOpenLogin = () => {
    setOpenLoginDialog(true);
  };

  const handleCloseLogin = (value) => {
    setOpenLoginDialog(false);
  };

  if(currentUser) {
    return (
      <div className={classes.FunctionButtons}>
        <Fab color="primary" variant="extended" href="/vakken/">
          <NavigationIcon className={classes.extendedIcon}/>
          Samenvattingen
        </Fab>

        <Fab aria-label="vakken" href={"/vakken/"}>
          <AppsIcon />
        </Fab>
      </div>
    )
  } else {
    return (
      <div className={classes.FunctionButtons}>
        <Fab color="primary" variant="extended" onClick={handleClickOpenLogin}>
          <NavigationIcon className={classes.extendedIcon}/>
          Samenvattingen
        </Fab>

        <Fab aria-label="vakken" onClick={handleClickOpenLogin}>
          <AppsIcon />
        </Fab>
        <LoginDialog open={openLoginDialog} onClose={handleCloseLogin}/>
      </div>
    )
  }
}

export default FButtons