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
    minWidth: 100
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
  }
});

export default function Actor() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>  
        <Avatar alt="Remy Sharp" src="https://v1-media.s3.amazonaws.com/sandbox/pics/users/297757/l_vT5hV.jpg" className={classes.avatar} />
         <CardContent>
        <CardActionArea> 
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
        </CardActionArea>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <CardContent className={classes.audio}>
          <AudioPlayerCmp/>
          </CardContent>
        </CardContent>
    </Card>
  );
}