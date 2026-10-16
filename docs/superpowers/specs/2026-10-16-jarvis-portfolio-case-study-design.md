# JARVIS Portfolio Case Study — Design

## Intent

Present JARVIS as Deepan Kumar's flagship engineering system inside the existing portfolio. The experience should demonstrate principal-level systems thinking, autonomous-agent orchestration, operational reliability, and product judgment without weakening or replacing the portfolio's current homepage.

The central idea is:

> **JARVIS watches engineering while I build.**

JARVIS should feel like an engineering operating system, not a chatbot, dashboard template, or generic AI project.

## Why this belongs in the portfolio

The existing homepage already establishes identity, technical range, career progression, achievements, technology depth, writing, and contact. What it does not yet contain is a substantial project case study proving how those capabilities combine in a real system.

JARVIS fills that gap. The underlying ecosystem includes proactive monitors, prioritized queues, multi-agent workflows, review loops, state and recovery mechanisms, health checks, tracing, evaluation, and several human-in-the-loop boundaries.

## Audience

Primary audience:

- Engineering leaders evaluating Deepan for principal/staff-plus roles.
- Senior engineers interested in AI-assisted development systems.
- Conference organizers and technical peers who discover Deepan through talks or writing.

The page should remain understandable to a technical recruiter, but it should reward deeper inspection by experienced engineers.

## Goals

- Make JARVIS the strongest concrete proof of Deepan's current engineering capabilities.
- Preserve the existing homepage's 3D identity and long-form narrative.
- Explain what JARVIS does, how it works, and why its boundaries matter.
- Show that the work covers orchestration, reliability, observability, evaluation, and human judgment—not merely prompts.
- Provide a memorable visual experience consistent with the site's black and purple visual identity.
- Keep private company information, credentials, repositories, employee identities, and raw operational data out of the public experience.

## Non-goals

- Replacing the existing landing experience or 3D character.
- Turning the public portfolio into a live control plane for the private JARVIS installation.
- Exposing live logs, credentials, internal URLs, company data, or actual queue payloads.
- Recreating every JARVIS tool or monitor in the browser.
- Presenting invented metrics as verified production facts.
- Redesigning unrelated homepage sections.

## Anti-goals

The result is unsuccessful if it:

- Looks like a generic SaaS dashboard.
- Uses "AI-powered" language without explaining the system.
- Makes JARVIS compete with or replace the existing homepage hero.
- Buries JARVIS inside the current achievements carousel.
- Overloads the homepage with the entire case study.
- Claims unverified business impact as fact.
- Depends on heavy new runtime libraries or compromises the existing 3D page performance.

## Confirmed placement

The homepage order becomes:

1. Landing
2. About
3. What I Do
4. **JARVIS — Featured System**
5. Career
6. Career Highlights
7. Tech Stack
8. Articles
9. Contact

The new homepage feature is inserted directly after `WhatIDo` in `MainContainer.tsx` and before `Career`.

Rationale: `What I Do` states Deepan's development and architecture capabilities; JARVIS immediately proves them. It appears early enough to be seen without disturbing the portfolio's established introduction.

The existing `Work` component remains a career-highlights carousel. Its first JARVIS speaking card links to the detailed case study rather than trying to contain it.

## Experience structure

### 1. Homepage feature: one focused viewport

The homepage receives a new `JarvisFeature` section with `id="jarvis"`.

The composition mixes the approved directions:

- Direction A: immersive operations console.
- Direction C: readable system architecture and sanitized status signals.

Desktop composition:

- Left: identity, statement, short explanation, and CTA.
- Right: a compact animated console showing one sanitized event moving through the system.
- Large outlined `JARVIS` typography sits behind the content as a quiet graphic layer.

Primary copy:

- Eyebrow: `AUTONOMOUS ENGINEERING ECOSYSTEM`
- Headline: `JARVIS watches engineering while I build.`
- Supporting copy: `A self-directed engineering system that observes operational signals, assembles context, dispatches specialist agents, and verifies outcomes—with human judgment at the boundaries that matter.`
- CTA: `Explore the ecosystem`
- Attribution: `Built end-to-end by Deepan Kumar`

The console displays illustrative, sanitized information only:

- Event: `Regression pattern detected`
- Flow: `Detect → Correlate → Dispatch → Verify`
- Monitors: `PR intelligence`, `Reliability signals`, `Error queue`, `Learning loop`
- Status terms: `watching`, `healthy`, `prioritized`, `ready`

The CTA navigates to `/jarvis`.

### 2. Dedicated `/jarvis` case-study route

The full page uses the same global type, accent color, background, cursor behavior where appropriate, and responsive width conventions as the homepage. It should feel like a deeper room within the portfolio, not a separate brand.

The case study contains:

#### Hero

