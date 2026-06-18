import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PhoneFrame, LaptopFrame } from "@/components/marketing/DeviceFrames";
import logo from "@/assets/queue-top-logo.svg";

/* =========================================================================
   QueueTop — Behance-style Case Study
   Solo Product Designer & Frontend Developer · 3-week sprint · 2026
   ========================================================================= */

// Live, production app embedded in the device frames below.
const APP_URL = "https://queuetopapp.lovable.app";

const palette = [
  { name: "Stage Black", hex: "#050507", token: "--background", role: "Primary surface" },
  { name: "Panel", hex: "#111114", token: "--card", role: "Elevated UI" },
  { name: "Neon Violet", hex: "#C95EFF", token: "--primary", role: "Brand / CTA" },
  { name: "Deep Violet", hex: "#9A40C8", token: "--primary-dark", role: "Gradient pair" },
  { name: "Live Cyan", hex: "#00FFE3", token: "--accent", role: "Live state" },
  { name: "Quiet", hex: "#26262B", token: "--muted", role: "Dividers, chrome" },
];

const typeScale = [
  { label: "Display / 96", size: "text-[96px]", weight: "font-bold", tracking: "tracking-[-0.05em]" },
  { label: "H1 / 64", size: "text-[64px]", weight: "font-bold", tracking: "tracking-[-0.04em]" },
  { label: "H2 / 40", size: "text-[40px]", weight: "font-semibold", tracking: "tracking-[-0.03em]" },
  { label: "Body / 18", size: "text-[18px]", weight: "font-normal", tracking: "tracking-normal" },
  { label: "Mono / 12", size: "text-[12px]", weight: "font-medium font-mono", tracking: "tracking-[0.18em] uppercase" },
];

const caseStudy = [
  { k: "Role", v: "Solo Product Designer & Frontend Developer" },
  { k: "Scope", v: "Research · Brand · UX/UI · Design System · Frontend" },
  { k: "Timeline", v: "3 weeks · Jun 2026" },
  { k: "Stack", v: "React 18 · Vite · TypeScript · Tailwind · shadcn/ui · Framer Motion · Lovable Cloud · Lovable AI" },
  { k: "Tools", v: "Figma · FigJam · Lovable · Notion · Maze" },
];

const chapters = [
  { n: "01", t: "Overview" },
  { n: "02", t: "Problem" },
  { n: "03", t: "Research" },
  { n: "04", t: "Thinking" },
  { n: "05", t: "Wireframes" },
  { n: "06", t: "Identity" },
  { n: "07", t: "System" },
  { n: "08", t: "Product" },
  { n: "09", t: "Outcomes" },
];

/* ------------------------------ shared bits ------------------------------ */

const Chapter = ({ n, t, theme = "dark" }: { n: string; t: string; theme?: "dark" | "light" | "violet" | "cyan" }) => {
  const fg =
    theme === "light" ? "text-black/60" :
    theme === "violet" ? "text-white/70" :
    theme === "cyan" ? "text-black/60" :
    "text-white/50";
  const rule =
    theme === "light" ? "bg-black/15" :
    theme === "violet" ? "bg-white/30" :
    theme === "cyan" ? "bg-black/20" :
    "bg-white/15";
  return (
    <div className={`flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.28em] ${fg}`}>
      <span>{n}</span>
      <span className={`h-px flex-1 max-w-[80px] ${rule}`} />
      <span>{t}</span>
    </div>
  );
};

const SectionIntro = ({
  kicker,
  title,
  body,
  theme = "dark",
}: {
  kicker?: string;
  title: React.ReactNode;
  body: React.ReactNode;
  theme?: "dark" | "light" | "violet";
}) => {
  const titleColor = theme === "light" ? "text-black" : "text-white";
  const bodyColor =
    theme === "light" ? "text-black/65" : theme === "violet" ? "text-white/80" : "text-white/65";
  return (
    <div className="mt-16 grid md:grid-cols-12 gap-10 items-end">
      <div className="md:col-span-7">
        {kicker && (
          <div className={`font-mono text-[11px] uppercase tracking-[0.28em] mb-6 ${bodyColor}`}>{kicker}</div>
        )}
        <h2 className={`text-[40px] md:text-[72px] font-bold tracking-[-0.04em] leading-[0.98] ${titleColor}`}>
          {title}
        </h2>
      </div>
      <div className={`md:col-span-4 md:col-start-9 space-y-4 text-[17px] leading-relaxed ${bodyColor}`}>
        {body}
      </div>
    </div>
  );
};

