import { Link } from "react-router-dom";
import hero from "@/assets/wave-1-hero.webp";
import w2 from "@/assets/wave-2.webp";
import w3 from "@/assets/wave-3.webp";
import w4 from "@/assets/wave-4.webp";
import w5 from "@/assets/wave-5.webp";
import w6 from "@/assets/wave-6.webp";
import w7 from "@/assets/wave-7.webp";
import w8 from "@/assets/wave-8.webp";
import w9 from "@/assets/wave-9.webp";

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

const WaveCaseStudy = () => {
  return (
    <div className="portfolio-page">
      <div id="page">
        <div className="cs-page-nav">
          <Link to="/" className="cs-bk" aria-label="Back to portfolio">
            <IconBack />
            Back to portfolio
          </Link>
          <span className="cs-tl">Case Study · Wave</span>
        </div>

        <section className="qt-case qt-case--page">
          <div className="qt-hero">
            <img src={hero} alt="Wave restaurant website hero" loading="eager" />
          </div>

          <div className="qt-case-top">
            <span className="qt-case-num"><span className="sw-dot" />Case Study / 05</span>
            <span className="qt-case-year">©2024</span>
          </div>

          <div className="qt-case-head">
            <div className="qt-case-id">
              <div>
                <h1 className="qt-case-title">Wave</h1>
                <p className="qt-case-tag">A forest-side restaurant brought online — calm, cinematic, and rooted in nature.</p>
              </div>
            </div>
          </div>

          <dl className="qt-meta">
            <div><dt>Role</dt><dd>Web Designer · UI/UX</dd></div>
            <div><dt>Client</dt><dd>Wave Restaurant (concept)</dd></div>
            <div><dt>Type</dt><dd>Hospitality · Restaurant Website</dd></div>
            <div><dt>Built with</dt><dd>Figma · Photoshop</dd></div>
            <div><dt>Year</dt><dd>2024</dd></div>
          </dl>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={w2} alt="Wave — homepage hero with forest imagery" loading="lazy" />
              <figcaption>Homepage · forest-side hero</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={w3} alt="Wave — about section, story of the restaurant" loading="lazy" />
                <figcaption>About · the story</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={w4} alt="Wave — signature dishes section" loading="lazy" />
                <figcaption>Signature dishes</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>The Problem</h3>
              <p>Wave is a forest-side restaurant whose entire appeal is atmosphere — the quiet, the trees, the seasonal menu. A loud, templated restaurant site would actively contradict the experience. The brand needed an online presence that felt like the room itself.</p>
            </div>
            <div className="qt-body-col">
              <h3>The Solution</h3>
              <p>A cinematic, editorial site anchored by full-bleed forest photography, an earthy green palette, and refined serif typography. Every section breathes — generous whitespace, slow imagery, and a single clear path to a reservation.</p>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={w5} alt="Wave — menu spread with seasonal dishes" loading="lazy" />
              <figcaption>Menu · seasonal spread</figcaption>
            </figure>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={w6} alt="Wave — interior gallery section" loading="lazy" />
              <figcaption>Interior · gallery</figcaption>
            </figure>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={w7} alt="Wave — reservations section" loading="lazy" />
              <figcaption>Reservations · the primary path</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={w8} alt="Wave — events and private dining" loading="lazy" />
                <figcaption>Events · private dining</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={w9} alt="Wave — contact and footer" loading="lazy" />
                <figcaption>Contact · find us</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-highlights">
            <h3>Design Highlights</h3>
            <ul>
              <li>Earthy forest palette — deep greens, bark browns, and warm cream</li>
              <li>Editorial serif headlines paired with a clean humanist sans</li>
              <li>Full-bleed nature photography as the primary art direction</li>
              <li>Generous whitespace — the site breathes like the room</li>
              <li>Single calm CTA — every page leads back to a reservation</li>
              <li>Magazine-style menu typography, not a templated grid</li>
            </ul>
          </div>

          <div className="qt-numbers">
            <div><span className="qt-num">7</span><span className="qt-lbl">Core pages</span></div>
            <div><span className="qt-num">1</span><span className="qt-lbl">Primary CTA · Book a table</span></div>
            <div><span className="qt-num">9</span><span className="qt-lbl">Editorial sections</span></div>
            <div><span className="qt-num">0</span><span className="qt-lbl">Pop-ups or noise</span></div>
          </div>

          <div className="qt-stack">
            <span className="qt-stack-lbl">Toolkit</span>
            {["Figma","Photoshop","Editorial Typography","Art Direction","Photography Direction"].map(s => (
              <span className="qt-chip" key={s}>{s}</span>
            ))}
          </div>

          <div className="qt-foot">
            <a
              href="https://www.behance.net/gallery/214837877/WAVE-restaurant-website"
              target="_blank"
              rel="noreferrer"
              className="qt-case-cta"
              style={{ marginRight: "auto" }}
            >
              View on Behance
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

export default WaveCaseStudy;
