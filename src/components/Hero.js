import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import heroImg from '../images/hero-img.jpeg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <div className='underline'></div>
          <h1>i'm john</h1>
          <h4>freelance web & mobile UI/UX Designer</h4>
          <a href='contact.html' className='btn hero-btn'>
            hire me
          </a>
          <div className='social-icons'>
            <BsFacebook className='social-icon' />
            <AiFillLinkedin className='social-icon' />
          </div>
        </article>
        <article className='hero-img'>
          <img src={heroImg} className='hero-photo' alt='john doe' />
        </article>
      </div>
    </section>
  )
}
export default Hero
