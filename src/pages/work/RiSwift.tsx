import { Link } from "react-router-dom";
import hero from "@/assets/riswift/ri-1.webp";
import r2 from "@/assets/riswift/ri-2.webp";
import r3 from "@/assets/riswift/ri-3.webp";
import r4 from "@/assets/riswift/ri-4.webp";
import r5 from "@/assets/riswift/ri-5.webp";
import r6 from "@/assets/riswift/ri-6.webp";
import r7 from "@/assets/riswift/ri-7.webp";
import r8 from "@/assets/riswift/ri-8.webp";
import r9 from "@/assets/riswift/ri-9.webp";
import r10 from "@/assets/riswift/ri-10.webp";
import r11 from "@/assets/riswift/ri-11.webp";
import r12 from "@/assets/riswift/ri-12.webp";
import r13 from "@/assets/riswift/ri-13.webp";
import r14 from "@/assets/riswift/ri-14.webp";
import r15 from "@/assets/riswift/ri-15.webp";
import r16 from "@/assets/riswift/ri-16.webp";

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

const RiSwiftCaseStudy = () => {
  return (
    <div className="portfolio-page">
      <div id="page">
        <div className="cs-page-nav">
          <Link to="/" className="cs-bk" aria-label="Back to portfolio">
            <IconBack />
            Back to portfolio
          </Link>
          <span className="cs-tl">Case Study · RiSwift</span>
        </div>

        <section className="qt-case qt-case--page">
          <div className="qt-hero">
            <img src={hero} alt="RiSwift logistics SaaS hero" loading="eager" />
          </div>

          <div className="qt-case-top">
            <span className="qt-case-num"><span className="sw-dot" />Case Study / 02</span>
            <span className="qt-case-year">©2025</span>
          </div>

          <div className="qt-case-head">
            <div className="qt-case-id">
              <div>
                <h1 className="qt-case-title">RiSwift</h1>
                <p className="qt-case-tag">A logistics SaaS management app — operational clarity for fleets, shipments, and the people running them.</p>
              </div>
            </div>
          </div>

          <dl className="qt-meta">
            <div><dt>Role</dt><dd>Product Designer · UX/UI</dd></div>
            <div><dt>Client</dt><dd>RiSwift Logistics (concept)</dd></div>
            <div><dt>Type</dt><dd>SaaS · Logistics · Dashboard</dd></div>
            <div><dt>Built with</dt><dd>Figma · Design System</dd></div>
            <div><dt>Year</dt><dd>2025</dd></div>
          </dl>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={r2} alt="RiSwift — dashboard overview" loading="lazy" />
              <figcaption>Dashboard · operations overview</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={r3} alt="RiSwift — shipments view" loading="lazy" />
                <figcaption>Shipments</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={r4} alt="RiSwift — fleet management" loading="lazy" />
                <figcaption>Fleet</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>The Problem</h3>
              <p>Logistics teams live inside dashboards. Most tools either bury operators in dense tables or hide the data behind decorative widgets. RiSwift needed a workspace that respects how dispatchers, fleet managers, and finance leads actually read information — fast, hierarchical, and trustworthy.</p>
            </div>
            <div className="qt-body-col">
              <h3>The Solution</h3>
              <p>A calm, dense-but-readable SaaS interface: clear typographic hierarchy, focused data viz, sectioned modules per role, and a single global navigation. Every screen answers one question, every table is sortable, and every action is one click from the dashboard.</p>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={r5} alt="RiSwift — live tracking map" loading="lazy" />
              <figcaption>Live tracking · map view</figcaption>
            </figure>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={r6} alt="RiSwift — analytics panel" loading="lazy" />
              <figcaption>Analytics · performance</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={r7} alt="RiSwift — drivers list" loading="lazy" />
                <figcaption>Drivers</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={r8} alt="RiSwift — route detail" loading="lazy" />
                <figcaption>Route detail</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={r9} alt="RiSwift — billing module" loading="lazy" />
              <figcaption>Billing · invoices</figcaption>
            </figure>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={r10} alt="RiSwift — customers" loading="lazy" />
              <figcaption>Customers</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={r11} alt="RiSwift — notifications" loading="lazy" />
                <figcaption>Notifications</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={r12} alt="RiSwift — settings" loading="lazy" />
                <figcaption>Settings</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={r13} alt="RiSwift — reports" loading="lazy" />
              <figcaption>Reports</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={r14} alt="RiSwift — mobile companion" loading="lazy" />
                <figcaption>Mobile companion</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={r15} alt="RiSwift — design system" loading="lazy" />
                <figcaption>Design system</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={r16} alt="RiSwift — full composition" loading="lazy" />
              <figcaption>Full product composition</figcaption>
            </figure>
          </div>

          <div className="qt-highlights">
            <h3>Design Highlights</h3>
            <ul>
              <li>Role-aware navigation — dispatcher, fleet, finance, admin</li>
              <li>Dense data tables with calm typography and clear status colors</li>
              <li>Live map module as a first-class workspace, not a widget</li>
              <li>Reusable cards, charts, and table primitives across modules</li>
              <li>System-wide empty, loading, and error states</li>
              <li>Mobile companion for drivers — same system, fewer surfaces</li>
            </ul>
          </div>

          <div className="qt-numbers">
            <div><span className="qt-num">40+</span><span className="qt-lbl">Product screens</span></div>
            <div><span className="qt-num">6</span><span className="qt-lbl">Core modules</span></div>
            <div><span className="qt-num">4</span><span className="qt-lbl">User roles</span></div>
            <div><span className="qt-num">1</span><span className="qt-lbl">Unified design system</span></div>
          </div>

          <div className="qt-stack">
            <span className="qt-stack-lbl">Toolkit</span>
            {["Figma","Design System","Data Viz","UX Research","Prototyping"].map(s => (
              <span className="qt-chip" key={s}>{s}</span>
            ))}
          </div>

          <div className="qt-foot">
            <a
              href="https://www.behance.net/gallery/246694929/RiSwift-Logistics-SAAS-Management-App-UXUI"
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

export default RiSwiftCaseStudy;
