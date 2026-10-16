# JARVIS Portfolio Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a focused JARVIS feature after the homepage's `What I Do` section and a complete `/jarvis` case-study page without weakening the portfolio's existing landing experience.

**Architecture:** Centralize all public-safe JARVIS copy, statuses, workflow stages, metrics, and evidence in a typed data module. Reuse one presentational operations-console component in both the homepage feature and the case-study hero, route `/jarvis` through React Router, and provide a separate Vite HTML entry plus Vercel rewrite so direct visits receive route-specific metadata.

**Tech Stack:** React 18, TypeScript, React Router 7, GSAP, CSS, Vite 5, Vitest, Testing Library, jsdom

**Spec:** `docs/superpowers/specs/2026-10-16-jarvis-portfolio-case-study-design.md`

## Global Constraints

- Preserve the existing homepage landing, 3D character, section order, and dark-purple identity except for inserting JARVIS after `What I Do`.
- Use the exact headline `JARVIS watches engineering while I build.`
- Use `#0b080c` as the primary background and `#c2a4ff` as the main accent; green and amber are status colors only.
- Use only static, sanitized portfolio data; never bundle JARVIS state, logs, credentials, internal URLs, repositories, employees, or incidents.
- Keep `60% less manual coordination` publicly visible with a visible `Illustrative metric` label until `verified` becomes `true`.
- Use existing React, TypeScript, GSAP, and React Router dependencies; add no charting, dashboard, state-management, or backend dependency.
- Respect `prefers-reduced-motion`; the experience must remain complete when animations are disabled or fail.
- Keep all meaningful UI keyboard accessible and never use color as the only status signal.
- Preserve existing `#work` deep links for the career-highlights carousel while making the navbar's `WORK` action target `#jarvis`.
- Do not publish or deploy as part of implementation; complete local production verification only.

## Review Focus

- A direct request and refresh at `/jarvis` must render the case study with JARVIS-specific metadata rather than 404 or return only homepage metadata; Task 3 owns a route test, entry-document test, build output check, and Vercel rewrite check.
- The public `60%` metric must always be accompanied by `Illustrative metric` while `verified: false`; Tasks 1 and 4 own data-contract and rendered-label tests.
- Homepage navigation must scroll `WORK` to `#jarvis` on desktop without breaking native hash navigation on mobile; Task 5 owns navigation assertions plus desktop/mobile manual checks.
- Reduced-motion users must receive static readable console and architecture content without pulsing or scroll-gated information; Tasks 2 and 4 own CSS reduced-motion checks and rendered-content tests.
- At 375 px width, oversized typography, the console, and the seven-stage pipeline must not create horizontal page overflow; Tasks 2 and 4 own mobile CSS plus explicit 375 px browser QA.

---

## File structure

- `src/data/jarvisData.ts` — one typed source of truth for all public JARVIS content and metric verification state.
- `src/data/__tests__/jarvisData.test.ts` — data-safety, ordering, and placeholder-label contract.
- `src/components/jarvis/JarvisConsole.tsx` — shared static/animated operations-console markup.
- `src/components/jarvis/JarvisConsole.css` — console layout, state colors, sequencing, and reduced-motion behavior.
- `src/components/JarvisFeature.tsx` — one-viewport homepage feature and CTA.
- `src/components/styles/JarvisFeature.css` — homepage-specific responsive composition.
- `src/components/__tests__/JarvisFeature.test.tsx` — homepage copy, landmark, console, and route-link behavior.
- `src/pages/JarvisCaseStudy.tsx` — `/jarvis` page shell and all narrative sections.
- `src/pages/JarvisCaseStudy.css` — case-study layout, pipeline, evidence, and responsive behavior.
- `src/pages/__tests__/JarvisCaseStudy.test.tsx` — page structure, workflow, guardrails, public evidence, metrics, and accessibility semantics.
- `src/__tests__/AppRoutes.test.tsx` — route-level direct-navigation behavior.
- `src/test/setup.ts` — Testing Library DOM matcher setup and cleanup.
- `vitest.config.ts` — jsdom test environment.
- `jarvis.html` — route-specific metadata and `TechArticle` structured data.
- `vercel.json` — `/jarvis` rewrite to the JARVIS Vite entry.
- `src/App.tsx` — exported `AppRoutes` plus `BrowserRouter` wrapper.
- `src/components/MainContainer.tsx` — inserts `JarvisFeature` after `WhatIDo`.
- `src/components/Navbar.tsx` — points `WORK` at `#jarvis` and cleans up listeners.
- `src/components/Work.tsx` — makes the first JARVIS speaking highlight link to `/jarvis` without interfering with image viewing.
- `scripts/generate-sitemap.js` and `public/sitemap.xml` — add canonical `/jarvis` URL.
- `vite.config.ts` — build both `index.html` and `jarvis.html`.
- `.gitignore` — ignore `.superpowers/` visual-brainstorm artifacts.

