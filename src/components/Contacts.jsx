import { Spotlight, Magnetic, ScrambleText } from '../effects.jsx'
import { contacts } from '../data.js'

export default function Contacts() {
  return (
    <section className='sec contacts' id='contacts'>
      <Spotlight className='contacts-inner reveal'>
        <div className='sec-meta mono'>
          <span className='path'>// module: contacts — public API</span>
        </div>
        <h2 className='cta-title'>
          <ScrambleText text='Соберём фронт,' />
          <br />
          который выдержит <em className='grad-text'>production</em>
        </h2>
        <p className='cta-sub'>
          Откликайтесь в telegram — отвечаю быстрее всего. Готов к разговору про
          senior-позиции в продуктовых командах и финтехе.
        </p>
        <Magnetic strength={0.25}>
          <a className='btn-shimmer btn-lg' href='https://t.me/ilgizarKh' target='_blank' rel='noreferrer'>
            <span className='btn-shimmer__text'>@ilgizarKh ↗</span>
          </a>
        </Magnetic>
        <div className='contact-grid'>
          {contacts.map((c) => (
            <a className='contact' href={c.href} target='_blank' rel='noreferrer' key={c.label}>
              <span className='c-label mono'>{c.label}</span>
              <span className='c-value'>{c.value}</span>
              <span className='c-arrow' aria-hidden='true'>↗</span>
            </a>
          ))}
        </div>
      </Spotlight>
    </section>
  )
}
