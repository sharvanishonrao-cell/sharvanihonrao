# Sharvani Honrao – portfolio website

Plain HTML, CSS and a little JavaScript. No frameworks, no build step.

```
index.html  industrial-design.html  spatial-design.html  about.html  resume.html  contact.html
projects/   steva.html sandalwood.html soar.html snehalay.html life-transformation-centre.html indesign-studio.html (spatial, placeholders)
            pratibimb.html bio-mimicry.html cat-the-catch.html aasan.html
css/styles.css      js/main.js      images/<project>/slide-01.jpg …
```

## Deploy (free)
- **Netlify:** app.netlify.com/drop, drag this whole folder in. Site settings > Change site name.
- **Vercel:** `vercel` in this folder, or import the folder from GitHub.
- **GitHub Pages:** push the folder to a repo, Settings > Pages > deploy from `main` / root.
Open `index.html` through a server (not by double-click) so fonts load; Netlify/Vercel/Pages do this for you.

## Fonts (all Google Fonts, loaded from the <link> in every page)
- Bricolage Grotesque – all pages (as in the design)
- Be Vietnam Pro + Archivo – Resume page (as in the design)
- "pranipaat" logo: the design uses the font Samarkan, which is not a web font. The logo is an image
  (`images/common/wordmark.png`, cropped from your portfolio PDF). Export the text layer from Figma as SVG
  and replace that file for a perfectly sharp logo.

## Images
Each project page is the exported Figma page, cut into full-width pieces: images/<project>/part-01.jpg, part-02.jpg ... (top to bottom). Spatial thumbnails: images/<project>/thumb.jpg. Videos are in /videos (the Exhibition page has 3, Snehalay has 1; none autoplay).
For maximum sharpness, re-export from Figma at 2x and overwrite the same file names:

| File(s) | Figma frame | Size |
|---|---|---|
| images/<project>/part-NN.jpg | the project page frame, cut into pieces about 1700px tall | 1440 wide (1.25x) |
| images/tiles/tile-1.jpg … tile-8.jpg | Work page > Project card N > Thumbnail (numeral + label + photo) | 145 x 376 (3x) |
| images/common/hero-photo.png | Home > Hero photo (transparent PNG, cutout of you) | about 391 x 656 (2x) |
| images/common/about-photo.jpg | About photo (uncropped original) | 960 x 1280 |
| images/common/wordmark.png | Header logo | 124 x 33 (SVG better) |
| images/resume/* | Resume logos and the 7 software icons | as in design |

## Notes
- "Contact" in the nav and "Get in touch" scroll smoothly to the page's Contact section (`#contact`).
- Slide images are lazy-loaded (the first one on each page loads immediately).
- Breakpoints: 1100 (tablet), 900 (stack hero/about), 767 (mobile menu, 2-col work grid, 1-col home cards).

## THREE ZIPS - how to put them together
The site is split into three zip files so each one is under 25 MB (GitHub's browser-upload limit per file).
1. Unzip `sharvani-portfolio-1-site.zip` - this gives you the site folder (index.html, css, js, images, files, projects ...).
2. Unzip `sharvani-portfolio-2-videos-a.zip` and `sharvani-portfolio-3-videos-b.zip` into the SAME folder. Each contains a `videos/` folder; let them merge.
3. You should now have one folder with everything. Upload that folder (not the zips) to GitHub / Netlify / Vercel.
Tip: GitHub's web uploader accepts up to 100 files at a time. Upload `images/`, `projects/` and the rest in separate batches, or use GitHub Desktop (no such limit).
