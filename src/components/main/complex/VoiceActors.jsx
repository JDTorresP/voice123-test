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

export default function VoiceActors(props) {
  const classes = useStyles();
  let voice_actors=(<div> There is no current actors that match the specified search</div>);
  if(typeof props.data !== "undefined"){
    if(props.data.length>0){
      voice_actors=props.data.map(function (el, i) {
        return <Actor 
          key={i}
          data={el}
        />
      }, this);
    }
  }
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grow in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 1000 } : {})}>
          <Paper elevation={4} className={classes.paper}>
          {voice_actors}
          </Paper>
        </Grow>
      </div>
    </div>
  );
}