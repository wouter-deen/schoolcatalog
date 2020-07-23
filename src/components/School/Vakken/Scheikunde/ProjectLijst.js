import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  Grid,
  makeStyles,
  Link,
  CssBaseline,
  CardActions
} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import CO1 from './Samenvattingen/CO Samenvatting H1-2 3V.pdf'
import CO2 from './Samenvattingen/CO Samenvatting H3 3V.pdf'
import CO3 from './Samenvattingen/CO Samenvatting ionen 3V.pdf'
import CO4 from './Samenvattingen/CO Samenvatting H1-3 4V.pdf'
import CO5 from './Samenvattingen/CO Samenvatting H4-5, 3.7 4V.pdf'
import CO6 from './Samenvattingen/CO Samenvatting H6 4V.pdf'
import CO7 from './Samenvattingen/CO Samenvatting H7 4V.pdf'
import DownloadIcon from "@material-ui/icons/OpenInNew";
import ErrorIcon from "@material-ui/icons/ErrorOutline";

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
  }
}));

function Homepage() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>

          {/* Scheiden en reageren, water */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes.niveau} fontWeight={"fontWeightMedium"}>
                3 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Scheiden, reageren en water
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Chemie Overal 3 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 1 & 2
                </Box>

              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={CO1} target="_blank" className={classes.button}>
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
                    Fout melden
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Chemische reacties */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes.niveau} fontWeight={"fontWeightMedium"}>
                3 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Chemische reacties
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Chemie Overal 3 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 3
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={CO2} target="_blank">
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
                    Fout melden
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Zouten */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes.niveau} fontWeight={"fontWeightMedium"}>
                3 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Ionen en zouten
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Chemie Overal 3 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: ?
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={CO3} target="_blank">
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
                    Fout melden
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Scheiden en reageren, bouwstenen van stoffen, moleculaire stoffen */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes.niveau} fontWeight={"fontWeightMedium"}>
                4 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Scheiden en reageren, bouwstenen van stoffen, moleculaire stoffen
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Chemie Overal 4 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 1, 2 & 3
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={CO4} target="_blank">
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
                    Fout melden
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Eigenschappen van krachten */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes.niveau} fontWeight={"fontWeightMedium"}>
                4 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Zouten en zoutoplossingen, reacties van zouten, molrekenen
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Chemie Overal 4 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 4, 5 & 3.7
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={CO5} target="_blank">
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
                    Fout melden
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Energie en warmte */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes.niveau} fontWeight={"fontWeightMedium"}>
                4 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Koolstofverbindingen
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Chemie Overal 4 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 6
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={CO6} target="_blank">
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
                    Fout melden
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Energie en warmte */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes.niveau} fontWeight={"fontWeightMedium"}>
                4 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Duurzaamheid
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Chemie Overal 4 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 7
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={CO7} target="_blank">
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
                    Fout melden
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}

export default Homepage