# JM Niroshan — AI Full Stack Developer Portfolio

A complete React + TypeScript + Vite portfolio with Midnight Graphite and Porcelain Blue themes, four project case studies, local CV downloads, and an honest email contact flow. This is a downloadable redesign based on the existing `jmniroshan99/healthit` React/Vite project. No GitHub repository or live website was changed.

## Quick start — no package installation needed for the included build

Install **Node.js 22.12 or newer** if it is not already installed.

1. Extract the entire ZIP. Do not run files from inside the ZIP viewer.
2. On Windows, double-click `START-WINDOWS.bat`.
3. Open **http://localhost:4173**. If the first browser attempt is too early, refresh after the terminal says “Portfolio ready”.
4. Keep the terminal open while using the site. Press Ctrl+C to stop it.

On macOS or Linux, open a terminal in this folder and run:

```bash
sh start-macos-linux.sh
```

Or use this command on any platform:

```bash
node scripts/serve.mjs
```

The `dist` folder is the complete prebuilt website. Opening `dist/index.html` directly with `file://` is not supported because the app uses browser routes and absolute asset paths. Use the included server or a static web host. No npm dependencies are required to serve the included build; only Node itself.

## Develop and edit

```bash
npm ci
npm run dev
```

Open the URL shown by Vite. After editing:

```bash
npm run check
```

