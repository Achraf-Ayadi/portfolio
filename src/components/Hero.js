import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import heroImg from '../images/Foto von Aschraf Ayadi.jpg'

const Hero = () => {
  return (
    <Wrapper>
      <section className='hero'>
        <div className='section-center hero-center'>
          <article className='hero-info'>
            <div className='underline'></div>
            <h1>i'm achraf</h1>
            <h4>frontend developer</h4>
            <Link to='/contact' className='btn hero-btn '>
              hire me
            </Link>

            <div className='hero-icons'>
              <a
                rel='noreferrer'
                href='https://github.com/Achraf-Ayadi'
                target='_blank'
              >
                <AiFillGithub className='hero-icon' />
              </a>
              <a
                rel='noreferrer'
                href='https://www.linkedin.com/in/aschraf-ayadi-393523187/'
                target='_blank'
              >
                <AiFillLinkedin className='hero-icon' />
              </a>
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* underline in globals */
  .hero .underline {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
  .hero-img {
    display: none;
  }
  .hero {
    background: var(--clr-primary-10);
  }
  .hero-center {
    min-height: calc(100vh - 5rem);
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    justify-items: center;
  }

  .hero-info h4 {
    color: var(--clr-grey-5);
  }
  .hero-icons {
    display: grid;
    margin-top: 3rem;
    width: 20rem;
    grid-template-columns: repeat(2, 5rem);
    justify-items: center;
    justify-items: start;
  }
  .hero-icon {
    font-size: 1.5rem;
    color: var(--clr-grey-1);
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .hero-btn {
    margin-top: 1.25rem;
  }

  /* later in the media query */

  @media screen and (min-width: 992px) {
    .hero-center {
      grid-template-columns: 1fr 1fr;
    }
    .hero-img {
      /* show on bigger screensize */
      display: block;
      position: relative;
    }
    .hero-photo {
      max-width: 25rem;
      max-height: 30rem;
      -o-object-fit: cover;
      object-fit: cover;
      border-radius: var(--radius);
      /* place the image in front of ::before */
      position: relative;
    }
    /* hero photo outside  */
    .hero-img::before,
    .about-img::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 2rem;
      right: -2rem;
      border: 0.25rem solid var(--clr-primary-7);
      border-radius: var(--radius);
    }
  }
`
export default Hero
