# Jierui Ren — Academic Homepage

Static academic homepage for GitHub Pages. Preview `index.html` locally, then publish from `jieruijerry/jieruijerry.github.io`.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish to GitHub Pages

1. Push this folder to `main` on `jieruijerry/jieruijerry.github.io`.
2. In the repository: **Settings → Pages → Deploy from a branch → `main` / `/ (root)`**.
3. The site will be at `https://jieruijerry.github.io`.

Paper project pages live in folders next to the homepage, for example `neural-cone/index.html` → `https://jieruijerry.github.io/neural-cone/`. Do not enable GitHub Pages on the code repositories, or that URL will collide with this site.

## Fill in later

| Item | Where |
|------|--------|
| Portrait photo | `assets/img/renjierui.jpeg` (original full frame: `renjierui-full.jpeg`) |
| Project / video / code | Uncomment the commented links under each paper in `index.html` |
| Google Scholar | Add a link in the `.links` row in `index.html` |
| Paper teasers | See `assets/img/papers/README.md` |

BibTeX entries live in `bib/publications.bib`. The under-review paper is not listed yet.
