import { Link } from "react-router-dom";
import hero from "@/assets/atelier-1-hero.webp";
import newArrivals from "@/assets/atelier-2-new-arrivals.webp";
import collections from "@/assets/atelier-3-collections.webp";
import women from "@/assets/atelier-4-women.webp";
import about from "@/assets/atelier-5-about.webp";
import men from "@/assets/atelier-6-men.webp";
import essentials from "@/assets/atelier-7-essentials.webp";
import editorial from "@/assets/atelier-8-editorial.webp";
import shopCategory from "@/assets/atelier-9-shop-category.webp";

const IconArrow = () => (
  <svg className="ico ico-arr" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconBack = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const AtelierCaseStudy = () => {
  return (
    <div className="portfolio-page">
      <div id="page">
        <div className="cs-page-nav">
          <Link to="/" className="cs-bk" aria-label="Back to portfolio">
            <IconBack />
            Back to portfolio
          </Link>
          <span className="cs-tl">Case Study · Atelier</span>
        </div>

        <section className="qt-case qt-case--page">
          <div className="qt-hero">
            <img src={hero} alt="Atelier fashion homepage hero" loading="eager" />
          </div>

          <div className="qt-case-top">
            <span className="qt-case-num"><span className="sw-dot" />Case Study / 04</span>
            <span className="qt-case-year">©2026</span>
          </div>

          <div className="qt-case-head">
            <div className="qt-case-id">
              <div>
                <h1 className="qt-case-title">Atelier</h1>
                <p className="qt-case-tag">An editorial fashion e-commerce system built around the clothes — product UX, category architecture, and a quiet visual system that reinforces brand and conversion together.</p>
              </div>
            </div>
          </div>

          <dl className="qt-meta">
            <div><dt>Role</dt><dd>Designer · No-Code Developer</dd></div>
            <div><dt>Client</dt><dd>Atelier (concept)</dd></div>
            <div><dt>Type</dt><dd>Fashion · E-commerce</dd></div>
            <div><dt>Built with</dt><dd>Lovable AI</dd></div>
            <div><dt>Year</dt><dd>2026</dd></div>
          </dl>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={newArrivals} alt="Atelier — New Arrivals product grid" loading="lazy" />
              <figcaption>New Arrivals · curated product grid</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={women} alt="Atelier — Women's Collection page" loading="lazy" />
                <figcaption>Women · editorial collection page</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={men} alt="Atelier — Men's Collection page" loading="lazy" />
                <figcaption>Men · modern essentials</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Context</h3>
              <p>Atelier is an independent fashion boutique concept built on quiet luxury. The storefront has to carry brand voice and conversion at the same time — without falling back on the noisy template patterns that define most e-commerce.</p>
            </div>
            <div className="qt-body-col">
              <h3>Problem</h3>
              <p>Most independent boutiques default to busy banners, hard-sell promos, and product grids that look the same store to store. For a brand built on quiet luxury, that visual language actively works against the product. Atelier needed a storefront as considered as the garments themselves.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Role</h3>
              <p>Product Design — category architecture, navigation system, and the shopping flow from lookbook to checkout. UI Design — editorial e-commerce system, restraint over decoration. Visual system contribution — typographic identity, photography direction, and a calm CTA system across the whole store.</p>
            </div>
            <div className="qt-body-col">
              <h3>Approach</h3>
              <p>Treated category pages as editorial spreads, not template grids. Designed the Women / Men / Collections entry points first, then collapsed all secondary navigation around them. Every page converges on one calm path to buy — no pop-ups, no countdown timers, no noise.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Design Decisions</h3>
              <p>Warm-neutral palette built for fashion photography, not for chrome. Refined serif logotype paired with a clean sans for product copy. Full-bleed lookbook hero with rotating editorial campaigns. Two clear shopping verticals instead of a flattened mega-menu.</p>
            </div>
            <div className="qt-body-col">
              <h3>Visual System Contribution</h3>
              <p>The visual system does conversion work — restraint reinforces price perception, and editorial pacing keeps users moving deeper into the catalogue. Typography hierarchy directs attention to the product first; brand identity sits underneath rather than competing with it.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Outcome</h3>
              <p>An editorial storefront where brand voice and conversion reinforce each other. UX clarity (two verticals, one path to buy) and visual restraint (editorial pacing, calm CTAs) ship as one coherent surface — the store feels as considered as the garments it sells.</p>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={shopCategory} alt="Atelier — Shop by Category section with Women, Men, Accessories, Collections" loading="lazy" />
              <figcaption>Shop by Category · Women · Men · Accessories · Collections</figcaption>
            </figure>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={editorial} alt="Atelier — Editorial seasonal edit section" loading="lazy" />
              <figcaption>Editorial · The Seasonal Edit, Vol. 05</figcaption>
            </figure>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={collections} alt="Atelier — Seasonal Collections grid" loading="lazy" />
              <figcaption>Seasonal Collections · curated edits</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={essentials} alt="Atelier — The Essentials Collection campaign" loading="lazy" />
                <figcaption>Campaign · The Essentials Collection</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={about} alt="Atelier — Our Story brand page" loading="lazy" />
                <figcaption>Our Story · brand &amp; craft</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-highlights">
            <h3>Design Highlights</h3>
            <ul>
              <li>Warm-neutral palette — sand, cream, and ink — built for fashion photography</li>
              <li>Refined serif logotype paired with a clean sans for product copy</li>
              <li>Full-bleed lookbook hero with rotating editorial campaigns</li>
              <li>Two clear shopping entry points — Shop Women / Shop Men</li>
              <li>Category pages built like editorial spreads, not template grids</li>
              <li>Single calm CTA system — no pop-ups, no countdown timers, no noise</li>
            </ul>
          </div>

          <div className="qt-numbers">
            <div><span className="qt-num">6</span><span className="qt-lbl">Core pages</span></div>
            <div><span className="qt-num">2</span><span className="qt-lbl">Shopping verticals · Women, Men</span></div>
            <div><span className="qt-num">1</span><span className="qt-lbl">Editorial brand voice</span></div>
            <div><span className="qt-num">0</span><span className="qt-lbl">Code written by hand</span></div>
          </div>

          <div className="qt-stack">
            <span className="qt-stack-lbl">Toolkit</span>
            {["Lovable AI","Figma","Editorial Typography","Art Direction","No-Code"].map(s => (
              <span className="qt-chip" key={s}>{s}</span>
            ))}
          </div>

          <div className="qt-foot">
            <a
              href="https://neutral-grace-boutique.lovable.app/"
              target="_blank"
              rel="noreferrer"
              className="qt-case-cta"
              style={{ marginRight: "auto" }}
            >
              View live site
              <span className="sw-allworks-arr"><IconArrow /></span>
            </a>
            <Link to="/" className="qt-case-cta">
              <span className="sw-allworks-arr" style={{ transform: "rotate(180deg)" }}><IconArrow /></span>
              Back to all works
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AtelierCaseStudy;
