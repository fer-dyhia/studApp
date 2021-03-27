import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoChatboxEllipses} from 'react-icons/io5'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from "react-icons/ai"
import Comments from './comments'
import moment from 'moment'
import { getCommentOnPost, suppPost, likePost, LikeOnPost } from '../Redux/Actions/postAction'
import { getSuggestedUsers } from '../Redux/Actions/dataAction'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { green, red, blueGrey, deepOrange,grey } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import FaceSharpIcon from '@material-ui/icons/FaceSharp';
import { borders } from '@material-ui/system';
import { FaBlackberry } from 'react-icons/fa';

moment().format()

const useStyles = makeStyles((theme) => ({
  root: {
  
    marginBottom: '2%',
      },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
   
    avatar: {
      backgroundColor: deepOrange[400],
    },
    like: {
      color: red[500],
    },
    dislike: {
      color: red[300],
      marginLeft: 'auto',
    },
    com: {
      color: blueGrey[900],
      marginLeft: 'auto',
      focus:'outline-none',
    },
    supp: {
      color: blueGrey[300],
    },
    reaction: {
      borderTop :' groove  ',
      borderTopWidth:'1px',
      borderBottom :' groove  ',
      borderBottomWidth:'1px',
       },
    couleurtexte: {
      color:grey[700], 
    }
  }));

export default function Publication(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [showComments, setShowComments] = useState(false)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const displayComments = () => {
        setShowComments(!showComments)
        getCommentOnPost(dispatch, props.post.postId)
    }
    const suppPostUser = () => {
        suppPost(dispatch, props.post.postId)
    }
    const likePost = () => {
        let newlike = {
            postId: props.post.postId,
            username: user.credentials.username,
        }

        LikeOnPost(dispatch, newlike)
    }

    return (
        <div   >
    <Card className={classes.root}>
       {
         <CardHeader
         avatar={
           <Avatar aria-label="recipe" className={classes.avatar}>
            < FaceSharpIcon />
           </Avatar>
         }
         title={props.post.username}
         subheader={moment(props.post.createdAt).startOf('second').fromNow()}
         action={props.post.username==user.credentials.username ?
           <IconButton aria-label="supprimer" onClick={suppPostUser} className={classes.supp}>
             <DeleteIcon />
           </IconButton> :null
         }
       />

      } 
     

      <CardContent>
        
         {/* <CardMedia
        className={classes.media}
        image={props.post.body}
        title="Paella dish"
      /> */}

      </CardContent>
      <CardContent>
        <Typography variant="body2" className={classes.couleurtexte} component="p">
         {props.post.body}
        </Typography>
        {props.post.imageUrl!=""?<img src={props.post.imageUrl}></img>:null}
      </CardContent>

      <CardActions disableSpacing className={classes.reaction}  >
        <IconButton aria-label="like " 
         onClick={() => {likePost() }}
        className={classes.like} 
                                >{props.post.likeCount}
          < AiFillHeart   />
        </IconButton>
               <IconButton
          className={clsx(classes.com, {
            [classes.expandOpen]: showComments,
          })}
          onClick={displayComments}
          aria-expanded={props.post.commentCount}
          aria-label="Commentaires "
        >
          <IoChatboxEllipses />
        </IconButton>
        
        <IconButton aria-label="dislike "
        className={classes.dislike} >
          < AiOutlineHeart  />
        </IconButton>
      </CardActions>
      <Collapse in={showComments} timeout="auto" unmountOnExit>
        <CardContent className={classes.com} >
        {showComments && <Comments comments={props.post.comments} postId={props.post.postId} />} 
        </CardContent>
      </Collapse>
    </Card>
    </div> 
    )
}