### Task 1: Test harness and typed public JARVIS content

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/data/jarvisData.ts`
- Create: `src/data/__tests__/jarvisData.test.ts`
- Modify: `.gitignore`

**Interfaces:**
- Consumes: No new application interface.
- Produces: `JarvisData`, `JarvisMetric`, `JarvisStage`, `JarvisMonitor`, and `jarvisData`; later components import `jarvisData` only.

- [ ] **Step 1: Add the frontend test dependencies and script**

Add `vitest`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, and `@testing-library/user-event` as dev dependencies. Add `"test": "vitest run"` to `scripts`, then update `package-lock.json` through npm.

- [ ] **Step 2: Configure Vitest and DOM cleanup**

Create `vitest.config.ts` using the existing React Vite plugin, `environment: "jsdom"`, `globals: true`, and `setupFiles: ["./src/test/setup.ts"]`. In `src/test/setup.ts`, import `@testing-library/jest-dom/vitest` and run Testing Library `cleanup` after each test.

- [ ] **Step 3: Write the failing JARVIS data-contract tests**

In `src/data/__tests__/jarvisData.test.ts`, assert:

```ts
expect(jarvisData.headline).toBe("JARVIS watches engineering while I build.");
expect(jarvisData.stages.map((stage) => stage.title)).toEqual([
  "Watch", "Detect", "Correlate", "Prioritize", "Dispatch", "Verify", "Learn",
]);
expect(jarvisData.monitors).toHaveLength(4);
expect(jarvisData.capabilities).toHaveLength(6);
expect(jarvisData.guardrails).toContain("Human approval at consequential boundaries");
const illustrative = jarvisData.metrics.find((metric) => metric.value === "60%");
expect(illustrative).toMatchObject({ verified: false, label: "Illustrative metric" });
expect(JSON.stringify(jarvisData)).not.toMatch(/api[_-]?key|cookie|internal\.url|@g2\.com/i);
```

- [ ] **Step 4: Run the data test to verify it fails**

Run: `npm test -- src/data/__tests__/jarvisData.test.ts`

Expected: FAIL because `src/data/jarvisData.ts` does not exist.

- [ ] **Step 5: Implement the typed data module**

Create these exported interfaces in `src/data/jarvisData.ts`:

```ts
export interface JarvisMetric { value: string; description: string; verified: boolean; label?: string }
export interface JarvisStage { id: string; title: string; description: string }
export interface JarvisMonitor { name: string; status: string; tone: "healthy" | "attention" }
export interface JarvisCapability { title: string; description: string }
export interface JarvisEvidence { title: string; description: string; images: string[] }
export interface JarvisData { eyebrow: string; headline: string; summary: string; monitors: JarvisMonitor[]; stages: JarvisStage[]; capabilities: JarvisCapability[]; guardrails: string[]; workflow: string[]; metrics: JarvisMetric[]; evidence: JarvisEvidence }
export const jarvisData: JarvisData;
```

Populate it with the exact content and four metrics from the approved spec. Use only the six existing `/images/mymu2026/mymu-*.jpeg` paths for evidence.

- [ ] **Step 6: Run the data test and full test suite**

Run: `npm test -- src/data/__tests__/jarvisData.test.ts`

Expected: PASS with all contract assertions.

Run: `npm test`

Expected: PASS.

- [ ] **Step 7: Ignore visual-brainstorm artifacts**

Add `.superpowers/` to `.gitignore`; do not delete or commit the existing local mockups.

- [ ] **Step 8: Commit the data foundation**

```bash
git add package.json package-lock.json vitest.config.ts src/test/setup.ts src/data/jarvisData.ts src/data/__tests__/jarvisData.test.ts .gitignore
git commit -m "test: add Jarvis content contract"
```

### Task 2: Shared operations console and homepage feature

**Files:**
- Create: `src/components/jarvis/JarvisConsole.tsx`
- Create: `src/components/jarvis/JarvisConsole.css`
- Create: `src/components/JarvisFeature.tsx`
- Create: `src/components/styles/JarvisFeature.css`
- Create: `src/components/__tests__/JarvisFeature.test.tsx`

**Interfaces:**
- Consumes: `jarvisData: JarvisData` from Task 1.
- Produces: default `JarvisFeature(): JSX.Element` and named `JarvisConsole({ compact?: boolean }): JSX.Element`.

- [ ] **Step 1: Write the failing homepage-feature tests**

In `src/components/__tests__/JarvisFeature.test.tsx`, render `JarvisFeature` within `MemoryRouter` and assert:

```ts
expect(screen.getByRole("region", { name: /jarvis featured system/i })).toHaveAttribute("id", "jarvis");
expect(screen.getByRole("heading", { level: 2, name: jarvisData.headline })).toBeVisible();
expect(screen.getByRole("link", { name: /explore the ecosystem/i })).toHaveAttribute("href", "/jarvis");
expect(screen.getByText(/built end-to-end by deepan kumar/i)).toBeVisible();
expect(screen.getByText(/regression pattern detected/i)).toBeVisible();
expect(screen.getAllByTestId("jarvis-monitor")).toHaveLength(4);
```

- [ ] **Step 2: Run the feature test to verify it fails**

Run: `npm test -- src/components/__tests__/JarvisFeature.test.tsx`

Expected: FAIL because `JarvisFeature` and `JarvisConsole` do not exist.

- [ ] **Step 3: Implement the shared operations console**

Create `JarvisConsole({ compact = false }: { compact?: boolean })` with:

- `aria-label="JARVIS operations console"`.
- One sanitized `Regression pattern detected` event.
- Four labeled steps: Detect, Correlate, Dispatch, Verify.
- Four monitor cards from `jarvisData.monitors`, each with `data-testid="jarvis-monitor"` and a text status label.
- Decorative bars marked `aria-hidden="true"`.

Use CSS-only staged animation. Under `@media (prefers-reduced-motion: reduce)`, disable animation and render every step at its final visible state.

- [ ] **Step 4: Implement the homepage feature**

Create `JarvisFeature(): JSX.Element` as a semantic `<section id="jarvis" aria-labelledby="jarvis-feature-title">`. Use the approved eyebrow, headline, summary, attribution, a React Router `<Link to="/jarvis">Explore the ecosystem</Link>`, and `<JarvisConsole compact />`.

In `JarvisFeature.css`, implement:

- Desktop two-column composition capped by existing `.section-container` conventions.
- Outlined decorative `JARVIS` background word with `aria-hidden="true"`.
- Single-column stack below 1024 px.
- Simplified console and hidden decorative word below 600 px.
- `overflow: clip`/`hidden` only on the feature wrapper, not the whole page.
- Visible `:focus-visible` treatment using `--accentColor`.
- Reduced-motion overrides for reveal/pulse effects.

- [ ] **Step 5: Run feature tests and verify reduced-motion CSS exists**

Run: `npm test -- src/components/__tests__/JarvisFeature.test.tsx`

Expected: PASS.

Run: `rg -n "prefers-reduced-motion|focus-visible|max-width: 600px" src/components/jarvis/JarvisConsole.css src/components/styles/JarvisFeature.css`

Expected: matches in the relevant CSS files.

- [ ] **Step 6: Commit the homepage feature**

```bash
git add src/components/jarvis/JarvisConsole.tsx src/components/jarvis/JarvisConsole.css src/components/JarvisFeature.tsx src/components/styles/JarvisFeature.css src/components/__tests__/JarvisFeature.test.tsx
git commit -m "feat: build Jarvis featured system section"
```

### Task 3: `/jarvis` route, direct-entry metadata, and deployment fallback

**Files:**
- Create: `src/pages/JarvisCaseStudy.tsx`
- Create: `src/pages/JarvisCaseStudy.css`
- Create: `src/__tests__/AppRoutes.test.tsx`
- Create: `src/pages/__tests__/JarvisEntry.test.ts`
- Create: `jarvis.html`
- Create: `vercel.json`
- Modify: `src/App.tsx:1-24`
- Modify: `vite.config.ts:1-7`

**Interfaces:**
- Consumes: `JarvisConsole` and `jarvisData` from Tasks 1–2.
- Produces: default `JarvisCaseStudy(): JSX.Element` and named `AppRoutes(): JSX.Element` supporting `/` and `/jarvis`.

- [ ] **Step 1: Write the failing route test**

In `src/__tests__/AppRoutes.test.tsx`, render `<AppRoutes />` inside `MemoryRouter initialEntries={["/jarvis"]}` and use `await screen.findByRole(...)` to assert that the lazy JARVIS case-study `<main>` and headline become visible. Mock only the homepage's lazy Three.js character if the import prevents jsdom initialization.

- [ ] **Step 2: Write the failing static-entry test**

In `src/pages/__tests__/JarvisEntry.test.ts`, read `jarvis.html` and `vercel.json` from the repository root and assert:

```ts
expect(html).toContain("<title>JARVIS — Autonomous Engineering Ecosystem | Deepan Kumar</title>");
expect(html).toContain('rel="canonical" href="https://www.deepankumar.com/jarvis"');
expect(html).toContain('property="og:url" content="https://www.deepankumar.com/jarvis"');
expect(html).toContain('"@type": "TechArticle"');
expect(vercel.rewrites).toContainEqual({ source: "/jarvis", destination: "/jarvis.html" });
```

- [ ] **Step 3: Run route and entry tests to verify they fail**

Run: `npm test -- src/__tests__/AppRoutes.test.tsx src/pages/__tests__/JarvisEntry.test.ts`

Expected: FAIL because `AppRoutes`, `JarvisCaseStudy`, `jarvis.html`, and `vercel.json` do not exist.

- [ ] **Step 4: Add route-aware application composition**

Refactor `src/App.tsx` so:

```ts
export const AppRoutes = (): JSX.Element => /* Routes for "/" and "/jarvis" */;
const App = (): JSX.Element => /* LoadingProvider + BrowserRouter + AppRoutes */;
```

The `/` element must preserve the existing `MainContainer` and lazy `CharacterModel` composition exactly. Lazy-load `JarvisCaseStudy` for `/jarvis`. The case-study route must not mount `Navbar`, `ScrollSmoother`, `TechStack`, or the Three.js character.

- [ ] **Step 5: Implement the case-study shell**

Create `JarvisCaseStudy(): JSX.Element` with:

- `<main className="jarvis-case-study">`.
- A compact header with links to `/#`, `/#jarvis`, and `/#contact`.
- Hero eyebrow, approved headline, summary, and shared `<JarvisConsole />`.
- Empty semantic section containers for the narrative sections filled in Task 4, each with stable IDs.
- A `useEffect` that stores the previous document title, sets `JARVIS — Autonomous Engineering Ecosystem | Deepan Kumar`, scrolls to the top, and restores the previous title on unmount; metadata still originates from `jarvis.html` for crawlers.

