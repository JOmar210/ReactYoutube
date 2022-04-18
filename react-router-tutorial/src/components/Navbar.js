import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'

export default function Navbar(){
  return(
    <div>
      <ul>
        <li>
          <NavLink 
            className={({isActive})=>(isActive ? "active":"inactive")}
            to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink 
            className={({isActive})=>(isActive ? "active":"inactive")}
            to='/about'>about</NavLink>
        </li>
        <li>
          <NavLink 
            className={({isActive})=>(isActive ? "active":"inactive")}
            to='/users'>users</NavLink>
        </li>
      </ul>
    </div>
  );
}