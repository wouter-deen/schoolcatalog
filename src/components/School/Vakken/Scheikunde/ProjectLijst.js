import React from "react";
import {Card, CardContent, CardMedia, Typography, Button, Container, Grid, makeStyles, Link, CssBaseline} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import NatuurkundeImage from '../Natuurkunde/natuurkunde.png'
import ScheikundeImage from '../Scheikunde/scheikunde.png'

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
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }
}));

function Homepage() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={4}>
          {/* Natuurkunde */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={NatuurkundeImage}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Natuurkunde
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Scheikunde */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={ScheikundeImage}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Scheikunde
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* nog niks */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Test
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* nog niks */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Test
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* nog niks */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Test
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* nog niks */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Test
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Homepage