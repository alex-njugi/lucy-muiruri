
import { Helmet } from 'react-helmet-async'

export default function Events(){
  return (
    <>
      <Helmet><title>Events - Lucy Muiruri</title></Helmet>
      <section className="section">
        <h1 className="h2">Events</h1>
        <p className="mt-2 text-gray-600">No upcoming events listed at the moment. Follow Lucy on Instagram for announcements.</p>
        <a className="btn mt-6" href="https://www.instagram.com/lucy.muiruri.906/" target="_blank" rel="noreferrer">Follow on Instagram</a>
      </section>
    </>
  )
}