This runs ESLint, TypeScript, a production build, static prerendering, and local build-integrity checks. `npm run build` alone rebuilds `dist`. The lockfile pins the installed dependency versions.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/data/profile.ts` | Name, contact links, CV URLs, skills, education, certificates |
| `src/data/projects.ts` | Typed project descriptions, evidence boundaries, case-study sections |
| `src/data/media.ts` | Supplied image paths, alt text, display crops, and captions |
| `src/pages/HomePage.tsx` | Main portfolio sections and working project filters |
| `src/pages/CaseStudyPage.tsx` | Shared case-study page and architecture illustrations |
| `src/components/Header.tsx` | Desktop/mobile navigation, current section, theme control |
| `src/components/ProjectVisual.tsx` | Real project screenshots and labeled portfolio illustration |
| `src/components/SuppliedImage.tsx` | Portrait, screenshot display, and TailorPro interface preview |
| `src/components/TechnicalSkills.tsx` | Web/mobile skills, experience labels, applications, and related case-study links |
| `src/components/Contact.tsx` | Email composer and optional configured Netlify Forms mode |
| `src/components/Footer.tsx` | Profile links and keyboard-friendly back-to-top control |
| `src/hooks/useTheme.ts` | System preference and persistent manual theme choice |
| `src/hooks/usePageMetadata.ts` | Metadata updates during client navigation |
| `src/styles/index.css` | Responsive layouts and complete theme tokens |
| `src/entry-server.tsx` | Static render entry for each route |
| `scripts/prerender.mjs` | Emits route HTML and page-specific sharing/search metadata |
| `scripts/check-build.mjs` | Checks rendered routes, local assets, links, and supplied PDFs |
| `scripts/serve.mjs` | Small dependency-free local production preview server |
| `public/cv` | The three supplied CV files, renamed for dependable URLs |
| `public/fonts` | Locally bundled Manrope variable font |
| `public/images` | Five supplied images, preserved without pixel edits |
| `public/social-preview.png` | 1200 × 630 sharing image |
| `public/favicon.svg` | JN monogram |
| `dist` | Deployable prebuilt output |
| `docs/SOURCE_NOTES.md` | Source evidence, preserved behavior, and missing assets |
| `docs/VERIFICATION.md` | Checks actually performed and remaining limits |

## Included pages

- `/` — main portfolio
- `/projects/govcare/` — GovCare case study
- `/projects/portfolio/` — portfolio case study
- `/projects/insuredrive/` — InsureDrive project detail
- `/projects/fihst/` — FIHST inventory project detail
- `/thank-you/` — retained compatibility route; does not falsely confirm message delivery
- `404.html` — useful missing-page document

Direct page loads work on hosts that serve directory `index.html` files. Internal navigation uses React Router. The output is intended for a domain root; a subdirectory such as a GitHub Pages repository path requires route/asset-base adjustments before building.

## Change the content

Edit the typed data files in `src/data`, then rebuild. Keep project status accurate: source-verified work, CV-described contributions, and research/planned features are intentionally distinguished.

Replace PDFs in `public/cv` while retaining their filenames, or update the URLs in `profile.ts`. The primary download is the undergraduate full-stack/web-development CV. The digital-health CV is a secondary download. The additional software-developer PDF is bundled as supplied but not promoted as a third duplicate download.

The supplied PDFs are copied without retouching or rewriting. Any formatting issues in the source PDFs therefore remain in the downloaded files.

## Technical skills

The “Tech skills” navigation item and “My tech stack” hero link lead to the expanded skills section. Web and mobile/cross-platform development receive prominent cards, followed by backend/APIs, databases/access control, AI/digital health, and development tools.

Edit `skillGroups` and `skillLevels` in `src/data/profile.ts` to change technologies, experience labels, practical applications, and project links. Project experience, foundational knowledge, and research/ongoing learning are described separately; no percentage ratings or unverified production expertise are used. Kotlin and Docker remain foundational, and Flutter Web work does not imply a released Android or iOS app.

## Supplied images

The five supplied images are included in `public/images`. The portrait appears prominently above the homepage headline (152px on large screens and 104–132px on smaller screens) and in the About section. The hero uses the original 355px photo area, not a magnified copy of the small homepage avatar. Its name, title, and location remain readable beside it in both themes. GovCare, InsureDrive, and FIHST images appear on their cards and case studies; TailorPro appears as an additional interface preview, without inventing a technology stack or implementation history.

`src/data/media.ts` controls image paths, descriptions, and CSS viewport crops. The portrait is displayed from the photo area of the supplied LinkedIn screenshot. Operating-system bars are clipped from the project presentation. Original file bytes are unchanged; case-study “Open full image” links therefore show the complete supplied captures. Images have reserved dimensions and below-the-fold media is lazy-loaded.

GovCare figures and institution names, FIHST equipment totals, biometric controls, and other screenshot details are interface evidence only. They do not establish deployment, usage, native-app release, or backend correctness.

## Contact behavior

**Default: email composer.** The form validates fields and shows a draft with a real `mailto:` link. The visitor clicks “Open in email app” to hand off the draft; the portfolio stays open. The visitor must review and send it. There is no database, email API, or false “sent” state. A visible email address, telephone link, and copy-email control remain available if no mail app is configured. Clipboard access depends on browser support and a secure context; failure is explained inline.

**Optional Netlify Forms:** existing hosting support is retained, but it is not active in the included build. To use it:

1. Deploy on Netlify and enable form detection for the site.
2. Set `VITE_CONTACT_MODE=netlify` in the build environment.
3. Rebuild and deploy.
4. Make a test submission and verify receipt in Netlify before using it for enquiries.

A hidden form declaration exists in the HTML for Netlify detection. The configured mode shows success only after an HTTP success response; errors remain visible. Do not enable this mode on a generic static server, which has no form backend. No external submission service was configured or tested during creation.

## Deploy

### Netlify drag and drop

Upload the **contents of `dist`** to Netlify Drop. The production build is already included. This deploys the default email-composer version. Retain all assets and directories.

### Netlify from a repository

Upload the source to your chosen repository, then connect that repository in Netlify:

- Build command: `npm run build`
- Publish directory: `dist`
- Node: 22.12 or newer (the provided Netlify configuration selects Node 22)

Before the final public build, set `SITE_URL` to your real origin, such as your actual Netlify domain. The build then emits absolute social-image URLs, canonical URLs, and a sitemap. Without this setting, the ZIP does not invent a deployment URL; sharing images use a root-relative path and no sitemap is emitted.

The prerendered directories handle real routes; unknown URLs use the included 404 document. On another host, configure the equivalent behavior.

### Docker (optional)

The retained Docker/Nginx path builds and serves static output:

```bash
docker build -t jm-niroshan-portfolio .
docker run --rm -p 8080:80 jm-niroshan-portfolio
```

Open http://localhost:8080. Docker packaging is supplied but was not executed in this environment.

## Design and accessibility

- System-preferred initial theme, persistent manual override, and cross-tab synchronization.
- Full dark/light token sets, keyboard focus, skip link, mobile menu with Escape dismissal.
- Reduced-motion preference respected; no heavy animation framework.
- Text-based experience levels rather than invented skill percentages.
- Supplied portrait and GovCare, InsureDrive, FIHST, and TailorPro screenshots; the remaining portfolio illustration is explicitly labeled.
- Locally hosted font; no runtime font service, analytics, or authentication.
- Static route HTML makes the core content available before JavaScript runs.

Manrope is distributed under the SIL Open Font License in `docs/Manrope-OFL.txt`. React, Vite, React Router, Lucide, and the other dependencies retain their respective upstream licenses. Personal content and CVs belong to their owner.

## තවත් කෙටි උපදෙස්

ZIP එක සම්පූර්ණයෙන් extract කර `START-WINDOWS.bat` විවෘත කරන්න. Node.js නැත්නම් මුලින් Node.js 22.12 හෝ ඊට අලුත් version එකක් install කරන්න. Website එක `http://localhost:4173` හරහා බලන්න. Source code වෙනස් කළ පසු `npm ci` සහ `npm run build` භාවිත කරන්න. Contact form එක email draft එක සකස් කර පෙන්වන අතර, “Open in email app” භාවිත කර visitor විසින්ම එය send කළ යුතුයි.
