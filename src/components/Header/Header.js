import classes from './Header.module.css'
import { Link } from 'react-router-dom'
const Header = () => 
{
     return (
          <header className={classes.header}>
               <div style={{marginRight: '280px'}}>STAR WARS FAN CLUB</div>
               <nav>
                    <ul>
                         <Link to='/home-page'>Home</Link>
                         <Link to ='/new-fan'>Enroll Yourself</Link>
                         <Link to='/fans-list'>Fans List</Link>
                    </ul>
               </nav>
          </header>
          
     )
}
export default Header