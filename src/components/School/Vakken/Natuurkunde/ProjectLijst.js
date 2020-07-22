import React from "react";
import {Card, CardContent, CardMedia, Typography, Button, Container, Grid, makeStyles, Link, CssBaseline, CardActions} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import NatuurkundeImage from '../Natuurkunde/natuurkunde.png'
import DownloadIcon from '@material-ui/icons/OpenInNew'
import NOVA1 from './Samenvattingen/NOVA Samenvatting H1.pdf'
import NOVA2 from './Samenvattingen/NOVA Samenvatting H5.pdf'
import NOVA3 from './Samenvattingen/NOVA Samenvatting H7.1-7.4.pdf'
import SN1 from './Samenvattingen/SN Samenvatting H1-2.pdf'
import SN2 from './Samenvattingen/SN Samenvatting H4.1-3+5.pdf'
import SN3 from './Samenvattingen/SN Samenvatting H3.pdf'
import SN4 from './Samenvattingen/SN Samenvatting H4.pdf'

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
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  downloadButton: {
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

function Homepage() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>

          {/* Elektriciteit en schakelingen */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Elektriciteit en schakelingen
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: NOVA 3 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 6.1-6.4, 2.1 & 2.3
                </Box>

              </CardContent>
              <CardActions className={classes.downloadButton}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={NOVA1} target="_blank">
                    Bekijken
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Krachten */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Krachten
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: NOVA 3 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 5
                </Box>
              </CardContent>
              <CardActions className={classes.downloadButton}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={NOVA2} target="_blank">
                    Bekijken
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Straling */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Straling
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: NOVA 3 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 7.1-7.4
                </Box>
              </CardContent>
              <CardActions className={classes.downloadButton}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={NOVA3} target="_blank">
                    Bekijken
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Meten en rekenen */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Beweging
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Systematische Natuurkunde 4 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 1 en 2
                </Box>
              </CardContent>
              <CardActions className={classes.downloadButton}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={SN1} target="_blank">
                    Bekijken
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Eigenschappen van krachten */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Kracht en beweging
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Systematische Natuurkunde 4 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 3
                </Box>
              </CardContent>
              <CardActions className={classes.downloadButton}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={SN2} target="_blank">
                    Bekijken
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Energie en warmte */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Energie en warmte
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Systematische Natuurkunde 4 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 4
                </Box>
              </CardContent>
              <CardActions className={classes.downloadButton}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={SN3} target="_blank">
                    Bekijken
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Energie en warmte */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Box fontSize="30px" m={1} fontWeight={"fontWeightMedium"}>
                  Energie en warmte
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Systematische Natuurkunde 4 vwo
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 4.1-4.3 & 4.5
                </Box>
              </CardContent>
              <CardActions className={classes.downloadButton}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={SN4} target="_blank">
                    Bekijken
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