import React from 'react'
import classes from './Date.module.css'
import { Button } from 'react-bootstrap'
import { uiActions } from '../../../Store/ui-slice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const DateComponent = () => {
     const dispatch = useDispatch()
     const dateIsVisible = useSelector(state => state.ui.dateIsVisible)
     const current = new Date();
     const cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
     const cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
     const toggleTimeHandler = () =>
     {
        dispatch(uiActions.toggle())
     }
     return (
        <div className={classes.all}>
        
                <Button className={classes.button} onClick={toggleTimeHandler}>Toggle Time</Button>
                {dateIsVisible && <div className={classes.date}><strong>Last updated:</strong> {cDate+ ' ' + cTime}</div>}
             
        </div>
     )
}

export default DateComponent
