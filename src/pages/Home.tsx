import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useMemo, useRef } from 'react'
import shapes from '../assets/shapes.svg'
import heroImg from '../assets/lucy-hero.jpg'

export default function Home(){
  const prefersReduced = useReducedMotion()

  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: wrapperRef })
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  const yImg  = useTransform(smooth, v => prefersReduced ? 0 : -40 * v)
  const yBlob = useTransform(smooth, v => prefersReduced ? 0 :  60 * v)
  const scaleH = useTransform(smooth, v => prefersReduced ? 1 : 1 + v*0.04)

  const fadeUp = (i=0) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0, transition: { duration: .6, delay: i*0.05 } },
    viewport: { once: true, margin: '-80px' }
  })

  const tiltHandlers = useMemo(() => {
    const handler = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = e.currentTarget
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top)  / rect.height
      el.style.setProperty('--rx', `${(0.5 - y) * 10}deg`)
      el.style.setProperty('--ry', `${(x - 0.5) * 10}deg`)
      el.style.setProperty('--tx', `${(x-0.5)*6}px`)
      el.style.setProperty('--ty', `${(y-0.5)*6}px`)
    }
    const leave = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = e.currentTarget
      el.style.setProperty('--rx','0deg')
      el.style.setProperty('--ry','0deg')
      el.style.setProperty('--tx','0px')
      el.style.setProperty('--ty','0px')
    }
    return { handler, leave }
  }, [])

  return (
    <>
      <Helmet>
        <title>Lucy Muiruri - Gospel Artist</title>
      </Helmet>

      <section className="section pt-10 md:pt-16 relative">
        <motion.img
          src={shapes}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60"
          style={{ y: yBlob }}
          aria-hidden
        />

        {/* This wrapper is relative ⇒ satisfies useScroll */}
        <div ref={wrapperRef} className="relative grid md:grid-cols-2 gap-10 items-center">

          {/* Left copy */}
          <motion.div {...fadeUp()} transition={{ duration:.7 }}>
            <span className="pill">New • Single</span>
            <h1 className="h1 mt-4">Music that heals hearts and points to God.</h1>
            <p className="lead mt-4">
              Lucy Muiruri is a Kenyan gospel artist. Explore the new album <b>Wi Munene</b> and sing along to favorites like
              <b> Murithi Mwega</b> and <b>No Tugutoria</b>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                className="btn"
                href="https://open.spotify.com/track/7MpkiuQw0DwcwYitU5D2Do"
                target="_blank" rel="noreferrer"
                whileHover={!prefersReduced ? { scale: 1.03 } : undefined}
                whileTap={!prefersReduced ? { scale: 0.98 } : undefined}
              >
                Play on Spotify
              </motion.a>

              <motion.div
                whileHover={!prefersReduced ? { scale: 1.03 } : undefined}
                whileTap={!prefersReduced ? { scale: 0.98 } : undefined}
                className="inline-block"
              >
                <Link className="btn-outline" to="/music">Browse Music</Link>
              </motion.div>
            </div>

            <motion.ul className="mt-6 flex flex-wrap gap-2 text-sm text-gray-600" {...fadeUp(2)}>
              <li className="pill">Afro-gospel</li>
              <li className="pill">Kikuyu & English</li>
              <li className="pill">Live & Studio</li>
            </motion.ul>
          </motion.div>

          {/* Right image card with tilt + parallax */}
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8}} style={{ scale: scaleH }}>
            <motion.div
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 ring-1 ring-black/5 will-change-transform"
              style={{
                y: yImg,
                transform:
                  'perspective(1000px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateX(var(--tx,0px)) translateY(var(--ty,0px))'
              }}
              onMouseMove={tiltHandlers.handler}
              onMouseLeave={tiltHandlers.leave}
            >
              <img
                src={heroImg}
                alt="Lucy Muiruri — Wi Munene era"
                loading="eager"
                width={1200}
                height={1500}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 18%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              <div className="pointer-events-none absolute -top-1/3 -left-1/3 h-2/3 w-2/3 rounded-full blur-3xl opacity-40 bg-gradient-to-br from-white/60 via-white/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  className="glass rounded-2xl p-4 backdrop-saturate-150"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <div className="font-display font-bold text-xl">Wi Munene</div>
                  <div className="text-sm text-gray-600">Album • 8 tracks • 2024</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Featured video (Aira) */}
      <section className="section">
        <motion.h2 className="h2" {...fadeUp()}>Featured Video</motion.h2>
        <motion.p className="mt-2 text-gray-600" {...fadeUp(1)}>Watch “Aira” from Lucy’s YouTube channel.</motion.p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <motion.div
            className="aspect-video rounded-2xl overflow-hidden shadow-soft border border-white/50"
            {...fadeUp()}
            whileHover={!prefersReduced ? { y: -4 } : undefined}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/t9gM_GPbRHQ?rel=0&modestbranding=1"
              title="Lucy Muiruri - Aira (Lyrics Video)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </motion.div>

          <motion.div className="glass rounded-2xl p-6" {...fadeUp(1)}>
            <h3 className="font-display text-2xl font-bold">Aira</h3>
            <p className="mt-2 text-gray-700">A beautiful worship piece. Subscribe for new releases and lyric videos.</p>
            <motion.a
              className="btn mt-4 inline-flex"
              href="https://www.youtube.com/@lucymuiruri2115"
              target="_blank" rel="noreferrer"
              whileHover={!prefersReduced ? { x: 2 } : undefined}
              whileTap={!prefersReduced ? { scale: 0.98 } : undefined}
            >
              Go to YouTube
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <motion.div
          className="glass rounded-[2rem] p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center shadow-soft"
          {...fadeUp()}
          whileHover={!prefersReduced ? { scale: 1.01 } : undefined}
        >
          <div className="md:col-span-2">
            <h2 className="h2">Book Lucy for your event</h2>
            <p className="mt-3 text-gray-700">Concerts • Church events • TV & Radio • Private functions</p>
          </div>
          <motion.div className="justify-self-end" whileHover={!prefersReduced ? { scale: 1.03 } : undefined}>
            <Link to="/contact" className="btn">Request Booking</Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
