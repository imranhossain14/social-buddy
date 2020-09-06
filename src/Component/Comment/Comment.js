import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const Comment = (props) => {
const {name, email, body, id } = props.comment;
const classes = useStyles();
  
  useEffect(() => {
    fetch('https://randomuser.me/api/').then((res) => res.json()).then((data) => {
        setImage({
            name    : data.results[0].name,
            picture : data.results[0].picture,
            email   : data.results[0].email
        });
    });
}, []);

const [ image, setImage ] = useState({
    name    : '',
    picture : '',
    email   : ''
});
  return (
      
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image.picture.medium} />
        </ListItemAvatar>
        <ListItemText
          primary={image.name.title + ' ' + image.name.first + ' ' + image.name.last}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {image.email}
              </Typography>
              {body}
              
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default Comment;