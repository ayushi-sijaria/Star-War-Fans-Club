import React, {useRef} from 'react';
import classes from './Modal.module.css'

const Modal =(props) => {
  const nameRef = useRef();
  const ageRef = useRef();
    
  return (
    <React.Fragment>
      <div className={classes.Backdrop} onClick={props.onClose} />
      <div className={classes.Modal}>
        <div className={classes.Content}>
          <div className={classes.Input}>
            <label>Name:</label>
            <input type='text' ref={nameRef}></input>
          </div>
          <div className={classes.Input}>
            <label>Age:  </label>
            <input type='text' ref={ageRef}></input>
          </div>
          <div className={classes.ModalActions}>
            <button className={classes.Button} type='button' onClick={props.onClose}>
              Cancel
            </button>
            <button className={classes.Button} type='button' onClick={()=>props.add({
              name: nameRef.current.value,
              age: ageRef.current.value
            })}>
              Add
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;