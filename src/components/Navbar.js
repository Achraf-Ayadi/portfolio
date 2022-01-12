import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <Link to='/'>
          {/* <img src={} alt='cocktails logo' className='logo' /> */}
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'> about</Link>
          </li>
          <li>
            <Link to='/projects'> projects</Link>
          </li>
          <li>
            <Link to='/contact'> contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
