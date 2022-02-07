import React from 'react'

const Skills = () => {
  return (
    <section className='skills section'>
      <div className='section-title'>
        <h2>skills</h2>
        <div className='underline'></div>
      </div>

      <div className='section-center skills-center'>
        <article>
          <h3>front end</h3>

          <div className='skill'>
            <p>HTML / CSS</p>
            <div className='skill-container'>
              <div className='skill-value value-80'></div>
              <p className='skill-text skill-text-80'>80%</p>
            </div>
          </div>

          <div className='skill'>
            <p>javascript</p>
            <div className='skill-container'>
              <div className='skill-value value-80'></div>
              <p className='skill-text skill-text-80'>80%</p>
            </div>
          </div>

          <div className='skill'>
            <p>react / redux</p>
            <div className='skill-container'>
              <div className='skill-value value-80'></div>
              <p className='skill-text skill-text-80'>80%</p>
            </div>
          </div>
        </article>
        <article>
          <h3>Other</h3>

          <div className='skill'>
            <p>Styled Components</p>
            <div className='skill-container'>
              <div className='skill-value value-70'></div>
              <p className='skill-text skill-text-70'>70%</p>
            </div>
          </div>
          <div className='skill'>
            <p>Github</p>
            <div className='skill-container'>
              <div className='skill-value value-60'></div>
              <p className='skill-text skill-text-60'>60%</p>
            </div>
          </div>

          <div className='skill'>
            <p>MySQL Database</p>
            <div className='skill-container'>
              <div className='skill-value value-60'></div>
              <p className='skill-text skill-text-60'>60%</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Skills
