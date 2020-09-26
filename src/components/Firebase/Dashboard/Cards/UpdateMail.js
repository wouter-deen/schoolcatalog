import React, {useCallback} from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  CircularProgress,
  createMuiTheme
} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import app from "../../base";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {ThemeProvider} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  },
  cardHead: {
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '6px',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    width: "100%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardContent: {
    flexGrow: 1,
    marginTop: theme.spacing(-1),
    marginBottom: theme.spacing(-1)
  },
  cardActions: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  main: {
    alignSelf: "center"
  },
  accordion: {
    marginTop: theme.spacing(2),
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  submitButton: {
    marginRight: theme.spacing(-1),
    marginBottom: theme.spacing(-4),
    marginTop: theme.spacing(1),
  },
  alerts: {
    marginTop: theme.spacing(4),
  },
}));

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ffffff'
    }
  },
});


export default function Cards(props, {history}) {
  const classes = useStyles();
  const [openAlertRecentLogin, setOpenAlertRecentLogin] = React.useState(false);
  const [openAlertInvalidMail, setOpenAlertInvalidMail] = React.useState(false);
  const [openAlertSuccessMail, setOpenAlertSuccessMail] = React.useState(false);
  const [openAlertWrongMailOld, setOpenAlertWrongMailOld] = React.useState(false);
  const [openAlertWrongPassword, setOpenAlertWrongPassword] = React.useState(false);
  const [openAlertSameMail, setOpenAlertSameMail] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function CloseAllAlerts() {
    setOpenAlertSameMail(false)
    setOpenAlertWrongMailOld(false)
    setOpenAlertWrongPassword(false)
    setOpenAlertSuccessMail(false)
    setOpenAlertRecentLogin(false)
    setOpenAlertInvalidMail(false)
  }

  const updateMail = useCallback(
    async event => {
      event.preventDefault();
      const { oldEmail, password, email } = event.target.elements;
      setLoading(true);
      try {
        await app.auth().signInWithEmailAndPassword(oldEmail.value, password.value)
        if(oldEmail.value === email.value) {
          setOpenAlertSameMail(true)
          return false
        }
        await app.auth().currentUser.updateEmail(email.value)
        setOpenAlertSuccessMail(true)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        if (e.code === "auth/invalid-password" || e.code === "auth/invalid-password-hash" || e.code === "auth/invalid-password-salt" || e.code === "auth/wrong-password") {
          setOpenAlertWrongPassword(true)
        } else if (e.code === "auth/user-not-found") {
          setOpenAlertWrongMailOld(true)
        } else if(e.code === "auth/requires-recent-login") {
          setOpenAlertRecentLogin(true)
        } else if(e.code === "auth/invalid-email") {
          setOpenAlertInvalidMail(true)
        } else {
          console.log("ONBEKENDE FOUT GEVONDEN. Error code: " + e.code)
        }
      }
      console.log("Email in firebase: " + app.auth().currentUser.email)
      }, []
  )

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card className={classes.card} elevation={2}>
        <CardContent className={classes.cardContent}>
          <Box fontSize="40px" m={1} fontWeight={"fontWeightBold"}>
            Mailadres
          </Box>
          <Typography m={1} fontWeight={"fontWeightRegular"}>
            Je huidige mailadres is:
          </Typography>
          <Box className={classes.inline} color="#546e7a">{app.auth().currentUser.email}</Box>

          {/*Mailadres veranderen*/}
          <div className={classes.accordion}>
            <Accordion align="left" variant="outlined">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Mailadres veranderen</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography>
                    Heb je een nieuw mailadres? Vul onderstaand formulier in om je account er naar over te zetten.
                  </Typography>

                  <form noValidate onSubmit={updateMail}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      color="primary"
                      id="oldEmail"
                      label="Huidig mailadres"
                      name="oldEmail"
                      autoComplete="email"
                      type="email"
                      onChange={() => CloseAllAlerts()}
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      color="primary"
                      id="passwordMail"
                      label="Wachtwoord"
                      name="password"
                      autoComplete="password"
                      type="password"
                      onChange={() => CloseAllAlerts()}
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      color="primary"
                      id="email"
                      label="Nieuw mailadres"
                      name="email"
                      autoComplete="email"
                      type="email"
                      onChange={() => CloseAllAlerts()}
                      autoFocus
                    />

                    <AccordionActions>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                      >
                        <ThemeProvider theme={theme}>
                          {loading ? <CircularProgress color="secondary" size={25}/> : <Box>bevestigen</Box>}
                        </ThemeProvider>
                      </Button>
                    </AccordionActions>

                    {/*Error alerts*/}
                    <div className={classes.alerts}>
                      <Collapse in={openAlertInvalidMail}>
                        <Alert
                          severity="error"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpenAlertInvalidMail(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                          Het ingevulde nieuwe mailadres is ongeldig.
                        </Alert>
                      </Collapse>
                      <Collapse in={openAlertWrongMailOld}>
                        <Alert
                          severity="error"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpenAlertWrongMailOld(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                          Het ingevulde oude mailadres is onjuist.
                        </Alert>
                      </Collapse>
                      <Collapse in={openAlertWrongPassword}>
                        <Alert
                          severity="error"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpenAlertWrongPassword(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                          Het opgegeven wachtwoord is onjuist.
                        </Alert>
                      </Collapse>
                      <Collapse in={openAlertRecentLogin}>
                        <Alert
                          severity="error"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpenAlertRecentLogin(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                          Je bent al voor langere tijd ingelogd. Log opnieuw in en probeer het opnieuw.
                        </Alert>
                      </Collapse>
                      <Collapse in={openAlertSuccessMail}>
                        <Alert
                          severity="success"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpenAlertSuccessMail(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                          Je mailadres is succcesvol gewijzigd.
                        </Alert>
                      </Collapse>
                      <Collapse in={openAlertSameMail}>
                        <Alert
                          severity="error"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpenAlertSameMail(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                          Je nieuwe mailadres is gelijk aan het oude mailadres.
                        </Alert>
                      </Collapse>
                    </div>
                  </form>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </CardContent>
      </Card>
    </Grid>
  )
}