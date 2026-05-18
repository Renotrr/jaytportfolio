import { Link } from "react-router-dom";
import queuetopHero from "@/assets/queuetop-hero.jpg";
import queuetopIcon from "@/assets/queuetop-icon-mockup.jpg";
import queuetopMulti from "@/assets/queuetop-multiscreen.jpg";
import queuetopTablet from "@/assets/queuetop-tablet.jpg";
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
            <img src={queuetopHero} alt="QueueTop hero" loading="eager" />
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

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={queuetopMulti} alt="QueueTop live DJ session with floating UI cards" loading="lazy" />
              <figcaption>Live session · floating UI system</figcaption>
            </figure>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>The Problem</h3>
              <p>In clubs, festivals and creator rooms, the crowd has no real way to influence what plays next. They yell at the DJ, spam DMs, or tip cash that vanishes into a jar. DJs lose a monetisable layer of crowd interaction, and artists have no direct line to the rooms where their music is being played.</p>
            </div>
            <div className="qt-body-col">
              <h3>The Solution</h3>
              <p>A multi-sided platform where listeners pay coins to request, boost, skip-to-top and tip — while DJs, creators and artists turn that crowd energy into real income. A live queue auto-reorders in real time based on votes and paid boosts, so the floor becomes the algorithm.</p>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={queuetopTablet} alt="QueueTop DJ dashboard on iPad" loading="lazy" />
              <figcaption>DJ dashboard · iPad</figcaption>
            </figure>
          </div>

          <div className="qt-highlights">
            <h3>Highlights</h3>
            <ul>
              <li>One account, four roles — Listener, Creator, DJ, Artist</li>
              <li>Live queue auto-reorders from votes + paid boosts in real time</li>
              <li>Server-authoritative coin economy with idempotent wallet RPC</li>
              <li>Dark, nightlife-tuned UI with neon gradient system</li>
            </ul>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={queuetopIcon} alt="QueueTop app icon on iPhone home screen" loading="lazy" />
              <figcaption>App icon · iOS launch</figcaption>
            </figure>
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
