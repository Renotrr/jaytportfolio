import { Link } from "react-router-dom";
import hero from "@/assets/virex/virex-1.webp";
import v2 from "@/assets/virex/virex-2.webp";
import v3 from "@/assets/virex/virex-3.webp";
import v4 from "@/assets/virex/virex-4.webp";
import v5 from "@/assets/virex/virex-5.webp";
import v6 from "@/assets/virex/virex-6.webp";
import v7 from "@/assets/virex/virex-7.webp";
import v8 from "@/assets/virex/virex-8.webp";
import v9 from "@/assets/virex/virex-9.webp";
import v10 from "@/assets/virex/virex-10.webp";
import v11 from "@/assets/virex/virex-11.webp";
import v12 from "@/assets/virex/virex-12.webp";
import v13 from "@/assets/virex/virex-13.webp";

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

const VirexCaseStudy = () => {
  return (
    <div className="portfolio-page">
      <div id="page">
        <div className="cs-page-nav">
          <Link to="/" className="cs-bk" aria-label="Back to portfolio">
            <IconBack />
            Back to portfolio
          </Link>
          <span className="cs-tl">Case Study · Virex Energy</span>
        </div>

        <section className="qt-case qt-case--page">
          <div className="qt-hero">
            <img src={hero} alt="Virex Energy BioFuel landing page hero" loading="eager" />
          </div>

          <div className="qt-case-top">
            <span className="qt-case-num"><span className="sw-dot" />Case Study / 05</span>
            <span className="qt-case-year">©2025</span>
          </div>

          <div className="qt-case-head">
            <div className="qt-case-id">
              <div>
                <h1 className="qt-case-title">Virex Energy</h1>
                <p className="qt-case-tag">A BioFuel brand brought online — product-led landing system where UX clarity, visual restraint, and brand language explain a complex category at a glance.</p>
              </div>
            </div>
          </div>

          <dl className="qt-meta">
            <div><dt>Role</dt><dd>Web Designer · UI/UX</dd></div>
            <div><dt>Client</dt><dd>Virex Energy (concept)</dd></div>
            <div><dt>Type</dt><dd>BioFuel · Landing Page</dd></div>
            <div><dt>Built with</dt><dd>Figma · Photoshop</dd></div>
            <div><dt>Year</dt><dd>2025</dd></div>
          </dl>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={v2} alt="Virex — homepage hero" loading="lazy" />
              <figcaption>Homepage · hero</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={v3} alt="Virex — what is BioFuel section" loading="lazy" />
                <figcaption>What is BioFuel</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={v4} alt="Virex — how it works" loading="lazy" />
                <figcaption>How it works</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>The Problem</h3>
              <p>BioFuel is a category people don't immediately understand. Most energy sites either drown the visitor in technical jargon or hide behind vague sustainability buzzwords. Virex needed a site that explains the science, proves the impact, and still feels like a confident, modern energy brand.</p>
            </div>
            <div className="qt-body-col">
              <h3>The Solution</h3>
              <p>A focused landing page built on a clean dark-and-green system. Big editorial type for clarity, real product and process imagery for trust, and a calm, sectioned rhythm that walks visitors from "what is BioFuel" to "why Virex" to "talk to us" without ever feeling like a brochure.</p>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={v5} alt="Virex — product / solutions" loading="lazy" />
              <figcaption>Solutions · BioFuel products</figcaption>
            </figure>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={v6} alt="Virex — sustainability impact section" loading="lazy" />
              <figcaption>Impact · sustainability</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={v7} alt="Virex — process / supply chain" loading="lazy" />
                <figcaption>Process · supply chain</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={v8} alt="Virex — stats and numbers" loading="lazy" />
                <figcaption>Stats · proof</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={v9} alt="Virex — about / company" loading="lazy" />
              <figcaption>About · the company</figcaption>
            </figure>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={v10} alt="Virex — testimonials / partners" loading="lazy" />
              <figcaption>Partners · testimonials</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={v11} alt="Virex — CTA banner" loading="lazy" />
                <figcaption>CTA · talk to us</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={v12} alt="Virex — footer" loading="lazy" />
                <figcaption>Footer</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={v13} alt="Virex — full page composition" loading="lazy" />
              <figcaption>Full landing composition</figcaption>
            </figure>
          </div>

          <div className="qt-highlights">
            <h3>Design Highlights</h3>
            <ul>
              <li>Dark surface with a single confident BioFuel green accent</li>
              <li>Editorial display type paired with a precise technical sans</li>
              <li>Sectioned rhythm — every block answers one question</li>
              <li>Real product, process, and plant imagery — no stock greenwashing</li>
              <li>Data-driven stats block to prove environmental impact</li>
              <li>One primary CTA per section — momentum, not menus</li>
            </ul>
          </div>

          <div className="qt-numbers">
            <div><span className="qt-num">13</span><span className="qt-lbl">Landing sections</span></div>
            <div><span className="qt-num">1</span><span className="qt-lbl">Primary CTA · Get a quote</span></div>
            <div><span className="qt-num">2</span><span className="qt-lbl">Color system · dark + green</span></div>
            <div><span className="qt-num">0</span><span className="qt-lbl">Greenwashing</span></div>
          </div>

          <div className="qt-stack">
            <span className="qt-stack-lbl">Toolkit</span>
            {["Figma","Photoshop","Editorial Typography","Art Direction","Brand System"].map(s => (
              <span className="qt-chip" key={s}>{s}</span>
            ))}
          </div>

          <div className="qt-foot">
            <a
              href="https://www.behance.net/gallery/248168811/Virex-Energy-BioFuel-Web-Ui-Landing-Page-Design"
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

export default VirexCaseStudy;
