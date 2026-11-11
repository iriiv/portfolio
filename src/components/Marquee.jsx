import { marquee } from '../data.js'

function Row({ items, dir }) {
  const doubled = [...items, ...items, ...items]
  return (
    <div className={`mq-row ${dir}`} aria-hidden='true'>
      <div className='mq-track'>
        {doubled.map((t, i) => (
          <span className='mq-chip mono' key={`${t}-${i}`}>
            {t}
            <span className='mq-sep'>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section className='marquee reveal'>
      <Row items={marquee[0]} dir='l2r' />
      <Row items={marquee[1]} dir='r2l' />
    </section>
  )
}
