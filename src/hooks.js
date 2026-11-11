import { useEffect, useRef, useState } from 'react'

/** появление секций при скролле */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/** подсветка активного раздела в навигации */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight * 0.35
      let cur = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pos) cur = id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return active
}

/** полоса прогресса скролла */
export function useScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return ref
}

/** построчный «build log» */
export function useTypedLines(lines, startDelay = 700) {
  const [shown, setShown] = useState(0)
  useEffect(() => {
    if (shown >= lines.length) return
    const delay = shown === 0 ? startDelay : 420 + lines[shown].t.length * 12
    const id = setTimeout(() => setShown((s) => s + 1), delay)
    return () => clearTimeout(id)
  }, [shown, lines, startDelay])
  return shown
}
