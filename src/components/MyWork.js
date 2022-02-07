import React from 'react'
import projects from '../Data'

const MyWork = () => {
  return (
    <section className='section projects'>
      <div className='section-title'>
        <h2>latest works</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center projects-center'>
        {projects
          .map((project) => {
            const { id, name, url, img } = project
            return (
              <a
                key={id}
                href={url}
                className='project'
                rel='noreferrer'
                target='_blank'
              >
                <article className='project'>
                  <img src={img} alt={name} className='project-img' />
                  <div className='project-info'>
                    <h4>{name}</h4>
                  </div>
                </article>
              </a>
            )
          })
          .slice(0, 3)}
      </div>
    </section>
  )
}
export default MyWork
