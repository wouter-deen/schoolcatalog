import React, {useCallback} from "react"
import {
  makeStyles,
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  TextField,
  Link,
  Grid,
  Box,
} from "@material-ui/core"
import app from "../Firebase/base";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import green from "@material-ui/core/colors/green";
import CircularProgress from "@material-ui/core/CircularProgress";
import {red} from "@material-ui/core/colors";
import CheckIcon from '@material-ui/icons/Check';

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
  mobileLink: {
    marginLeft: "4px"
  },
  dialogTitle: {
    alignSelf: "center"
  },
  errors: {
    marginTop: theme.spacing(1)
  },
  progressCircle: {
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
  buttonFailure: {
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  name: {
    marginBottom: theme.spacing(2)
  }
}))

function UserInfoDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const [openAlertInvalidName, setOpenAlertInvalidName] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [disabled, setDisabled] = React.useState(false);

  function CloseAllAlerts() {
    setFailure(false)
    setSuccess(false)
  }

  // eslint-disable-next-line no-unused-vars
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const buttonClassnameFailure = clsx({
    [classes.buttonFailure]: failure,
  });

  const handleClose = () => {
    onClose(selectedValue);
  }

  const updateProfile = useCallback(async event => {
    event.preventDefault();
    const { name } = event.target.elements;
    console.log(name.value)
    if(name.value !== "") {
      try {
        setLoading(true)
        await app.auth().currentUser.updateProfile({displayName: name.value})
        setLoading(false)
        handleClose()
      } catch (e) {
        if(!name) {
          setOpenAlertInvalidName(true)
        } else {
          console.log("ONBEKENDE FOUT: " + e)
          setOpenAlertInvalidName(true)
        }
      }
    } else {
      setOpenAlertInvalidName(true)
    }
  }, [handleClose]);

  return (
    <div>
      <Dialog onClose={handleClose} open={open} className={classes.dialog}>
        <DialogTitle className={classes.dialogTitle}>
          <Box>
            {success ? <CheckIcon fontSize="large" fontWeight="fontWeightBold"/> : loading ? <CircularProgress size={40}/> : <Box fontSize="30px">Vul je gegevens aan.</Box>}
          </Box>
        </DialogTitle>
        <DialogContent>
          <form style={{width: '100%', marginTop: 1}} onSubmit={updateProfile} noValidate>
            {/*naam*/}
            <Grid item xs={12}>
              <TextField
                className={classes.name}
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Voornaam"
                onChange={() => CloseAllAlerts()}
                autoFocus
              />
            </Grid>

            {/*log in button*/}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={`buttonClassname ${buttonClassnameFailure}`}
              disabled={disabled}
              style={{margin: (3, 0, 2)}}
            >
              Ga verder
            </Button>

            {/*error messages*/}
            <div className={classes.errors}>
              <Collapse in={openAlertInvalidName}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenAlertInvalidName(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Vul een geldige naam in.
                </Alert>
              </Collapse>
            </div>

            {/*betrouwbaar*/}
            <Grid container style={{marginTop: 10}}>
              <Grid item xs>
                <Link href="#" variant="body2" color="textSecondary">
                  Alle informatie wordt betrouwbaar opgeslagen.
                </Link>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UserInfoDialog