- [ ] **Step 6: Create the JARVIS HTML entry and Vercel rewrite**

Create `jarvis.html` using the same favicon, theme color, root element, and `/src/main.tsx` entry as `index.html`, with:

- Title: `JARVIS — Autonomous Engineering Ecosystem | Deepan Kumar`.
- Canonical and OG URL: `https://www.deepankumar.com/jarvis`.
- Description based on the approved summary.
- OG image: `https://www.deepankumar.com/images/mymu2026/mymu-1.jpeg`.
- A truthful `TechArticle` JSON-LD object with Deepan Kumar as author and no invented publication organization or dates.

Create `vercel.json` with the exact `/jarvis` → `/jarvis.html` rewrite and no catch-all that could intercept existing blog HTML files.

- [ ] **Step 7: Configure Vite multi-page output**

Update `vite.config.ts` to declare `index.html` and `jarvis.html` as `build.rollupOptions.input` entries while retaining the existing React plugin.

- [ ] **Step 8: Run route and entry tests**

Run: `npm test -- src/__tests__/AppRoutes.test.tsx src/pages/__tests__/JarvisEntry.test.ts`

Expected: PASS.

- [ ] **Step 9: Verify the production build emits both entries**

Run: `npm run build`

Expected: exit 0; `dist/index.html` and `dist/jarvis.html` both exist.

