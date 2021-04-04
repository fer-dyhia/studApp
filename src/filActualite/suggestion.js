import React, { useState, useEffect } from 'react'
import { info } from 'firebase-functions/lib/logger'
import { useDispatch, useSelector } from 'react-redux'
import { sendRequest } from '../Redux/Actions/userActions'
import { getOnlineUsers } from '../Redux/Actions/userActions'
import { getSuggestedUsers } from '../Redux/Actions/dataAction'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import { blue } from '@material-ui/core/colors';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  ajout: {
    color: blue[500],
    margin: theme.spacing(0),
  },
   title: {
    margin: theme.spacing(4, 2, 2),
  },
}));


function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Suggestion() {
     const classes = useStyles();
     const dense = React.useState(true);
 const infos = useSelector((state) => state.infos)
    const User = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const follow = (destination) => {
        console.log(destination)
        const req = {
            owner: User.credentials.username,
            destination: destination,
        }
        sendRequest(dispatch, req)
    }
    console.log(infos)

    useEffect(() => {
        let user = { username: User.credentials.username }
        console.log(user.username)
        getOnlineUsers(dispatch, user)
        getSuggestedUsers(dispatch, user)
    }, [])
  return (
    <div >
<Grid item xs={2} md={11}>
<Typography variant="h5" className={classes.title}>
Vous connaissez peut être ?
</Typography>
<div className={classes.demo}>
{infos.suggestedUsers!=[]? infos.suggestedUsers.map( (user) => {
                return(

  <List dense={dense} >
   
      <ListItem>
        <ListItemAvatar>
          <Avatar  src={user.imageUrl}>
            
          </Avatar>
        </ListItemAvatar>
        {user.username}
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="Add" onClick={()=> follow(user.username)}>
            <PersonAddSharpIcon className={classes.ajout}/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>,
  
  </List>
      ) } )
      :null}
</div>
</Grid>
</div>
);
}