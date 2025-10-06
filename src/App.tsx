import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Music from './pages/Music'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Splash from './components/Splash'

export default function App() {
  const [bootLoading, setBootLoading] = useState(true)
  const [routeLoading, setRouteLoading] = useState(false)
  const location = useLocation()

  // Full-screen splash for ~7 seconds on first app load
  useEffect(() => {
    let canceled = false
    async function boot() {
      const minDelay = new Promise(res => setTimeout(res, 4000)) // ⬅️ 7s splash
      // We still wait for fonts (nice polish), but the splash lasts at least 7s.
      const fontsReady = (document as any).fonts?.ready ?? Promise.resolve()
      await Promise.all([minDelay, fontsReady])
      if (!canceled) setBootLoading(false)
    }
    boot()
    return () => { canceled = true }
  }, [])

  // Tiny loader for each route change after boot
  useEffect(() => {
    if (bootLoading) return
    setRouteLoading(true)
    const t = setTimeout(() => setRouteLoading(false), 420)
    return () => clearTimeout(t)
  }, [location.pathname, bootLoading])

  return (
    <div className="min-h-screen flex flex-col">
      {bootLoading && <Splash />}                         {/* full splash ~7s */}
      {!bootLoading && routeLoading && <Splash small />}  {/* quick route loader */}

      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
