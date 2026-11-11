import { useScrollSpy, useScrollProgress } from '../hooks.js'
import { nav, hero } from '../data.js'

export function Progress() {
  const ref = useScrollProgress()
  return <div className='progress' ref={ref} aria-hidden='true' />
}

export default function Nav() {
  const active = useScrollSpy(nav.map((n) => n.id))
  return (
    <>
      <Progress />
      <nav className='nav'>
        <a href='#about' className='nav-logo mono' aria-label='Наверх'>
          <span className='logo-brace'>{'{ИХ}'}</span>
        </a>
        <div className='nav-pill'>
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : ''}>
              {n.label}
            </a>
          ))}
        </div>
        <a className='nav-cta mono' href='#contacts'>
          {hero.status} ↗
        </a>
      </nav>
    </>
  )
}
