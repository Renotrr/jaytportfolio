# Portfolio Seniority Upgrade — v2 (System + Motion + Slideshow)

Non-destructive refinement. Preserves layout, theme, routes, and visual identity. Only enhances content structure, motion, and the graphics presentation system.

## 1. Hero — clarity polish (PortfolioPage.tsx)
- Title: **Senior Product Designer (UX Systems + Visual Design)**
- Subtext: *"Designing digital products with clarity, structure, and product-first thinking."*
- CTAs: **View Work** / **Contact** (already in place — verify anchors)
- Tighten typographic hierarchy via existing tokens (no new CSS): increase line-height contrast between name and role, ensure 5-second scanability.

## 2. "What I Do" role-clarity band (NEW, inline)
Already partially present from v1 — rewrite to exact 4 lines:
1. Product UX design for web & mobile applications
2. Design systems and interface structure
3. Visual systems — UI, branding, communication design
4. Implementation-aware design for real-world products

Reuses existing `ab-top` / `ab-list` styling. No new components.

## 3. About — senior rewrite
Calm, systems-led tone. Remove any remaining hype phrasing. Cover: thinking in systems · how UX + visual design connect · designing under constraints · balancing clarity and execution. Stays inside existing `ab-*` markup.

## 4. Case studies — 8-part senior structure
Files: `src/pages/work/{QueueTop,RySwift,Revolut,Virex,Atelier}.tsx`.

Refactor existing `qt-body` blocks into 8 sections (reusing same `qt-body` / `qt-body-col` markup — no new CSS):
1. **Context** — what the product is
2. **Problem** — UX/clarity/system friction
3. **Constraints** — ≥2 real ones (time, tech, behavior, platform)
4. **Thinking Process** — options considered, what was rejected, why (the seniority signal)
5. **Design Execution** — *why* the layout/hierarchy/interaction works
6. **Visual System Integration** — typography + spacing + graphics reinforcing UX
7. **Outcome** — qualitative only (clarity, friction, comprehension, engagement). No fake metrics.
8. **Reflection** — 1–2 lines: what I'd improve rebuilding today

Existing Highlights / Numbers / Stack / Foot blocks remain.

## 5. Graphics → slideshow system (MAJOR)
File: `PortfolioPage.tsx` graphics section.

Replace the static grid with a **slideshow component** per graphics project. Each project = 5 controlled slides:
- Slide 1 — Hero visual
- Slide 2 — Context
- Slide 3 — System logic (color / type / layout reasoning)
- Slide 4 — Variations (2–4 alternates)
- Slide 5 — Application (social / UI / brand context)

Implementation:
- New file `src/components/portfolio/GraphicsSlideshow.tsx` — simple controlled slideshow (prev/next + dot pagination + keyboard arrows + swipe). Uses existing tokens, calm ease-out transitions, fade + 8px slide. No external lib (uses existing embla if convenient; otherwise pure state).
- Section title: **Visual Systems & Brand Design**
- Subtext: *"Exploring how visual identity, composition, and system design support clarity in communication."*
- Reuses existing images already imported in PortfolioPage. Where only 1 image exists per project, slides 2–5 are text-led (context, system logic, etc.) on the same dark canvas.

## 6. Motion system — calm, hierarchical
Global motion conventions using existing GSAP setup already wired in PortfolioPage:
- **Page load**: section fade-in + 12px translateY, staggered (0.08s per child) — extend the existing GSAP timeline rather than adding a new lib.
- **Scroll**: ScrollTrigger fade-in per section, ease `power2.out`, no parallax beyond what's already present.
- **Project cards**: hover scale 1.02 + soft shadow lift (CSS transition, 240ms ease-out). Tweak existing `.sw-card` hover.
- **Case study blocks**: stagger reveal per `qt-body-col` on enter.
- **Slideshow**: 320ms ease-out fade + 12px x-translate; no bounce.

All motion stays within existing GSAP + CSS transitions. No new libraries. No flashy / 3D / parallax additions.

## 7. Visual polish (within existing tokens)
- Align section eyebrows to `sec-lbl` everywhere
- Tighten section rhythm (consistent vertical spacing between bands)
- Verify H1/H2/body hierarchy contrast — adjust via existing utility classes only
- No new colors, fonts, or shadows

## Out of scope
- No layout rebuild, no theme swap, no new routes, no new sections beyond the graphics slideshow component
- No invented metrics
- No package installs (motion stays on existing GSAP)
- No backend changes

## Files touched
- `src/components/portfolio/PortfolioPage.tsx` (hero copy, what-i-do, about, graphics→slideshow integration, motion tweaks)
- `src/components/portfolio/portfolioData.ts` (text content + graphics slide data)
- `src/components/portfolio/GraphicsSlideshow.tsx` (NEW)
- `src/pages/work/{QueueTop,RySwift,Revolut,Virex,Atelier}.tsx` (8-part restructure)
- `src/index.css` (small motion/hover tweaks only, within existing tokens)