Run: `test -f dist/index.html && test -f dist/jarvis.html`

Expected: exit 0.

- [ ] **Step 10: Commit routing and metadata**

```bash
git add src/App.tsx src/pages/JarvisCaseStudy.tsx src/pages/JarvisCaseStudy.css src/__tests__/AppRoutes.test.tsx src/pages/__tests__/JarvisEntry.test.ts jarvis.html vercel.json vite.config.ts
git commit -m "feat: add Jarvis case study route"
```

### Task 4: Complete case-study narrative, architecture, guardrails, evidence, and metrics

**Files:**
- Modify: `src/pages/JarvisCaseStudy.tsx`
- Modify: `src/pages/JarvisCaseStudy.css`
- Create: `src/pages/__tests__/JarvisCaseStudy.test.tsx`

**Interfaces:**
- Consumes: all typed arrays on `jarvisData`, plus `JarvisConsole`.
- Produces: complete accessible `/jarvis` document with stable section IDs `shift`, `loop`, `capabilities`, `guardrails`, `workflow`, `impact`, `evidence`, and `contact`.

- [ ] **Step 1: Write the failing case-study content tests**

In `src/pages/__tests__/JarvisCaseStudy.test.tsx`, render `JarvisCaseStudy` inside `MemoryRouter` and assert:

