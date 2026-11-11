import { Spotlight, ScrambleText } from '../effects.jsx'
import { stack } from '../data.js'

export default function Stack() {
  return (
    <section className='sec' id='stack'>
      <header className='sec-head reveal'>
        <div className='sec-meta mono'>
          <span className='path'>// module: stack</span>
          <span className='sec-note'>dependencies.json</span>
        </div>
        <h2>
          <ScrambleText text='Стек и архитектура' />
        </h2>
      </header>
      <div className='stack-grid'>
        {stack.map((g) => (
          <Spotlight className='stack-group reveal' key={g.group}>
            <div className='stack-title mono'>{g.group}</div>
            <div className='chips'>
              {g.items.map((it) => (
                <span className='chip' key={it}>{it}</span>
              ))}
            </div>
          </Spotlight>
        ))}
      </div>
    </section>
  )
}
