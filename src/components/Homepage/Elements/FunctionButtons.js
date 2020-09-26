import React from "react";
import {makeStyles} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/SchoolRounded';
import AccountIcon from "@material-ui/icons/AccountCircle"

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

  return (
    <div className={classes.FunctionButtons}>
      <Fab color="primary" variant="extended" href="/vakken/">
        <NavigationIcon className={classes.extendedIcon}/>
        Samenvattingen
      </Fab>

      <Fab aria-label="vakken" href={"/dashboard"}>
        <AccountIcon />
      </Fab>
    </div>
  )
}

export default FButtons