import React from "react";
import {Card, CardContent, CardMedia, Typography, Button, Container, Grid, makeStyles, Link, CssBaseline, CardActions} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import SamenvattingenImage from "../Images/samenvattingen.png";
import VideografieImage from "../Images/videografie.png";
import AboutImage from "../Images/about.png"
import GoIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(5),
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
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    width: "100%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto"
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
  gotoSamenvattingen: {
    marginTop: theme.spacing(1),
  }
}));

//copyright
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/wouter-deen" target="_blank">
        Wouter Deen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Cards() {
  const classes = useStyles();
  return (
    <div align="center">

      <div>
          <Container className={classes.cardGrid} maxWidth="10000px">
            <Grid container spacing={4}>
              {/* Samenvattingen */}
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card} elevation={20}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={SamenvattingenImage}
                    title="samenvattingen"
                  />
                  <CardContent className={classes.cardContent}>
                    <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                      Samenvattingen
                    </Box>
                    <Box fontSize="20px" m={1} fontWeight={"fontWeightRegular"}>
                      Ik leer vaak beter door leerstof in mijn eigen woorden op te schrijven in een samenvatting.
                      Veel mensen maken gebruik van mijn samenvattingen, dus blijkbaar zijn ze goed.
                      Je vindt hier de beste samenvattingen van mij voor o.a. natuurkunde en scheikunde.
                      Ze bevatten alle leerstof die je nodig hebt!
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Scheikunde */}
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card} elevation={20}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={VideografieImage}
                    title="videografie"
                  />
                  <CardContent className={classes.cardContent}>
                    <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                      Videografie
                    </Box>
                    <Box fontSize="20px" m={1} fontWeight={"fontWeightRegular"}>
                      Ik ben al op de basisschool begonnen met het maken van filmpjes en inmiddels zijn videografie en fotografie uitgegroeid tot een grote hobby.
                      Ik heb de 2e prijs ontvangen mijn short film op het Nationaal Filmfestival voor Scholieren. Deze heb ik geregisseerd, gefilmd en gemonteerd.
                      Ik ben ervaren met een scala aan camera’s, glidecam/steadicam stabilisatoren, Adobe programma’s als Premiere Pro en livestreamprogramma’s als OBS.
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* nog niks */}
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card} elevation={20}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={AboutImage}
                    title="about"
                  />
                  <CardContent className={classes.cardContent}>
                    <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                      Over Mij
                    </Box>
                    <Box fontSize="20px" m={1} fontWeight={"fontWeightRegular"}>
                      Ik ben Wouter en ik ben 16 jaar oud. Naast videografie, houd ik ook van programmeren, podiumtechniek en fotografie.
                      Ik ben vooral ervaren in Java, Javascript en HTML met CSS. Binnen JavaScript heb ik de meeste ervaring met ReactJS en ik gebruik vaak Material-UI als framework.
                      In de podiumtechniek ben ik het meest ervaren met lichttechniek, maar geluidstechniek valt ook binnen mijn interessegebied.
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
    </div>
  )
}