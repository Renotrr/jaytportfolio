# QueueTop Case Study — Detailed Revision

## Key finding first
The QueueTop case study today renders **only placeholder boxes** (dashed `▢` slots) — no real images are wired in, not even the hero. The overlay (`CaseStudyOverlay.tsx`) reads a data object (`portfolioData.ts`) whose image slots only carry `label`/`hint` text. So step one is teaching the overlay to render real images; then your uploads get placed.

Confirmed existing project assets (so items 13 & 14 use real assets, not placeholders):
- **Logo:** `src/assets/queue-top-logo.svg` and `src/assets/queuetop-logo.png` both exist.
- **Interactive preview:** `src/components/marketing/DeviceFrames.tsx` exists — `PhoneFrame`/`LaptopFrame` that embed the live app (`queuetopapp.lovable.app`) in styled device frames via iframe.

Reference-only uploads (used to build structure, NOT embedded): image 2 (Jack Hillery capsule nav) and image 6 (Outfit typography sheet).

---

## Step 1 — Add the uploaded images as sharp assets
Convert the four real uploads to high-quality WebP (quality ~92, no downscaling) and add to `src/assets/`:
- Image 1 (purple club + phone) -> `qt-hero-club.webp` — full-bleed hero
- Image 3 (DJ booth w/ speech bubbles) -> `qt-problem-djbooth.webp`
- Image 4 (USER RESEARCH slide) -> `qt-user-research.webp`
- Image 5 (Friday Night Vibes phone-in-sand) -> `qt-friday-night-vibes.webp`

All rendered with `object-fit: contain` (or natural aspect ratio) so nothing is cropped/distorted, at full resolution.

## Step 2 — Extend the data + overlay to render real images
In `portfolioData.ts`: extend `CaseStudyImageSlot` with optional `src` + `alt`, and add an optional hero `image` import path. In `CaseStudyOverlay.tsx`: when a slot/hero has `src`, render a real `<img>` (sharp, lazy, proper alt) instead of the placeholder `Slot`.

## Step 3 — Meta row edits (item 2-5)
Update QueueTop `meta` array:
- `Year` -> label **DURATION**, value **3 weeks**
- `Tools` -> value **Figma, Lovable** (two lines)
- `Role` -> **Product Designer & Frontend Developer**
- `Flows` -> label **STACK**, value **React 18, Vite, TypeScript, Tailwind**
- Keep `Client: QueueTop`.

## Step 4 — Hero image (item 1)
Wire `qt-hero-club.webp` as the QueueTop hero, full-bleed, sharp.

## Step 5 — Process timeline -> capsule bar (item 6)
Replace the current timeline pill rendering with a new connected-capsule component matching image 2 structurally:
- Small circular icon-button on far left (QueueTop logo mark), capsule-joined to...
- LEFT segment: **Discover | Define | Design | Build** (thin vertical dividers, white text) on solid brand purple `#C95EFF`.
- RIGHT segment: **Ship** on purple, with an animated soft glow (box-shadow pulse in purple/teal) marking it as the final/current stage.
- Match the reference's pill proportions, the gap between segments, and the overlapping circular joint. Responsive fallback for mobile.

## Step 6 — Overview & Problem image (item 7)
Place `qt-problem-djbooth.webp` in the Overview & Problem image slot, full clarity.

## Step 7 — The Approach: replace flow diagram (item 8)
Replace the current small SVG flow with the full uploaded `queuetop-userflow.html` SVG (Start -> Onboarding -> Sign Up/Log In -> Select Role, branching into Listener/Creator/Artist lanes) plus its color-coded legend (Start / Shared / Listener / Creator / Artist). Rendered as an inline, responsive, horizontally-scrollable SVG block on the case study's dark background.

## Step 8 — User Research image (item 9)
Directly below the flowchart, add `qt-user-research.webp` as a clean full-width image.

## Step 9 — Friday Night Vibes (item 10)
Below User Research, add `qt-friday-night-vibes.webp` as the primary/largest image in a row.

## Step 10 — New "Design System" section (item 12)
New QueueTop-only section modeled on image 6:
- Pill label top-left: **QUEUETOP** (rounded outline border, centered).
- Left typography block: **Public Sans** with weights *Light / Regular / Medium / Semibold* stacked, a large **Aa** specimen, an uppercase A-Z + 0-9 heading sample, and a smaller body sample. (Public Sans is already loaded in the project.)
- Right "Size" panel (rounded bordered box) listing the case study's **real** type sizes pulled from `index.css`: hero title ~67px, section title ~35px, subtitle ~17px, body 16px, label 12px (I'll print the actual computed values, not the reference's 90/70/50).
- Bottom 5-swatch color row (numbered pills 01-05, RGB + HEX printed) using QueueTop's **real** tokens from CSS: `#0A0A0D` (bg), `#C95EFF` (accent), `#9A40C8` (flow-start), `#00FFE3` (accent2/teal), and the off-white text `#F2F1EC`.
- Everything crisp and legible at full size.

## Step 11 — New "Logo" subsection (item 13)
After Design System, show the existing `queue-top-logo.svg` on two swatches side by side — one dark, one light background — as a usage/variation display, at clean high resolution.

## Step 12 — New "Interactive Preview" section (item 14)
After Logo, reuse the existing `DeviceFrames` (`PhoneFrame`/`LaptopFrame`) to embed the live QueueTop app interactively in styled device frames, consistent with the rest of the case study.

## Preserve (item: keep accurate content)
Leave intact: "Paid client work" badge, the stats row (3 flows / 20+ screens / 1 live client), The Solution, Design Highlights, and the Outcome section.

---

## Technical notes
- New custom sections (capsule bar, design system, logo, interactive preview) don't fit the generic data-driven section schema, so they'll be rendered as QueueTop-scoped blocks in `CaseStudyOverlay.tsx` (keyed off `cs.id === "cs-queuetop"`), with styling added under the existing `.cs-ov--queuetop` scope in `index.css`.
- Images converted with `cwebp -q 92` at native resolution; rendered without distorting crops.
- Build verified with `tsgo` after changes.

## Files touched
- `src/components/portfolio/portfolioData.ts` (meta, image slots, types)
- `src/components/portfolio/CaseStudyOverlay.tsx` (real images + new sections)
- `src/index.css` (capsule bar, design system, logo, image styling under queuetop scope)
- `src/assets/` (4 new WebP images)
- Reuse `src/components/marketing/DeviceFrames.tsx` and `src/assets/queue-top-logo.svg`
