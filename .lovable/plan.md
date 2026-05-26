# Portfolio Seniority Upgrade — Refinement Pass

Goal: shift perception to **Senior Product Designer (UX, Product Systems & Visual Design)** without changing the layout system, theme, or visual identity. Copy, framing, structure of case studies, and two small new sub-sections only.

## What stays the same
- All sections, routes, components, animations, GSAP setup
- All 5 case studies and all graphics pieces (no add/remove)
- Color tokens, typography stack, spacing scale, card grid, hero video, marquee
- File structure (no new top-level sections, no new routes)

## 1. Hero — copy + CTA changes only
File: `src/components/portfolio/PortfolioPage.tsx` (lines ~668–693) and `portfolioData.ts` (`heroContent`).

- Keep name "John Adewole" and the existing typographic layout
- Replace role string with: **Senior Product Designer (UX, Product Systems & Visual Design)**
- Replace lede with: *"Designing digital products and visual systems with clarity, structure, and intent."*
- CTAs become: **View Work** (→ `#work`) and **Contact** (→ `#contact`). Removes the "View graphic design" secondary CTA — graphics is reframed, not the headline pitch.
- Pin chips (top-left/top-right) updated to senior-leaning labels: "Product Design", "UX Systems", "Visual Design", "Design Systems".

## 2. New "What I Do" band (under hero, above About)
Small inline section reusing existing `ab-top` / `ab-list` styling — no new layout primitives.

Four lines:
1. Product UX design for web & mobile applications
2. Visual systems — UI, branding, interface consistency
3. Design execution with development awareness
4. Graphics design supporting product storytelling and visual systems

## 3. About — tone reset
File: `portfolioData.ts` `aboutContent`, plus `ab-tag-l` and `ab-list` strings in PortfolioPage.

- Eyebrow → "Senior Product Designer · UX Systems · Visual Design"
- Heading lines → calm, systems-led phrasing (e.g. *"A product designer who thinks in systems — not isolated screens."*)
- Paragraphs rewritten: product thinking approach, how visual design supports UX clarity, how product + visual communication balance, systems mindset. No hype words ("crafting", "memorable", "unique story" removed).
- About list items → 01 Product UX & Systems · 02 Figma, design tokens, Lovable, no-code · 03 Available for senior product roles & collaborations
- `ab-tag-l` → "Senior Product Designer · UX & Visual Systems"

## 4. Selected Works — category clarity only
File: `PortfolioPage.tsx` `worksData` array (lines 61–65).

Re-tag each project so the role layer reads at a glance (no card redesign):
- QueueTop → "Product Design · UX Systems · Mobile PWA"
- RySwift → "Product Design · SaaS UX · Logistics"
- Revolut → "UI/UX · Mobile Banking · Visual System"
- Virex Energy → "Product Design · Landing System"
- Atelier → "Product Design · E-commerce · Visual System"

Lede under "Selected Works" replaced with a senior framing line: *"Product work where UX, visual systems, and brand thinking ship as one."*

## 5. Case studies — required structure
Files: `src/pages/work/{QueueTop,RySwift,Revolut,Virex,Atelier}.tsx`.

Each page already uses the same `qt-case` shell (hero, meta, body cols, highlights, numbers, stack, foot). Refactor the existing two-column "Problem / Solution" block into the required 7-part narrative using the **same** `qt-body` / `qt-body-col` markup — just more blocks. No new CSS, no new components.

Required blocks per case study:
1. **Context** — what the product is
2. **Problem** — what needed improvement (UX / clarity / branding)
3. **Role** — Product design · UI design · Visual/graphic system contribution (bulleted)
4. **Approach** — how solutions were explored
5. **Design Decisions** — UX + visual reasoning behind specific choices
6. **Visual System Contribution** — only where graphics/branding apply; explain how visuals support clarity, how branding reinforces UX, how hierarchy guides attention
7. **Outcome** — usability / clarity / communication / consistency improvements (qualitative only, no fabricated metrics)

The existing "Design Highlights", "Numbers", "Stack" blocks stay. The "Numbers" block keeps only honest, structural counts already present (screens, tables, surfaces) — nothing invented.

`qt-case-tag` on each page rewritten to a single senior-framed sentence (product thinking first, aesthetic second).

## 6. Graphics — repositioning copy only
File: `PortfolioPage.tsx` lines 807–828. No grid/card changes.

- Section eyebrow: "Graphics" → **"Visual Systems & Brand Work"**
- Intro tag: replace "Calm Violence" branding line with: *"/ Visual systems that strengthen product communication"*
- Title rewritten to: *"Brand systems, campaign visuals, and interface-adjacent graphics."*
- Body paragraph replaced with: *"These works focus on strengthening product communication through visual systems, not standalone aesthetics — brand identity, marketing visuals that support product comms, interface-adjacent graphics, and campaign visuals aligned with product UX."*
- Meta row: Brand identity • Marketing • Interface-adjacent • Campaign

## 7. New "Design Philosophy" mini-band
Inserted between Graphics and Studio CTA, reusing `marquee-section`-adjacent spacing and `st-pill` / `ab-top` styling — no new layout primitive, no new section background.

Three lines (large type, single column, left-aligned):
- Clarity over decoration
- Systems over isolated visuals
- Intent over aesthetics

## 8. Light visual polish (within existing tokens)
- Tighten `.sw-lede` and `.gx-intro-body` line-height by one notch via existing utility classes
- Ensure section eyebrows use the same `sec-lbl` token everywhere (graphics currently does, works/about use their own — align labels' casing/weight only, no new tokens)
- No new colors, no new fonts, no new shadows

## Technical notes (for the implementer)
- All text edits are localised to `portfolioData.ts` and the JSX in `PortfolioPage.tsx` + the five `src/pages/work/*.tsx` files
- "What I Do" and "Design Philosophy" reuse existing class names (`ab-top`, `ab-list`, `st-pill`, `sec-lbl`) — do not introduce new CSS
- Hero CTA change removes the `#graphics` jump button; keep the anchor target intact for the nav
- Case study refactor preserves the existing JSX shell (`qt-body`, `qt-mock-grid`, `qt-highlights`, `qt-numbers`, `qt-stack`, `qt-foot`) — only the `<h3>/<p>` content multiplies into the 7 required blocks
- No package installs, no route changes, no schema/db changes

## Out of scope (explicitly)
- No new aesthetic direction, no theme swap
- No layout-system rebuild, no new section frames
- No invented metrics in Outcome blocks
- No separation of graphics into a "freelance art gallery"
- No new pages, no new components beyond inline blocks reusing existing classes
