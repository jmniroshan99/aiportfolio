# Source and scope notes

Prepared 23 October 2026. The supplied CVs and the explicitly requested professional positioning are the personal-content authority.

## Existing portfolio

- Repository: https://github.com/jmniroshan99/healthit
- Reviewed snapshot: `ec4bd5db8381cb2f4f7c0ffb41bf60837ca050a7`
- Inspected tree, README, package manifest, routing, data, styling, contact, and theme code. No `AGENTS.md` was found in that repository snapshot.
- The existing app was React/Vite with JSX, React Router, Lucide, and Framer Motion. Its README said TypeScript, but the application source used JSX. This edition keeps React/Vite, Router, and Lucide and migrates application/content code to TypeScript.
- Preserved useful functionality: navigation, project filtering, detailed project exploration, theme persistence, contact links, CV downloads, back to top, Netlify configuration, and an optional Netlify contact mode.
- Replaced percentage-based skills, typewriter/marquee/tilt/splash effects, and older healthcare-only content to match the requested direction. Removed the unused animation dependency.
- Current website reference: https://jmniroshanhealthit.netlify.app. A web lookup could not access it; no claims of inspecting its live appearance are made.
- This archive is a separate downloadable redesign, not a GitHub commit, PR, or deployment. Links labeled “Original source” refer to the existing upstream repository, not to this unpushed archive.

## GovCare

- Repository: https://github.com/jmniroshan99/govcare-ehr-system
- Reviewed snapshot: `4f8bbba4b3208e0922a425b412d8ac3a1180af7b`
- Evidence: README, repository tree, `spring-api/src/main/java/lk/gov/health/govcare/config/SecurityConfig.java`, and `spring-api/src/main/resources/db/migration/V5__allow_multiple_active_patient_tokens.sql`.
- The README identifies React/TypeScript, Spring Boot, Spring Security/JWT, PostgreSQL, and Flyway. The token migration removes the single-active-token unique index and creates a workflow index. The security configuration includes stateless JWT authentication and method-security enablement.
- This was a targeted source inspection, not a running EHR validation or security audit. No medical dataset, real patient record, source credentials, or repository seed data is copied into this portfolio.
- The CVs describe CKD risk assessment and CDSS integration work, FHIR R4-oriented interoperability, and predictive/explainable AI interests. A trained CKD model, a five-year forecast, full FHIR conformance, clinical performance, and deployment were not established by the reviewed snapshot. Portfolio copy preserves that distinction.

## Additional projects and credentials

InsureDrive and FIHST details come from the supplied CVs. Native mobile releases and unverified product links are not claimed. Certificates are included as CV-listed credentials; certificate verification URLs were not supplied.

The three PDF files included in `public/cv` are unmodified copies of the three attachments. The primary and digital-health versions are linked on the page.

## Supplied visuals — image update

All five images supplied on 23 October 2026 are included unchanged in `public/images`:

| Supplied file | Portfolio use |
| --- | --- |
| `image(9).png` | Profile photograph area, shown in hero and About using a CSS crop |
| `image(10).png` | GovCare administrative dashboard, in hero, project card, and case study |
| `d.jpeg` | InsureDrive sign-in interface, in hero, project card, and case study |
| `WhatsApp Image 2026-10-23 at 13.41.51.jpeg` | TailorPro ERP sign-in interface, in an additional preview panel |
| `WhatsApp Image 2026-10-23 at 13.41.51d.jpeg` | FIHST inventory dashboard, in project card and case study |

- CSS clips browser/device chrome and isolates the supplied portrait; no pixels, facial features, or screenshot text were retouched. Full-image links retain the original capture, including OS bars.
- GovCare contains aggregate dashboard values and institution labels. Their provenance is not established; captions explicitly avoid presenting them as confirmed deployment or impact. No identifiable patient record is visible. FIHST totals are similarly unverified.
- InsureDrive and TailorPro display biometric/fingerprint controls. A screenshot establishes visible controls, not working biometric security or a released Android/iOS application.
- TailorPro was not established in the earlier CV/source review. It is only an interface preview; no project architecture, role, outcomes, or technology stack was invented.
- The portfolio project retains its labeled CSS illustration. The three former synthetic project illustrations were replaced by the supplied images.
- No live GovCare URL or released mobile-app URLs are invented.
- Remaining optional inputs: verified certificate links, final deployment origin, further approved synthetic workflow captures, and a configured hosted contact service if desired.
- During the initial design work, the external 12ui service required sign-in and produced no design candidates. This bounded update retains the existing design and integrates supplied assets directly.

## Technical-skills update

The three supplied CV PDFs were reread for the technical-skills expansion. The web/mobile cards, programming languages, backend/API tools, Supabase Auth/Storage, PostgreSQL/SQL, RLS/RBAC, migrations, and developer tools follow those CVs and the already-reviewed project evidence. Responsive layouts, navigation, validation, themes, and typed components are also present in this portfolio.

Experience labels describe the scope conservatively: Kotlin and Docker basics are foundational; notification architecture does not imply verified FCM delivery; AI/CDSS and FHIR research do not imply clinical validation or full conformance. Links point to the existing case studies, including the GovCare research section. No additional unsupported framework, employment claim, or app-store release was added.
