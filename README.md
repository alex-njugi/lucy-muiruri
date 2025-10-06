
# Lucy Muiruri — Official Portfolio

A fast, mobile-first site built with **React + Vite + Tailwind CSS**.

## Features
- Elegant, feminine aesthetic (rose + violet + gold) with soft glass UI
- Hero section, music embeds (Spotify, Apple Music, Audiomack, SoundCloud)
- Videos page with YouTube embeds
- About page with highlights
- Booking form (mailto:) + direct links
- SEO meta tags, favicon, responsive layout
- Ready for Netlify, Vercel, or Render

## Quickstart
```bash
npm install
npm run dev
# build for production
npm run build
npm run preview
```

## Deployment
- **Vercel**: import the repo, set framework = Vite, build = `npm run build`, output `dist`.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **Render Static**: build `npm run build`, publish `dist`.

## Customize
- Replace placeholder YouTube `VIDEO_ID` values in `src/pages/Gallery.tsx`.
- Update copy, colors, and images as needed.
- To use a form backend (Formspree, Web3Forms), replace the `mailto:` logic in `src/pages/Contact.tsx`.
