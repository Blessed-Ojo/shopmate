import './Navbar.css'
import { NavLink } from 'react-router-dom'


const Navbar = ({ user, onLogout }) => {
  return (
    <nav className='Navbar'>
      <div className='logo'>
        <h2>Shop<span>Mate</span></h2>
      </div>
      <NavLink to="/"
         className={({ isActive }) => (isActive ? 'active-link' : '')}>
          home
        </NavLink>
      <NavLink to="/cart"
        className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Cart
        </NavLink>
      {user ? (
        <>
          <span>Hello, {user.username}!</span>
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >Login
          </NavLink>
          <NavLink to="/signup"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >Signup
          </NavLink>
        </>
      )}
    </nav>
  )
}

export default Navbar