- Large JARVIS identity and approved headline.
- Compact operations console.
- A short definition: proactive meta-orchestration for engineering work.
- A `Back to portfolio` action.

#### The shift

A concise before/after narrative:

- Before: humans notice issues, collect context, route work, and repeatedly check progress.
- With JARVIS: systems are watched continuously; signals are correlated; work is prioritized and routed; outcomes are verified; context is retained.

This section explains the motivation without criticizing existing teams or tools.

#### The autonomous loop

An interactive or scroll-revealed seven-stage map:

1. Watch — PRs, errors, performance, CI, communication, and activity.
2. Detect — anomalies, regressions, review feedback, and stalled work.
3. Correlate — history, code context, ownership, dependencies, and prior attempts.
4. Prioritize — impact, novelty, urgency, confidence, and concurrency.
5. Dispatch — the right specialist agent and isolated workspace.
6. Verify — tests, review loops, quality gates, and approvals.
7. Learn — preserve outcomes and improve later decisions.

#### System capabilities

Show the real capability families discovered in the ecosystem:

- PR intelligence: monitoring, dependency-aware review, reviewer-feedback loops, and learning.
- Production reliability: error detection, inspection, prioritization, remediation orchestration, deduplication, and retry handling.
- Performance intelligence: baselines, anomaly detection, thresholds, and issue queues.
- CI recovery: failure monitoring, diagnosis, and bounded repair workflows.
- Engineering coordination: Jira, Slack, personal-assistant signals, workspaces, and notifications.
- Operational control: heartbeat, health checks, activity tracking, queue health, tracing, dashboards, and start/stop controls.

These are described at a high level. No internal hostnames, channel names, repositories, people, or customer data appear.

#### Reliability and guardrails

This is a critical differentiator and receives its own section. It covers:

- Fingerprint-aware deduplication.
- Priority queues and controlled concurrency.
- Retry and stuck-work recovery.
- Health checks and heartbeats.
- Isolated workspaces.
- Test and review gates.
- Human approval at consequential boundaries.
- Evaluation and regression testing.
- Observable state rather than invisible agent activity.

The core message: autonomy is earned through boundaries and verification.

#### A representative workflow

Use a sanitized walkthrough:

1. A new regression signal appears.
2. JARVIS confirms novelty and builds a context package.
3. The queue assigns impact and priority.
4. A specialist agent investigates in an isolated workspace.
5. A proposed change passes tests and review.
6. JARVIS tracks the result and records what was learned.

All names and values are illustrative.

#### Impact strip

Use four placeholder metrics stored in one data object so Deepan can replace them easily:

- `10+` proactive monitors
- `24/7` engineering awareness
- `7-stage` autonomous loop
- `60%` less manual coordination

The first and third values are grounded in the current architecture. `24/7` describes the intended persistent monitoring model. `60%` is explicitly unverified and will appear publicly with a visible `Illustrative metric` label until Deepan replaces it with a verified value.

Implementation requirement: add a code comment and a visible label reading `Illustrative metric` beside the `60%` value in every environment. Keep the `verified` field in the data model so replacing it with a verified value removes the label intentionally. Do not include false provenance, charts, customer counts, ROI, or testimonials.

#### Built and shared

Connect the system to Deepan's existing public evidence:

- G2 MYMU 2026 presentation: `From AI We Ask, to AI That Watches: Building JARVIS`.
- Existing event photographs already stored under `public/images/mymu2026/`.
- Anthropic Claude Certified Architect credential already present in the portfolio.

This section may reuse a small selection of existing event images and link back to the career highlights area.

#### Closing

- Statement: `I build systems that do more than answer—they observe, coordinate, and improve.`
- Actions: return to portfolio, read related writing, or contact Deepan.

## Navigation

- Keep the existing navbar compact.
- Change the existing `WORK` target from `#work` to `#jarvis`, because JARVIS becomes the featured work entry point.
- Preserve the career-highlights section with `id="work"` for existing deep links unless a cleaner migration is implemented.
- On `/jarvis`, use a simple case-study header with `Home`, `Back to portfolio`, and `Contact`; do not initialize homepage section scrolling against missing elements.
- Use React Router for `/jarvis`; direct navigation and refresh must work in the existing Vite/Vercel deployment.

## Visual direction

- Preserve `#0b080c` as the primary background and `#c2a4ff` as the accent.
- Add restrained green and amber status colors for healthy and attention states.
- Use Geist and the existing spacing conventions.
- Combine outlined oversized typography, glass-like dark panels, fine grid lines, and compact monospace telemetry.
- Avoid neon cyberpunk excess, Iron Man imitation, robot imagery, stock AI imagery, and generic gradient feature cards.
- The console should feel active through subtle sequencing, not random live data.

## Motion

