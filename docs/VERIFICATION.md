# Verification — 23 October 2026

## User flow

A visitor reads JM Niroshan’s profile, filters selected work, opens a case study, chooses a theme, obtains a CV, or prepares an email enquiry. The default website is static and does not send messages or require an API/database.

## Completed checks

| Check | Evidence / result |
| --- | --- |
| TypeScript | `tsc --noEmit` passed with strict checks. |
| Lint | `eslint src` passed. |
| Production build | Vite 7.3.6 completed; 7 routes prerendered with page-specific metadata. |
| Build integrity | 6 normal rendered routes, 11 unique local link/asset targets, all three PDFs, font, and social image passed the included build checker. |
| PDF preservation | SHA-256 comparisons confirmed that all three PDFs in `dist/cv` exactly match the supplied attachments. |
| Desktop rendering | Home hero, selected work, GovCare case study, architecture section, and portfolio case study inspected in the preview. |
| Theme behavior | Both light and dark states visually reviewed; selected dark theme persisted after a production-page reload. The initial system-selected state was light. |
| Project filtering | Cross-platform filter reduced the project list to InsureDrive and FIHST. Returning to all work restored the full list. |
| Case-study navigation | GovCare card opened its dedicated route; its architecture contents link navigated to the matching section. Portfolio case study loaded directly from production output. |
| Mobile navigation | Menu opened, closed after choosing Contact, and closed with Escape. |
| Responsive widths | Previewed inside 320px, 375px, and 768px frames; a minimum-width overflow was found and fixed. Final narrow viewport measured page width 305px / available width 305px; tablet 753px / 753px; desktop 1348px / 1348px. Frames include desktop scrollbars. |
| Contact validation | Empty submission displayed the browser’s required-field message and focused the name field. |
| Email composer | Synthetic name/email/message produced visible draft text, a correctly encoded `mailto:` link, and explicit “Nothing has been sent” feedback. No message was sent. |
| Production hydration | Direct prerendered portfolio route became interactive and the theme control worked; no application warnings/errors appeared in the production browser log inspected. Browser-extension metadata errors from the earlier development session were unrelated to application code. |
| Included local server | A copy of the included Node server and production output started successfully through the environment’s preview supervisor. |

## Supplied-image update

- All five attachments were visually inspected and integrated: profile portrait, GovCare, InsureDrive, FIHST, and TailorPro. Their bytes remain unchanged; only CSS viewports control presentation.
- Updated TypeScript, ESLint, production prerendering, and local-link checks passed. The build checker now resolves 16 distinct local link/asset targets, including the five images.
- Desktop dark hero, light About portrait, and project cards were visually reviewed. The TailorPro preview and the GovCare case-study screenshot/caption were inspected.
- Responsive checks at 320px, 375px, and 768px had no horizontal overflow: available/page widths were 305/305, 360/360, and 753/753 respectively (desktop scrollbars included).
- The cross-platform filter still returned InsureDrive and FIHST. Screenshot labels distinguish visible interface evidence from clinical, deployment, native-release, and usage claims.
- All five production image files matched their supplied originals by SHA-256. Production GovCare caption placement and InsureDrive case-study rendering/full-image link were checked after prerendering. JPEG/WebP MIME types were added to the included local server.
- No new dependency, external image service, form backend, or public deployment was introduced. The prior contact/CV checks and limits below remain applicable.

## Technical-skills update

- Reread the three CV PDFs and expanded six typed skill categories, with prominent web/mobile cards and separate project, foundation, and learning labels.
- `npm run check` passed: ESLint, strict TypeScript, production build, seven prerendered routes, and the existing local-link/PDF checks.
- Inspected the production skills layout in light and dark themes. The Tech skills navigation indicator selected the correct section; the GovCare research link opened `/projects/govcare#research`.
- Responsive widths had no horizontal overflow: 320px frame 305/305, 375px frame 360/360, 768px frame 753/753, desktop 1348/1348. Browser-extension metadata errors were present in inspected logs; they were unrelated to application code.
- Existing photos, project screenshots, CV files, and contact behavior were retained. No new dependency or backend was added.

## Limits

- Responsive frames are not a full real-device or cross-browser test matrix. Touch hardware, screen-reader behavior, and automated WCAG certification were not tested.
- Reduced-motion support and persistent/system-theme handling were reviewed in source; not every operating-system preference transition was simulated.
- Browser automation timed out waiting for a PDF download event. Download URLs, PDF signatures, local build targets, and original-file integrity were verified, but the browser’s completed-download event was not confirmed.
- An external email application is not available in this environment. The final composer’s visible draft and generated link were verified; email-app delivery and actual sending depend on the visitor’s email setup.
- Optional Netlify Forms delivery, Docker execution, public deployment, and final social-preview crawling were not performed. Set the real `SITE_URL` before the final public build for absolute share metadata and a sitemap.
- The former live Netlify portfolio was inaccessible to the web lookup; the GitHub source was reviewed instead.

No performance-score, clinical-validation, or production-deployment claims are implied by these checks.
