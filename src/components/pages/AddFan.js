import React, {useState, useRef} from 'react'
import axios from 'axios';
import classes from './AddFan.module.css'

const AddFan = (props) => {
     const [enteredName, setenteredName] = useState('')
     const [enteredAge, setenteredAge] = useState('')
     const nameRef = useRef();
     const ageRef = useRef();
     const addHandler = data =>
          {
          axios.post('https://react-http-2b2ab-default-rtdb.firebaseio.com//fans.json', data)
          .then(function (response) {
               alert('Successfully added !')
               setenteredName('')
               setenteredAge('')
          })
          .catch(function (error) {
               console.log(error);
               nameRef.current.value=''
               ageRef.current.value=''
          });   
          }
     return (<form className={classes.Form}>
               
               <h2>New Fan Registration</h2>
                    <div className={classes.Content}>
                         <div className={classes.Input}>
                         <label>Name:</label>
                         <input type='text'
                                ref={nameRef} 
                                value={enteredName}
                                onChange={(e) => setenteredName(e.target.value)} ></input>
                         </div>
                         <div className={classes.Input}>
                         <label>Age:  </label>
                         <input type='text' 
                                ref={ageRef}
                                value={enteredAge}
                                onChange={(e) => setenteredAge(e.target.value)}></input>
                         </div>
                         <div className={classes.ModalActions}>
                         <button className={classes.Button} type='button' onClick={props.onClose}>
                         Cancel
                         </button>
                         <button className={classes.Button} type='button' onClick={()=>addHandler({
                         name: nameRef.current.value,
                         age: ageRef.current.value
                         })}>
                         Add
                         </button>
                         </div>
                    </div>
               </form>
     )
}

export default AddFan
 