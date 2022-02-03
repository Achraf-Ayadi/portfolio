import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import styled from 'styled-components'

const Footer = () => {
  let date = new Date().getFullYear()

  return (
    <Wrapper>
      <ul className='social-icons'>
        <li className='social-icon'>
          <a
            rel='noreferrer'
            href='https://www.linkedin.com/in/aschraf-ayadi-393523187/'
            target='_blank'
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li className='social-icon'>
          <a
            rel='noreferrer'
            href='https://github.com/Achraf-Ayadi'
            target='_blank'
          >
            <AiFillGithub />
          </a>
        </li>
      </ul>

      <p>
        &copy; <span>{date}</span> Achraf Ayadi. All rights reserved.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-bottom: 2rem;
  background: #222;
  display: grid;
  place-items: center;

  .social-icons {
    margin: 2rem auto;

    font-size: 2rem;
    display: flex;
  }
  .social-icon {
    a {
      padding-right: 2rem;
      color: var(--clr-primary-5);
    }
  }
  .social-icon:hover {
    a {
      color: var(--clr-primary-10);
    }
  }
  p {
    font-size: 1.25rem;
    /* color: var(--clr-white); */
  }
`
export default Footer
