# Muhammad Khalid — Portfolio Site

A static portfolio site (HTML/CSS/vanilla JS, no build step) ready to host on GitHub Pages.

## Structure

```
index.html
css/style.css
js/main.js
assets/img/favicon.svg
assets/resume/Muhammad_Khalid_Resume.pdf
```

All paths in the site are **relative**, so it works whether the repo is a root user
site (`username.github.io`) or a project site (`username.github.io/repo-name`) —
no config changes needed either way.

## Deploy to GitHub Pages

### Option A — Root user site (`https://<username>.github.io`)

1. On GitHub, create a new repository named exactly `<username>.github.io`
   (replace `<username>` with your GitHub username).
2. Push this folder's contents to the `main` branch:
   ```bash
   cd portfolio-site
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
3. Go to the repo's **Settings → Pages**. Under "Build and deployment," set
   **Source** to "Deploy from a branch," branch `main`, folder `/ (root)`. Save.
4. Your site will be live at `https://<username>.github.io` within a minute or two.

### Option B — Project site (`https://<username>.github.io/<repo-name>`)

1. Create a repository with any name, e.g. `portfolio`.
2. Push this folder's contents the same way as above, pointing `origin` at
   `https://github.com/<username>/<repo-name>.git`.
3. In **Settings → Pages**, set Source to `main` / `/ (root)`.
4. Your site will be live at `https://<username>.github.io/<repo-name>`.

## Updating content later

- **Experience / education / projects / stats**: edit the relevant `<section>` in
  `index.html` — content is in plain HTML, no templating.
- **Colors / fonts / spacing**: all in `css/style.css`, controlled by the CSS
  custom properties at the top of the file (`:root { --bg: ...; --accent: ...; }`).
- **Resume PDF**: replace `assets/resume/Muhammad_Khalid_Resume.pdf` with an
  updated export (keep the same filename, or update the `href` in the hero's
  "Download the Record" button in `index.html`).
- **New projects**: duplicate a `.work-card` block in the `#works` section.

## Local preview

Any static file server works, e.g.:
```bash
cd portfolio-site
python3 -m http.server 8000
```
Then open `http://localhost:8000`.
