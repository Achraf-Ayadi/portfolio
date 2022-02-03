import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper className='section single-page'>
      <div className='section-title'>
        <h1>contact</h1>
        <div className='underline'></div>
      </div>
      <article className='contact-form'>
        <form
          className='form-group'
          action='https://formspree.io/f/meqnalre'
          method='POST'
        >
          <h3>get in touch</h3>
          <input
            type='text'
            name='name'
            placeholder='name'
            className='form-control'
          ></input>
          <input
            name='_replyto'
            type='email'
            placeholder='email'
            className='form-control'
          ></input>
          <textarea
            name='message'
            rows='5'
            placeholder='message'
            className='form-control'
          ></textarea>
          <button type='submit' className='submit-btn btn'>
            submit here
          </button>
        </form>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
    place-items: center;
    padding: 5rem 0;
}

  .contact-form {
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;
    h3{
          padding-top: 1.25rem;
    color: var(--clr-grey-5);
}
    }
  }
  .form-group {
    
    padding: 1rem 1.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
}
`
export default Contact
