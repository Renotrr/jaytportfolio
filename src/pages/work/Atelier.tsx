import { Link } from "react-router-dom";
import hero from "@/assets/atelier-1-hero.webp";
import newArrivals from "@/assets/atelier-2-new-arrivals.webp";
import collections from "@/assets/atelier-3-collections.webp";
import women from "@/assets/atelier-4-women.webp";
import about from "@/assets/atelier-5-about.webp";
import men from "@/assets/atelier-6-men.webp";

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
                <p className="qt-case-tag">Quiet luxury, bold identity — a minimal fashion boutique built around the clothes, not around the chrome.</p>
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
              <h3>The Problem</h3>
              <p>Most independent fashion boutiques default to noisy templates — busy banners, hard-sell promos, and product grids that look the same from store to store. For a brand built on quiet luxury, that visual language actively works against the product. Atelier needed a storefront that felt as considered as the garments themselves.</p>
            </div>
            <div className="qt-body-col">
              <h3>The Solution</h3>
              <p>A warm-neutral, editorial e-commerce experience anchored by full-bleed lookbook photography and a refined serif logotype. Generous negative space, restrained navigation, and category pages that read like a fashion magazine — Women, Men, Collections — all converging on a single, calm path to buy.</p>
            </div>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={collections} alt="Atelier — Seasonal Collections grid" loading="lazy" />
              <figcaption>Seasonal Collections · curated edits</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={about} alt="Atelier — Our Story brand page" loading="lazy" />
                <figcaption>Our Story · brand &amp; craft</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={hero} alt="Atelier — homepage hero detail" loading="lazy" />
                <figcaption>Hero · &ldquo;Quiet Luxury. Bold Identity.&rdquo;</figcaption>
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
