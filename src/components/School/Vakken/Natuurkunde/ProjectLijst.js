import React from "react";
import {Card, CardContent, Button, Container, Grid, makeStyles, CardActions} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import DownloadIcon from '@material-ui/icons/OpenInNew'
import ErrorIcon from '@material-ui/icons/ErrorOutline'
import NOVA1 from './Samenvattingen/NOVA Samenvatting H1.pdf'
import NOVA2 from './Samenvattingen/NOVA Samenvatting H5.pdf'
import NOVA3 from './Samenvattingen/NOVA Samenvatting H7.1-7.4.pdf'
import SN1 from './Samenvattingen/SN Samenvatting H1-2.pdf'
import SN2 from './Samenvattingen/SN Samenvatting H3.pdf'
import SN3 from './Samenvattingen/SN Samenvatting H4.pdf'
import SN4 from './Samenvattingen/SN Samenvatting H4.1-3+5.pdf'

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

          {/* Elektriciteit en schakelingen */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes.niveau} fontWeight={"fontWeightMedium"}>
                3 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Elektriciteit en schakelingen
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: NOVA
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 6.1-6.4, 2.1 & 2.3
                </Box>

              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={NOVA1} target="_blank" className={classes.button}>
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
                    Fout melden
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Krachten */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes.niveau} fontWeight={"fontWeightMedium"}>
                3 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Krachten
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: NOVA
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 5
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={NOVA2} target="_blank">
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
                    Fout melden
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Straling */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes.niveau} fontWeight={"fontWeightMedium"}>
                3 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Straling
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: NOVA
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 7.1-7.4
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={NOVA3} target="_blank">
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
                    Fout melden
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Meten en rekenen */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes.niveau} fontWeight={"fontWeightMedium"}>
                4 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Beweging
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Systematische Natuurkunde
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 1 en 2
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={SN1} target="_blank">
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
                  Kracht en beweging
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Systematische Natuurkunde
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 3
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={SN2} target="_blank">
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
              <Box className={classes. niveau} fontWeight={"fontWeightMedium"}>
                4 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Energie en warmte
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Systematische Natuurkunde
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 4
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={SN3} target="_blank">
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
                    Fout melden
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Energie en warmte specifieke lesstof */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes. niveau} fontWeight={"fontWeightMedium"}>
                4 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Energie en warmte
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Systematische Natuurkunde
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. 4.1-4.3 & 4.5
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={SN4} target="_blank">
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
                    Fout melden
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* Dummy */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={7}>
              <Box className={classes. niveau} fontWeight={"fontWeightMedium"}>
                5 VWO
              </Box>
              <CardContent className={classes.cardContent}>
                <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
                  Placeholder
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Boek: Systematische Natuurkunde
                </Box>
                <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
                  Lesstof: hfst. ?
                </Box>
              </CardContent>
              <CardActions className={classes.buttons}>
                <Box>
                  <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" href={SN4} target="_blank" disabled>
                    Bekijken
                  </Button>
                  <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues" disabled>
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