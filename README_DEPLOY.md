
# Deploy Guide (GitHub Pages & Netlify)

## A) GitHub Pages
1) Create a new repo on GitHub (e.g., `akhondi-site`).
2) Upload **all files in this ZIP into the root** of the repo (index.html must be in root).
3) Go to **Settings → Pages** → Source: *Deploy from a branch*, Branch: *main* / *(root)*.
4) Wait a minute; your site will be at `https://USERNAME.github.io/akhondi-site/`.

### Custom domain (akhondi.com)
- On the same **Pages** screen, set your domain.
- In IONOS DNS, add records as GitHub instructs:
  - A (apex) → GitHub Pages IPs
  - CNAME for `www` → `USERNAME.github.io`

## B) Netlify (very easy)
1) Go to https://app.netlify.com → **Add new site → Deploy manually**.
2) Drag & drop the **unzipped** folder (or link your Git repo).
3) Netlify gives you a URL instantly. Connect your domain in **Domain settings**.

## 404 Checklist
- `index.html` is in the **root** (not inside another folder).
- File names are case-sensitive (`publications.html` vs `Publications.html`).
- In GitHub Pages, ensure you didn't select `/docs` or a wrong folder accidentally.
- For a custom domain: CNAME is set and propagated; try Incognito to bypass cache.
