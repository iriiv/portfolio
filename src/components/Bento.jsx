import { Spotlight, CountUp } from '../effects.jsx'
import { about, metrics, mfDiagram, bentoExtra, stack } from '../data.js'

function MFDiagram() {
  return (
    <div className='mf-diagram' aria-hidden='true'>
      <div className='mf-shell mono'>
        <span className='mf-dot' />
        {mfDiagram.shell}
      </div>
      <div className='mf-wires'>
        <span className='mf-wire w1' /><span className='mf-wire w2' /><span className='mf-wire w3' />
      </div>
      <div className='mf-remotes'>
        {mfDiagram.remotes.map((r) => (
          <div className='mf-remote mono' key={r}>{r}</div>
        ))}
      </div>
      <div className='mf-note mono'>{mfDiagram.note}</div>
    </div>
  )
}

export default function Bento() {
  const topStack = [...stack[0].items.slice(0, 3), ...stack[1].items.slice(0, 3)]
  return (
    <section className='sec' id='bento'>
      <div className='bento'>
        <Spotlight className='b-cell b-about reveal'>
          <div className='b-label mono'>// профиль</div>
          <p>{about}</p>
        </Spotlight>

        {metrics.map((m) => (
          <Spotlight className='b-cell b-metric reveal' key={m.label}>
            <div className='m-val'>
              <CountUp value={m.value} />
            </div>
            <div className='m-label'>{m.label}</div>
          </Spotlight>
        ))}

        <Spotlight className='b-cell b-mf reveal'>
          <div className='b-label mono'>// {mfDiagram.title}</div>
          <MFDiagram />
        </Spotlight>

        <Spotlight className='b-cell b-stack reveal'>
          <div className='b-label mono'>// ядро стека</div>
          <div className='chips'>
            {topStack.map((t) => (
              <span className='chip' key={t}>{t}</span>
            ))}
          </div>
        </Spotlight>

        {bentoExtra.map((e) => (
          <Spotlight className='b-cell b-kv reveal' key={e.k}>
            <div className='kv-k mono'>{e.k}</div>
            <div className='kv-v'>{e.v}</div>
          </Spotlight>
        ))}
      </div>
    </section>
  )
}
