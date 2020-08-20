import React from "react";
import {makeStyles} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AppsIcon from '@material-ui/icons/Apps';
import CameraIcon from '@material-ui/icons/CameraAlt';
import NavigationIcon from '@material-ui/icons/SchoolRounded';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText, Menu, MenuItem} from '@material-ui/core';
import PlusIcon from '@material-ui/icons/AddBoxRounded'
import Box from "@material-ui/core/Box";
import GoIcon from "@material-ui/icons/ChevronRight"

const useStyles = makeStyles((theme) => ({
  FunctionButtons: {
    '& > *': {
      margin: theme.spacing(1),
    },
    marginBottom: theme.spacing(4),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  dialogButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  dialogTitle: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6)
  }
}));

function FButtons() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickSamenvattingen = () => {
    setOpen(true)
  }

  const handleCloseSamenvattingen = () => {
    setOpen(false)
  }

  return (
    <div>
      {/*functieknoppen*/}
      <div className={classes.FunctionButtons}>
        <Fab color="primary" variant="extended" href="/#/vakken">
          <NavigationIcon className={classes.extendedIcon}/>
          Samenvattingen
        </Fab>

        <Fab aria-label="vakken" href={"/#/vakken"}>
          <AppsIcon />
        </Fab>

      </div>

      {/* Samenvattingen popup screen */}
      <Dialog open={open} onClose={handleCloseSamenvattingen}>
        <Box fontSize="30px" m={1} fontWeight={"fontWeightBold"} align="center" className={classes.dialogTitle}>
          Samenvattingen
        </Box>
        <DialogContent align="center">

          <div className={classes.dialogButton}>
            <Button variant="contained" endIcon={<GoIcon/>} color="primary" href="/#/vakken/natuurkunde">
              Natuurkunde
            </Button>
          </div>

          <div className={classes.dialogButton}>
            <Button variant="contained" endIcon={<GoIcon/>} color="primary" href="/#/vakken/scheikunde">
              Scheikunde
            </Button>
          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSamenvattingen} color="default">Sluiten</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default FButtons