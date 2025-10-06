import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Contact(){
  const [status, setStatus] = useState<string>('')

  // WhatsApp expects the number in full international format without "+" or spaces.
  const WHATSAPP_NUMBER = '254718183789' // 0718 183789 (Kenya) -> 254718183789

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const msg = String(data.get('message') || '').trim()

    // Compose a nice, readable WhatsApp message
    const text =
`Hello Lucy team,

Name: ${name}
Email: ${email}

Message:
${msg}`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

    // Open WhatsApp (mobile: app / desktop: web.whatsapp)
    window.open(url, '_blank', 'noopener,noreferrer')
    setStatus('Opening WhatsApp…')
  }

  return (
    <>
      <Helmet><title>Booking - Lucy Muiruri</title></Helmet>
      <section className="section">
        <h1 className="h2">Booking & Contact</h1>
        <p className="mt-2 text-gray-600">For bookings, interviews, and collaborations, use the form below or reach out directly.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-4 glass p-6 rounded-2xl">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input required name="name" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400" placeholder="Your full name" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input required type="email" name="email" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400" placeholder="you@example.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea required name="message" rows={6} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400" placeholder="Tell us about your event, dates, venue, and any other details."></textarea>
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <button className="btn" type="submit">Send via WhatsApp</button>
            {status && <span className="text-sm text-gray-600">{status}</span>}
          </div>
        </form>

        <div className="mt-8">
          <div className="glass rounded-2xl p-6">
            <div className="font-semibold">Direct links</div>
            <ul className="mt-2 flex flex-wrap gap-3 text-sm">
              <li>
                <a className="pill" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li><a className="pill" href="https://www.instagram.com/lucy.muiruri.906/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a className="pill" href="https://www.youtube.com/@lucymuiruri2115" target="_blank" rel="noreferrer">YouTube</a></li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">
              Tip: If WhatsApp doesn’t open, ensure WhatsApp is installed on mobile, or use <a className="underline" href={`https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">Web WhatsApp</a> on desktop.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
