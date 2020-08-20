import React from "react";
import {Container, Grid, makeStyles} from "@material-ui/core";
import CO1 from './Samenvattingen/CO Samenvatting H1-2 3V.pdf'
import CO2 from './Samenvattingen/CO Samenvatting H3 3V.pdf'
import CO3 from './Samenvattingen/CO Samenvatting ionen 3V.pdf'
import CO4 from './Samenvattingen/CO Samenvatting H1-3 4V.pdf'
import CO5 from './Samenvattingen/CO Samenvatting H4-5, 3.7 4V.pdf'
import CO6 from './Samenvattingen/CO Samenvatting H6 4V.pdf'
import CO7 from './Samenvattingen/CO Samenvatting H7 4V.pdf'
import CardGenerator from "../CardGenerator";

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
            documentLink={CO1}
          />
          <CardGenerator
            onderwerp="Chemische reacties"
            klas="3"
            boek="Chemie Overal 3 vwo"
            lesstof="hfst. 1 & 2"
            documentLink={CO2}
          />
          <CardGenerator
            onderwerp="Ionen en zouten"
            klas="3"
            boek="Chemie Overal 3 vwo"
            lesstof="?"
            documentLink={CO3}
          />
          <CardGenerator
            onderwerp="Scheiden en reageren, bouwstenen van stoffen, moleculaire stoffen"
            klas="4"
            boek="Chemie Overal 4 vwo"
            lesstof="hfst. 1, 2 & 3"
            documentLink={CO4}
          />
          <CardGenerator
            onderwerp="Zouten en zoutoplossingen, reacties van zouten, molrekenen"
            klas="4"
            boek="Chemie Overal 4 vwo"
            lesstof="hfst. 4, 5 & 3.7"
            documentLink={CO5}
          />
          <CardGenerator
            onderwerp="Koolstofverbindingen"
            klas="4"
            boek="Chemie Overal 4 vwo"
            lesstof="hfst. 6"
            documentLink={CO6}
          />
          <CardGenerator
            onderwerp="Duurzaamheid"
            klas="4"
            boek="Chemie Overal 4 vwo"
            lesstof="hfst. 7"
            documentLink={CO7}
          />
        </Grid>
      </Container>
    </div>
  )
}

export default Homepage