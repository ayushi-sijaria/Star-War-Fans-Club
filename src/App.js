import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import MoviesList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer'
import Spinner from './components/UI/Spinner/Spinner'
import Pagination from './components/UI/Pagination/PaginationComponent'
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(1);
  const [maxCounter, setMaxCounter] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])

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
          director: m.director,
          producer: m.producer
        });
      }
      setMaxCounter(loadedMovies.length/2)
      console.log(loadedMovies)
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
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={filteredMovies} counter={counter} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <Spinner/>;
  }  

  let current = new Date();
     let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
     let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();

  return (
    <React.Fragment>
      <p style={{color: 'skyBlue', textAlign: 'right', margin: '0'}}>Last updated: {cDate+ ' ' + cTime}</p>
      <Header/>
      <Search searchTerm={searchTermHandler} search={searchHandler}/>
      <section>{content}</section>
      <Pagination onNext={incCounterHandler} onPrev={decCounterHandler}/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;