import { useEffect, useRef, useState } from 'react'

/* ---------- 3D tilt с бликом (glare) ---------- */
export function Tilt({ children, max = 7, className = '' }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${-py * max}deg`)
    el.style.setProperty('--ry', `${px * max}deg`)
    el.style.setProperty('--gx', `${(px + 0.5) * 100}%`)
    el.style.setProperty('--gy', `${(py + 0.5) * 100}%`)
  }
  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }
  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={onMove} onMouseLeave={reset}>
      {children}
    </div>
  )
}

/* ---------- spotlight: радиальная подсветка за курсором ---------- */
export function Spotlight({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <Tag ref={ref} className={`spotlight ${className}`} onMouseMove={onMove} {...rest}>
      {children}
    </Tag>
  )
}

/* ---------- magnetic: элемент притягивается к курсору ---------- */
export function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }
  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }
  return (
    <div
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </div>
  )
}

/* ---------- CountUp: счётчик при появлении ("5+", "100k+", "5000+") ---------- */
export function CountUp({ value, className = '' }) {
  const [n, setN] = useState(null)
  const ref = useRef(null)
  const m = String(value).match(/^(\d+)(.*)$/)
  const target = m ? parseInt(m[1], 10) : 0
  const suffix = m ? m[2] : ''

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const dur = 1300
        const t0 = performance.now()
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1)
          const ease = 1 - Math.pow(1 - p, 4)
          setN(Math.round(target * ease))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return (
    <span ref={ref} className={className}>
      {n === null ? target : n}
      {suffix}
    </span>
  )
}

/* ---------- ScrambleText: текст собирается из глифов ---------- */
const GLYPHS = '▚▞█▓▒░<>/{}[]#$%&*+=~^·'

export function ScrambleText({ text, className = '' }) {
  const [out, setOut] = useState(text)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let iv
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        let frame = 0
        iv = setInterval(() => {
          frame++
          const done = Math.floor(frame / 3)
          if (done >= text.length) {
            clearInterval(iv)
            setOut(text)
            return
          }
          setOut(
            text
              .split('')
              .map((c, i) =>
                i < done || c === ' ' ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
              )
              .join(''),
          )
        }, 32)
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      clearInterval(iv)
    }
  }, [text])
  return (
    <span ref={ref} className={className}>
      {out}
    </span>
  )
}
