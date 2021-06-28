import React from 'react';
import classes from './ErrorModal.module.css'

const errorModal = React.memo(props => {
  return (
    <React.Fragment>
      <div className={classes.Backdrop} onClick={props.onClose} />
      <div className={classes.ErrorModal}>
        <h2>An Error Occurred!</h2>
        <p className={classes.Content}>{props.children}</p>
        <div className={classes.ErrorModalActions}>
          <button className={classes.Button} type='button' onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default errorModal;