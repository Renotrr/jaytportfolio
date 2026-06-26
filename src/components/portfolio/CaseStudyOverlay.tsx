import type { CaseStudy, CaseStudyImageSlot } from "@/components/portfolio/portfolioData";
import {
  QueueTopApproachExtras,
  QueueTopCapsuleBar,
  QueueTopShowcase,
} from "@/components/portfolio/QueueTopBlocks";

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

const Slot = ({ slot, hero = false }: { slot: CaseStudyImageSlot; hero?: boolean }) => {
  if (slot.src) {
    return (
      <figure className={`csx-img ${slot.full ? "csx-img--full" : ""} ${hero ? "csx-img--hero" : ""}`.trim()}>
        <img src={slot.src} alt={slot.alt ?? slot.label} loading={hero ? "eager" : "lazy"} />
      </figure>
    );
  }
  return (
    <div className={`csx-slot ${hero ? "csx-slot--hero" : ""}`.trim()}>
      <div className="csx-slot-ico" aria-hidden="true">▢</div>
      <div className="csx-slot-label">{slot.label}</div>
      {slot.hint && <div className="csx-slot-hint">{slot.hint}</div>}
    </div>
  );
};

type Props = {
  caseStudy: CaseStudy;
  isActive: boolean;
  caseVisible: boolean;
  onClose: () => void;
};

