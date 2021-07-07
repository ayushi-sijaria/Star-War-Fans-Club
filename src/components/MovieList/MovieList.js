import React from 'react';
import MovieDetails from '../MovieDetails/MovieDetails'
import Movie from '../Movie/Movie';
import { Route, useHistory } from 'react-router-dom'
import classes from './MovieList.module.css';

const MovieList = (props) => {
  const history = useHistory() 
  const movieDetailsHandler = (movieId) =>
  {
    history.push('/'+movieId)
  }
  console.log('movie list')
  return (
    <div className={classes.main}>
      <Route path='/' exact>
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
      </Route>
      <Route path='/:movieid' exact>
          <MovieDetails/>
      </Route>
      </div>
  );
};

export default MovieList;