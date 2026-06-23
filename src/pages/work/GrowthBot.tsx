import { Link } from "react-router-dom";
import hero from "@/assets/growthbot-hero-robot.webp";

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

const GrowthBotCaseStudy = () => {
  return (
    <div className="portfolio-page">
      <div id="page">
        <div className="cs-page-nav">
          <Link to="/" className="cs-bk" aria-label="Back to portfolio">
            <IconBack />
            Back to portfolio
          </Link>
          <span className="cs-tl">Case Study · GrowthBot</span>
        </div>

        <section className="qt-case qt-case--page">
          <div className="qt-hero">
            <img src={hero} alt="GrowthBot — Discord monitoring SaaS bot" loading="eager" width={1600} height={1000} />
          </div>

          <div className="qt-case-top">
            <span className="qt-case-num"><span className="sw-dot" />Case Study / 02</span>
            <span className="qt-case-year">©2026</span>
          </div>

          <div className="qt-case-head">
            <div className="qt-case-id">
              <div>
                <h1 className="qt-case-title">GrowthBot</h1>
                <p className="qt-case-tag">A Discord monitoring SaaS bot, built and shipped solo — from zero Discord API experience to a live, deployed product.</p>
              </div>
            </div>
          </div>

          <dl className="qt-meta">
            <div><dt>Type</dt><dd>Self-built SaaS product</dd></div>
            <div><dt>Stack</dt><dd>Discord API · Node · Railway</dd></div>
            <div><dt>Role</dt><dd>Solo builder — product, logic, deployment</dd></div>
            <div><dt>Built with</dt><dd>AI-assisted development</dd></div>
            <div><dt>Year</dt><dd>2026</dd></div>
          </dl>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Overview &amp; Problem</h3>
              <p>Community managers and server owners often need to know the moment a specific person joins a server — a flagged user, a returning member, a VIP — but Discord gives no built-in way to monitor for that without staring at the member list.</p>
              <p>I'd never built a Discord bot, written backend code that needed to stay alive in production, or deployed anything to a real server before this. I treated that as the actual brief: ship something that works, end to end, even without a traditional engineering background.</p>
            </div>
            <div className="qt-body-col">
              <h3>The Approach</h3>
              <p>I worked through the Discord API documentation and used AI-assisted development to translate "notify me when X joins" into working bot logic — figuring out event listeners, permission scopes, and how to keep a bot process alive on a free-tier host without it sleeping or crashing under load.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Real constraint — uptime</h3>
              <p>A monitoring bot is worthless if it goes offline. Getting reliable always-on hosting on Railway, with restart handling, was as much the project as the bot logic itself.</p>
            </div>
            <div className="qt-body-col">
              <h3>Real constraint — multi-server scale</h3>
              <p>The bot needed to track watch-lists per server without one server's configuration leaking into another's — a basic but easy-to-miss data isolation problem for a first backend project.</p>
            </div>
          </div>

          <div className="qt-highlights">
            <h3>The Solution</h3>
            <ul>
              <li>Per-server watch-list system — add a username, get notified the moment they join</li>
              <li>Real-time join detection via Discord's event system, no polling delay</li>
              <li>Multi-server support so one bot instance serves many communities independently</li>
              <li>Deployed on Railway with persistent uptime — not a local script that dies when the laptop closes</li>
              <li>Simple setup — server owners configure everything through Discord commands they already know</li>
              <li>Notification clarity over volume — one clear message per match, not a noisy feed</li>
            </ul>
          </div>

          <div className="qt-numbers">
            <div><span className="qt-num">0→1</span><span className="qt-lbl">Coding experience to shipped product</span></div>
            <div><span className="qt-num">Multi</span><span className="qt-lbl">Server monitoring support</span></div>
            <div><span className="qt-num">Live</span><span className="qt-lbl">Deployed on Railway</span></div>
            <div><span className="qt-num">24/7</span><span className="qt-lbl">Persistent uptime</span></div>
          </div>

          <div className="qt-stack">
            <span className="qt-stack-lbl">Toolkit</span>
            {["Discord API","Node","Railway","AI-Assisted Dev","Product Thinking"].map(s => (
              <span className="qt-chip" key={s}>{s}</span>
            ))}
          </div>

          <div className="qt-body qt-body--single">
            <div className="qt-body-col">
              <h3>The Outcome</h3>
              <p>GrowthBot is live and deployed — a working SaaS product built from a standing start with Discord's API, bot architecture, and production hosting. It's the project that best shows I can take an idea from zero technical context to a shipped, real product using AI-assisted development and my own product thinking.</p>
            </div>
          </div>

          <div className="qt-foot">
            <Link to="/" className="qt-case-cta" style={{ marginLeft: "auto" }}>
              <span className="sw-allworks-arr" style={{ transform: "rotate(180deg)" }}><IconArrow /></span>
              Back to all works
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GrowthBotCaseStudy;
