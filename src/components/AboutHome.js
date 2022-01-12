import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg from '../images/about-img.jpeg'

const AboutHome = () => {
  return (
    <section className='section about'>
      <div className='section-center about-center'>
        <article className='about-img'>
          <img className='hero-photo' src={AboutImg} alt='about me' />
        </article>
        <article className='about-info'>
          <div className='section-title about-title'>
            <h2>about</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            atque incidunt eveniet nisi beatae aliquid illo magni ullam animi
            vero, eius cum debitis hic doloribus assumenda ducimus? Ducimus,
            expedita, maiores velit quo facilis qui hic voluptatum voluptas ea
            officiis maxime?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            atque incidunt eveniet nisi beatae aliquid illo magni ullam animi
            vero, eius cum debitis hic doloribus assumenda ducimus? Ducimus,
            expedita, maiores velit quo facilis qui hic voluptatum voluptas ea
            officiis maxime?
          </p>
          <Link to='/about' className='btn about-btn'>
            about me
          </Link>
        </article>
      </div>
    </section>
  )
}
export default AboutHome
