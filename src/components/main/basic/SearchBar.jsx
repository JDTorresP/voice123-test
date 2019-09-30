import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 10px',
    display: 'flex',
    alignItems: 'center',
    width: "60%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  searchButton: {
    backgroundColor:"#e3f0fc",
  },
}));

export default function SearchBar(props) {
  const [key, setKey] = useState("");
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search keywords for voice over"
        inputProps={{ 'aria-label': 'Search keywords for voice over' }}
        onChange= { (e)=>{setKey(e.target.value)}}
      />
      <IconButton className={classes.iconButton} aria-label="search"  onClick= { (e)=>{ props.changeSearch(key); props.bindApi()}}>
        <SearchIcon />
      </IconButton>
      <Button className={classes.searchButton} onClick= { (e)=>{ props.changeSearch(key); props.bindApi()}}>Search</Button>
    </Paper>
  );
}