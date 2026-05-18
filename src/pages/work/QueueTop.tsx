import { Link } from "react-router-dom";
import { useCaseStudyAnimations } from "@/hooks/useCaseStudyAnimations";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import qtHero from "@/assets/qt-laptop-hero-listener-live.webp";
import qtRole from "@/assets/qt-mobile-01-role-select.webp";
import qtDiscover from "@/assets/qt-mobile-02-discover.webp";
import qtLive from "@/assets/qt-mobile-03-listener-live.webp";
import qtDjLive from "@/assets/qt-mobile-04-dj-live.webp";
import qtDjQueue from "@/assets/qt-mobile-05-dj-queue.webp";
import qtWallet from "@/assets/qt-mobile-06-wallet.webp";

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
  useCaseStudyAnimations();
  return (
    <div className="portfolio-page">
      <div id="page">
        <ScrollProgressBar />
        <div className="cs-page-nav">
          <Link to="/" className="cs-bk" aria-label="Back to portfolio">
            <IconBack />
            Back to portfolio
          </Link>
          <span className="cs-tl">Case Study · QueueTop</span>
        </div>

        <section className="qt-case qt-case--page">
          <div className="qt-hero">
            <img src={qtHero} alt="QueueTop listener live session hero" loading="eager" />
          </div>

          <div className="qt-case-top">
            <span className="qt-case-num"><span className="sw-dot" />Case Study / 01</span>
            <span className="qt-case-year">©2026</span>
          </div>

          <div className="qt-case-head">
            <div className="qt-case-id">
              <div>
                <h1 className="qt-case-title">QueueTop</h1>
                <p className="qt-case-tag">Control the music — a mobile-first, live song-request economy for nightlife, livestreams and creator rooms.</p>
              </div>
            </div>
          </div>

          <dl className="qt-meta">
            <div><dt>Role</dt><dd>Product Designer · Front-End Engineer</dd></div>
            <div><dt>Client</dt><dd>QueueTop (concept)</dd></div>
            <div><dt>Type</dt><dd>Mobile-first PWA</dd></div>
            <div><dt>Built with</dt><dd>Lovable Cloud</dd></div>
            <div><dt>Year</dt><dd>2026</dd></div>
          </dl>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={qtRole} alt="QueueTop — role selector: Listener, Creator, DJ, Artist" loading="lazy" />
              <figcaption>Role selector · one account, four lenses</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={qtDiscover} alt="QueueTop — Discover live DJs and rooms" loading="lazy" />
                <figcaption>Discover · live DJs &amp; rooms</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={qtLive} alt="QueueTop — Listener live session" loading="lazy" />
                <figcaption>Listener live · request · boost · tip</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>The Problem</h3>
              <p>In clubs, festivals, livestreams and creator rooms, the crowd has no real way to influence what plays next. They yell at the DJ, spam Instagram DMs, or tip cash that disappears into a jar. DJs and creators lose a monetisable layer of crowd interaction, and artists have no direct line to the rooms where their music actually plays.</p>
            </div>
            <div className="qt-body-col">
              <h3>The Solution</h3>
              <p>A mobile-first platform where listeners pay coins to request, boost, skip-to-top and tip — while DJs, creators and artists turn that crowd energy into real income. A live queue auto-reorders in real time based on votes and paid boosts, so the floor becomes the algorithm.</p>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={qtDjLive} alt="QueueTop — DJ live session with now playing and incoming requests" loading="lazy" />
              <figcaption>DJ live · now playing &amp; incoming requests</figcaption>
            </figure>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={qtDjQueue} alt="QueueTop — DJ queue auto-sorted by boost and tip" loading="lazy" />
              <figcaption>DJ queue · auto-sorted by boost</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={qtWallet} alt="QueueTop — wallet, coin ledger and top-up" loading="lazy" />
                <figcaption>Wallet · coin ledger &amp; top-up</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={qtLive} alt="QueueTop — listener interaction surface" loading="lazy" />
                <figcaption>Floor view · the crowd is the algorithm</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-highlights">
            <h3>Design Highlights</h3>
            <ul>
              <li>Mobile-first dark UI — large touch targets, no light mode, tuned for low-light rooms</li>
              <li>Public Sans across the system with a heavy display weight for headings</li>
              <li>Neon gradient primary <code>#C95EFF → #9A40C8</code> with a <code>#00FFE3</code> accent</li>
              <li>Borders replaced with subtle inset glows — feels screen-printed, not form-y</li>
              <li>One identity, four roles — Listener, Creator, DJ, Artist on a single account</li>
              <li>Server-authoritative coin economy — the client never decrements a wallet</li>
            </ul>
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
            <a
              href="https://requestifyv1.lovable.app/"
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

export default QueueTopCaseStudy;
