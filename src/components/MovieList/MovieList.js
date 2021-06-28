import React from 'react';

import Movie from '../Movie/Movie';
import classes from './MovieList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {console.log(props.movies)}
      {props.movies.slice(props.counter*2-2,props.counter*2).map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          director={movie.director}
          producer={movie.producer}
        />
      ))}
    </ul>
  );
};

export default MovieList;