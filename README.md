# Personal Portfolio – Christian Mark Gonzales

Developer portfolio for Christian Mark Gonzales. A single-page site covering an introduction, experience, skills, selected projects, and contact.

**Live site:** [cmarkgonzales.github.io/my-portfolio](https://cmarkgonzales.github.io)

## Stack

- Vue 3 (Composition API, `<script setup>`) and Vite
- Tailwind CSS v4
- Firebase Firestore for site content
- Three.js for the hero desktop scene
- EmailJS for the contact form
- Font Awesome
- GitHub Actions for GitHub Pages

## Local setup

Requires Node.js 26.

```bash
npm install
npm run dev
```

Create a `.env` file in the project root before starting the app:

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Firestore supplies navigation, copy, experience, skills, projects, and contact details, including EmailJS credentials. Missing content falls back to local defaults.

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` build the site and deploy it to GitHub Pages through `.github/workflows/pages.yml`. The Firebase values above are read from repository secrets.

## Project structure

```text
src/
  components/       Page sections, overlays, and canvas scenes
  components/ui/    Shared UI primitives
  generics/         Form, card, and section header pieces
  composables/      Interaction and data logic
  firebase/         Firebase initialization
  store/            Firestore-backed content
  utils/            Helpers
public/
  assets/           Images, logo, hero model, and Draco files
  resume.pdf        Downloadable resume
```

## Attribution

The hero workstation is based on [Gaming Desktop PC](https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66) by [Yolala1232](https://sketchfab.com/Yolala1232), licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/).

## License

[MIT](LICENSE)
