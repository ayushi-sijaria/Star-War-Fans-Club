import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import classes from './MovieDetails.module.css'
import Spinner from '../UI/Spinner/Spinner'

const MovieDetails = () => {
     const [movieDetail, setMovieDetail] = useState({})
     const [isLoading, setIsLoading] = useState(false);
     const params = useParams()
     console.log(params.movieid)
     useEffect(() =>{
          setIsLoading(true)
          console.log('movie details')
          axios.get(`https://swapi.dev/api/films/${params.movieid}`)
          .then(response => {
               setMovieDetail(response.data)  
               setIsLoading(false)                       
          })
          .catch(error => {
               
          })
      }, [params.movieid] );
      if(isLoading)
      {
           return <Spinner/>
      }
     return (
          <div className={classes.MovieDetail}>
               <h2>{movieDetail.title}</h2> 
               <p>{movieDetail.opening_crawl}</p>
               <p><strong>Director:</strong>{movieDetail.director}</p>
               <p><strong>Producer:</strong>{movieDetail.producer}</p>
               <p><strong>Created on:</strong>{movieDetail.created}</p>
          </div>
     )
}
export default MovieDetails
