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
  FormControlLabel,
  Checkbox,
  Box,
} from "@material-ui/core"
import app from "./base";
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
  aanmeldenButton: {
    marginRight: "50px"
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
}))

function LoginDialog(props, {history}) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const [openAlertPassword, setOpenAlertPassword] = React.useState(false);
  const [openAlertMail, setOpenAlertMail] = React.useState(false);
  const [openAlertUserNotFound, setOpenAlertUserNotFound] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const timer = React.useRef();

  function CloseAllAlerts() {
    setOpenAlertPassword(false)
    setOpenAlertMail(false)
    setOpenAlertUserNotFound(false)
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

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      setSuccess(false);
      setLoading(true);
      setDisabled(true);
      const { email, password } = event.target.elements;
      try {
        if (!loading) {

        }
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        setSuccess(true);
        setLoading(false);
        timer.current = setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
      } catch (e) {
        if(e.code === "auth/wrong-password") {
          setOpenAlertPassword(true)
        } else if (e.code === "auth/invalid-email") {
          setOpenAlertMail(true)
        } else if(e.code === "auth/user-not-found") {
          setOpenAlertUserNotFound(true)
        }
        setFailure(true);
        setLoading(false);
        setDisabled(false);
      }
    },
    [loading]
  )

  const handleClose = () => {
    onClose(selectedValue);
  }

  return (
    <div>
      <Dialog onClose={handleClose} open={open} className={classes.dialog}>
        <DialogTitle className={classes.dialogTitle}>
          <Box>
            {success ? <CheckIcon fontSize="large" fontWeight="fontWeightBold"/> : loading ? <CircularProgress size={40}/> : <Box fontSize="30px">Log in</Box>}
          </Box>
        </DialogTitle>
        <DialogContent>
          <form style={{width: '100%', marginTop: 1}} onSubmit={handleLogin} noValidate>
            {/*email*/}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              color="primary"
              id="email"
              label="Schoolmail"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={() => CloseAllAlerts()}
            />

            {/*wachtwoord*/}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              color="primary"
              name="password"
              label="Wachtwoord"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={() => CloseAllAlerts()}
            />

            {/*onthouden*/}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Onthoud mij"
            />

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
              Log in
            </Button>

            {/*error messages*/}
            <div className={classes.errors}>
              <Collapse in={openAlertMail}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenAlertMail(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Er is geen account gekoppeld aan het opgegeven mailadres.
                </Alert>
              </Collapse>
              <Collapse in={openAlertPassword}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenAlertPassword(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Het opgegeven wachtwoord is onjuist.
                </Alert>
              </Collapse>
              <Collapse in={openAlertUserNotFound}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenAlertUserNotFound(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Er is geen account gekoppeld aan dat mailadres.
                </Alert>
              </Collapse>
            </div>

            {/*wachtwoord vergeten + registreren*/}
            <Grid container style={{marginTop: 10}}>
              <Grid item xs>
                <Link href="#" variant="body2" color="textSecondary">
                  Wachtwoord vergeten?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/registreren/" onClick={handleClose} variant="body2" color="textSecondary">
                  Geen account? Registreer je nu
                </Link>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default LoginDialog