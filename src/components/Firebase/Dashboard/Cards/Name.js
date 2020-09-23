import React from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import app from "../../base";

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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


export default function Cards(props, {history}) {
  const classes = useStyles();
  console.log("DisplayName: " + app.auth().currentUser.displayName)

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card className={classes.card} elevation={2}>
        <CardContent className={classes.cardContent}>
          <Box fontSize="40px" m={1} fontWeight={"fontWeightBold"}>
            Naam
          </Box>
          <Typography m={1} fontWeight={"fontWeightRegular"}>
            Je gebruikersnaam is
          </Typography>
          <Box className={classes.inline} color="#546e7a">{app.auth().currentUser.displayName}</Box>
          <Typography>
            Je kan je gebruikersnaam niet veranderen.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}