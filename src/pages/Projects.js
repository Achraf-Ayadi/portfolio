import React from 'react'
import { AiFillGithub, AiOutlineHome } from 'react-icons/ai'
import styled from 'styled-components'
import projects from '../Data'

const Projects = () => {
  return (
    <Wrapper>
      <header className='projects-hero'>
        <div className='section-title'>
          <h1>my projects</h1>
          <div className='underline'></div>
        </div>
      </header>
      <section className='section section-center projects-page-center'>
        {projects.map((project) => {
          const { id, name, url, img, repos, skills } = project
          return (
            <article key={id} className='single-project'>
              <div className='project-container'>
                <img
                  src={img}
                  className='project-img'
                  alt='single project'
                ></img>
                <span>
                  <a
                    href={url}
                    rel='noreferrer'
                    target='_blank'
                    className='project-icon'
                  >
                    <AiOutlineHome />
                  </a>
                </span>
              </div>
              <div className='project-details'>
                <h4>{name}</h4>
                <div className='tabs'>
                  {skills.map((skill, index) => {
                    return (
                      <p key={index} className='tab'>
                        {skill}
                      </p>
                    )
                  })}
                </div>

                <div className='project-footer'>
                  <span>
                    <AiFillGithub />
                  </span>
                  <a href={repos} rel='noreferrer' target='_blank'>
                    source code
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
 
  .projects-hero {
    height: 40vh;
    background: var(--clr-primary-10);
    display: grid;
    place-items: center;
  }
  .projects-hero .section-title {
    margin-bottom: 0;
  }
 
  }
  .projects-page-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 3rem 1rem;
  }
  .single-project {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    
  }
  .project-container img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
  .project-container {
    position: relative;
  }
  .project-icon {
    position: absolute;
    font-size: 1.75rem;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background: var(--clr-primary-5);
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: var(--clr-primary-1);
    border: 0.375rem solid var(--clr-grey-10);
    
  }
  .project-details {
    padding: 2rem 1.5rem;
  }
  .tabs{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    p{
      font-size: .75rem;
      text-transform: uppercase;
      padding: 5px;
      margin:2px;
      background: var(--clr-grey-9);
      border-radius: 10px;
    }
  }
  .project-footer {
    ${'' /* padding-top: 1rem; */}
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .project-footer {
    color: var(--clr-primary-5);
  }
  .project-footer a {
    text-transform: capitalize;
    color: var(--clr-primary-5);
    transition: var(--transition);
    justify-self: end;
  }
`
export default Projects
