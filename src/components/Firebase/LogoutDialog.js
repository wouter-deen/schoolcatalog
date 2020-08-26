import React, {useCallback} from "react"
import {
  makeStyles,
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  DialogContentText,
} from "@material-ui/core"
import app from "./base";
import green from "@material-ui/core/colors/green";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles((theme) => ({
  dialog: {
    overflow: "hidden"
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))

export default function LogoutDialog(props, {history}) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  }

  const handleLogout = useCallback(
    async event => {
      event.preventDefault();
      try {
        await app.auth().signOut()
        if(window.location.href === "/") {
          window.location.reload()
        } else {
          window.location.href = "/"
        }
      } catch(e) {
        console.log("Fout gevonden. Error code: " + e.code)
      }
    },
    []
  )

  return (
    <div>
      <Dialog onClose={handleClose} open={open} className={classes.dialog}>
        <DialogTitle>
          Weet je zeker dat je uit wil loggen?
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Als je uitgelogd bent, kan je geen samenvattingen bekijken en andere premium functies van de website gebruiken.
          </DialogContentText>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              sluiten
            </Button>
            <Button onClick={handleLogout} color="primary" autoFocus>
              log uit
            </Button>
          </DialogActions>

        </DialogContent>
      </Dialog>
    </div>
  )
}