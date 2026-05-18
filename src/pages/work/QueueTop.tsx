import { Link } from "react-router-dom";
import qtHeroLaptop from "@/assets/qt-laptop-hero-listener-live.webp";
import qtHeroTablet from "@/assets/qt-tablet-hero-listener-live.webp";
import qtRole from "@/assets/qt-mobile-01-role-select.webp";
import qtDiscover from "@/assets/qt-mobile-02-discover.webp";
import qtLive from "@/assets/qt-mobile-03-listener-live.webp";
import qtDjLive from "@/assets/qt-mobile-04-dj-live.webp";
import qtDjQueue from "@/assets/qt-mobile-05-dj-queue.webp";
import qtWallet from "@/assets/qt-mobile-06-wallet.webp";
import queuetopLogo from "@/assets/queuetop-logo.png";

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

const QueueTopCaseStudy = () => {
  return (
    <div className="portfolio-page">
      <div id="page">
        <div className="cs-page-nav">
          <Link to="/" className="cs-bk" aria-label="Back to portfolio">
            <IconBack />
            Back to portfolio
          </Link>
          <span className="cs-tl">Case Study · QueueTop</span>
        </div>

        <section className="qt-case qt-case--page">
          <div className="qt-hero">
            <img src={qtHeroLaptop} alt="QueueTop listener live session — laptop hero" loading="eager" />
          </div>

          <div className="qt-case-top">
            <span className="qt-case-num"><span className="sw-dot" />Case Study / 01</span>
            <span className="qt-case-year">©2026</span>
          </div>

          <div className="qt-case-head">
            <div className="qt-case-id">
              <img src={queuetopLogo} alt="QueueTop logo" className="qt-logo" />
              <div>
                <h1 className="qt-case-title">QueueTop</h1>
                <p className="qt-case-tag">Control the music. A live song-request economy for nightlife.</p>
              </div>
            </div>
            <a href="https://queuetopv1.lovable.app" target="_blank" rel="noreferrer" className="qt-case-cta">
              Visit Live <span className="sw-allworks-arr"><IconArrow /></span>
            </a>
          </div>

          <dl className="qt-meta">
            <div><dt>Role</dt><dd>Product Designer &amp; Front-End Engineer</dd></div>
            <div><dt>Year</dt><dd>2026</dd></div>
            <div><dt>Type</dt><dd>Mobile-first PWA</dd></div>
            <div><dt>Status</dt><dd>Live prototype</dd></div>
          </dl>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>The Problem</h3>
              <p>In clubs, festivals, livestreams and creator rooms, the crowd has no real way to influence what plays next. They yell at the DJ, spam Instagram DMs, or tip cash that disappears into a tip jar. DJs and creators lose a monetisable layer of crowd interaction, and artists have no direct line to the rooms where their music is being played.</p>
            </div>
            <div className="qt-body-col">
              <h3>The Solution</h3>
              <p>A multi-sided platform where listeners pay coins to request, boost, skip-to-top and tip — while DJs, creators and artists turn that crowd energy into real income. A live queue auto-reorders in real time based on votes and paid boosts, so the floor becomes the algorithm.</p>
            </div>
          </div>

          <div className="qt-phones">
            <figure className="qt-phone">
              <div className="qt-phone-frame"><img src={qtRole} alt="QueueTop role selector — Listener, Creator, DJ, Artist" loading="lazy" /></div>
              <figcaption>Role selector · one account, four lenses</figcaption>
            </figure>
            <figure className="qt-phone">
              <div className="qt-phone-frame"><img src={qtDiscover} alt="QueueTop discover — live DJs and rooms" loading="lazy" /></div>
              <figcaption>Discover · live DJs &amp; rooms</figcaption>
            </figure>
            <figure className="qt-phone">
              <div className="qt-phone-frame"><img src={qtLive} alt="QueueTop listener live session — request, boost, tip" loading="lazy" /></div>
              <figcaption>Listener live · request · boost · tip</figcaption>
            </figure>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>The Live Queue</h3>
              <p>Every request lands in a real-time queue scored by <em>boost + tip + votes − age</em>. Listeners pay coins to boost or skip-to-top; the previous holder is auto-refunded the delta. The floor becomes the algorithm.</p>
            </div>
            <div className="qt-body-col">
              <h3>The DJ Surface</h3>
              <p>DJs run live sessions, accept or reject incoming requests, and watch coins land in real time. The queue auto-sorts; the host only ever taps Play. One identity, four roles — an artist can DJ on Friday and listen on Saturday.</p>
            </div>
          </div>

          <div className="qt-phones">
            <figure className="qt-phone">
              <div className="qt-phone-frame"><img src={qtDjLive} alt="QueueTop DJ live session — now playing and incoming requests" loading="lazy" /></div>
              <figcaption>DJ live · now playing &amp; requests</figcaption>
            </figure>
            <figure className="qt-phone">
              <div className="qt-phone-frame"><img src={qtDjQueue} alt="QueueTop DJ queue — auto-sorted by boost and tip" loading="lazy" /></div>
              <figcaption>DJ queue · auto-sorted by boost</figcaption>
            </figure>
            <figure className="qt-phone">
              <div className="qt-phone-frame"><img src={qtWallet} alt="QueueTop wallet — coin ledger and top-up" loading="lazy" /></div>
              <figcaption>Wallet · coin ledger &amp; top-up</figcaption>
            </figure>
          </div>

          <div className="qt-highlights">
            <h3>Design Highlights</h3>
            <ul>
              <li>Nightlife-first dark UI — large touch targets, no light mode, tuned for low-light rooms</li>
              <li>Public Sans across the system with a heavy display weight for headings</li>
              <li>Neon gradient primary <code>#C95EFF → #9A40C8</code> with a <code>#00FFE3</code> accent</li>
              <li>Borders replaced with subtle inset glows — feels screen-printed, not form-y</li>
              <li>One identity, four roles — Listener, Creator, DJ, Artist on a single account</li>
              <li>Server-authoritative coin economy — the client never decrements a wallet</li>
            </ul>
          </div>

          <div className="qt-hero">
            <img src={qtHeroTablet} alt="QueueTop listener live session — tablet" loading="lazy" />
          </div>

          <div className="qt-numbers">
            <div><span className="qt-num">80+</span><span className="qt-lbl">Screens</span></div>
            <div><span className="qt-num">20+</span><span className="qt-lbl">Postgres tables · full RLS</span></div>
            <div><span className="qt-num">16</span><span className="qt-lbl">Edge functions</span></div>
            <div><span className="qt-num">4</span><span className="qt-lbl">Product surfaces</span></div>
          </div>

          <div className="qt-stack">
            <span className="qt-stack-lbl">Stack</span>
            {["React 18","Vite","TypeScript","Tailwind","Framer Motion","Lovable Cloud","Postgres","Realtime","Edge Functions","AI Gateway"].map(s => (
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

export default QueueTopCaseStudy;
