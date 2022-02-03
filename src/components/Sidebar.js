import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'

import { Link } from 'react-router-dom'

function Sidebar() {
  const { isSidebarOpen, ToggleSidebar, closeSidebar } = useGlobalContext()
  // console.log(isSidebarOpen)
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div>
          <button className='close-btn'>
            <FaTimes onClick={ToggleSidebar} />
          </button>
          <ul className='sidebar-links'>
            <li>
              <Link to='/' onClick={closeSidebar}>
                home
              </Link>
            </li>
            {/* <li>
              <Link to='/about' onClick={closeSidebar}>
                about
              </Link>
            </li> */}
            <li>
              <Link to='/projects' onClick={closeSidebar}>
                projects
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeSidebar}>
                contact
              </Link>
            </li>
          </ul>
          <ul className='social-icons'>
            <li>
              <a
                rel='noreferrer'
                href='https://github.com/Achraf-Ayadi'
                target='_blank'
              >
                <AiFillGithub className='social-icon' />
              </a>
            </li>
            <li>
              <a
                rel='noreferrer'
                href='https://www.linkedin.com/in/aschraf-ayadi-393523187/'
                target='_blank'
              >
                <AiFillLinkedin className='social-icon' />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-grey-10);
    z-index: 4;
    display: grid;
    place-items: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    /* add later */
    -webkit-transform: translate(-100%);
    transform: translate(-100%);
  }
  .show-sidebar {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  .sidebar-links {
    text-align: center;
  }
  /* add sidebar links to navbar links */
  .sidebar-links a {
    font-size: 2rem;
    text-transform: capitalize;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
    display: inline-block;
    margin-bottom: 1.5rem;
  }
  .sidebar-links a:hover {
    color: var(--clr-primary-5);
  }
  .social-icons {
    display: grid;
    margin-top: 3rem;
    width: 20rem;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
  .social-icon {
    font-size: 1.5rem;
    color: var(--clr-grey-1);
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .social-icon:hover {
    color: var(--clr-primary-5);
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    background: transparent;
    border: none;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: #bb2525;
    cursor: pointer;
  }
  .close-btn:hover {
    color: #e66b6b;
  }
`

export default Sidebar
