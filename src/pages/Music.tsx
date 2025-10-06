import { Helmet } from 'react-helmet-async'

export default function Music(){
  return (
    <>
      <Helmet><title>Music - Lucy Muiruri</title></Helmet>
      <section className="section">
        <h1 className="h2">Stream Lucy's Music</h1>
        <p className="mt-2 text-gray-600">Find Lucy on your favorite platform.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-4">
            <div className="text-sm font-semibold">Spotify, Single</div>
            <div className="aspect-square md:aspect-video rounded-xl overflow-hidden mt-2">
              <iframe
                title="Spotify — Muthi Uria"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/7MpkiuQw0DwcwYitU5D2Do?utm_source=generator"
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>

          <div className="glass rounded-2xl p-4">
            <div className="text-sm font-semibold">Apple Music, Album: Wi Munene (2024)</div>
            <div className="aspect-square md:aspect-video rounded-xl overflow-hidden mt-2">
              <iframe
                title="Apple Music — Wi Munene"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                height="100%"
                style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', background: 'transparent' }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/ca/album/wi-munene/1728263554"
              />
            </div>
          </div>

          {/* ✅ Audiomack album embed (reliable) */}
          <div className="glass rounded-2xl p-4">
            <div className="text-sm font-semibold">Audiomack — Album: Wi Munene</div>
            <div className="aspect-square md:aspect-video rounded-xl overflow-hidden mt-2">
              <iframe
                title="Audiomack — Wi Munene (Album)"
                scrolling="no"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay"
                src="https://audiomack.com/embed/album/lucy-muiruri/wi-munene"
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <a className="pill" href="https://audiomack.com/lucy-muiruri" target="_blank" rel="noreferrer">Artist</a>
              <a className="pill" href="https://audiomack.com/lucy-muiruri/songs" target="_blank" rel="noreferrer">Songs</a>
              <a className="pill" href="https://audiomack.com/lucy-muiruri/albums" target="_blank" rel="noreferrer">Albums</a>
              <a className="pill" href="https://audiomack.com/lucy-muiruri/playlists" target="_blank" rel="noreferrer">Playlists</a>
            </div>
          </div>

          <div className="glass rounded-2xl p-4">
            <div className="text-sm font-semibold">SoundCloud</div>
            <div className="aspect-square md:aspect-video rounded-xl overflow-hidden mt-2">
              <iframe
                title="SoundCloud — Lucy Muiruri"
                width="100%"
                height="100%"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lucymuiruri&color=%23f43f5e&inverse=false&auto_play=false&show_user=true"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
