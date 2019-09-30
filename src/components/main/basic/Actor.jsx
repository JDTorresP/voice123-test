import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AudioPlayerCmp from '../../generalUi/AudioPlayerCmp.jsx';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minWidth: 100,
  },
  avatar: {
    marginTop: 10,
    marginLeft: "30%",
    width: 140,
    height: 140,
  },
  audio:{    
    marginTop:10,
    marginBottom:10
  },
  summary:{
    maxHeight:200,
    overflow: 'auto'
  }
});

export default function Actor(props) {
  const classes = useStyles();
  
  
  return (
    <Card className={classes.card}>  
        <Avatar alt="Remy Sharp" src={props.data.img} className={classes.avatar} />
         <CardContent>
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="h2" onClick={()=>{  
          var win = window.open("https://voice123.com/"+props.data.username, '_blank');
          win.focus();}}>
          {props.data.name}
          </Typography>
        </CardActionArea>
        <CardContent className={classes.summary}>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.data.summary}
          </Typography>
          </CardContent>
          <CardContent className={classes.audio}>
          <AudioPlayerCmp/>
          </CardContent>
        </CardContent>
    </Card>
  );
}