import React from "react"
import {
  makeStyles,
  Button,
} from "@material-ui/core"
import DownloadIcon from "@material-ui/icons/OpenInNew";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import PDFDialog from "./PDFDialog";

const useStyles = makeStyles((theme) => ({
  buttons: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    margin: theme.spacing(1)
  }
}))

export default function CardButtons(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" onClick={handleClickOpen} className={classes.button}>
        Bekijken
      </Button>
      <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
        Fout melden
      </Button>
      <PDFDialog open={open} onderwerp={props.onderwerp} documentLink={props.documentLink} onClose={handleClose} />
    </div>
  );
}