- Reveal the event pipeline in order: detect, correlate, dispatch, verify.
- Use restrained pulse and signal animations for health states.
- Reveal architecture stages on scroll.
- Respect `prefers-reduced-motion` by disabling continuous pulses and showing all information statically.
- Do not add a heavy animation dependency; use CSS and the existing GSAP installation.
- Do not block interaction or delay navigation for animation.

## Responsive behavior

- Desktop: split hero with console and copy side by side.
- Tablet: stack copy above console while keeping the entire promise visible without excessive scrolling.
- Mobile: simplify the console, render architecture as a vertical sequence, increase touch targets, and remove decorative background text when it harms readability.
- Ensure no horizontal overflow from the pipeline or oversized typography.
- The homepage feature should not initialize the desktop Three.js tech-stack canvas earlier than it currently does.

## Accessibility

- Use semantic sections, headings, lists, and links.
- Provide visible keyboard focus states.
- Do not communicate system health through color alone; pair color with labels and icons.
- Give decorative telemetry `aria-hidden="true"` where appropriate.
- Give the meaningful workflow a text equivalent.
- Preserve readable contrast on glass panels.
- Avoid forcing `user-select: none` within long-form case-study prose where possible.

## SEO and sharing

- Add route-specific title and description for `/jarvis`.
- Add canonical metadata and Open Graph/Twitter fields.
- Add a `SoftwareApplication` or `TechArticle` structured-data block only if its claims remain accurate; prefer `TechArticle` for the case-study narrative.
- Add `/jarvis` to the generated sitemap.
- Use an existing or purpose-made public-safe social preview image; do not use a private dashboard screenshot.

## Content safety

- Never read browser content from private state or logs into the public site at runtime.
- Do not copy secrets, API keys, cookies, internal URLs, employee names, repository names, or raw incidents.
- Use invented identifiers only when labeled illustrative.
- Use aggregate or qualitative descriptions for internal workflows.
- Keep all displayed console content as static portfolio data stored in the portfolio repository.

## Technical shape

Likely source changes:

- `src/components/JarvisFeature.tsx`
- `src/components/styles/JarvisFeature.css`
- `src/components/JarvisCaseStudy.tsx`
- `src/components/styles/JarvisCaseStudy.css`
- `src/data/jarvisData.ts`
- `src/App.tsx` for route selection or routing.
- `src/components/MainContainer.tsx` for homepage placement.
- `src/components/Navbar.tsx` for the featured-work target.
- `src/components/Work.tsx` to link the JARVIS speaking card.
- Sitemap and metadata generation as needed.

Use the current React 18, TypeScript, GSAP, and `react-router-dom` dependencies. Do not add a dashboard framework, charting dependency, state library, or backend.

## Data model

Keep content centralized in `src/data/jarvisData.ts`:

- Headline and supporting copy.
- Monitor labels and illustrative statuses.
- Architecture stages.
- Capability families.
- Reliability safeguards.
- Representative workflow.
- Metrics with a `verified` boolean.
- Public evidence and image paths.

Rendering components should not hard-code operational details across multiple files.

## Error and fallback behavior

- The case study is static and must remain useful if JavaScript animation fails.
- Existing photographs use fixed aspect-ratio containers and useful alt text.
- If an image fails, the layout keeps its structure without showing a broken large canvas.
- Direct `/jarvis` navigation must not depend on the homepage smoother instance.
- The Medium feed failure behavior remains unchanged and outside this scope.

## Verification

- Run TypeScript build and Vite production build.
- Run the existing lint command, separating pre-existing warnings from new failures.
- Verify `/` and `/jarvis` through direct navigation and refresh.
- Verify homepage hash links after the new insertion.
- Verify desktop, tablet, and mobile widths.
- Verify keyboard navigation and reduced-motion behavior.
- Verify no private JARVIS files or values were copied into the public bundle.
- Verify the placeholder `60%` metric is visibly labeled illustrative in development and production and cannot be mistaken for a verified fact.

## Decisions made by Deepan

- JARVIS belongs in the current portfolio repository.
- Preserve the existing strong homepage.
- Place the JARVIS feature immediately after `What I Do`.
- Mix the operations-console direction with the architecture/status direction.
- Keep the copy `JARVIS watches engineering while I build.`
- Make JARVIS the dominant subject of the feature.
- Placeholder metrics may be used until real numbers are supplied.
- The placeholder `60% less manual coordination` metric may appear publicly when it is visibly labeled illustrative.

## Builder calls to review

- Use a homepage teaser plus a dedicated `/jarvis` case-study route.
- Keep placeholder metrics centralized and explicitly unverified; show the public `Illustrative metric` label until the value is replaced.
- Retarget the navbar's `WORK` link to the JARVIS feature while preserving `#work` for existing career-highlight deep links.
- Use a `TechArticle` framing for SEO rather than pretending JARVIS is a publicly installable product.
- Reuse a limited selection of existing MYMU photographs as public evidence.

