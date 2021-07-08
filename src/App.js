import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import Header from './components/Header/Header'
import Date from './components/UI/Date/Date'
import Footer from './components/Footer/Footer'
import HomePage from './components/pages/Homepage'
import AddFan from './components/pages/AddFan'
import FanList from './components/pages/ViewFanList'
import MovieDetails from './components/MovieDetails/MovieDetails'
import './App.css';

function App() {
  const history = useHistory()
  return (
      <div className='App'>
      <Header/>
      <Date/>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home-page'/>
        </Route>
        <Route path = '/home-page' exact>
          <HomePage />
        </Route>
        <Route path = '/new-fan' exact>
          <AddFan onClose={() => history.push('/')}/>
        </Route>
        <Route path='/fans-list' exact>
          <FanList />
        </Route>  
        <Route path='/:movieid' exact>
          <MovieDetails/> 
        </Route>
      </Switch>       
        <Footer/>
        </div>
    );
  }

  export default App;