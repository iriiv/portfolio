import { Tilt, ScrambleText } from '../effects.jsx'
import { cases } from '../data.js'

export default function Cases() {
  return (
    <section className='sec' id='cases'>
      <header className='sec-head reveal'>
        <div className='sec-meta mono'>
          <span className='path'>// module: case-studies</span>
          <span className='sec-note'>source of truth</span>
        </div>
        <h2>
          <ScrambleText text='Кейсы' />
        </h2>
      </header>
      <div className='cases-grid'>
        {cases.map((c) => (
          <Tilt key={c.id} max={4} className='case-wrap'>
            <article className='case reveal'>
              <div className='case-id mono'>{c.id}</div>
              <h3 className='case-title'>{c.title}</h3>
              <p className='case-sub'>{c.subtitle}</p>
              <ol className='case-steps'>
                {c.steps.map((s) => (
                  <li key={s.n}>
                    <span className='step-n mono'>{s.n}</span>
                    <span className='step-t'>{s.t}</span>
                    <span className='step-d'>{s.d}</span>
                  </li>
                ))}
              </ol>
              <div className='chips'>
                {c.tags.map((t) => (
                  <span className='chip' key={t}>{t}</span>
                ))}
              </div>
            </article>
          </Tilt>
        ))}
      </div>
    </section>
  )
}
