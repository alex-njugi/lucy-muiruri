import { Helmet } from 'react-helmet-async'

const videos = [
  { id: "vr1_8mikzhQ", title: "Murithi Mwega, Official Video" },
  { id: "r6EpepL0IIY", title: "No Tugutoria, Official Audio" },
  { id: "t9gM_GPbRHQ", title: "Aira, Lyrics Video" },
  { id: "_QFir8Aq_vQ", title: "Ngai Mugaruri, Official Audio" },
]

export default function Gallery(){
  return (
    <>
      <Helmet><title>Videos - Lucy Muiruri</title></Helmet>
      <section className="section">
        <h1 className="h2">Videos</h1>
        <p className="mt-2 text-gray-600">Highlights from Lucy's YouTube channel.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {videos.map(v => (
            <div key={v.id} className="space-y-2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-soft border border-white/50 relative">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  onError={(e) => {
                    const wrap = e.currentTarget.parentElement as HTMLElement
                    if (!wrap) return
                    wrap.innerHTML = `
                      <div style="display:grid;place-items:center;height:100%;padding:1rem;text-align:center">
                        <div class="text-sm md:text-base">
                          Video can’t be embedded here.
                          <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noreferrer" class="btn mt-3 inline-block">
                            Watch on YouTube
                          </a>
                        </div>
                      </div>`
                  }}
                />
              </div>
              <div className="font-semibold">{v.title}</div>
            </div>
          ))}
        </div>

        <a className="btn mt-8" href="https://www.youtube.com/@lucymuiruri2115" target="_blank" rel="noreferrer">
          Visit Channel
        </a>
      </section>
    </>
  )
}
