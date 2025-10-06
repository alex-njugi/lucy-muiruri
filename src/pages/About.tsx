
import { Helmet } from 'react-helmet-async'

export default function About(){
  return (
    <>
      <Helmet><title>About - Lucy Muiruri</title></Helmet>
      <section className="section">
        <h1 className="h2">About Lucy</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-gray-700">
            <p><b>Lucy Muiruri</b> is a Kenyan gospel artist whose songs blend heartfelt worship with uplifting African rhythms. Her work spans both studio and live performances, featuring songs in Kikuyu and English.</p>
            <p>Lucy’s 2024 album <b>Wi Munene</b> introduced a fresh collection of worship songs and garnered streams across platforms. Audience favorites include <em>Murithi Mwega</em>, <em>No Tugutoria</em>, <em>Ngai Mugaruri</em>, and more.</p>
            <p>Beyond recording, Lucy actively shares videos on her YouTube channel and connects with supporters on Instagram. She is available for concerts, church events, and media appearances.</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              <li className="pill">Album: Wi Munene (2024)</li>
              <li className="pill">Genres: Gospel, Afro-worship</li>
              <li className="pill">Languages: Kikuyu & English</li>
              <li className="pill">Based in Kenya</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="font-semibold mb-3">Highlights</div>
            <ul className="space-y-3 text-gray-700">
              <li>Available on major platforms: Spotify, Apple Music, Audiomack, Deezer, Boomplay, SoundCloud.</li>
              <li>YouTube channel with music videos and lyric videos.</li>
              <li>Community-focused ministry with uplifting, faith-centered messages.</li>
            </ul>
            <a className="btn mt-6" href="https://audiomack.com/lucy-muiruri" target="_blank" rel="noreferrer">Explore on Audiomack</a>
          </div>
        </div>
      </section>
    </>
  )
}
