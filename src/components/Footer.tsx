import { Facebook, Instagram, Music2, Youtube, Twitter, Music, Radio } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="mt-20">
      <div className="section">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-2xl font-extrabold font-display">
                <span className="inline-grid place-items-center w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-400 text-white shadow-soft">
                  <Music2 />
                </span>
                Lucy <span className="text-brand-600">Muiruri</span>
              </div>
              <p className="mt-3 text-gray-600">Kenyan gospel artist, music that lifts hearts and tells real stories.</p>
            </div>
            <div className="space-y-2">
              <div className="font-semibold">Stream & Follow</div>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li><a className="pill flex items-center gap-2" href="https://www.youtube.com/@lucymuiruri2115" target="_blank"><Youtube className="w-4 h-4"/> YouTube</a></li>
                <li><a className="pill flex items-center gap-2" href="https://open.spotify.com/track/7MpkiuQw0DwcwYitU5D2Do" target="_blank"><Music className="w-4 h-4"/> Spotify</a></li>
                <li><a className="pill flex items-center gap-2" href="https://audiomack.com/lucy-muiruri" target="_blank"><Radio className="w-4 h-4"/> Audiomack</a></li>
                <li><a className="pill flex items-center gap-2" href="https://soundcloud.com/lucymuiruri" target="_blank"><Music className="w-4 h-4"/> SoundCloud</a></li>
                <li><a className="pill flex items-center gap-2" href="https://www.instagram.com/lucy.muiruri.906/" target="_blank"><Instagram className="w-4 h-4"/> Instagram</a></li>
                <li><a className="pill flex items-center gap-2" href="https://www.deezer.com/en/album/541573572" target="_blank"><Music className="w-4 h-4"/> Deezer</a></li>
              </ul>
            </div>
            <div className="justify-self-end">
              <a href="/press-kit.zip" className="btn-outline">Download Press Kit</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/50 text-sm text-gray-600 flex flex-wrap gap-3 justify-between">
            <span>© <span id="year"></span> Lucy Muiruri. All rights reserved.</span>
            <span>
              Built by:{" "}
              <a
                href="https://alexnjugi.com"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 text-brand-600 hover:text-brand-700"
              >
                Alex Njugi Karanja
              </a>.
            </span>
          </div>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{__html: "document.getElementById('year').textContent = new Date().getFullYear()"}} />
    </footer>
  )
}
