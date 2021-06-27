import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header'
import MoviesList from './components/MovieList/MovieList';
import Spinner from './components/UI/Spinner/Spinner'
import Pagination from './components/UI/PaginationComponent'
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(1);
  const [maxCounter, setMaxCounter] = useState(0)
  const incCounterHandler = () =>
  {
    if(counter<maxCounter)
    setCounter(counter+1)
  }

  const decCounterHandler = () =>
  {
    if(counter>1)
    setCounter(counter-1)
  }

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      

      const data = await response.json();
      console.log(data.results)
      const loadedMovies = [];

      for (const m of data.results) {
        loadedMovies.push({
          id: m.episode_id,
          title: m.title,
          director: m.director
        });
      }
      setMaxCounter(loadedMovies.length/4)
      console.log(loadedMovies)
      setMovies(loadedMovies);
    } catch (error) {
      
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} counter={counter} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <Spinner/>;
  }

  return (
    <React.Fragment>
      <Header/>
      <section>{content}</section>
      <Pagination onNext={incCounterHandler} onPrev={decCounterHandler}/>
    </React.Fragment>
  );
}

export default App;