import { useReveal } from './hooks.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Bento from './components/Bento.jsx'
import Marquee from './components/Marquee.jsx'
import Experience from './components/Experience.jsx'
import Stack from './components/Stack.jsx'
import Cases from './components/Cases.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useReveal()
  return (
    <>
      {/* aurora-фон */}
      <div className='aurora' aria-hidden='true'>
        <span className='a-blob a1' />
        <span className='a-blob a2' />
        <span className='a-blob a3' />
      </div>

      <Nav />
      <Hero />
      <main>
        <Bento />
        <Marquee />
        <Experience />
        <Stack />
        <Cases />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
