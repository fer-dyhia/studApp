import React, { useState, useEffect } from 'react'
import { info } from 'firebase-functions/lib/logger'
import { useDispatch, useSelector } from 'react-redux'
import { sendRequest } from '../Redux/Actions/userActions'
import { getOnlineUsers } from '../Redux/Actions/userActions'
import { getSuggestedUsers } from '../Redux/Actions/dataAction'
import clsx from 'clsx';
import { makeStyles,useTheme,InputBase,  Avatar,Button,Typography,Box,Badge ,withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'; 

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
   
  },
  drawerPaper: {
    
   
  },
  disButton: {
    marginRight: theme.spacing(2),
  },
  
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    
  },
  disc:{
   
    top:84,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  hide: {
    display: 'none',
  },
  search: {
    flexGrow: 0.3,
    
    position: 'relative',
    borderRadius: 15,
    backgroundColor:' #9bafbd24',
    border:'1px solid #f1f1f1',
    bottom: 5,
   
    [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    },
  },

  inputRoot: {
    color: '#a09e9e',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 44,
    top: 45,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor: '#49f0d3',
    minWidth:6,
    width:4,
    height:15,
  }, 
}))(Badge);

const AmiEnligne = () => {
  const classes = useStyles();
  const theme = useTheme();
  
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    
    setOpen(!open);
  };
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
    <div className={classes.root}>
      <CssBaseline />
     
      <Drawer
      
        className={classes.drawer}
        variant="permanent"
        
        anchor="right"
        
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.disc,{
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >

     <Box display='flex'>
        < Button  onClick={handleClick} style={{ marginBottom:20 ,
    MarginTop: 20,width: 45,left: 10,backgroundColor: '#10B981',
    height: 30,padding: 0,minWidth: 0,  }}>
          {open ? <ChevronRightIcon  /> : <ChevronLeftIcon  />}
          </Button>
          <h6 style={{marginLeft: 43,marginTop: 15,fontSize:15}}
          className={clsx( {
            [classes.hide]: !open,
          })}
          
          >Amis en ligne </h6>

          </Box>
          {typeof(User.OnlineUsers)!="undefined" && User.OnlineUsers!=[]? User.OnlineUsers.map((user) => {
              return(
        <List  style={{ overflowX:'hidden'}}>
         <ListItem button style={{ marginBottom:20
              }}>

          <ListItemIcon>
            <StyledBadge badgeContent=''  >
            <Avatar alt="Remy Sharp" src={user.imageUrl} style={{ width: 50,height: 50,
            marginRight:15
                }} />
            </StyledBadge>
          </ListItemIcon>
            <Typography style={{ fontSize: 17, }}> 
            {user.username}
            </Typography>

          </ListItem>
        </List>
        )
    }):null}

      </Drawer>

    </div>
  );
}
export default AmiEnligne