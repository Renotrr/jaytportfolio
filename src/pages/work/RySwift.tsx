import { Link } from "react-router-dom";
import hero from "@/assets/ryswift/ry-1.webp";
import r2 from "@/assets/ryswift/ry-2.webp";
import r3 from "@/assets/ryswift/ry-3.webp";
import r4 from "@/assets/ryswift/ry-4.webp";
import r5 from "@/assets/ryswift/ry-5.webp";
import r6 from "@/assets/ryswift/ry-6.webp";
import r7 from "@/assets/ryswift/ry-7.webp";
import r8 from "@/assets/ryswift/ry-8.webp";
import r9 from "@/assets/ryswift/ry-9.webp";
import r10 from "@/assets/ryswift/ry-10.webp";
import r11 from "@/assets/ryswift/ry-11.webp";
import r12 from "@/assets/ryswift/ry-12.webp";
import r13 from "@/assets/ryswift/ry-13.webp";
import r14 from "@/assets/ryswift/ry-14.webp";
import r15 from "@/assets/ryswift/ry-15.webp";
import r16 from "@/assets/ryswift/ry-16.webp";

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

const RySwiftCaseStudy = () => {
  return (
    <div className="portfolio-page">
      <div id="page">
        <div className="cs-page-nav">
          <Link to="/" className="cs-bk" aria-label="Back to portfolio">
            <IconBack />
            Back to portfolio
          </Link>
          <span className="cs-tl">Case Study · RySwift</span>
        </div>

        <section className="qt-case qt-case--page">
          <div className="qt-hero">
            <img src={hero} alt="RySwift logistics SaaS hero" loading="eager" />
          </div>

          <div className="qt-case-top">
            <span className="qt-case-num"><span className="sw-dot" />Case Study / 02</span>
            <span className="qt-case-year">©2025</span>
          </div>

          <div className="qt-case-head">
            <div className="qt-case-id">
              <div>
                <h1 className="qt-case-title">RySwift</h1>
                <p className="qt-case-tag">A logistics SaaS designed around operational clarity — product UX, data hierarchy, and a calm interface system for dispatchers, fleet managers, and finance leads.</p>
              </div>
            </div>
          </div>

          <dl className="qt-meta">
            <div><dt>Role</dt><dd>Product Designer · UX/UI</dd></div>
            <div><dt>Client</dt><dd>RySwift Logistics (concept)</dd></div>
            <div><dt>Type</dt><dd>SaaS · Logistics · Dashboard</dd></div>
            <div><dt>Built with</dt><dd>Figma · Design System</dd></div>
            <div><dt>Year</dt><dd>2025</dd></div>
          </dl>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={r2} alt="RySwift — dashboard overview" loading="lazy" />
              <figcaption>Dashboard · operations overview</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={r3} alt="RySwift — shipments view" loading="lazy" />
                <figcaption>Shipments</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={r4} alt="RySwift — fleet management" loading="lazy" />
                <figcaption>Fleet</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Context</h3>
              <p>RySwift is a logistics SaaS workspace serving three distinct operator roles — dispatchers, fleet managers, and finance — inside a single product. Every screen sits on top of dense operational data that the team reads continuously through the day.</p>
            </div>
            <div className="qt-body-col">
              <h3>Problem</h3>
              <p>Most logistics tools either drown operators in dense tables or hide the data behind decorative widgets. Neither serves the actual job. RySwift needed a workspace that respects how operators read information — fast, hierarchical, trustworthy — without sacrificing the depth that a logistics business depends on.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Role</h3>
              <p>Product Design — information architecture across roles, dashboard taxonomy, table interaction patterns. UI Design — calm dense SaaS system, focused data viz, sectioned modules per role. Visual system contribution — typographic hierarchy and a single global navigation that holds the whole workspace together.</p>
            </div>
            <div className="qt-body-col">
              <h3>Approach</h3>
              <p>Started from real operator workflows — what does a dispatcher do in the first 30 seconds of a shift, where does finance reconcile, where does fleet plan? Built the navigation around those entry points first, then designed each module to answer one question at a time.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Design Decisions</h3>
              <p>Dense-but-readable typography over decorative widgets. Sortable tables as a first-class surface, not an afterthought. A single global navigation instead of role-switching sub-apps, so the product feels like one workspace rather than three disconnected tools.</p>
            </div>
            <div className="qt-body-col">
              <h3>Visual System Contribution</h3>
              <p>Restrained palette and consistent spacing scale reduce cognitive load across long sessions. Visual hierarchy directs attention to status changes and exceptions — the things operators actually need to act on — instead of competing for attention with everything else on screen.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Constraints</h3>
              <p>Three operator roles, one product budget — couldn&rsquo;t ship three sub-apps. Data density is non-negotiable — operators read tables all day; hiding columns is not an option. Long-session ergonomics — the workspace runs full-screen for 8+ hours, so visual fatigue had to be designed against from the first frame.</p>
            </div>
            <div className="qt-body-col">
              <h3>Thinking Process</h3>
              <p>Considered role-specific dashboards behind a switcher — rejected, because it splits a shared operational reality. Considered a chart-led overview with drill-downs — rejected, because operators trust tables more than charts and need both side-by-side. Landed on a single workspace with role-aware modules and sortable tables as the primary surface.</p>
            </div>
          </div>

          <div className="qt-body">
            <div className="qt-body-col">
              <h3>Outcome</h3>
              <p>A workspace where three operator roles share one mental model, every table is sortable, and every primary action is one click from the dashboard. UX clarity and visual restraint reinforce each other — the product reads as one calm surface instead of a stack of tools.</p>
            </div>
            <div className="qt-body-col">
              <h3>Reflection</h3>
              <p>Rebuilding today I&rsquo;d push further on saved-view personalization — let each operator pin their own table column set so the calm baseline stays, but the workspace adapts to how they actually read it.</p>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={r5} alt="RySwift — live tracking map" loading="lazy" />
              <figcaption>Live tracking · map view</figcaption>
            </figure>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={r6} alt="RySwift — analytics panel" loading="lazy" />
              <figcaption>Analytics · performance</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={r7} alt="RySwift — drivers list" loading="lazy" />
                <figcaption>Drivers</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={r8} alt="RySwift — route detail" loading="lazy" />
                <figcaption>Route detail</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={r9} alt="RySwift — billing module" loading="lazy" />
              <figcaption>Billing · invoices</figcaption>
            </figure>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={r10} alt="RySwift — customers" loading="lazy" />
              <figcaption>Customers</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={r11} alt="RySwift — notifications" loading="lazy" />
                <figcaption>Notifications</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={r12} alt="RySwift — settings" loading="lazy" />
                <figcaption>Settings</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-mock-grid">
            <figure className="qt-mock qt-mock-tall">
              <img src={r13} alt="RySwift — reports" loading="lazy" />
              <figcaption>Reports</figcaption>
            </figure>
            <div className="qt-mock-col">
              <figure className="qt-mock">
                <img src={r14} alt="RySwift — mobile companion" loading="lazy" />
                <figcaption>Mobile companion</figcaption>
              </figure>
              <figure className="qt-mock">
                <img src={r15} alt="RySwift — design system" loading="lazy" />
                <figcaption>Design system</figcaption>
              </figure>
            </div>
          </div>

          <div className="qt-mock-grid qt-mock-grid--single">
            <figure className="qt-mock qt-mock-tall">
              <img src={r16} alt="RySwift — full composition" loading="lazy" />
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
              href="https://www.behance.net/gallery/246694929/RySwift-Logistics-SAAS-Management-App-UXUI"
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

export default RySwiftCaseStudy;
