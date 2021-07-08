import React from 'react';
import { Button } from 'react-bootstrap'
import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <div className={classes.movie} >
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <p>Producer: {props.producer}</p>
      <Button onClick={props.onClick}>View More</Button>
    </div>
  );
};

export default Movie;