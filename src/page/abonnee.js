import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <table className="table-fixed">
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">la liste des abonnees:</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      </div>

  <tbody>

    <tr>
      <td>Assia</td>
     
      <td>
      <button className=" rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 font-serif  h-10 ...">
     bloqué
             </button>
        </td>
    </tr>
    </tbody>
  </table>
 <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" className="rounded-lg w-1/2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 font-serif  h-10" >Annuler</button>
        <button type="button" class="btn btn-primary" className="rounded-lg w-2/4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 font-serif  h-10 ...">Sauvegarder</button>
      </div>
</div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        ABONNEE
       
      </button>
     
      <Modal
      
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >

        {body}
      </Modal>
    </div>
  );
}