```ts
expect(screen.getByRole("heading", { level: 1, name: jarvisData.headline })).toBeVisible();
expect(screen.getByRole("heading", { name: /from reactive to proactive/i })).toBeVisible();
expect(screen.getAllByTestId("jarvis-stage")).toHaveLength(7);
expect(screen.getAllByTestId("jarvis-capability")).toHaveLength(6);
expect(screen.getByText("Human approval at consequential boundaries")).toBeVisible();
expect(screen.getAllByTestId("jarvis-workflow-step")).toHaveLength(6);
expect(screen.getByText("60%")).toBeVisible();
expect(screen.getByText("Illustrative metric")).toBeVisible();
expect(screen.getByText(/from ai we ask, to ai that watches/i)).toBeVisible();
expect(screen.getByRole("link", { name: /back to portfolio/i })).toHaveAttribute("href", "/#jarvis");
```

Also assert that monitor statuses and the seven-stage list have readable text independent of decorative color or animation.

- [ ] **Step 2: Run the case-study test to verify it fails**

Run: `npm test -- src/pages/__tests__/JarvisCaseStudy.test.tsx`

Expected: FAIL because the shell does not yet contain the narrative sections.

- [ ] **Step 3: Implement the narrative and architecture sections**

Fill `JarvisCaseStudy.tsx` with the approved section order:

