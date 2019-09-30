import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Actor from '../basic/Actor.jsx';

const useStyles = makeStyles(theme => ({
  root: {
   width:"90%",
   justifyContent:"center",
   justifySelf:"center"
  },
  container: {
    display: 'flex',
    flexWrap:"wrap",
  },
  paper: {
    margin: theme.spacing(1),
  }
}));

export default function VoiceActors() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grow in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 1000 } : {})}>
          <Paper elevation={4} className={classes.paper}>
          <Actor/>
          </Paper>
        </Grow>
      </div>
    </div>
  );
}