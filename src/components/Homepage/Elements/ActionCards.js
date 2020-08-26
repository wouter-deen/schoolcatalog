import React from "react";
import {Card, CardContent, CardMedia, Container, Grid, makeStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import SamenvattingenImage from "../Images/samenvattingen.png";
import VideografieImage from "../Images/videografie.png";
import AboutImage from "../Images/about.png"

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(5),
    marginBottom: 0,

  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    height: "50px"
  },
  reportFouten: {
    marginLeft: "3px"
  },
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
  }
}));

const CardRenderer = props => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card className={classes.card} elevation={5}>
        <CardContent className={classes.cardContent}>
          <Box fontSize="40px" m={1} fontWeight={"fontWeightBold"}>
            {props.titel}
          </Box>
          <Box fontSize="20px" m={1} fontWeight={"fontWeightRegular"}>
            {props.cardText}
          </Box>
        </CardContent>
        <CardMedia
          className={classes.cardMedia}
          image={props.image}
          title={props.imageAlt}
        />
      </Card>
    </Grid>
  )
}

export default function Cards() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container className={classes.cardHead}>
        <Grid container spacing={4} direction="column" alignContent="center">
          {/* Samenvattingen */}
          <Grid item xs={12} sm={8} md={8}>
            <Card className={classes.card} elevation={5}>
              <CardContent className={classes.cardContent}>
                <Box fontSize="40px" m={1} fontWeight={"fontWeightBold"}>
                  Samenvattingen.
                </Box>
                <Box fontSize="20px" m={1} fontWeight={"fontWeightRegular"}>
                  Ik leer vaak beter door leerstof in mijn eigen woorden op te schrijven in een samenvatting.
                  Veel mensen maken gebruik van mijn samenvattingen en daarom zijn ze vanaf nu hier te vinden!
                  Je vindt hier de beste samenvattingen van mij voor o.a. natuurkunde en scheikunde.
                  Ze bevatten alle leerstof die je nodig hebt!
                </Box>
              </CardContent>
              <CardMedia
                className={classes.cardMedia}
                image={SamenvattingenImage}
                title="samenvattingen"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.cardGrid}>
        <Grid container spacing={4} direction="row" alignContent="center">
          <CardRenderer
            titel="Over mij."
            cardText="Ik ben Wouter en ik ben 16 jaar oud. Naast videografie, houd ik ook van programmeren, podiumtechniek en fotografie.
                  Ik ben vooral ervaren in Java, Javascript en HTML met CSS. Binnen JavaScript heb ik de meeste ervaring met ReactJS en ik gebruik vaak Material-UI als framework.
                  In de podiumtechniek ben ik het meest ervaren met lichttechniek, maar geluidstechniek valt ook binnen mijn interessegebied."
            image={AboutImage}
            imageAlt="over mij"
          />

          <CardRenderer
            titel="Videografie."
            cardText="Ik ben al op de basisschool begonnen met het maken van filmpjes en inmiddels zijn videografie en fotografie uitgegroeid tot een mooie hobby.
                  Ik heb de 2e prijs op het Nationaal Filmfestival voor Scholieren ontvangen voor een short film die ik met een aantal klasgenoten heb gemaakt. Deze heb ik geregisseerd, gefilmd en gemonteerd.
                  Ik ben ervaren met een scala aan camera’s, glidecam/steadicam stabilisatoren, Adobe programma’s als Premiere Pro en livestreamprogramma’s als OBS."
            image={VideografieImage}
            title="videografie"
            />
        </Grid>
      </Container>
    </div>
  )
}