import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  let date = new Date().getFullYear()

  return (
    <section class='footer'>
      <ul className='social-icons'>
        <li className='social-icon'>
          <AiFillLinkedin />
        </li>
      </ul>

      <p>
        &copy; <span>{date}</span> Achraf Ayadi. All rights reserved.
      </p>
    </section>
  )
}
export default Footer
