import React from 'react'

const MyWork = () => {
  return (
    <section class='section projects'>
      <div class='section-title'>
        <h2>latest works</h2>
        <div class='underline'></div>
        <p class='projects-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sed
          reiciendis quis provident vero cum accusamus illum perferendis
          debitis, alias porro? Incidunt, veniam? Dicta adipisci accusamus
          officia temporibus inventore a.
        </p>
      </div>
      <div class='section-center projects-center'>
        <a href='projects.html' class='project-1'>
          <article class='project'>
            <img src='./images/project-1.jpeg' alt='' class='project-img' />
            <div class='project-info'>
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
      </div>
    </section>
  )
}
export default MyWork
