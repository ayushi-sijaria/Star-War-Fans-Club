import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header'
import Date from './components/UI/Date/Date'
import Search from './components/Search/Search'
import MoviesList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer'
import ErrorModal from './components/UI/ErrorModal/ErrorModal'
import Spinner from './components/UI/Spinner/Spinner'
import NoResults from './components/NoResults/NoResults';
import Pagination from './components/UI/Pagination/PaginationComponent'
import './App.css';

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
      console.log(loadedMovies)
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
    console.log(filteredMovies)
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
    <div className='App'>
      <Header/>
      <Date/>
      {error && <ErrorModal onClose={clearError}>No Movies Found.</ErrorModal>}
      <Search searchTerm={searchTermHandler} search={searchHandler}/>
      <section>{content}</section>
      <Pagination onNext={incCounterHandler} onPrev={decCounterHandler}/>
      <Footer/>
    </div>
  );
}

export default App;