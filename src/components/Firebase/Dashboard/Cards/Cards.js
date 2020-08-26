import React from "react";
import {
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import UpdateMail from "./UpdateMail";
import UpdatePassword from "./UpdatePassword";

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
    marginBottom: theme.spacing(-1)
  },
  alerts: {
    marginTop: theme.spacing(1)
  },
}));


export default function Cards(props, {history}) {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.cardGrid}>
        <Grid container spacing={4} direction="row" alignContent="center">
          <UpdateMail/>
          <UpdatePassword/>

        </Grid>
      </Container>
    </div>
  )
}