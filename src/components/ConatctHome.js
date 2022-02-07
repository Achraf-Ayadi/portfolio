import React from 'react'
import { Link } from 'react-router-dom'
import ConnectVideo from '../videos/connect.mp4'

const ContactHome = () => {
  return (
    <section className='connect'>
      <video
        controls
        autoPlay
        muted
        loop
        // poster=''
        className='video-container'
      >
        <source src={ConnectVideo} type='video/mp4' />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div className='video-banner'>
        <div className='section-title'>
          <h2>let's get in touch</h2>
          <div className='underline'></div>
        </div>
        <p className='video-text'>
          If you have any questions or queries, I will always be happy to hear
          from you. Feel free to contact me.
        </p>
        <Link to='/contact' className='btn'>
          contact me
        </Link>
      </div>
    </section>
  )
}
export default ContactHome
