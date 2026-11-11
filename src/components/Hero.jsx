import { Tilt, Magnetic } from '../effects.jsx'
import { useTypedLines } from '../hooks.js'
import { hero, terminal } from '../data.js'

function MiniTerminal() {
  const shown = useTypedLines(terminal.lines, 1100)
  return (
    <div className='mini-term' aria-label='build log'>
      <div className='mini-term-bar mono'>
        <span className='dot r' /><span className='dot y' /><span className='dot g' />
        <span className='mini-term-title'>{terminal.title}</span>
      </div>
      <div className='mini-term-body mono'>
        {terminal.lines.slice(0, shown).map((l, i) => (
          <div className='term-line' key={i}>
            <span className={l.p === '✓' ? 'ok' : l.p === '→' ? 'arrow' : 'cmd'}>{l.p}</span>
            <span>{l.t}</span>
          </div>
        ))}
        <div className='term-line'>
          <span className='cmd'>$</span>
          <span className='caret' aria-hidden='true' />
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className='hero' id='about'>
      <div className='hero-inner'>
        <div className='hero-text'>
          <div className='hero-status mono'>
            <span className='pulse' />
            {hero.status} · {hero.salary}
          </div>
          <h1 className='hero-name'>
            <span className='grad-text'>{hero.firstName}</span>
            <span className='grad-text outline'>{hero.lastName}</span>
          </h1>
          <p className='hero-role'>{hero.role}</p>
          <p className='hero-tagline'>{hero.tagline}</p>
          <div className='hero-cta'>
            <Magnetic>
              <a className='btn-shimmer' href='https://t.me/ilgizarKh' target='_blank' rel='noreferrer'>
                <span className='btn-shimmer__text'>Написать в Telegram</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a className='btn-ghost mono' href='#cases'>
                смотреть кейсы ↓
              </a>
            </Magnetic>
          </div>
          <p className='hero-loc mono'>{hero.location} · сейчас: {hero.currentCompany}</p>
        </div>

        <Tilt className='hero-card-wrap' max={6}>
          <div className='hero-card'>
            <div className='hc-head'>
              <div className='hc-avatar'>{hero.initials}</div>
              <div>
                <div className='hc-name'>{hero.name}</div>
                <div className='hc-role mono'>{hero.role}</div>
              </div>
              <div className='hc-live mono'>
                <span className='pulse' /> live
              </div>
            </div>
            <div className='hc-rows mono'>
              <div className='hc-row'><span>location</span><span>Казань / remote</span></div>
              <div className='hc-row'><span>company</span><span>{hero.currentCompany}</span></div>
              <div className='hc-row'><span>experience</span><span>5+ years</span></div>
              <div className='hc-row'><span>english</span><span>B2</span></div>
            </div>
            <MiniTerminal />
          </div>
        </Tilt>
      </div>

      <div className='scroll-hint mono' aria-hidden='true'>
        <span className='scroll-line' />
        scroll
      </div>
    </section>
  )
}
