import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Music2 } from 'lucide-react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/music', label: 'Music' },
  { to: '/gallery', label: 'Videos' },
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Booking' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const base =
    'px-4 py-2 rounded-xl font-semibold transition hover:bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400'
  const active =
    'text-brand-600 underline underline-offset-8 decoration-2 decoration-brand-500 bg-white/80'

  return (
    <header className="sticky top-0 z-50">
      <div className="container-xl mt-4">
        <div className="glass rounded-2xl px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-grid place-items-center w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-400 text-white shadow-soft">
              <Music2 />
            </span>
            <div className="font-display font-extrabold text-lg md:text-xl tracking-tight">
              Lucy <span className="text-brand-600">Muiruri</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((i) => (
              <NavLink
                key={i.to}
                to={i.to}
                className={({ isActive }) =>
                  `${base} ${isActive ? active : 'text-gray-800'}`
                }
                end={i.to === '/'}
              >
                {i.label}
              </NavLink>
            ))}
            <a
              className="btn ml-2"
              href="https://open.spotify.com/track/7MpkiuQw0DwcwYitU5D2Do"
              target="_blank"
              rel="noreferrer"
            >
              Listen
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden pill"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden container-xl">
          <div className="glass rounded-2xl mt-2 p-2">
            {nav.map((i) => (
              <NavLink
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block ${base} ${isActive ? active : 'text-gray-800'}`
                }
                end={i.to === '/'}
              >
                {i.label}
              </NavLink>
            ))}
            <a
              className="btn w-full justify-center mt-2"
              href="https://open.spotify.com/track/7MpkiuQw0DwcwYitU5D2Do"
              target="_blank"
              rel="noreferrer"
            >
              Listen
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