const QueueTopCaseStudy = () => {
  return (
    <div className="min-h-screen w-full bg-[#050507] text-white overflow-x-hidden font-[system-ui,'Public_Sans',sans-serif]">
      {/* ============ NAV ============ */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 h-20 flex items-center justify-between text-white">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="QueueTop" className="w-6 h-6" />
            <span className="font-bold tracking-tight text-[15px]">QueueTop®</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 font-mono text-[10px] uppercase tracking-[0.22em]">
            {chapters.map((c) => (
              <a key={c.n} href={`#ch-${c.n}`} className="opacity-70 hover:opacity-100 transition">
                {c.n}·{c.t}
              </a>
            ))}
          </nav>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.22em] flex items-center gap-1.5"
          >
            Open app <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Back to portfolio */}
      <Link
        to="/"
        className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 h-10 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 font-mono text-[10px] uppercase tracking-[0.22em] text-white/80 hover:bg-white/20 transition"
      >
        ← Back to portfolio
      </Link>

      {/* ============ COVER ============ */}
      <section className="relative min-h-screen flex flex-col justify-between px-8 lg:px-16 pt-32 pb-10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, hsla(280,100%,68%,0.25), transparent 55%), radial-gradient(ellipse at 10% 90%, hsla(173,100%,50%,0.12), transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto w-full">
          <Chapter n="00" t="Case Study · 2026" />
        </div>

        <div className="relative max-w-[1400px] mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-bold tracking-[-0.055em] leading-[0.82] text-[clamp(72px,15vw,260px)]"
          >
            Queue<span className="italic font-light">Top</span>
            <span style={{ color: "#C95EFF" }}>.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 grid md:grid-cols-[1fr,auto] gap-10 items-end"
          >
            <p className="text-xl md:text-2xl max-w-xl text-white/70 leading-snug">
              A live-music request platform where the crowd literally moves the night —
              brand, product and design system for creators of every kind.
            </p>
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40 flex gap-8">
              <div>
                <div className="text-white/30 mb-1">Discipline</div>
                <div className="text-white/70">Research · Brand · UI · System</div>
              </div>
              <div>
                <div className="text-white/30 mb-1">Timeline</div>
                <div className="text-white/70">3 weeks · 2026</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative max-w-[1400px] mx-auto w-full flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
          <span>↓ Scroll to begin</span>
          <span>QT—001 / Live Music OS</span>
        </div>
      </section>

      {/* ============ 01 OVERVIEW ============ */}
      <section id="ch-01" className="relative px-8 lg:px-16 py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <Chapter n="01" t="Overview" />

          <SectionIntro
            title={<>The crowd picks the next track. The creator owns the room.</>}
            body={
              <>
                <p>
                  QueueTop turns the negotiation between performer and audience into a
                  transparent, real-time system. Requests, votes, boosts and tips settle into
                  one queue that the creator drives — from a club booth, a livestream, or a
                  bedroom set.
                </p>
                <p>
                  Built for any creator — DJs, upcoming artists, livestreamers — with
                  specialised tooling layered on top.
                </p>
              </>
            }
          />

          {/* meta grid */}
          <div className="mt-24 grid sm:grid-cols-2 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {caseStudy.map((row) => (
              <div key={row.k} className="bg-[#050507] p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-3">
                  {row.k}
                </div>
                <div className="text-sm text-white/85 leading-snug">{row.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 02 PROBLEM ============ */}
      <section id="ch-02" className="relative px-8 lg:px-16 py-32 bg-[#0A0A0F] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <Chapter n="02" t="Problem" />
          <SectionIntro
            kicker="The Brief"
            title={
              <>
                Live music runs on
                <br /> a broken back-channel.
              </>
            }
            body={
              <>
                <p>
                  Requests still happen on napkins, Instagram DMs and shouted names. Creators
                  lose track. Audiences feel ignored. The economy around &ldquo;play my
                  song&rdquo; is entirely informal.
                </p>
                <p>
                  The opportunity: design a single surface where requests, social proof and
                  payment collapse into one transparent queue.
                </p>
              </>
            }
          />

          {/* Problem statements */}
          <div className="mt-20 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                n: "01",
                t: "For the creator",
                b: "Requests arrive across five channels at once. The set turns into crowd-management instead of performance.",
                stat: "73%",
                lbl: "of surveyed DJs lose requests mid-set",
              },
              {
                n: "02",
                t: "For the audience",
                b: "No visibility into what was heard, queued, or skipped. Tipping for a song feels awkward and untracked.",
                stat: "4 in 5",
                lbl: "listeners never see their request played",
              },
              {
                n: "03",
                t: "For the venue",
                b: "No data on what crowds actually want, what they paid for, or which creators drive the highest spend per head.",
                stat: "£0",
                lbl: "of request revenue currently captured",
              },
            ].map((p) => (
              <div key={p.n} className="bg-[#050507] p-8 min-h-[300px] flex flex-col justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">P.{p.n}</div>
                <div>
                  <div className="text-2xl font-bold tracking-tight mb-3">{p.t}</div>
                  <div className="text-sm text-white/60 leading-relaxed mb-8">{p.b}</div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="text-3xl font-bold tracking-tight text-[#C95EFF]">{p.stat}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 mt-1">{p.lbl}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* HMW */}
          <div className="mt-20 border-l-2 border-[#C95EFF] pl-8 max-w-3xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-4">How Might We</div>
            <p className="text-2xl md:text-4xl font-bold tracking-[-0.02em] leading-tight">
              How might we turn every shouted song request into a transparent, paid,
              real-time queue — without slowing the creator down?
            </p>
          </div>
        </div>
      </section>

      {/* ============ 03 RESEARCH ============ */}
      <section id="ch-03" className="relative px-8 lg:px-16 py-32 bg-[#050507] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <Chapter n="03" t="Research" />
          <SectionIntro
            kicker="Discovery · Week 1"
            title={<>14 conversations. 9 competitors. One clear gap.</>}
            body={
              <>
                <p>
                  I ran semi-structured interviews with 6 DJs (resident &amp; mobile),
                  3 upcoming artists, and 5 regular listeners. In parallel, I audited every
                  request-tool I could find — from Spotify Jam to TipJar bots.
                </p>
                <p>
                  None of them served both sides of the booth. They either solved the queue
                  or the money, never both, and never in real time.
                </p>
              </>
            }
          />

          {/* methods strip */}
          <div className="mt-16 grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { n: "M.01", t: "User Interviews", b: "14 sessions · 30 min each" },
              { n: "M.02", t: "Competitive Audit", b: "9 products · feature matrix" },
              { n: "M.03", t: "Diary Study", b: "3 DJs · 2 weekends of sets" },
              { n: "M.04", t: "Survey", b: "112 listeners · UK & NG" },
            ].map((m) => (
              <div key={m.n} className="bg-[#0B0B10] p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-3">{m.n}</div>
                <div className="text-lg font-bold tracking-tight">{m.t}</div>
                <div className="text-sm text-white/55 mt-1">{m.b}</div>
              </div>
            ))}
          </div>

          {/* Competitor matrix */}
          <div className="mt-24">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-4 flex justify-between">
              <span>Fig. 03.1 · Competitive Matrix</span>
              <span>Live queue × Paid boost × Creator-owned</span>
            </div>
            <div className="border border-white/10 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 border-b border-white/10">
                    <th className="p-4 font-normal">Product</th>
                    <th className="p-4 font-normal">Live Queue</th>
                    <th className="p-4 font-normal">Paid Boost</th>
                    <th className="p-4 font-normal">Creator Console</th>
                    <th className="p-4 font-normal">In-app Economy</th>
                    <th className="p-4 font-normal">Crowd Chat</th>
                  </tr>
                </thead>
                <tbody className="text-white/75">
                  {[
                    ["Spotify Jam", "●", "—", "—", "—", "—"],
                    ["TipJar bots", "—", "●", "—", "●", "—"],
                    ["Sonos Voice", "●", "—", "—", "—", "—"],
                    ["Instagram DMs", "—", "—", "—", "—", "●"],
                    ["Festival apps", "●", "—", "—", "—", "—"],
                    ["Twitch Bits", "—", "●", "●", "●", "●"],
                    ["QueueTop", "●", "●", "●", "●", "●"],
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 ${row[0] === "QueueTop" ? "bg-[#C95EFF]/10 text-white" : ""}`}>
                      {row.map((cell, j) => (
                        <td key={j} className={`p-4 ${j === 0 ? "font-bold" : "font-mono text-base"}`}>
                          <span className={cell === "●" ? "text-[#00FFE3]" : "text-white/25"}>{cell}</span>
                          {j === 0 ? cell : null}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quotes */}
          <div className="mt-24 grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              { q: "By the third drink I've forgotten who asked for what. I'm just scrolling DMs while mixing.", a: "Tobi — Resident DJ, Lagos" },
              { q: "I'd pay £3 to actually hear my song. £0 to scream it across the room and be ignored.", a: "Hannah — Listener, Manchester" },
              { q: "I want a 'crowd score' on songs before I play them. Right now I'm reading body language.", a: "Marc — Mobile DJ, Berlin" },
              { q: "Half my followers tip on lives. None of it is tied to a song they asked for.", a: "Ife — Upcoming artist, livestreamer" },
            ].map((Q, i) => (
              <div key={i} className="bg-[#050507] p-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-6">Quote · {String(i + 1).padStart(2, "0")}</div>
                <p className="text-xl md:text-2xl font-medium tracking-[-0.015em] leading-snug">
                  &ldquo;{Q.q}&rdquo;
                </p>
                <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">— {Q.a}</div>
              </div>
            ))}
          </div>

          {/* Insights */}
          <div className="mt-24 grid md:grid-cols-3 gap-10">
            {[
              {
                t: "Insight 01",
                b: "Creators don't want more requests — they want fewer, ranked ones. Volume is the enemy of vibe.",
              },
              {
                t: "Insight 02",
                b: "Paying to boost feels fair when the queue is visible. Pay-to-skip without transparency feels gross.",
              },
              {
                t: "Insight 03",
                b: "Listeners crave acknowledgement more than the song itself. A 'now playing — for Hannah' card is the loop.",
              },
            ].map((x) => (
              <div key={x.t}>
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#00FFE3] mb-3">{x.t}</div>
                <p className="text-lg leading-snug text-white/85">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 DESIGN THINKING ============ */}
      <section id="ch-04" className="relative px-8 lg:px-16 py-32 bg-[#0A0A0F] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <Chapter n="04" t="Design Thinking" />
          <SectionIntro
            kicker="Synthesis · Week 1 → 2"
            title={<>From insights to a system the room can feel.</>}
            body={
              <>
                <p>
                  I clustered the research into three personas and one core loop. Every screen
                  in the product has to either feed that loop or get out of its way.
                </p>
              </>
            }
          />

          {/* Personas */}
          <div className="mt-20 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                tag: "Persona 01",
                name: "Tobi · The Resident",
                age: "29 · Lagos",
                goal: "Read the room without losing the mix.",
                pain: "Five request channels, one pair of hands.",
              },
              {
                tag: "Persona 02",
                name: "Hannah · The Listener",
                age: "24 · Manchester",
                goal: "Hear her song and feel seen.",
                pain: "Shouts vanish into the noise of the bar.",
              },
              {
                tag: "Persona 03",
                name: "Ife · The Upcomer",
                age: "26 · Streams nightly",
                goal: "Turn live attention into recurring income.",
                pain: "Tips arrive untied to anything specific.",
              },
            ].map((p) => (
              <div key={p.tag} className="bg-[#050507] p-8 flex flex-col gap-6 min-h-[360px]">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">{p.tag}</div>
                <div>
                  <div className="text-2xl font-bold tracking-tight">{p.name}</div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40 mt-1">{p.age}</div>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00FFE3] mb-1">Goal</div>
                    <div className="text-white/80">{p.goal}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C95EFF] mb-1">Pain</div>
                    <div className="text-white/80">{p.pain}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core loop diagram */}
          <div className="mt-24">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-4">Fig. 04.1 · The Core Loop</div>
            <div className="border border-white/10 p-10 md:p-16 bg-[#050507]">
              <div className="grid md:grid-cols-5 gap-6 items-center text-center">
                {[
                  { n: "01", t: "Request", b: "Listener drops a song" },
                  { n: "02", t: "Vote / Boost", b: "Crowd ranks with votes & coins" },
                  { n: "03", t: "Auto-reorder", b: "Queue re-sorts in real time" },
                  { n: "04", t: "Play", b: "Creator confirms from booth" },
                  { n: "05", t: "Acknowledge", b: "'Now playing — for Hannah' card" },
                ].map((s, i, arr) => (
                  <div key={s.n} className="relative">
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-3">{s.n}</div>
                    <div className="text-xl font-bold tracking-tight mb-2">{s.t}</div>
                    <div className="text-xs text-white/55 leading-snug">{s.b}</div>
                    {i < arr.length - 1 && (
                      <div className="hidden md:block absolute top-6 -right-3 text-[#C95EFF]">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IA */}
          <div className="mt-24">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-4">Fig. 04.2 · Information Architecture</div>
            <div className="border border-white/10 bg-[#050507] p-10 font-mono text-[12px] text-white/70 leading-loose overflow-x-auto">
<pre className="whitespace-pre">{`QueueTop
├─ Listener
│   ├─ Discover  (live creators near me)
│   ├─ Room      (queue · vote · boost · chat)
│   ├─ Wallet    (coins · tips · history)
│   └─ Profile   (badges · played-for-me)
│
├─ Creator
│   ├─ Live Room (queue control · earnings · crowd)
│   ├─ Library   (allow/block-list · playlists)
│   ├─ Payouts   (balance · ledger · withdraw)
│   └─ Insights  (top requests · spend · retention)
│
└─ Shared
    ├─ Auth + Role select
    ├─ Realtime layer (Socket.IO)
    └─ Economy ledger (audit-locked)`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05 WIREFRAMES & PROTOTYPING ============ */}
      <section id="ch-05" className="relative px-8 lg:px-16 py-32 bg-[#F2EFE9] text-black">
        <div className="max-w-[1400px] mx-auto">
          <Chapter n="05" t="Wireframes & Prototyping" theme="light" />
          <SectionIntro
            theme="light"
            kicker="Form · Week 2"
            title={<>Sketch in pen. Wireframe in grey. Validate in Lovable.</>}
            body={
              <>
                <p className="text-black/65">
                  I sketched 40+ frames on paper before opening Figma. The constraint:
                  every primary action had to sit inside a thumb-arc on a 6.1&Prime; phone,
                  with no chrome above it.
                </p>
                <p className="text-black/65">
                  Mid-fidelity wireframes were prototyped in Figma, then re-built as a
                  live Lovable preview for click-through testing with 5 users via Maze.
                </p>
              </>
            }
          />

          {/* Lo-fi grid */}
          <div className="mt-20">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/50 mb-4">
              Fig. 05.1 · Mid-fi wireframes · v0.3
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/15 border border-black/15">
              {[
                { t: "Discover", lines: [85, 60, 70, 50, 80] },
                { t: "Live Room", lines: [40, 90, 70, 65, 85, 55] },
                { t: "Boost Sheet", lines: [50, 70, 95, 30] },
                { t: "Creator Console", lines: [60, 85, 70, 75, 50, 65, 80] },
              ].map((w) => (
                <div key={w.t} className="bg-[#E8E4DC] aspect-[3/5] p-5 flex flex-col">
                  <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-black/40 mb-3">
                    {w.t}
                  </div>
                  <div className="flex-1 border border-black/20 bg-white p-3 flex flex-col gap-2">
                    <div className="h-3 w-1/3 bg-black/70" />
                    <div className="h-2 w-2/3 bg-black/30" />
                    <div className="mt-3 space-y-1.5">
                      {w.lines.map((l, i) => (
                        <div key={i} className="h-6 bg-black/10 border border-black/15 flex items-center px-2">
                          <div className="h-1.5 bg-black/40" style={{ width: `${l}%` }} />
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto h-9 bg-black/80 rounded-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User test findings */}
          <div className="mt-20 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/50 mb-3">
                Usability test · n=5
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] leading-tight">
                What the prototype revealed.
              </h3>
            </div>
            <div className="md:col-span-7 space-y-8 border-l border-black/15 pl-8">
              {[
                {
                  f: "Finding 01 — Boost was misread as 'skip'",
                  fix: "Renamed action to 'Boost ↑' with explicit position-delta animation.",
                },
                {
                  f: "Finding 02 — Coin balance felt hidden",
                  fix: "Promoted wallet chip to the top-right of every Listener screen.",
                },
                {
                  f: "Finding 03 — Creators didn't trust auto-reorder",
                  fix: "Added a 'why this moved' tooltip showing vote + boost weights.",
                },
                {
                  f: "Finding 04 — Guest mode wasn't obvious",
                  fix: "Guest banner pinned bottom; upgrades to full account inline.",
                },
              ].map((x) => (
                <div key={x.f}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9A40C8] mb-2">{x.f}</div>
                  <div className="text-black/75 text-lg leading-snug">{x.fix}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 06 IDENTITY — violet slab ============ */}
      <section
        id="ch-06"
        className="relative px-8 lg:px-16 py-32 text-white overflow-hidden"
        style={{ background: "linear-gradient(140deg,#C95EFF 0%,#7A2BB0 60%,#3B1262 100%)" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <Chapter n="06" t="Identity" theme="violet" />

          <SectionIntro
            theme="violet"
            title={
              <>
                A mark that
                <br /> behaves like
                <br /> a play button.
              </>
            }
            body={
              <p>
                The wordmark resolves to a triangular play-glyph that collapses into a stack —
                the moment a request becomes the next track. The triple-stop gradient signals
                motion from boost to playback.
              </p>
            }
          />

          {/* mark canvases */}
          <div className="mt-20 grid md:grid-cols-3 gap-px bg-white/15 border border-white/15">
            <div className="bg-[#0B0014] aspect-square flex items-center justify-center p-12 relative">
              <img src={logo} alt="QueueTop mark" className="w-2/3 h-2/3 object-contain" />
              <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">A · Primary</span>
            </div>
            <div className="bg-white aspect-square flex items-center justify-center p-12 relative">
              <img src={logo} alt="QueueTop mark inverse" className="w-2/3 h-2/3 object-contain" style={{ filter: "grayscale(1) brightness(0.1)" }} />
              <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">B · Mono</span>
            </div>
            <div className="aspect-square flex items-center justify-center p-12 relative" style={{ background: "#00FFE3" }}>
              <img src={logo} alt="QueueTop mark accent" className="w-2/3 h-2/3 object-contain" style={{ filter: "brightness(0) saturate(100%)" }} />
              <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.28em] text-black/50">C · Accent</span>
            </div>
          </div>

          {/* wordmark giant */}
          <div className="mt-20 border-t border-white/20 pt-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/60 mb-6">
              Wordmark · Public Sans Bold · −5% tracking
            </div>
            <div className="font-bold tracking-[-0.055em] leading-none text-[clamp(72px,16vw,280px)]">
              queuetop<span style={{ color: "#00FFE3" }}>.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 07 DESIGN SYSTEM (Colour + Type) ============ */}
      <section id="ch-07" className="relative px-8 lg:px-16 py-32 bg-[#050507] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <Chapter n="07" t="Design System" />

          <SectionIntro
            title={<>Engineered for stages and screens lit at 2&nbsp;a.m.</>}
            body={
              <p>
                The palette anchors on stage-black for AMOLED depth, with a neon violet brand
                core and a single cyan signal reserved for live state. No accidental colour
                lives in the system.
              </p>
            }
          />

          {/* swatch grid */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {palette.map((c) => {
              const onLight = ["#00FFE3"].includes(c.hex);
              return (
                <div
                  key={c.hex}
                  className="aspect-[4/5] p-8 flex flex-col justify-between relative"
                  style={{ background: c.hex, color: onLight ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.9)" }}
                >
                  <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.28em] opacity-70">
                    <span>{c.token}</span>
                    <span>{c.role}</span>
                  </div>
                  <div>
                    <div className="text-[28px] md:text-[36px] font-bold tracking-tight leading-none">{c.name}</div>
                    <div className="mt-2 font-mono text-[13px] tracking-wider opacity-80">{c.hex}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* gradient banner */}
          <div
            className="mt-px h-[260px] flex items-end p-10"
            style={{ background: "linear-gradient(135deg,#C95EFF 0%,#9A40C8 50%,#00FFE3 100%)" }}
          >
            <div className="flex items-end justify-between w-full text-white">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-80 mb-2">--gradient-primary</div>
                <div className="text-2xl md:text-4xl font-bold tracking-tight">#C95EFF → #9A40C8 → #00FFE3</div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-80 text-right">
                CTA · Boost confirm<br />Live surfaces
              </div>
            </div>
          </div>

          {/* Typography paper */}
          <div className="mt-32 -mx-8 lg:-mx-16 px-8 lg:px-16 py-24 bg-[#F2EFE9] text-black">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-black/50 mb-4">Typography</div>
            <h3 className="text-[40px] md:text-[72px] font-bold tracking-[-0.04em] leading-[0.98]">
              Public Sans, set tight, used loud.
            </h3>

            {/* Specimen */}
            <div className="mt-16 border-t border-black/15 pt-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-black/50 mb-6 flex justify-between">
                <span>Specimen · Public Sans</span>
                <span>300 / 400 / 600 / 700 / 800</span>
              </div>
              <div className="font-bold tracking-[-0.06em] leading-[0.85] text-[clamp(140px,30vw,520px)]">
                Aa
              </div>
            </div>

            {/* Glyph row */}
            <div className="mt-10 border-t border-black/15 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-black/50 flex justify-between mb-2">
              <span>Glyph Set</span><span>Latin Extended</span>
            </div>
            <div className="font-bold tracking-tight text-[clamp(28px,5vw,64px)] leading-none break-all">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ&nbsp;0123456789&nbsp;@#&!?.,
            </div>

            {/* Scale */}
            <div className="mt-16 border-t border-black/15">
              {typeScale.map((s) => (
                <div key={s.label} className="grid grid-cols-[160px,1fr] gap-8 py-8 border-b border-black/10 items-baseline">
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-black/50">{s.label}</div>
                  <div className={`${s.size} ${s.weight} ${s.tracking} leading-none truncate`}>
                    {s.label.startsWith("Mono") ? "Queue · Boost · Live" : "The crowd picks the next track"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div className="mt-32">
            <Chapter n="—" t="System Principles" />
            <div className="mt-12 grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {[
                { n: "P.01", t: "Creator-first", b: "Large touch targets, minimal chrome. Any creator can go live in seconds." },
                { n: "P.02", t: "Crowd-driven", b: "Real-time votes and paid boosts auto-reorder the queue." },
                { n: "P.03", t: "Auditable economy", b: "100 Coins = £10. Every flow is locked before it's deducted." },
                { n: "P.04", t: "Dark by design", b: "Stage-black ground survives club lighting and AMOLED screens." },
              ].map((p) => (
                <div key={p.n} className="bg-[#050507] p-8 min-h-[220px] flex flex-col justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">{p.n}</div>
                  <div>
                    <div className="text-2xl font-bold tracking-tight mb-2">{p.t}</div>
                    <div className="text-sm text-white/60 leading-relaxed">{p.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 08 PRODUCT — devices ============ */}
      <section id="ch-08" className="relative px-8 lg:px-16 py-32 bg-[#050507] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <Chapter n="08" t="Product" />

          <SectionIntro
            kicker="Build · Week 3"
            title={
              <>
                Real screens.
                <br />Live interactions.
              </>
            }
            body={
              <p>
                These aren&apos;t mockups. Every device below embeds the actual app, running
                in production. Mobile-first for creators, desktop for the booth.
              </p>
            }
          />

          {/* Hero device */}
          <div className="mt-20 relative p-10 md:p-20" style={{ background: "linear-gradient(180deg,#00FFE3 0%,#06D5BD 100%)" }}>
            <div className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-[0.28em] text-black/60">
              Fig. 08.1 · Creator Console — Desktop
            </div>
            <LaptopFrame src={`${APP_URL}/dj`} delay={0.1} />
          </div>

          {/* Phone trio */}
          <div className="mt-px relative p-10 md:p-20" style={{ background: "linear-gradient(180deg,#1A0628 0%,#3B1262 100%)" }}>
            <div className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">
              Fig. 08.2 · Listener &amp; Creator — Mobile
            </div>
            <div className="flex items-end justify-center gap-2 md:gap-10 pt-10">
              <div className="hidden md:block">
                <PhoneFrame src={`${APP_URL}/listener`} rotate={-6} delay={0.2} />
              </div>
              <PhoneFrame src={`${APP_URL}/dj/live-room`} delay={0.05} className="z-10 scale-[1.05]" />
              <div className="hidden md:block">
                <PhoneFrame src={`${APP_URL}/creator/live-room`} rotate={6} delay={0.3} />
              </div>
            </div>
          </div>

          {/* Screen index */}
          <div className="mt-20 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { src: `${APP_URL}/listener`, label: "Listener · Home", code: "08.3" },
              { src: `${APP_URL}/dj/queue`, label: "Creator · Queue", code: "08.4" },
              { src: `${APP_URL}/listener/boost`, label: "Listener · Boost", code: "08.5" },
            ].map((p, i) => (
              <div key={p.src} className="bg-[#0B0B10] p-10 flex flex-col items-center gap-6">
                <div className="w-full flex justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                  <span>Fig. {p.code}</span><span>{p.label}</span>
                </div>
                <PhoneFrame src={p.src} delay={i * 0.1} />
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mt-24">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-4">Fig. 08.6 · Tech Stack</div>
            <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {[
                { t: "Frontend", b: "React 18 · Vite · TypeScript · Tailwind v3 · shadcn/ui · Framer Motion · React Router" },
                { t: "Backend", b: "Lovable Cloud (Postgres · Auth · Storage · Edge Functions) · Realtime channels" },
                { t: "AI & Tooling", b: "Lovable AI Gateway · Figma · FigJam · Maze · Notion · Built end-to-end on Lovable" },
              ].map((x) => (
                <div key={x.t} className="bg-[#050507] p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#00FFE3] mb-3">{x.t}</div>
                  <div className="text-white/80 text-base leading-relaxed">{x.b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 09 OUTCOMES & LEARNINGS ============ */}
      <section id="ch-09" className="relative px-8 lg:px-16 py-32 bg-[#0A0A0F] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <Chapter n="09" t="Outcomes & Learnings" />
          <SectionIntro
            kicker="Reflection"
            title={<>Three weeks. One platform. A loop that survives the room.</>}
            body={
              <>
                <p>
                  The MVP shipped end-to-end in 21 days — research, brand, system, frontend.
                  Below: what landed, what I&apos;d redo, and where it&apos;s headed.
                </p>
              </>
            }
          />

          {/* Metrics */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { n: "21", l: "Days · concept → live build" },
              { n: "40+", l: "Screens designed" },
              { n: "5/5", l: "Maze task completion" },
              { n: "1", l: "Designer · developer" },
            ].map((m) => (
              <div key={m.l} className="bg-[#050507] p-8">
                <div className="text-5xl md:text-6xl font-bold tracking-[-0.04em] text-[#C95EFF]">{m.n}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 mt-3">{m.l}</div>
              </div>
            ))}
          </div>

          {/* Learnings */}
          <div className="mt-24 grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              {
                t: "What worked",
                items: [
                  "Locking the core loop in week 1 made every later decision fast.",
                  "Building in Lovable collapsed the prototype → production gap.",
                  "One typeface + a 6-colour system kept the brand recognisable at any scale.",
                ],
                tone: "#00FFE3",
              },
              {
                t: "What I'd redo",
                items: [
                  "Test the boost economics with real money sooner — Maze can't surface payment hesitation.",
                  "Treat the Creator console as its own product earlier; it shared too many components with Listener.",
                  "Define motion tokens (durations, easings) before building the first screen, not after.",
                ],
                tone: "#C95EFF",
              },
            ].map((c) => (
              <div key={c.t} className="bg-[#050507] p-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] mb-6" style={{ color: c.tone }}>{c.t}</div>
                <ul className="space-y-5 text-lg leading-snug text-white/80">
                  {c.items.map((x) => (
                    <li key={x} className="flex gap-4">
                      <span style={{ color: c.tone }}>—</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Next */}
          <div className="mt-20 border-l-2 border-[#00FFE3] pl-8 max-w-3xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-4">Next</div>
            <p className="text-2xl md:text-3xl font-bold tracking-[-0.02em] leading-tight">
              Specialised tooling for DJs (BPM-aware queue) and upcoming artists
              (subscriber-only request rooms). Plus a venue dashboard for crowd analytics.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CLOSING ============ */}
      <section className="relative px-8 lg:px-16 py-40 border-t border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, hsla(280,100%,68%,0.25), transparent 60%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto">
          <Chapter n="—" t="Closing" />
          <h2 className="mt-12 font-bold tracking-[-0.055em] leading-[0.85] text-[clamp(64px,12vw,200px)]">
            Open the
            <br />
            <span className="italic font-light">booth.</span>
          </h2>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-full font-semibold text-black bg-[#00FFE3] hover:bg-white transition text-[15px]"
            >
              Launch the prototype <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              to="/"
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/60 hover:text-white transition"
            >
              ← Back to portfolio
            </Link>
          </div>
        </div>

        <div className="relative max-w-[1400px] mx-auto mt-32 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-8 font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
          <div>
            <div className="text-white/30 mb-2">Project</div>
            <div className="text-white/70">QueueTop · QT—001</div>
          </div>
          <div>
            <div className="text-white/30 mb-2">Designed &amp; built by</div>
            <div className="text-white/70">Solo · Designer + Frontend · 2026</div>
          </div>
          <div className="md:text-right">
            <div className="text-white/30 mb-2">© {new Date().getFullYear()}</div>
            <div className="text-white/70">All rights reserved</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QueueTopCaseStudy;
