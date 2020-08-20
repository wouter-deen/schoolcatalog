import React from "react";
import {Container, Grid, makeStyles} from "@material-ui/core";
import NOVA1 from './Samenvattingen/NOVA Samenvatting H1.pdf'
import NOVA2 from './Samenvattingen/NOVA Samenvatting H5.pdf'
import NOVA3 from './Samenvattingen/NOVA Samenvatting H7.1-7.4.pdf'
import SN1 from './Samenvattingen/SN Samenvatting H1-2.pdf'
import SN2 from './Samenvattingen/SN Samenvatting H3.pdf'
import SN3 from './Samenvattingen/SN Samenvatting H4.pdf'
import SN4 from './Samenvattingen/SN Samenvatting H4.1-3+5.pdf'
import CardGenerator from "../CardGenerator";

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

function Homepage() {
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
            documentLink={NOVA1}
          />
          <CardGenerator
            klas="3"
            onderwerp="Krachten"
            boek="NOVA"
            lesstof="hfst. 5"
            documentLink={NOVA2}
          />
          <CardGenerator
            klas="3"
            onderwerp="Straling"
            boek="NOVA"
            lesstof="hfst. 7.1 t/m 7.4"
            documentLink={NOVA3}
          />
          <CardGenerator
            klas="4"
            onderwerp="Beweging"
            boek="Systematische Natuurkunde"
            lesstof="hfst. 1 & 2"
            documentLink={SN1}
          />
          <CardGenerator
            klas="4"
            onderwerp="Kracht en beweging"
            boek="Systematische Natuurkunde"
            lesstof="hfst. 3"
            documentLink={SN2}
          />
          <CardGenerator
            klas="4"
            onderwerp="Energie en warmt"
            boek="Systematische Natuurkunde"
            lesstof="hfst. 4"
            documentLink={SN3}
          />
          <CardGenerator
            klas="4"
            onderwerp="Energie en warmte"
            boek="Systematische Natuurkunde"
            lesstof="hfst. 4.1 t/m 4.3 & 4.5"
            documentLink={SN4}
          />
        </Grid>
      </Container>
    </div>
  )
}

export default Homepage