import { Spotlight, ScrambleText } from '../effects.jsx'
import { experience, education } from '../data.js'

export default function Experience() {
  return (
    <section className='sec' id='experience'>
      <header className='sec-head reveal'>
        <div className='sec-meta mono'>
          <span className='path'>// module: experience</span>
          <span className='sec-note'>remote-entry.tsx</span>
        </div>
        <h2>
          <ScrambleText text='Опыт работы' />
        </h2>
      </header>

      <div className='timeline'>
        {experience.map((job) => (
          <article className={`job reveal ${job.current ? 'current' : ''}`} key={job.company}>
            <div className='job-node' aria-hidden='true' />
            <Spotlight className='job-card'>
              <div className='job-top'>
                <h3>{job.company}</h3>
                <span className='job-period mono'>{job.period}</span>
              </div>
              <div className='job-sub'>
                <span className='job-role'>{job.role}</span>
                <span className='job-place mono'>{job.place}</span>
              </div>
              <ul>
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <div className='chips'>
                {job.tags.map((t) => (
                  <span className='chip' key={t}>{t}</span>
                ))}
              </div>
            </Spotlight>
          </article>
        ))}
      </div>

      <div className='edu-row'>
        {education.map((e) => (
          <Spotlight className='edu reveal' key={e.title}>
            <div className='edu-year mono'>{e.year}</div>
            <div>
              <div className='edu-title'>{e.title} · {e.place}</div>
              <div className='edu-detail'>{e.detail}</div>
            </div>
          </Spotlight>
        ))}
      </div>
    </section>
  )
}
