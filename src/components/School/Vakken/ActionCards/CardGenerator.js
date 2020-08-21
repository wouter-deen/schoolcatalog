import React from "react";
import {
  Card,
  CardContent,
  Button,
  Grid,
  makeStyles,
  CardActions, PropTypes
} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import DownloadIcon from "@material-ui/icons/OpenInNew";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import CardButtons from "./CardButtons";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '6px',
  },
  cardContent: {
    flexGrow: 1,
  },
  buttons: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    margin: theme.spacing(1)
  },
  niveau: {
    borderRadius: "6px 0px 6px 0px",
    position: "absolute",
    padding: "3px",
    borderColor: "rgba(255,255,255,0)",
    background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
    fontSize: "18px",
    marginRight: 0
  }
}));

function CardGenerator(props) {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} elevation={4}>
        {/*klasaanduiding*/}
        <Box className={classes.niveau} fontWeight={"fontWeightMedium"}>
          {props.klas} VWO
        </Box>

        <CardContent className={classes.cardContent}>
          <Box fontSize="28px" m={1} fontWeight={"fontWeightMedium"}>
            {props.onderwerp}
          </Box>
          <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
            Boek: {props.boek}
          </Box>
          <Box fontSize="18px" m={1} fontWeight={"fontWeightRegular"}>
            Lesstof: {props.lesstof}
          </Box>
        </CardContent>

        <CardActions className={classes.buttons}>
          <Box>
            <CardButtons onderwerp={props.onderwerp} documentLink={props.documentLink}/>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CardGenerator