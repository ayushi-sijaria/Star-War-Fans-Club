import React from 'react'
import NoResultImage from '../../Assets/NoResultsFound.jpg'
import classes from './NoResults.module.css'

const NoResults = () => {
     return (
          <div style={{marginLeft:'200px'}}>
               <img src={NoResultImage} alt='NoResultImage' className={classes.image} />
               <p className={classes.text}>No Movies Found. Please change search criteria...</p>
          </div>
     )
}

export default NoResults