const CaseStudyOverlay = ({ caseStudy: cs, isActive, caseVisible, onClose }: Props) => {
  const vis = isActive && caseVisible;
  const markerId = `csflow-${cs.id}`;
  const isQT = cs.id === "cs-queuetop";

  return (
    <div
      id={cs.id}
      className={`cs-ov cs-ov--${cs.theme ?? "queuetop"} ${isActive ? "active" : ""} ${vis ? "vis" : ""}`.trim()}
    >
      <div className="cs-nav">
        <button className="cs-bk" type="button" onClick={onClose}>
          <IconBack />
          Back to portfolio
        </button>
        <span className="cs-tl">{cs.navLabel}</span>
      </div>

      <div className="csx-body">
        {/* HERO */}
        <header className="csx-hero">
          {cs.eyebrow && <div className="csx-eyebrow">{cs.eyebrow}</div>}
          <h1 className="csx-title">
            {cs.title}
            {cs.titleAccent && <span className="csx-grad">{cs.titleAccent}</span>}
          </h1>
          <p className="csx-subtitle">{cs.subtitle}</p>
          {!!cs.badges?.length && (
            <div className="csx-badges">
              {cs.badges.map((b) => (
                <span key={b.label} className={`csx-badge ${b.accent ? "csx-badge--accent" : ""}`.trim()}>
                  {b.label}
                </span>
              ))}
            </div>
          )}
          {cs.heroImage ? (
            <figure className="csx-img csx-img--hero csx-img--full">
              <img src={cs.heroImage} alt={cs.imageAlt} loading="eager" />
            </figure>
          ) : (
            cs.heroSlot && <Slot slot={cs.heroSlot} hero />
          )}
        </header>

        {/* META + TIMELINE */}
        <section className="csx-sec">
          <div className="csx-meta">
            {cs.meta.map((m) => (
              <div key={m.label} className="csx-meta-item">
                <div className="csx-meta-l">{m.label}</div>
                <div className="csx-meta-v">{m.value}</div>
              </div>
            ))}
          </div>
          {isQT ? (
            <QueueTopCapsuleBar />
          ) : (
            !!cs.timeline?.length && (
              <div className="csx-timeline">
                {cs.timeline.map((t, i) => (
                  <div className="csx-tit" key={t.label}>
                    <span className={`csx-tpill ${t.active ? "is-active" : ""}`.trim()}>{t.label}</span>
                    {i < cs.timeline!.length - 1 && <span className="csx-tline" />}
                  </div>
                ))}
              </div>
            )
          )}
        </section>

        {/* SECTIONS */}
        {cs.sections.map((s, i) => (
          <section
            className={`csx-sec cs-s ${vis ? "vis" : ""}`.trim()}
            style={{ transitionDelay: `${(i + 1) * 0.06}s` }}
            key={`${cs.id}-${s.label}`}
          >
            <div className="csx-label">{s.label}</div>
            <h2 className="csx-stitle">{s.title}</h2>
            {s.paragraphs.map((p) => (
              <p className="csx-text" key={p}>{p}</p>
            ))}

            {isQT && s.label === "The Approach" && <QueueTopApproachExtras />}


            {s.note && (
              <div className="csx-note">
                <strong>{s.note.label}</strong> {s.note.text}
              </div>
            )}

            {s.flow && (
              <div className="csx-flow">
                <svg viewBox={s.flow.viewBox} style={{ minWidth: s.flow.minWidth }} xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <marker id={markerId} markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto">
                      <path d="M0,0 L8,4 L0,8 Z" fill="var(--cs-accent2)" />
                    </marker>
                  </defs>
                  {s.flow.arrows.map((a, k) => (
                    <line
                      key={k}
                      x1={a.x1}
                      y1={a.y1}
                      x2={a.x2}
                      y2={a.y2}
                      stroke="var(--cs-accent2)"
                      strokeWidth="1.8"
                      markerEnd={`url(#${markerId})`}
                    />
                  ))}
                  {s.flow.nodes.map((n, k) => (
                    <g key={k}>
                      <rect
                        x={n.x}
                        y={n.y}
                        width={n.w}
                        height={n.h ?? 60}
                        rx={s.flow!.rx ?? 10}
                        fill={n.start ? "var(--cs-flow-start)" : "var(--cs-node-fill)"}
                        stroke={n.start ? "none" : "var(--cs-node-stroke)"}
                        strokeWidth={n.start ? 0 : 1.5}
                      />
                      <text x={n.x + n.w / 2} y={n.y + 25} className={`csx-fc-label ${n.start ? "is-start" : ""}`.trim()}>
                        {n.label}
                      </text>
                      {n.sub && (
                        <text x={n.x + n.w / 2} y={n.y + 40} className="csx-fc-sub">
                          {n.sub}
                        </text>
                      )}
                    </g>
                  ))}
                </svg>
              </div>
            )}

            {s.processTitle && <h3 className="csx-process-h">{s.processTitle}</h3>}
            {!!s.process?.length && (
              <div className="csx-process">
                {s.process.map((step, k) => (
                  <div className="csx-pstep" key={step.title}>
                    <div className="csx-pnum">{k + 1}</div>
                    <div className="csx-pcontent">
                      <h5>{step.title}</h5>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {s.mindmap && (
              <div className="csx-mindmap">
                <div className="csx-mm-center">{s.mindmap.center}</div>
                <div className="csx-mm-branches">
                  {s.mindmap.branches.map((branch) => (
                    <div className="csx-mm-branch" key={branch.tag}>
                      <div className="csx-mm-tag">{branch.tag}</div>
                      <ul>
                        {branch.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!!s.bullets?.length && (
              <ul className="csx-bullets">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}

            {!!s.boxes?.length && (
              <div className="csx-boxes">
                {s.boxes.map((box) => (
                  <div className="csx-box" key={box.title}>
                    <h4>{box.title}</h4>
                    <p>{box.text}</p>
                  </div>
                ))}
              </div>
            )}

            {s.imageSlots?.map((slot, k) => <Slot slot={slot} key={`slot-${k}`} />)}

            {!!s.promptCards?.length && (
              <div className="csx-prompts">
                {s.promptCards.map((card) => (
                  <div className="csx-prompt" key={card.title}>
                    <h5>{card.title}</h5>
                    <code>{card.code}</code>
                  </div>
                ))}
              </div>
            )}

            {!!s.stats?.length && (
              <div className="csx-statrow">
                {s.stats.map((stat) => (
                  <div className="csx-stat" key={stat.label}>
                    <div className="csx-stat-v">{stat.value}</div>
                    <div className="csx-stat-l">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {isQT && <QueueTopShowcase />}



        {/* OUTCOME */}
        <section className="csx-sec">
          <div className="csx-label">Outcome</div>
          <div className="csx-outcome">
            <h3>{cs.outcome.title}</h3>
            <p>{cs.outcome.text}</p>
            {cs.outcome.liveUrl && (
              <a href={cs.outcome.liveUrl} target="_blank" rel="noreferrer" className="cs-live">
                {cs.outcome.liveLabel}
                <span className="btn-circle">
                  <IconArrow />
                </span>
              </a>
            )}
          </div>
        </section>

        <footer className="csx-foot">
          Designed by John Adewole · <a href="mailto:johnadewole23@gmail.com">johnadewole23@gmail.com</a>
        </footer>
      </div>
    </div>
  );
};

export default CaseStudyOverlay;
