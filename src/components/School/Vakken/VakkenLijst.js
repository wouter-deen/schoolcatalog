import React from "react"
import {
  Typography,
  makeStyles,
  Link,
  createMuiTheme,
  ThemeProvider, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider
} from "@material-ui/core"
import 'fontsource-roboto';
import IconNatuurkunde from '@material-ui/icons/Build'
import IconScheikunde from '@material-ui/icons/WavesOutlined'
import IconOverig from '@material-ui/icons/HighlightOffOutlined'

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(5),
  },
  footer: {
    padding: theme.spacing(6),
    height: "50px",
    left: 0,
    right: 0,
    paddingBottom: theme.spacing(10)
  },
  reportFouten: {
    marginLeft: "3px"
  },
  main: {

  },
  background: {
    position: "fixed",
    top: 0,
    left: 0,

    /* Preserve aspet ratio */
    maxWidth: "100%",
    minHeight: "100%",
    zIndex: -10
  },
  breadCrumbs: {
    position: "absolute",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3)
  },
  list: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

const footerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  },
});

//copyright
function Copyright() {
  return (
    <ThemeProvider theme={footerTheme}>
      <Typography color="primary" variant="body2" align="center">
        {'Copyright © '}
        <Link color="primary" href="https://github.com/wouter-deen" target="_blank">
          Wouter Deen
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </ThemeProvider>

  );
}

//ListItemLink
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

//rendering
function Vakken() {
  const classes = useStyles();
  return (
    <div className={classes.main}>

      <List className={classes.list}>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <IconNatuurkunde />
            </Avatar>
          </ListItemAvatar>
          <ListItemLink href="/vakken/natuurkunde">
            <ListItemText primary="Natuurkunde" secondary="Samenvattingen" />
          </ListItemLink>
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <IconScheikunde />
            </Avatar>
          </ListItemAvatar>
          <ListItemLink href="/vakken/scheikunde">
            <ListItemText primary="Scheikunde" secondary="Samenvattingen" />
          </ListItemLink>
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem disabled>
          <ListItemAvatar>
            <Avatar>
              <IconOverig />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Wiskunde" secondary="" />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem disabled>
          <ListItemAvatar>
            <Avatar>
              <IconOverig />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Bedrijfseconomie" secondary="" />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem disabled>
          <ListItemAvatar>
            <Avatar>
              <IconOverig />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Biologie" secondary="" />
        </ListItem>
      </List>
    </div>
  )
}

export default Vakken