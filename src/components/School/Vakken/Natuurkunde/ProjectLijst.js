import React from "react";
import {Container, Grid, makeStyles} from "@material-ui/core";
import CardGenerator from "../ActionCards/CardGenerator";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '6px'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  buttons: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    margin: theme.spacing(1)
  },
  niveau: {
    borderRadius: "4px 0px 4px 0px",
    position: "absolute",
    padding: "3px",
    borderColor: "rgba(255,255,255,0)",
    background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
    fontSize: "18px",
    marginRight: 0
  },
  nieuw: {
    borderRadius: "4px 0px 4px 0px",
    position: "absolute",
    padding: "3px",
    borderColor: "rgba(255,255,255,0)",
    background: "#ff6a6a",
    fontSize: "18px",
    color: "#ffffff"
  }
}));

export default function ProjectLijst() {

  const classes = useStyles();
  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          <CardGenerator
            klas="3"
            onderwerp="Elektriciteit en schakelingen"
            boek="NOVA"
            lesstof="hfst. 6.1 t/m 6.4, 2.1 & 2.3"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FNatuurkunde%2FNOVA%20Samenvatting%20H1.pdf?alt=media&token=ca55a641-7704-4961-9f7f-1fd78e1646f8"
          />
          <CardGenerator
            klas="3"
            onderwerp="Krachten"
            boek="NOVA"
            lesstof="hfst. 5"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FNatuurkunde%2FNOVA%20Samenvatting%20H5.pdf?alt=media&token=20d17b20-75e9-44d8-b9b7-cf32f3534ff6"
          />
          <CardGenerator
            klas="3"
            onderwerp="Straling"
            boek="NOVA"
            lesstof="hfst. 7.1 t/m 7.4"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FNatuurkunde%2FNOVA%20Samenvatting%20H7.1-7.4.pdf?alt=media&token=aab4cbb1-0458-4c0e-831e-664d80d96bb8"
          />
          <CardGenerator
            klas="4"
            onderwerp="Beweging"
            boek="Systematische Natuurkunde"
            lesstof="hfst. 1 & 2"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FNatuurkunde%2FSN%20Samenvatting%20H1-2.pdf?alt=media&token=2c615f65-e05a-4e72-8cc0-ccc7a6589c45"
          />
          <CardGenerator
            klas="4"
            onderwerp="Kracht en beweging"
            boek="Systematische Natuurkunde"
            lesstof="hfst. 3"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FNatuurkunde%2FSN%20Samenvatting%20H3.pdf?alt=media&token=f4c2fee9-8b7b-46d1-998a-2fe8fc5e803e"
          />
          <CardGenerator
            klas="4"
            onderwerp="Energie en warmt"
            boek="Systematische Natuurkunde"
            lesstof="hfst. 4"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FNatuurkunde%2FSN%20Samenvatting%20H4.1-3%2B5.pdf?alt=media&token=7a6d4a7b-95f3-47be-87e6-a2caaaabf126"
          />
          <CardGenerator
            klas="4"
            onderwerp="Energie en warmte"
            boek="Systematische Natuurkunde"
            lesstof="hfst. 4.1 t/m 4.3 & 4.5"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FNatuurkunde%2FSN%20Samenvatting%20H4.pdf?alt=media&token=fc830c4d-f4fa-44ca-808b-394fe1c686d3"
          />
        </Grid>
      </Container>
    </div>
  )
}