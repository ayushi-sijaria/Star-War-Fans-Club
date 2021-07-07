import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Date from './components/UI/Date/Date'
import Footer from './components/Footer/Footer'
import HomePage from './components/pages/Homepage'
import AddFan from './components/pages/AddFan'
import FanList from './components/pages/ViewFanList'
import './App.css';

function App() {
  return (
      <div className='App'>
      <Header/>
      <Date/>
      <Route path = '/' exact>
        <HomePage />
      </Route>
      <Route path = '/new-fan' exact>
        <AddFan />
      </Route>
      <Route path='/fans-list' exact>
        <FanList />
      </Route>       
      <Footer/>
      </div>
  );
}

export default App;