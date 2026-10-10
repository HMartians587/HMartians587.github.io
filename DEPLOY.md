# GitHub Pages Deployment

Target: https://hmartians587.github.io/

Deploy the static site to the existing repository's `main` branch and root directory. GitHub Pages builds the homepage automatically after the update.

1. Open the existing `HMartians587/hmartians587.github.io` repository.
2. Replace the root `index.html`, `styles.css`, and `script.js` with this version.
3. Include `assets/`, `LICENSE.md`, and the documentation files.
4. In Settings > Pages, keep the existing deployment source: `main` and `/ (root)`.
5. Check the deployment in Actions, then visit the homepage.

All resource paths are relative, so this version also works in a GitHub Pages project subdirectory.
The downloadable CV is `assets/Xianrui_Hou_CV.pdf`; replace it here for future updates.
