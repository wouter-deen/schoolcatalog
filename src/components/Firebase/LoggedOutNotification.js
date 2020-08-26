import React, {useContext} from "react"
import 'fontsource-roboto';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert"
import {AuthContext} from "./Auth";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function LoggedOutNotification() {
  const [open, setOpen] = React.useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  let executed = false
  if(!currentUser) {
    if(open !== true) if (executed === false) {
      setOpen(true)
      executed = true
    }
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        Je bent niet ingelogd! Log in om samenvattingen te bekijken.
      </Alert>
    </Snackbar>
  )
}