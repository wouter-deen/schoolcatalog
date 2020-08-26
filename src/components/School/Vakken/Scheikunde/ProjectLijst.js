import React from "react";
import {Container, Grid, makeStyles} from "@material-ui/core";
import CardGenerator from "../ActionCards/CardGenerator";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

function Homepage() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          <CardGenerator
            onderwerp="Scheiden, reageren en water"
            klas="3"
            boek="Chemie Overal 3 vwo"
            lesstof="hfst. 1 & 2"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FScheikunde%2FCO%20Samenvatting%20H1-2%203V.pdf?alt=media&token=f376c389-d49a-40d5-b3cd-4aa951a20e5c"
          />
          <CardGenerator
            onderwerp="Chemische reacties"
            klas="3"
            boek="Chemie Overal 3 vwo"
            lesstof="hfst. 1 & 2"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FScheikunde%2FCO%20Samenvatting%20H1-3%204V.pdf?alt=media&token=cf0e8b0d-5947-4b7e-a2c1-9d661a2928bd"
          />
          <CardGenerator
            onderwerp="Ionen en zouten"
            klas="3"
            boek="Chemie Overal 3 vwo"
            lesstof="?"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FScheikunde%2FCO%20Samenvatting%20H3%203V.pdf?alt=media&token=09c05c27-1736-43fd-a3f1-88c4765d0267"
          />
          <CardGenerator
            onderwerp="Scheiden en reageren, bouwstenen van stoffen, moleculaire stoffen"
            klas="4"
            boek="Chemie Overal 4 vwo"
            lesstof="hfst. 1, 2 & 3"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FScheikunde%2FCO%20Samenvatting%20H4-5%2C%203.7%204V.pdf?alt=media&token=0990f8b9-eb9e-4e25-9257-8460cd034942"
          />
          <CardGenerator
            onderwerp="Zouten en zoutoplossingen, reacties van zouten, molrekenen"
            klas="4"
            boek="Chemie Overal 4 vwo"
            lesstof="hfst. 4, 5 & 3.7"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FScheikunde%2FCO%20Samenvatting%20H6%204V.pdf?alt=media&token=083e1f17-ebc1-4b4c-ae09-65407d38d67b"
          />
          <CardGenerator
            onderwerp="Koolstofverbindingen"
            klas="4"
            boek="Chemie Overal 4 vwo"
            lesstof="hfst. 6"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FScheikunde%2FCO%20Samenvatting%20H7%204V.pdf?alt=media&token=6a157b64-70ed-4852-a519-fdac0cb9d7b4"
          />
          <CardGenerator
            onderwerp="Duurzaamheid"
            klas="4"
            boek="Chemie Overal 4 vwo"
            lesstof="hfst. 7"
            documentLink="https://firebasestorage.googleapis.com/v0/b/woutersite-45fe9.appspot.com/o/Samenvattingen%2FScheikunde%2FCO%20Samenvatting%20ionen%203V.pdf?alt=media&token=7497de16-3696-4012-980d-cb2fb3e15d32"
          />
        </Grid>
      </Container>
    </div>
  )
}

export default Homepage