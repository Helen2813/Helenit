# Elena Krikun: personal site

Vite + React + TypeScript, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

## Editing content

All content lives in `src/data/`, no component changes needed.

| What | File |
| --- | --- |
| Name, headline, About, interests, links (email / Scholar / ORCID / CV) | `src/data/profile.ts` |
| Publications | `src/data/publications.ts` |
| Experience, education, skills, certifications, news | `src/data/cv.ts` |

**Add a paper:** copy an object in `publications.ts` and edit it. `status` is one of
`journal | preprint | conference | under-review`; wrap your own name in `**…**` in `authors`
to bold it. The list is sorted by `date` automatically, and filter tabs appear only for statuses in use.

**CV PDF:** put the file at `public/cv.pdf` and set `links.cv: 'cv.pdf'` in `profile.ts`.

## Deploying

1. Create a GitHub repo. Naming it `<username>.github.io` serves the site at `https://<username>.github.io/`;
   any other name serves it at `https://<username>.github.io/<repo>/` (the workflow sets the base path for you).
2. Push to `main`.
3. Repo → **Settings → Pages → Source: GitHub Actions**.

Every push to `main` redeploys.
