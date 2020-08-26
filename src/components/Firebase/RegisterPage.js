import React, {useCallback, useContext} from "react"
import {
  makeStyles,
  Button,
  TextField,
  Link,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Container,
  CssBaseline,
  Avatar,
  Box, CircularProgress, createMuiTheme
} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined'
import NavBar from "../NavBar/NavBar";
import LoginDialog from "./LoginDialog";
import app from "./base";
import {AuthContext} from "./Auth";
import red from "@material-ui/core/colors/red";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import {ThemeProvider} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  main: {

  },
  specialNotice: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    maxWidth: "100%",
    backgroundColor: red[300],
    borderRadius: "6px 6px 6px 6px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: "auto",
    marginRight: "auto",
    display: "inline-block",
  },
  topSpace: {
    paddingTop: theme.spacing(8)
  },
  alerts: {
    marginTop: theme.spacing(3),
  },
}));

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ffffff'
    }
  },
});

export default function SignUp({history}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { currentUser } = useContext(AuthContext);

  const [openAlertWeakPassword, setOpenAlertWeakPassword] = React.useState(false);
  const [openAlertInvalidEmail, setOpenAlertInvalidEmail] = React.useState(false);
  const [openAlertUserExists, setOpenAlertUserExists] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function CloseAllAlerts() {
    setOpenAlertUserExists(false)
    setOpenAlertInvalidEmail(false)
    setOpenAlertWeakPassword(false)
  }

  if(currentUser) {
    window.location.href = '/'
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;
    if(email.value.includes("veluwscollege.nl") || email.value.includes("veluwseonderwijsgroep.nl")) {
      try {
        setLoading(true)
        await app.auth().createUserWithEmailAndPassword(email.value, password.value);
        await app.auth().currentUser.updateProfile({displayName: name.value})
        setLoading(false)
        window.location.href = '/dashboard/';
      } catch (e) {
        if(e.code === "auth/weak-password") {
          setOpenAlertWeakPassword(true)
        } else if(e.code === "auth/invalid-email"){
          setOpenAlertInvalidEmail(true)
        } else if(e.code === "auth/email-already-exists"){
          setOpenAlertUserExists(true)
        } else {
          return console.log("ONBEKENDE FOUT ONTDEKT. Error code: " + e)
        }
      }
    } else {
      setOpenAlertInvalidEmail(true)
    }
  }, []);

  return (
    <div className={classes.main}>
      <NavBar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registreren
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSignUp}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
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
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Schoolmail (Veluwse Onderwijsgroep)"
                  name="email"
                  type="email"
                  onChange={() => CloseAllAlerts()}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Wachtwoord"
                  type="password"
                  id="password"
                  onChange={() => CloseAllAlerts()}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" required />}
                  label="Ik accepteer de algemene voorwaarden."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              className={classes.submit}
            >
              <ThemeProvider theme={theme}>
                {loading ? <CircularProgress color="secondary" size={25}/> : <Box>registreren</Box>}
              </ThemeProvider>
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link onClick={handleClickOpen} variant="body2" color="textSecondary">
                  Heb je al een account? Log in
                </Link>
              </Grid>
            </Grid>

            <div className={classes.alerts}>
              <Collapse in={openAlertWeakPassword}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenAlertWeakPassword(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Het wachtwoord is te zwak. Gebruik minimaal 6 tekens.
                </Alert>
              </Collapse>
              <Collapse in={openAlertInvalidEmail}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenAlertInvalidEmail(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Het mailadres is ongeldig.
                </Alert>
              </Collapse>
              <Collapse in={openAlertUserExists}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenAlertUserExists(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Er bestaat al een account met dit mailadres.
                </Alert>
              </Collapse>
            </div>
          </form>
        </div>
      </Container>
      <LoginDialog open={open} onClose={handleClose}/>
    </div>
  )
}