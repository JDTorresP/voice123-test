import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#2570c1",
  },
  title: {
    flexGrow: 1,
    fontSize:"2em",
    color:"white",
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Voice 123 Search
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
