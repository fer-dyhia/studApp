import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {useSelector} from "react-redux"
import profilepic from "../../img/me.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 350,
      height: 400,
    },
  }));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList() {
  const classes = useStyles();
  const infos=useSelector((state) =>state.infos)

  return (
    <div className={classes.root}>
        
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        
         {/* <GridListTile className={classes.gridtile} cols={1}>
         <img className="object-contain" src={profilepic} />
         </GridListTile>
         <GridListTile cols={1}>
         <img className="object-contain" src={profilepic} />
         </GridListTile>
         <GridListTile cols={1}>
         <img className="object-contain" src={profilepic} />
         </GridListTile>
         <GridListTile cols={1}>
         <img className="object-contain" src={profilepic} />
         </GridListTile>
         <GridListTile cols={1}>
         <img className="object-contain" src={profilepic} />
         </GridListTile>
         <GridListTile cols={1}>
         <img className="object-contain" src={profilepic} />
         </GridListTile>
         <GridListTile cols={1}>
         <img className="object-contain" src={profilepic} />
         </GridListTile>
         <GridListTile cols={1}>
         <img className="object-contain" src={profilepic} />
         </GridListTile>
         <GridListTile cols={1}>
         <img className="object-contain" src={profilepic} />
         </GridListTile> */}
          { infos.messages.length >0 ?  
         infos.messages.map((msg) => {
        return msg.imageUrl!=""?
            <GridListTile cols={1}>
            <img src={msg.imageUrl}  />
          </GridListTile>:null

         })
           
        :null} 
        
        
      </GridList>
    </div>
  );
}