1. Hero.
2. `From reactive to proactive` before/after comparison.
3. Seven-stage autonomous loop rendered from `jarvisData.stages` with `data-testid="jarvis-stage"`.
4. Six capability families rendered from `jarvisData.capabilities` with `data-testid="jarvis-capability"`.
5. Reliability and guardrails list.
6. Six-step representative workflow with `data-testid="jarvis-workflow-step"`.
7. Four-metric impact strip.
8. `Built and shared` evidence using a limited selection of existing MYMU images.
9. Closing statement and links to `/#blog` and `/#contact`.

For metrics, render `metric.label` beside every `verified: false` metric; do not hide it by environment.

- [ ] **Step 4: Implement responsive and reduced-motion case-study styling**

In `JarvisCaseStudy.css`:

- Reuse global variables and Geist.
- Use a two-column hero above 1024 px and one column below it.
- Render the seven-stage loop as a horizontal grid on wide screens, a two-column grid on tablets, and a vertical sequence below 600 px.
- Ensure every grid uses `minmax(0, 1fr)` and children use `min-width: 0` to prevent overflow.
- Keep body copy selectable within `.jarvis-case-study` by overriding the global `user-select: none`.
- Add `:focus-visible` styles.
- Add `@media (prefers-reduced-motion: reduce)` that disables transforms, pulses, and scroll-reveal opacity without hiding content.
- Use fixed aspect-ratio wrappers for MYMU images with descriptive alt text.

- [ ] **Step 5: Run case-study and full tests**

Run: `npm test -- src/pages/__tests__/JarvisCaseStudy.test.tsx`

Expected: PASS.

Run: `npm test`

Expected: PASS.

- [ ] **Step 6: Perform focused accessibility source checks**

Run: `rg -n "aria-|focus-visible|prefers-reduced-motion|user-select: text|minmax\(0, 1fr\)" src/pages/JarvisCaseStudy.tsx src/pages/JarvisCaseStudy.css`

Expected: semantic labels and all required CSS protections are present.

- [ ] **Step 7: Commit the complete case study**

```bash
git add src/pages/JarvisCaseStudy.tsx src/pages/JarvisCaseStudy.css src/pages/__tests__/JarvisCaseStudy.test.tsx
git commit -m "feat: complete Jarvis engineering case study"
```

### Task 5: Homepage integration, navigation, public evidence link, sitemap, and final verification

**Files:**
- Modify: `src/components/MainContainer.tsx:1-75`
- Modify: `src/components/Navbar.tsx:11-84`
- Modify: `src/components/Work.tsx:12-255`
- Modify: `src/components/styles/Work.css`
- Create: `src/components/__tests__/JarvisIntegration.test.tsx`
- Modify: `scripts/generate-sitemap.js:42-118`
- Modify: `public/sitemap.xml`

**Interfaces:**
- Consumes: default `JarvisFeature`, `/jarvis` route, and existing carousel state.
- Produces: final homepage placement, `WORK` navigation behavior, first-card case-study link, and canonical sitemap entry.

- [ ] **Step 1: Write the failing homepage integration tests**

In `src/components/__tests__/JarvisIntegration.test.tsx`:

- Mock heavy Three.js/GSAP-only children when rendering `MainContainer`.
- Assert the DOM order is `what-i-do`, `jarvis`, then the career section.
- Render `Navbar` with a mocked `ScrollSmoother`; assert the `WORK` anchor has `href="#jarvis"` and `data-href="#jarvis"`.
- Render `Work`; assert the first JARVIS achievement exposes an `Explore JARVIS case study` link to `/jarvis` and other cards do not.
- Unmount `Navbar`, dispatch resize/click events, and assert no stale handler calls the mocked smoother.

- [ ] **Step 2: Run the integration test to verify it fails**

