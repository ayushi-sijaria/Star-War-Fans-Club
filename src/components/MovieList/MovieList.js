import React from 'react';

import Movie from '../Movie/Movie';
import classes from './MovieList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {console.log(props.movies)}
      {props.movies.slice(props.counter*4-4,props.counter*4).map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          director={movie.director}
        />
      ))}
    </ul>
  );
};

export default MovieList;