import React, {useCallback} from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles, TextField,
  Typography,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button, createMuiTheme, CircularProgress
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
    marginTop: theme.spacing(1)
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


export default function Cards(props, {history}) {
  const classes = useStyles();
  const [openAlertPasswordLogin, setOpenAlertPasswordLogin] = React.useState(false);
  const [openAlertWeakPassword, setOpenAlertWeakPassword] = React.useState(false);
  const [openAlertWrongPassword, setOpenAlertWrongPassword] = React.useState(false);
  const [openAlertInvalidPassword, setOpenAlertInvalidPassword] = React.useState(false);
  const [openAlertSuccessPassword, setOpenAlertSuccessPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function CloseAllAlerts() {
    setOpenAlertInvalidPassword(false)
    setOpenAlertWrongPassword(false)
    setOpenAlertWeakPassword(false)
    setOpenAlertPasswordLogin(false)
    setOpenAlertSuccessPassword(false)
  }

  const updatePassword = useCallback(
    async event => {
      event.preventDefault();
      const { oldPassword, password } = event.target.elements;
      setLoading(true)
      try {
        await app.auth().signInWithEmailAndPassword(app.auth().currentUser.email, oldPassword.value)
        await app.auth().currentUser.updatePassword(password.value)
        setLoading(false)
        setOpenAlertSuccessPassword(true)
      } catch (e) {
        setLoading(false)
        if(e.code === "auth/requires-recent-login") {
          setOpenAlertPasswordLogin(true)
        } else if (e.code === "auth/weak-password") {
          setOpenAlertWeakPassword(true)
        } else if(e.code === "auth/wrong-password") {
          setOpenAlertWrongPassword(true)
        } else if(e.code === "auth/invalid-password") {
          setOpenAlertInvalidPassword(true)
        } else {
          console.log("ONBEKENDE FOUT HERKEND! Error code: " + e.code)
        }
      }
    },
    []
  )

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card className={classes.card} elevation={2}>
        <CardContent className={classes.cardContent}>
          <Box fontSize="40px" m={1} fontWeight={"fontWeightBold"}>
            Wachtwoord
          </Box>

          {/*Wachtwoord veranderen*/}
          <div className={classes.accordion}>
            <Accordion align="left" variant="outlined">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Wachtwoord veranderen</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography>
                    Wil je je wachtwoord veranderen? Vul hieronder je nieuwe wachtwoord in.
                  </Typography>

                  <form noValidate onSubmit={updatePassword}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      color="primary"
                      id="oldPassword"
                      label="Oude wachtwoord"
                      name="oldpassword"
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
                      id="password"
                      label="Nieuw wachtwoord"
                      name="password"
                      autoComplete="password"
                      type="password"
                      onChange={() => CloseAllAlerts()}
                      autoFocus
                    />
                    <AccordionActions>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={`buttonClassname ${classes.submitButton}`}
                      >
                        <ThemeProvider theme={theme}>
                          {loading ? <CircularProgress color="secondary" size={25}/> : <Box>bevestigen</Box>}
                        </ThemeProvider>
                      </Button>
                    </AccordionActions>

                    {/*Error alerts*/}
                    <div className={classes.alerts}>
                      <Collapse in={openAlertPasswordLogin}>
                        <Alert
                          severity="error"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpenAlertPasswordLogin(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                          Je bent al voor langere tijd ingelogd. Log opnieuw in en probeer het opnieuw.
                        </Alert>
                      </Collapse>
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
                          Het nieuwe gekozen wachtwoord is te zwak. Gebruik minimaal 6 tekens.
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
                          Het huidige wachtwoord is onjuist.
                        </Alert>
                      </Collapse>
                      <Collapse in={openAlertInvalidPassword}>
                        <Alert
                          severity="error"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpenAlertInvalidPassword(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                          Het nieuwe gekozen wachtwoord is ongeldig.
                        </Alert>
                      </Collapse>
                      <Collapse in={openAlertSuccessPassword}>
                        <Alert
                          severity="success"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpenAlertSuccessPassword(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                          Wachtwoord succesvol gewijzigd.
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