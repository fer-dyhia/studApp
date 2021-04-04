import React from 'react';
import Updatepage from './updatepage';
import {FaFacebookMessenger} from "react-icons/fa";
import {MdSubscriptions} from "react-icons/md";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
//import { AvatarGroup } from '@material-ui/lab';
import {Popover} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {FiThumbsUp} from  "react-icons/fi"


const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },

    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function PageVisiteur() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  
    return(
       <div className="overflow-x-auto ">
          <div className ='flex flex-col  md:grid-cols-6 bg-gray-50 my-2'>
              <div className=""> 
               <Updatepage/>  
               <div className="inline-flex absolute  inset-y-20 md:inset-y-20 right-12 ml-10  ">
                   <div className="flex-1 md:flex-1" >
                   <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
                         <button style={{marginRight:"20px"}}  className="  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 font-serif  h-10 md:h-10...">
                  <FiThumbsUp className="h-8 w-8" ></FiThumbsUp>
                        </button>
                        </Typography>
                        <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>j'aime la page</Typography>
      </Popover>
      </div>
          </div>
       <div className="flex-1 md:flex-1">
                        <button title="envoyé un message" className=" focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 font-serif  h-8 w-8 md:h-8 md:w-8...">
                    <FaFacebookMessenger  className="h-8 w-8 md:h-8 md:w-8" ></FaFacebookMessenger>
                      </button>            </div>
                      </div>
               </div>
              </div>

     <div className="flex flex-row md:flex  " >
                  <div className ="bg-gray-100 md:bg-gray-100 w-2/5 md:w-2/5 ">
                      <div className="ml-8 md:ml-8 ">
                      <p placeholder="description"> “La logique vous mènera d'un point A à un point B. L'imagination vous emmèra ou vous voulez”</p>
                         <br/>
                     <p>crée en janvier 2021</p>
                         <br/>
         <AvatarGroup max={4}>
         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    
    </AvatarGroup>            
      <span><p>personnes sont abonnées</p> </span>
  
   
                    </div>
                 </div>

     <div className="md:flex-col p-4 w-3/5 w-full items-center h-full g-blue-200 md:w-auto md:p-4   md:w-full md:items-center md:h-full md:g-blue-200">
                     <label> publication</label> 
        </div>

</div>
       </div>    
    );
};