Run: `npm test -- src/components/__tests__/JarvisIntegration.test.tsx`

Expected: FAIL because the feature is not inserted and links still target `#work`.

- [ ] **Step 3: Insert the homepage feature**

Import `JarvisFeature` in `MainContainer.tsx` and render it immediately after `<WhatIDo />` and before `<Career />`. Do not change the relative order of any existing component.

- [ ] **Step 4: Retarget and harden navbar behavior**

Change `WORK` to `href="#jarvis" data-href="#jarvis"`. Refactor the effect's anonymous click and resize callbacks into stable local functions and remove them in cleanup. Guard `smoother.scrollTo` when `data-href` is absent. Preserve native mobile hash navigation.

- [ ] **Step 5: Link the JARVIS speaking highlight to the case study**

Extend `Achievement` with optional `caseStudyHref?: string`. Set only the first item's value to `/jarvis`. Render a keyboard-accessible `Explore JARVIS case study` link inside that card without wrapping the image gallery or interfering with fullscreen image clicks. Add a focused visual treatment in `Work.css` consistent with the carousel.

- [ ] **Step 6: Add the canonical JARVIS sitemap entry**

Add `https://www.deepankumar.com/jarvis` with `changefreq` `monthly` and priority `0.9` to the generated sitemap template before blog posts. Update the checked-in `public/sitemap.xml` to match so the route is present even before the next successful RSS fetch.

- [ ] **Step 7: Run integration and full tests**

Run: `npm test -- src/components/__tests__/JarvisIntegration.test.tsx`

Expected: PASS.

Run: `npm test`

Expected: PASS.

- [ ] **Step 8: Run static quality checks**

Run: `npm run lint`

Expected: exit 0, or document only pre-existing failures and fix every new failure in JARVIS files.

Run: `npm run build`

Expected: exit 0 with both HTML entries and no TypeScript errors.

Run: `rg -n "https://www.deepankumar.com/jarvis" scripts/generate-sitemap.js public/sitemap.xml dist/sitemap.xml`

Expected: one canonical JARVIS URL in each sitemap source/output.

- [ ] **Step 9: Run private-data leakage checks**

Run:

```bash
rg -n -i "api[_-]?key|secret|cookie|internal\.url|nr-session|state/|logs/|@g2\.com" src/data/jarvisData.ts src/components/JarvisFeature.tsx src/components/jarvis src/pages/JarvisCaseStudy.tsx jarvis.html
```

Expected: no matches. If the test description itself introduces a searched token, narrow the scan to production files.

- [ ] **Step 10: Perform local browser QA**

Start the existing Vite dev server and verify:

- `/` at 1440 px: original landing remains unchanged; JARVIS appears after `What I Do`; `WORK` scrolls to it.
- `/` at 375 px: native `#jarvis` navigation works and the feature creates no horizontal scroll.
- `/jarvis` at 1440, 768, and 375 px: all sections are readable, the pipeline does not overflow, and image aspect ratios remain stable.
- Keyboard-only: all links show focus and follow a logical order.
- Reduced motion: console and pipeline remain visible with no continuous pulse or staged invisibility.
- Refresh `/jarvis`: the case study loads and the document source contains JARVIS metadata.
- The `60%` value visibly includes `Illustrative metric`.

- [ ] **Step 11: Commit integration and verification fixes**

```bash
git add src/components/MainContainer.tsx src/components/Navbar.tsx src/components/Work.tsx src/components/styles/Work.css src/components/__tests__/JarvisIntegration.test.tsx scripts/generate-sitemap.js public/sitemap.xml
git commit -m "feat: integrate Jarvis across the portfolio"
```

- [ ] **Step 12: Record final verification evidence**

Run: `git status --short`

Expected: clean except for intentional, user-owned pre-existing files.

Record the exact passing outputs for `npm test`, `npm run lint`, and `npm run build` in the implementation handoff. Do not claim visual verification for any viewport that was not actually inspected.
