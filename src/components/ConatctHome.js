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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non qui quam
          exercitationem consequuntur facere hic magni voluptatum animi maiores
          corporis. Consectetur eaque sed perferendis numquam accusamus facere
          magni cumque odit?
        </p>
        <Link to='/contact' className='btn'>
          contact me
        </Link>
      </div>
    </section>
  )
}
export default ContactHome
