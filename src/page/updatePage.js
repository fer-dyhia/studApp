import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { BsFillGearFill } from "react-icons/bs"; 
import {AiFillPicture} from "react-icons/ai"
import {MdModeEdit} from "react-icons/md"
import Uploadbotton from './uploadbotton';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <BsFillGearFill className=" h-8 md:h-8  w-8 md:w-8 "> </BsFillGearFill>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><AiFillPicture className="w-7 md:w-7  h-7 md:h-7 "> </AiFillPicture>
        modifier la photo <Uploadbotton/>
        </MenuItem>
        <MenuItem onClick={handleClose}><MdModeEdit className="w-7 md:w-7  h-7 md:h-7 "></MdModeEdit>modifier le nom de la page</MenuItem>
        <MenuItem onClick={handleClose} ><BsFillGearFill className="w-7 md:w-7  h-7 md:h-7 " ></BsFillGearFill><a href="parametrepage">parametre</a></MenuItem>
      </Menu>
    </div>
  );
}