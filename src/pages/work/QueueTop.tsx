import { Link } from "react-router-dom";
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
                <p className="qt-case-tag">A mobile-first product system for live song-request economies — UX, real-time queue logic, and a visual identity that ships as one surface.</p>
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
              <h3>Context</h3>
              <p>QueueTop is a mobile-first PWA for nightlife, livestreams and creator rooms — one product surfacing four distinct roles (Listener, Creator, DJ, Artist) on a single account, around a live song-request economy.</p>
            </div>
            <div className="qt-body-col">
              <h3>Problem</h3>
              <p>The crowd has no real way to influence what plays next. They yell at the DJ, spam DMs, or tip cash that disappears. DJs lose a monetisable interaction layer; artists have no direct line to the rooms playing their music. The product UX needed to compress four roles into one coherent flow without fragmenting the brand.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Role</h3>
              <p>Product Design lead — UX architecture, role-based flows, and live-queue interaction model. UI Design — full mobile system, dark-room ergonomics, motion. Visual system contribution — gradient identity, glow-based surfaces, and a screen-printed feel that carries from the wallet to the dancefloor view.</p>
            </div>
            <div className="qt-body-col">
              <h3>Approach</h3>
              <p>Mapped the four roles against a single live-session spine first, then designed the wallet and coin economy as the connective tissue. Prototyped the queue auto-reorder behaviour against real DJ workflows before locking the visual system, so the UI grew out of the interaction model — not the other way around.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Design Decisions</h3>
              <p>Dark-only UI with large touch targets, tuned for low-light rooms. Server-authoritative coin economy — the client never decrements a wallet — to keep the UX trustworthy under contention. One identity, four lenses: the role selector becomes the product&rsquo;s spine, not a settings toggle.</p>
            </div>
            <div className="qt-body-col">
              <h3>Visual System Contribution</h3>
              <p>The neon gradient primary and cyan accent aren&rsquo;t decoration — they map directly to the boost/tip economy, so the UI&rsquo;s most expensive actions read as the most luminous. Borders are replaced with inset glows, which removes form-y noise and keeps the floor view feeling alive. The visual system reinforces UX hierarchy: money moves are brighter than browsing.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Outcome</h3>
              <p>A coherent product where four user roles, a live queue, and a coin wallet share one mental model. UX hierarchy and visual system reinforce each other — the floor view reads instantly, the wallet feels safe, and the brand carries from poster to product without translation.</p>
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
