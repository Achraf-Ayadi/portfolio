import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context.js'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const { navFixed, ToggleSidebar } = useGlobalContext()

  return (
    <Wrapper>
      <nav className={`${navFixed ? 'nav navbar-fixed' : 'nav'}`}>
        <div className='nav-center'>
          <button type='button' className='nav-btn'>
            <FaBars onClick={ToggleSidebar} />
          </button>

          <ul className='nav-links'>
            <li>
              <Link to='/'>home</Link>
            </li>
            {/* <li>
              <Link to='/about'> about</Link>
            </li> */}
            <li>
              <Link to='/projects'> projects</Link>
            </li>
            <li>
              <Link to='/contact'> contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .nav {
    height: 5rem;
    display: grid;
    -webkit-box-align: center;
    justify-content: right;
    align-items: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    padding: 1rem;
  }

  .nav-links {
    display: none;
  }
  .nav-center {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    font-size: 2rem;
    cursor: pointer;
    /* show later */
    justify-self: right;
  }

  /* fixed navbar */
  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--clr-white);
    z-index: 2;
    box-shadow: var(--light-shadow);
  }

  @media screen and (min-width: 768px) {
    .nav {
      justify-content: center;
      background: var(--clr-primary-10);
    }

    .nav-btn {
      display: none;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
    .nav-links a {
      text-transform: capitalize;
      color: var(--clr-grey-1);
      font-weight: bold;
      letter-spacing: var(--spacing);
      -webkit-transition: var(--transition);
      transition: var(--transition);
    }
    .nav-links a:hover {
      color: var(--clr-primary-5);
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      -webkit-box-align: center;
      align-items: center;
    }

    .nav-links {
      justify-self: end;
    }
  }
`
export default Navbar
