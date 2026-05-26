import { Link } from "react-router-dom";
import revolutHero from "@/assets/revolut-hero.webp";
import revolut1 from "@/assets/revolut-1.webp";
import revolut2 from "@/assets/revolut-2.webp";
import revolut3 from "@/assets/revolut-3.webp";

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

const RevolutCaseStudy = () => {
  return (
    <div className="portfolio-page">
      <div id="page">
        <div className="cs-page-nav">
          <Link to="/" className="cs-bk" aria-label="Back to portfolio">
            <IconBack />
            Back to portfolio
          </Link>
          <span className="cs-tl">Case Study · Revolut</span>
        </div>

        <section className="qt-case qt-case--page">
          <div className="qt-hero">
            <img src={revolutHero} alt="Revolut fintech banking mobile app hero" loading="eager" />
          </div>

          <div className="qt-case-top">
            <span className="qt-case-num"><span className="sw-dot" />Case Study / 03</span>
            <span className="qt-case-year">©2026</span>
          </div>

          <div className="qt-case-head">
            <div className="qt-case-id">
              <div>
                <h1 className="qt-case-title">Revolut</h1>
                <p className="qt-case-tag">A mobile banking system reimagined for confident money movement — UX, multi-asset hierarchy, and a single dark visual system that holds fiat, crypto, and equities.</p>
              </div>
            </div>
          </div>

          <dl className="qt-meta">
            <div><dt>Role</dt><dd>UI/UX Designer · Collaborative team</dd></div>
            <div><dt>Client</dt><dd>Revolut (concept)</dd></div>
            <div><dt>Type</dt><dd>Fintech · Mobile Banking App</dd></div>
            <div><dt>Platform</dt><dd>iOS · Android</dd></div>
            <div><dt>Year</dt><dd>2026</dd></div>
          </dl>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={revolut1} alt="Revolut app — home, accounts, cards and wallet flows" loading="lazy" />
              <figcaption>Home · Accounts · Cards · Wallet</figcaption>
            </figure>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Context</h3>
              <p>A concept rework of a mobile banking app that holds fiat accounts, cards, crypto, and equities inside one product. Every primary surface — Home, Cards, Invest, Profile — has to host multiple asset classes without fragmenting the experience.</p>
            </div>
            <div className="qt-body-col">
              <h3>Problem</h3>
              <p>Most banking apps still feel like spreadsheets with a coat of paint — dense, intimidating, built for compliance instead of confidence. Users want money to feel as fluid as messaging: live balances, instant moves, crypto and stocks side-by-side, and an interface that doesn&rsquo;t flinch in the dark.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Role</h3>
              <p>UI/UX Designer on a collaborative team. Owned the home surface taxonomy, the unified Accounts/Cards/Stocks switcher pattern, and the bottom-sheet flow system. Visual system contribution across the dark canvas and the single electric-lime accent that anchors every primary action.</p>
            </div>
            <div className="qt-body-col">
              <h3>Approach</h3>
              <p>Treated the home screen as the spine of the product, not a dashboard. Designed the asset switcher first, then layered actions around it, then built the bottom-sheet flow library so every transactional surface inherits the same ergonomics.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Design Decisions</h3>
              <p>Pure-black canvas to make money the hero element, not chrome. Oversized balance typography. A pill-shaped action bar (Add money · Exchange · More) positioned for one-thumb reach. Bottom-sheet drawers for every flow, so users never lose context.</p>
            </div>
            <div className="qt-body-col">
              <h3>Visual System Contribution</h3>
              <p>A single electric-lime accent against pure black is a UX choice as much as a visual one — it tells the eye where the active money action is on every screen. Soft-rounded cards and consistent surface elevation make the product feel like one continuous wallet instead of three stitched-together apps.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Constraints</h3>
              <p>One-thumb mobile ergonomics on a multi-asset product. Information density — fiat, crypto, and equities each carry their own data shapes, but the home surface can&rsquo;t fragment. Regulatory weight — every money action is subject to trust expectations, so the UX can&rsquo;t feel toy-like even when it&rsquo;s fast.</p>
            </div>
            <div className="qt-body-col">
              <h3>Thinking Process</h3>
              <p>Considered separate tabs per asset class — rejected, it fragments the mental model of &ldquo;my money.&rdquo; Considered a Robinhood-style trading-first layout — rejected, it skews the product toward speculation instead of everyday banking. Landed on a single home spine with an asset switcher and a shared bottom-sheet flow library, so every primary action inherits the same ergonomics.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Outcome</h3>
              <p>A unified banking surface that holds fiat, crypto, and equities without losing clarity. The visual system carries the UX hierarchy — money is the hero, primary actions are one thumb away, and every flow feels like part of the same wallet.</p>
            </div>
            <div className="qt-body-col">
              <h3>Reflection</h3>
              <p>Rebuilding today I&rsquo;d push harder on a personalized home order — letting the asset switcher learn which class a user actually opens first, so the spine adapts without losing its shared structure.</p>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={revolut2} alt="Revolut app — exchange, crypto, stocks and transactions" loading="lazy" />
              <figcaption>Exchange · Crypto · Stocks · Transactions</figcaption>
            </figure>
          </div>

          <div className="qt-highlights">
            <h3>Design Highlights</h3>
            <ul>
              <li>Pure-black canvas with a single electric-lime brand accent</li>
              <li>Oversized balance typography — money as the hero element</li>
              <li>Pill-shaped action bar (Add money · Exchange · More) for one-thumb reach</li>
              <li>Unified Accounts / Cards / Stocks switcher on a single home surface</li>
              <li>Soft-rounded cards and bottom-sheet drawers for every flow</li>
              <li>Multi-currency, multi-asset wallet — fiat, crypto, and equities in one feed</li>
            </ul>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={revolut3} alt="Revolut app — cards, security, profile and settings" loading="lazy" />
              <figcaption>Cards · Security · Profile · Settings</figcaption>
            </figure>
          </div>

          <div className="qt-numbers">
            <div><span className="qt-num">60+</span><span className="qt-lbl">Screens designed</span></div>
            <div><span className="qt-num">4</span><span className="qt-lbl">Core surfaces · Home, Cards, Invest, Profile</span></div>
            <div><span className="qt-num">3</span><span className="qt-lbl">Asset classes · Fiat, Crypto, Stocks</span></div>
            <div><span className="qt-num">1</span><span className="qt-lbl">Unified design system</span></div>
          </div>

          <div className="qt-stack">
            <span className="qt-stack-lbl">Toolkit</span>
            {["Figma","Adobe XD","Auto Layout","Design System","Prototyping","Motion"].map(s => (
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

export default RevolutCaseStudy;
