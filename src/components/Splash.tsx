import { motion, useReducedMotion } from "framer-motion"
import { Music2 } from "lucide-react"

export default function Splash({
  small = false, // small = used for quick route-change loader
}: { small?: boolean }) {
  const prefersReduced = useReducedMotion()

  const bounce = prefersReduced ? {} : {
    animate: { y: [0, -6, 0] },
    transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" }
  }

  if (small) {
    // Minimal top-center pill for brief route transitions
    return (
      <div className="fixed top-4 inset-x-0 z-[100] flex justify-center pointer-events-none">
        <div className="pill bg-white/90 shadow-soft border-white/60 flex items-center gap-2">
          <motion.span {...bounce} className="inline-grid place-items-center w-6 h-6 rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 text-white">
            <Music2 size={14}/>
          </motion.span>
          <span className="text-sm font-semibold text-gray-800">Loading…</span>
        </div>
      </div>
    )
  }

  // Full-screen splash (first load)
  return (
    <div className="fixed inset-0 z-[200] grid place-items-center bg-gradient-to-br from-brand-100 via-white to-accent-100">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}
          className="inline-flex items-center gap-3 px-6 py-4 rounded-3xl bg-white/70 backdrop-blur border border-white/60 shadow-soft"
        >
          <motion.span
            className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-400 text-white"
            {...bounce}
          >
            <Music2 />
          </motion.span>
          <div className="text-left">
            <div className="font-display text-xl font-extrabold tracking-tight">
              Lucy <span className="text-brand-600">Muiruri</span>
            </div>
            <div className="text-sm text-gray-600">Loading your experience…</div>
          </div>
        </motion.div>

        {/* subtle progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "14rem" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="mx-auto mt-6 h-1.5 rounded-full bg-white/60 overflow-hidden shadow-inner"
          aria-hidden
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-brand-500 to-accent-400"
          />
        </motion.div>
      </div>
    </div>
  )
}
