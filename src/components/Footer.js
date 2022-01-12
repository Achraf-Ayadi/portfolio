import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <section class='footer'>
      <BsFacebook />
      <AiFillLinkedin />

      <p>
        &copy; <span></span> John Doe. All rights reserved.
      </p>
    </section>
  )
}
export default Footer
