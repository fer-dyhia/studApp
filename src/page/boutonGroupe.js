import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {FaInfoCircle} from "react-icons/fa"
import {FaUserFriends } from "react-icons/fa"
import {BiMessageRounded} from "react-icons/bi"
import {IoIosNotificationsOutline} from "react-icons/io"
import { Modal } from '@material-ui/core';
import Abonnee from './abonnee'; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(3),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button><FaUserFriends className="h-6 w-6" ></FaUserFriends>
        <Abonnee />
        </Button>
        
        <Button><BiMessageRounded className=" h-6 w-6"></BiMessageRounded><a href="#messagerie">messages</a></Button>
        <Button><IoIosNotificationsOutline className="h-6 w-6"></IoIosNotificationsOutline>notification</Button>
   
      </ButtonGroup>
     
    </div>
  );
}