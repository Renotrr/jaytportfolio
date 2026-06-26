import { LaptopFrame, PhoneFrame } from "@/components/marketing/DeviceFrames";
import { queueTopFlowSvg } from "@/components/portfolio/queueTopFlowSvg";
import qtLogo from "@/assets/queue-top-logo.svg";
import qtUserResearch from "@/assets/qt-user-research.webp";
import qtFridayNight from "@/assets/qt-friday-night-vibes.webp";

const LIVE_URL = "https://queuetopapp.lovable.app";

/* ── Process capsule bar (replaces the timeline pills) ── */
export const QueueTopCapsuleBar = () => {
  const steps = ["Discover", "Define", "Design", "Build"];
  return (
    <div className="qt-capsule" role="img" aria-label="Process: Discover, Define, Design, Build, Ship (current)">
      <span className="qt-capsule-mark">
        <img src={qtLogo} alt="QueueTop logo mark" />
      </span>
      <div className="qt-capsule-seg qt-capsule-seg--steps">
        {steps.map((s, i) => (
          <span className="qt-capsule-step" key={s}>
            {s}
            {i < steps.length - 1 && <span className="qt-capsule-div" aria-hidden="true" />}
          </span>
        ))}
      </div>
      <div className="qt-capsule-seg qt-capsule-seg--ship">Ship</div>
    </div>
  );
};

/* ── The Approach extras: user-flow diagram + research + hero mockup ── */
export const QueueTopApproachExtras = () => {
  const legend = [
    { c: "#FFE066", l: "Start" },
    { c: "#C95EFF", l: "Shared flow" },
    { c: "#00FFE3", l: "Listener flow" },
    { c: "#9A40C8", l: "Creator flow" },
    { c: "#FF9F6B", l: "Artist flow" },
  ];
  return (
    <>
      <div className="qt-flow">
        <div className="qt-flow-legend">
          {legend.map((x) => (
            <div className="qt-flow-legend-item" key={x.l}>
              <span className="qt-flow-dot" style={{ background: x.c }} />
              <span>{x.l}</span>
            </div>
          ))}
        </div>
        <div className="qt-flow-scroll" dangerouslySetInnerHTML={{ __html: queueTopFlowSvg }} />
      </div>

      <figure className="qt-fullfig">
        <img src={qtUserResearch} alt="User research — quotes from a resident DJ, a listener, and a creator" loading="lazy" />
      </figure>

      <figure className="qt-fullfig">
        <img src={qtFridayNight} alt="Friday Night Vibes — QueueTop live session mockup on a phone" loading="lazy" />
      </figure>
    </>
  );
};

/* ── Design System + Logo + Interactive Preview ── */
const SIZES = [
  { px: "67px", label: "Display" },
  { px: "35px", label: "Heading" },
  { px: "17px", label: "Subtitle" },
  { px: "16px", label: "Body" },
  { px: "12px", label: "Label" },
];

const COLORS = [
  { hex: "#0A0A0D", rgb: "10 10 13", name: "Background" },
  { hex: "#C95EFF", rgb: "201 94 255", name: "Primary" },
  { hex: "#9A40C8", rgb: "154 64 200", name: "Deep" },
  { hex: "#00FFE3", rgb: "0 255 227", name: "Accent" },
  { hex: "#F2F1EC", rgb: "242 241 236", name: "Text" },
];

export const QueueTopShowcase = () => {
  return (
    <>
      {/* DESIGN SYSTEM */}
      <section className="csx-sec">
        <div className="csx-label">Design System</div>
        <h2 className="csx-stitle">The QueueTop visual language.</h2>

        <div className="qt-ds">
          <div className="qt-ds-pill">QUEUETOP</div>

          <div className="qt-ds-grid">
            <div className="qt-ds-type">
              <div className="qt-ds-weights">
                <span>Light</span>
                <span>Regular</span>
                <span>Medium</span>
                <span>Semibold</span>
              </div>
              <div className="qt-ds-aa">Aa</div>
              <div className="qt-ds-row">
                <div className="qt-ds-row-label">Headings</div>
                <div className="qt-ds-heading-sample">
                  ABCDEFGHIJKLMN<br />OPQRSTUVWXYZ<br />0123456789
                </div>
              </div>
              <div className="qt-ds-row">
                <div className="qt-ds-row-label">Text</div>
                <div className="qt-ds-text-sample">
                  abcdefghijklmnopqrstuvwxyz<br />0123456789
                </div>
              </div>
            </div>

            <div className="qt-ds-size">
              <div className="qt-ds-size-title">Size</div>
              {SIZES.map((s) => (
                <div className="qt-ds-size-item" key={s.px}>
                  <span className="qt-ds-size-px">{s.px}</span>
                  <span className="qt-ds-size-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="qt-ds-colors">
            {COLORS.map((c, i) => (
              <div
                className="qt-swatch"
                key={c.hex}
                style={{ background: c.hex, color: i >= 3 ? "#0A0A0D" : "#F2F1EC" }}
              >
                <span className="qt-swatch-num">0{i + 1}</span>
                <div className="qt-swatch-meta">
                  <div>RGB: {c.rgb}</div>
                  <div>HEX: {c.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO */}
      <section className="csx-sec">
        <div className="csx-label">Logo</div>
        <h2 className="csx-stitle">One mark, built for dark and light.</h2>
        <div className="qt-logo-row">
          <div className="qt-logo-card qt-logo-card--dark">
            <img src={qtLogo} alt="QueueTop logo on dark background" />
          </div>
          <div className="qt-logo-card qt-logo-card--light">
            <img src={qtLogo} alt="QueueTop logo on light background" />
          </div>
        </div>
      </section>

      {/* INTERACTIVE PREVIEW */}
      <section className="csx-sec">
        <div className="csx-label">Interactive Preview</div>
        <h2 className="csx-stitle">Try the live product.</h2>
        <p className="csx-text">
          The shipped QueueTop app, embedded live. Scroll and click through the real interface below.
        </p>
        <div className="qt-preview">
          <LaptopFrame src={LIVE_URL} />
          <div className="qt-preview-phones">
            <PhoneFrame src={LIVE_URL} rotate={-4} />
            <PhoneFrame src={LIVE_URL} rotate={4} delay={0.15} />
          </div>
        </div>
      </section>
    </>
  );
};
