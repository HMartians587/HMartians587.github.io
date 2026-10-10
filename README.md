# Xianrui Hou - Academic Homepage

A static academic homepage adapted from [Luka Homepage](https://github.com/wzsyyh/luka-homepage-template), redesigned for academic reading in October 2026.

## Preview

Open `index.html` in a browser. No build step, package installation, or server is needed.
The page includes local icons, portraits, institution and company logos, and the latest CV.

## Content

- `index.html`: biography, manuscripts, experience, education, projects, awards, skills, contact.
- `styles.css`: fixed left profile, a single column of section links, readable paper entries, and light/dark responsive themes.
- `script.js`: theme preference, mobile navigation, synchronized section selection, and manual profile-photo selection. Clicking a section keeps it selected even when native anchor scrolling reaches the bottom of the page; manual page scrolling resumes selection by reading position.
- `assets/profile.png`: original portrait.
- `assets/photo-canal.jpg`, `assets/photo-lake.jpg`, `assets/photo-mountains.jpg`: personal photos exported at their native cropped resolution, with small thumbnails; the canal photo is the default.
- `assets/dut-mark.png`: emblem extracted from the Dalian University of Technology website logo.
- `assets/westlake-mark.png`: the emblem extracted from Westlake University's official website logo.
- `assets/reading-font.css`: embedded Lato font, so local HTML previews work without a server.
- `assets/panasonic-logo.png`: Panasonic wordmark cropped from the [official Panasonic Industry logo](https://industry.panasonic.eu/panasonic/img/panasonic-logo.jpg), used for the internship entry.
- `assets/Xianrui_Hou_CV.pdf`: current two-page CV.

Ongoing research is described at the level of problems and contributions.
Manuscripts are explicitly marked under review. No unpublished paper or code links are invented.
The legacy MVFake slide image remains in assets but is not shown because its project name and statistics are outdated.

## Deploy

See `DEPLOY.md`. The site supports either a GitHub Pages user repository or a project subdirectory.
There are no external font or icon requests. Academic profile links still open their respective websites.

## Attribution

Luka Homepage Template by Yuheng Yang. Template license retained in `LICENSE.md`.
Lucide icon library license retained in `assets/LUCIDE-LICENSE.txt`.
Lato by Lukasz Dziedzic is distributed under the SIL Open Font License; retained in `assets/LATO-LICENSE.txt`.

## Design References

- [Jon Barron](https://jonbarron.info/): direct research descriptions and natural publication entries.
- [Chelsea Finn](https://ai.stanford.edu/~cbfinn/): concise biography and calm reading rhythm.
- [Phillip Isola](https://web.mit.edu/phillipi/): clear typography and straightforward academic content.
- [Shuran Song](https://shurans.github.io/): photo-led profile and scannable paper information.
- [w-r-s/academic-homepage-template](https://github.com/w-r-s/academic-homepage-template): hierarchy within publication entries.
- [yaoyao-liu/minimal-light](https://github.com/yaoyao-liu/minimal-light): restrained academic typography and paper structure.
- [alshedivat/al-folio](https://github.com/alshedivat/al-folio): clean navigation and light/dark theme separation.
- [luost26/academic-homepage](https://github.com/luost26/academic-homepage): reviewed for academic section organization.

These were visual references. This site keeps the original static HTML/CSS/JavaScript implementation and does not require Jekyll.

Coursework and technical skills are expandable. The sidebar stays fixed on desktop and becomes a compact profile above the content on mobile. The two submitted manuscripts retain their under-review status. Ongoing Westlake research remains at the level of the research problem and applicant's role. IIAU Lab links lead to its official homepage.
