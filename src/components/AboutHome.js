import React from 'react'
import AboutImg from '../images/Foto von Aschraf Ayadi.jpg'
import styled from 'styled-components'

const AboutHome = () => {
  return (
    <Wrapper>
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
              Hello, <br /> I am Achraf Ayadi and I am a Frontend developer. I
              spend most of my day, experimenting with HTML, CSS and JavaScript.
              I enjoy coding and the challenge of learning something new
              everyday.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              atque incidunt eveniet nisi beatae aliquid illo magni ullam animi
              vero, eius cum debitis hic doloribus assumenda ducimus? Ducimus,
              expedita, maiores velit quo facilis qui hic voluptatum voluptas ea
              officiis maxime?
            </p>
           
          </article>
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .hero-photo {
    max-width: 25rem;
    max-height: 30rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: var(--radius);
    /* place the image in front of ::before */
    position: relative;
  }
`
export default AboutHome
