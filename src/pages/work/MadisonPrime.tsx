import { Link } from "react-router-dom";
import heroShot from "@/assets/madison-hero.jpg";
import aboutShot from "@/assets/madison-about.jpg";
import menuShot from "@/assets/madison-menu.jpg";
import winesShot from "@/assets/madison-wines.jpg";
import homeFull from "@/assets/madison-home-full.jpg";

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

const MadisonPrimeCaseStudy = () => {
  return (
    <div className="portfolio-page">
      <div id="page">
        <div className="cs-page-nav">
          <Link to="/" className="cs-bk" aria-label="Back to portfolio">
            <IconBack />
            Back to portfolio
          </Link>
          <span className="cs-tl">Case Study · Madison Prime</span>
        </div>

        <section className="qt-case qt-case--page">
          <div className="qt-hero">
            <img src={heroShot} alt="Madison Prime homepage hero" loading="eager" />
          </div>

          <div className="qt-case-top">
            <span className="qt-case-num"><span className="sw-dot" />Case Study / 02</span>
            <span className="qt-case-year">©2024</span>
          </div>

          <div className="qt-case-head">
            <div className="qt-case-id">
              <div>
                <h1 className="qt-case-title">Madison Prime</h1>
                <p className="qt-case-tag">A classic American steakhouse, reimagined online — warm, refined, unmistakably premium.</p>
              </div>
            </div>
          </div>

          <dl className="qt-meta">
            <div><dt>Role</dt><dd>Web Designer</dd></div>
            <div><dt>Client</dt><dd>Madison Prime Steakhouse</dd></div>
            <div><dt>Location</dt><dd>California, USA</dd></div>
            <div><dt>Type</dt><dd>Hospitality · Restaurant Website</dd></div>
            <div><dt>Year</dt><dd>2024</dd></div>
          </dl>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={homeFull} alt="Madison Prime full homepage scroll" loading="lazy" />
              <figcaption>Homepage · full scroll</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={aboutShot} alt="Madison Prime — About page, dry-aged beef section" loading="lazy" />
                <figcaption>About · heritage &amp; craft</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={menuShot} alt="Madison Prime à la carte menu page" loading="lazy" />
                <figcaption>À la carte menu</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>The Problem</h3>
              <p>Madison Prime is a high-end American steakhouse with thirty years of heritage, dry-aged beef, an extensive wine cellar, and a reservation-driven business model. Their previous site felt dated and generic — it didn&rsquo;t convey the warmth of the room, the precision of the cuisine, or the price point of the experience. Diners were arriving without a clear sense of what to expect, and bookings weren&rsquo;t reflecting the real demand.</p>
            </div>
            <div className="qt-body-col">
              <h3>The Solution</h3>
              <p>A dark, editorial website built around food photography, generous negative space, and a confident serif voice. Every page is engineered around one decision — book a table — while quietly establishing trust through press mentions, dry-aged provenance, and a meticulously typeset menu. The result reads like a magazine and converts like a reservation funnel.</p>
            </div>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={menuShot} alt="Three-column à la carte menu typography" loading="lazy" />
              <figcaption>Menu · three-column editorial grid</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={winesShot} alt="Madison Prime wines and cocktails page" loading="lazy" />
                <figcaption>Wines &amp; Cocktails</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={heroShot} alt="Homepage hero detail" loading="lazy" />
                <figcaption>Hero · &ldquo;An Extraordinary Dining Experience&rdquo;</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-highlights">
            <h3>Design Highlights</h3>
            <ul>
              <li>Editorial serif headlines paired with restrained small-caps eyebrows</li>
              <li>Deep charcoal canvas with warm amber accent — built for low-light browsing</li>
              <li>Full-bleed food photography acting as the primary art direction</li>
              <li>Three-column menu typography priced like a printed dinner card</li>
              <li>Sticky &ldquo;Find a Table&rdquo; CTA — every page leads back to a reservation</li>
              <li>Press &amp; awards row (NYT, Open Table, Trip Advisor) as instant trust</li>
            </ul>
          </div>

          <div className="qt-numbers">
            <div><span className="qt-num">7</span><span className="qt-lbl">Core pages</span></div>
            <div><span className="qt-num">30+</span><span className="qt-lbl">Years of heritage surfaced</span></div>
            <div><span className="qt-num">3</span><span className="qt-lbl">Menus · Lunch / Dinner / Wine</span></div>
            <div><span className="qt-num">1</span><span className="qt-lbl">Primary CTA · Book a table</span></div>
          </div>

          <div className="qt-stack">
            <span className="qt-stack-lbl">Toolkit</span>
            {["Figma","Framer","Photography Direction","Editorial Typography","Brand Voice"].map(s => (
              <span className="qt-chip" key={s}>{s}</span>
            ))}
          </div>

          <div className="qt-foot">
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

export default MadisonPrimeCaseStudy;
