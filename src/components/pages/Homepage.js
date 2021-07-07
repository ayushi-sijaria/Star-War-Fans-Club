import React, { useState, useEffect, useCallback } from 'react';
import Search from '../Search/Search'
import MoviesList from '../MovieList/MovieList';
import Spinner from '../UI/Spinner/Spinner'
import NoResults from '../NoResults/NoResults';
import Pagination from '../UI/Pagination/PaginationComponent'
import ErrorModal from '../UI/ErrorModal/ErrorModal'

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(1);
  const [maxCounter, setMaxCounter] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])
  const [error, setError] = useState(false)
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
  const searchTermHandler = (event) =>
  {
    setSearchTerm(event.target.value)
  }
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    try { 
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        setError(true)
      }     

      const data = await response.json();
      const loadedMovies = [];
      var i=1
      for (const m of data.results) {
        loadedMovies.push({
          index:i++,
          id: m.episode_id,
          title: m.title,
          director: m.director,
          producer: m.producer
        });
      }
      setMaxCounter(loadedMovies.length/2)
      setMovies(loadedMovies);
      setFilteredMovies(loadedMovies)
    } catch (error) {
      
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  
  const searchHandler = () =>
  {
    setFilteredMovies(movies.filter(m => m.title.includes(searchTerm))) 
    setMaxCounter(filteredMovies/2)
  }

  const clearError = () =>
  {
    setError(false)
  }

  let content 

  if (filteredMovies.length > 0) {
    content = <MoviesList movies={filteredMovies} counter={counter} />;
  }
  else{
    content = <NoResults/>
  }
  if (isLoading) {
    content = <Spinner/>;
  }     
  return (
      <div>     
        {error && <ErrorModal onClose={clearError}>No Movies Found.</ErrorModal>}
        <Search searchTerm={searchTermHandler} search={searchHandler}/>
        <section>{content}</section>
        <Pagination onNext={incCounterHandler} onPrev={decCounterHandler}/>
      </div>
  );
}

export default App;