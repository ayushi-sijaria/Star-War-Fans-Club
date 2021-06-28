import React from 'react'
import classes from './Date.module.css'

const DateComponent = () => {
     const current = new Date();
     const cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
     const cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
     return (
             <div className={classes.date}><strong>Last updated:</strong> {cDate+ ' ' + cTime}</div>
     )
}

export default DateComponent
