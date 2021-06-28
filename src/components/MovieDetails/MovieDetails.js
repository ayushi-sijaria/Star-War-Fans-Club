import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import classes from './MovieDetails.module.css'

const MovieDetails = () => {
     const [movieDetail, setMovieDetail] = useState({})
     const params = useParams()
     console.log(params.movieid)
     useEffect(() =>{
          axios.get(`https://swapi.dev/api/films/${params.movieid}`)
          .then(response => {
               setMovieDetail(response.data)                         
          })
          .catch(error => {
               
          })
      }, [params.movieid] );
          console.log(movieDetail)
     return (
          <div className={classes.MovieDetail}>
               <h2>{movieDetail.title}</h2> 
               <p>{movieDetail.opening_crawl}</p>
               <p><strong>Director:</strong>{movieDetail.director}</p>
               <p><strong>Producer:</strong>{movieDetail.producer}</p>
               <p><strong>Created on:</strong>{movieDetail.created}</p>
               <p><strong>Created by:</strong>{movieDetail.edited}</p>
          </div>
     )
}
export default MovieDetails
