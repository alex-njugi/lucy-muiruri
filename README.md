Lucy Muiruri — Official Portfolio

A fast, mobile-first portfolio for Kenyan gospel artist Lucy Muiruri.
Built with React + Vite + Tailwind CSS, with classy motion via Framer Motion, SEO via react-helmet-async, and platform embeds for Spotify, Apple Music, YouTube, Audiomack, and SoundCloud.

Demo-friendly, production-ready, and easy to maintain.

✨ Features

Beautiful, responsive UI with soft glassmorphism + gradients

Artist-focused pages: Home, Music, Videos, Events, About, Booking

Embeds: Spotify, Apple Music, YouTube, Audiomack, SoundCloud

SEO ready with <Helmet> (titles, descriptions, social preview)

Dark/Light theme (floating toggle bottom-left; defaults to Light)

7-second boot splash + micro route loader

Booking form → WhatsApp pre-filled chat (+254 718 183 789)

Accessible color contrast and focus states

Press Kit (EPK) downloadable from the footer (templated folder)

🧱 Tech Stack

React 18 + Vite

Tailwind CSS (darkMode: 'class')

Framer Motion (subtle parallax + micro-interactions)

react-router-dom (client routing)

react-helmet-async (SEO)

lucide-react (icons)

🚀 Quick Start
# 1) Install
pnpm i         # or: npm i / yarn

# 2) Run dev server
pnpm dev       # http://localhost:5173

# 3) Build for production
pnpm build

# 4) Preview the production build
pnpm preview


Node 18+ recommended.

🗂️ Project Structure (key files)
src/
  components/
    Navbar.tsx
    Footer.tsx
    Splash.tsx
    ThemeToggle.tsx
  pages/
    Home.tsx
    Music.tsx
    Gallery.tsx
    Events.tsx
    About.tsx
    Contact.tsx
  App.tsx
  main.tsx
  index.css

public/
  favicon.svg
  og-image.jpg (optional social share image)

🎨 Theming (Light/Dark)

Default Light on first load.

Floating ThemeToggle stays fixed bottom-left (portal → document.body).

Dark mode is opt-in and persisted to localStorage as theme=dark.

If you ever need to reset to Light during testing:

localStorage.removeItem('theme'); location.reload()

🎬 Media Embeds

Update or add embed IDs/URLs in the relevant pages:

Home → featured YouTube (Aira): t9gM_GPbRHQ

Gallery → replace videos array with YouTube IDs you provided

Music → Spotify track, Apple Music album, Audiomack, SoundCloud profile

If an embed shows “Playback error”, it’s usually account/region/permissions.
Use full YouTube watch links → convert to https://www.youtube-nocookie.com/embed/{ID}.

Common iframe allow attribute (safe)

allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"


(Do not include web-share; it triggers a console warning.)

🧰 Booking & Contact (WhatsApp)

The contact form opens WhatsApp to +254 718 183 789 with a prefilled message.
Edit the number once in src/pages/Contact.tsx if needed:

const WHATSAPP_NUMBER = '254718183789'

📰 Press Kit (EPK)

A press kit makes it easy for event organizers and media to feature Lucy.

Includes bios, links, press release template, one-sheet, tech rider, and folders for photos/logos.

You can re-zip and host it at /public/press-kit.zip (or a hosted URL).

If you don’t have one yet, use this ready-to-edit template:

Add your assets/photos, adjust the markdown files, ZIP the folder, and place it as public/press-kit.zip.

Update the “Download Press Kit” button (already points to /press-kit.zip in the footer).

🔍 SEO & Social

Page titles + meta descriptions handled via <Helmet>.

Add a share image into /public/og-image.jpg and extend <Helmet> with og:* and twitter:* tags if desired.

🧪 Accessibility & Performance

Good base color contrast in dark/light.

Focus states on buttons/links.

Avoid huge images; target 150–300 KB where possible.

Use loading="lazy" for embedded thumbnails/images (already used where safe).

☁️ Deployment

Any static host works. Popular options:

Vercel
# vercel.json (optional)
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist"
}


Then push the repo and import in Vercel.

Netlify

Build command: pnpm build

Publish directory: dist

Add redirect for SPA:

/* /index.html 200

Cloudflare Pages

Build command: pnpm build

Output directory: dist

⚠️ Troubleshooting

Router future flag warnings in dev are informational. You can safely ignore or switch to Data Router if you want to enable v7 flags early.

Framer “container has a non-static position”: Any element used with useScroll({target}) must have className="relative".

Audiomack 404: Use the correct embed URL. For artist:
https://audiomack.com/embed/artist/lucy-muiruri (albums/songs have different paths).

Iframe blocked inside sandboxes: If a third-party page sets restrictive headers, you must link out instead of embedding.

🧾 Scripts
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --open"
  }
}

🙏 Credits

Design & build: Alex Njugi Karanja — alexnjugi.com

Artist: Lucy Muiruri

Icons: lucide-react

📄 License

This website code is provided under the MIT License (or your preferred license).
Site content (music, images, text) is © Lucy Muiruri and respective owners. Do not reuse without permission.

📬 Contact

Bookings/Media: bookings@lucymuiruri.com

WhatsApp: +254 718 183 789

YouTube: https://www.youtube.com/@lucymuiruri2115

Instagram: https://www.instagram.com/lucy.muiruri.906/