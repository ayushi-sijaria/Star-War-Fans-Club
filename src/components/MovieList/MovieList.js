import React from 'react';
import Movie from '../Movie/Movie';
import { useHistory } from 'react-router-dom'
import classes from './MovieList.module.css';

const MovieList = (props) => {
  const history = useHistory() 
  const movieDetailsHandler = (movieId) =>
  {
    history.push('/'+movieId)
  }
  return (
    <div>
        <ul className={classes['movies-list']}>
          {props.movies.slice(props.counter*2-2,props.counter*2).map((movie) => (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  director={movie.director}
                  producer={movie.producer}
                  onClick={() => movieDetailsHandler(movie.index)}
                />         
          ))}
        </ul>
    </div>
  );
};

export default MovieList;