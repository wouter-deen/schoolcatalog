import React from "react"
import {
  makeStyles,
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  DialogContentText,
  DialogActions,
  Link
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  dialog: {
    overflow: "hidden"
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mobileLink: {
    marginLeft: "4px"
  }
}))

export default function PDFDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  document.addEventListener('contextmenu', event => event.preventDefault());

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialog} fullWidth={true} maxWidth="lg">
      <DialogTitle>{props.onderwerp}</DialogTitle>
      <DialogContent>
        <div className={classes.sectionDesktop}>
          <iframe title="samenvatting" src={props.documentLink + "#toolbar=0"} type="application/pdf" width="1200px" height="1000px"/>
        </div>
        <div className={classes.sectionMobile}>
          <DialogContentText>
            Je zit op een telefoon. Dit platform wordt nog niet volledig ondersteund.
            <Link href={props.documentLink} target="_blank" color="textSecondary" className={classes.mobileLink}>
              Klik hier om de samenvatting te bekijken.
            </Link>
          </DialogContentText>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Sluiten
        </Button>
      </DialogActions>
    </Dialog>
  )
}