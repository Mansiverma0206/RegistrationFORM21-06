import { Link } from 'react-router-dom';
import './Header.css'

const Header = () =>{
   return<>
      <header>
         <nav>
         <ul>
         <Link to='/'><li>MANSI VERMA</li></Link>
         </ul>
            <ul>
               <Link  to='/register'><li>Register</li></Link>
               <Link to='/login'><li>Login</li></Link>
               <Link to='/'><li>DashBoard</li></Link>
               <Link to='/'><li>Logout</li></Link>
            </ul>
         </nav>
      </header>
   </>
}

export default Header;