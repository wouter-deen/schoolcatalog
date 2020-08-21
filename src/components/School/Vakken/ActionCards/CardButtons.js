import React from "react"
import {
  makeStyles,
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  DialogContentText,
  DialogActions,
  Link, ThemeProvider, createMuiTheme
} from "@material-ui/core"
import DownloadIcon from "@material-ui/icons/OpenInNew";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  buttons: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    margin: theme.spacing(1)
  },
  dialog: {
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

function PdfDialog(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { onClose, selectedValue, open } = props;
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  document.addEventListener('contextmenu', event => event.preventDefault());

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialog} maxWidth>
      <DialogTitle>{props.onderwerp}</DialogTitle>
      <DialogContent>
        <div className={classes.sectionDesktop}>
          <embed src={props.documentLink + "#toolbar=0"} type="application/pdf" width="800px" height="800px"/>
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
      <Button startIcon={<DownloadIcon/>} variant="contained" color="primary" /*href={props.documentLink} target="_blank"*/onClick={handleClickOpen} className={classes.button}>
        Bekijken
      </Button>
      <Button startIcon={<ErrorIcon/>} variant="outlined" target="_blank" className={classes.button} href="https://github.com/wouter-deen/schoolcatalog/issues">
        Fout melden
      </Button>
      <PdfDialog open={open} onderwerp={props.onderwerp} documentLink={props.documentLink} onClose={handleClose} />
    </div>
  );
}