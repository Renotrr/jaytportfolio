import { CSSProperties, FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import Hls from "hls.js";

import {
  aboutContent,
  aboutStats,
  aboutTools,
  caseStudies,
  contactContent,
  graphicProjects,
  heroContent,
  heroPreviewFallback,
  heroVideo,
  profileImage,
  studioContent,
  studioTools,
  studioVideo,
  thumbnailImages,
  workProjects,
} from "@/components/portfolio/portfolioData";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import graphic1 from "@/assets/graphic-1.jpg";
import graphic2 from "@/assets/graphic-2.jpg";
import graphic3 from "@/assets/graphic-3.jpg";
import graphic4 from "@/assets/graphic-4.jpg";
import graphic5 from "@/assets/graphic-5.jpg";
import graphic6 from "@/assets/graphic-6.jpg";
import exp1 from "@/assets/exp-1.jpg";

const placeholderImage = "/placeholder.svg";

const withDelay = (delay: string): CSSProperties => ({ ["--d" as string]: delay } as CSSProperties);

const resolvePortfolioImage = (src: string) =>
  !src || src.startsWith("PASTE_YOUR_") ? placeholderImage : src;

// New works data (4 cards) with year + generated images
const worksData = [
  { id: "w1", title: "Lumen Dashboard", year: "2024", category: "UI/UX · Web App", image: work1 },
  { id: "w2", title: "Atlas Mobile", year: "2024", category: "Product Design · iOS", image: work2 },
  { id: "w3", title: "Noir Identity", year: "2023", category: "Brand Identity", image: work3 },
  { id: "w4", title: "Selene Boutique", year: "2025", category: "E-commerce · Framer", image: work4 },
];

const graphicsData = [
  { id: "g1", title: "Editorial 01", category: "Poster · Gallery", image: graphic1 },
  { id: "g2", title: "Chrome Form", category: "3D · Art Direction", image: graphic2 },
  { id: "g3", title: "Liquid", category: "Album Cover", image: graphic3 },
  { id: "g4", title: "Peant Bane", category: "Editorial · Fashion", image: graphic4 },
  { id: "g5", title: "Ritual", category: "Packaging", image: graphic5 },
  { id: "g6", title: "Freval Eve", category: "Event Poster", image: graphic6 },
];

const marqueeWords = [
  "Creative Designer",
  "No-Code Development",
  "UX Research",
  "AI Implementation",
  "Brand Identity",
  "Web Experience",
  "Editorial",
  "Motion",
  "UI/UX",
  "Art Direction",
];

const experienceData = [
  { year: "2024", role: "Kelas Inspirasi Boyolali 7", desc: "Design Creative & Web Management" },
  { year: "2024", role: "PT Tribintang Emas Mulia (Intern)", desc: "Frontend Developer" },
  { year: "2025", role: "Kelas Inspirasi Boyolali 8", desc: "Creative Director & Web Management" },
  { year: "2025", role: "Freelance Studio", desc: "Creative Designer & No-Code Developer" },
];

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Works" },
  { id: "about", label: "About Me" },
  { id: "graphics", label: "Graphics" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const IconArrow = ({ className = "ico ico-arr" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconChevronLeft = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconChevronRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const IconCheck = () => (
  <svg className="c-ic" viewBox="0 0 24 24" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconBack = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const IconClose = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

const PortfolioPage = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const studioVideoRef = useRef<HTMLVideoElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const graphicsSectionRef = useRef<HTMLElement | null>(null);

  const [loaderGone, setLoaderGone] = useState(false);
  const [heroEntered, setHeroEntered] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [caseVisible, setCaseVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [graphicIndex, setGraphicIndex] = useState(0);
  const [graphicDir, setGraphicDir] = useState<"right" | "left">("right");

  const previewImages = useMemo(() => {
    const mapped = thumbnailImages.map(resolvePortfolioImage);
    const list = mapped.length > 0 ? mapped : [resolvePortfolioImage(heroPreviewFallback)];
    // Use generated work images as hero slideshow fallback when paste-tokens unresolved
    const hasReal = list.some((s) => s !== placeholderImage);
    return (hasReal ? list : [work1, work2, work3]).slice(0, 3);
  }, []);

  useEffect(() => {
    if (previewImages.length <= 1) return;
    const interval = window.setInterval(() => {
      setThumbIndex((current) => (current + 1) % previewImages.length);
    }, 3500);
    return () => window.clearInterval(interval);
  }, [previewImages.length]);

  const activeCaseStudy = useMemo(
    () => caseStudies.find((item) => item.id === activeCaseStudyId) ?? null,
    [activeCaseStudyId],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoaderGone(true);
      setHeroEntered(true);
    }, 2300);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = studioVideoRef.current;
    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = studioVideo;
      video.play().catch(() => undefined);
      return;
    }

    if (!Hls.isSupported()) return;

    const hls = new Hls({ enableWorker: false });
    hls.loadSource(studioVideo);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play().catch(() => undefined);
    });

    return () => {
      hls.destroy();
    };
  }, []);

  // Scroll-triggered reveal animations
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const countUp = (element: HTMLElement, target: number, suffix: string, duration: number) => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.round(eased * target)}${progress < 1 ? "" : suffix}`;
        if (progress < 1) window.requestAnimationFrame(step);
        else element.textContent = `${target}${suffix}`;
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("in");
            if (target.classList.contains("a-stats")) {
              target.querySelectorAll<HTMLElement>(".stat-n[data-target]").forEach((item) => {
                countUp(item, Number(item.dataset.target ?? 0), item.dataset.suffix ?? "", 1100);
              });
            }
          } else if (entry.boundingClientRect.top > window.innerHeight * 0.08) {
            target.classList.remove("in");
            if (target.classList.contains("a-stats")) {
              target.querySelectorAll<HTMLElement>(".stat-n[data-target]").forEach((item) => {
                item.textContent = `0${item.dataset.suffix ?? ""}`;
              });
            }
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -48px 0px" },
    );

    root.querySelectorAll<HTMLElement>(".wu,.fi,.si,.a-stats").forEach((element) => {
      if (!element.closest("#hero")) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Graphics section: scroll-hijack one-at-a-time throw out
  useEffect(() => {
    const section = graphicsSectionRef.current;
    if (!section) return;

    let lock = false;
    let lastFire = 0;

    const onWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 5 && rect.bottom >= window.innerHeight - 5;
      if (!inView) return;

      const now = Date.now();
      if (now - lastFire < 700) {
        e.preventDefault();
        return;
      }
      if (lock) {
        e.preventDefault();
        return;
      }

      // Going forward
      if (e.deltaY > 8) {
        if (graphicIndex < graphicsData.length - 1) {
          e.preventDefault();
          lock = true;
          lastFire = now;
          setGraphicDir(graphicIndex % 2 === 0 ? "right" : "left");
          setGraphicIndex((i) => i + 1);
          window.setTimeout(() => {
            lock = false;
          }, 700);
        }
      } else if (e.deltaY < -8) {
        if (graphicIndex > 0) {
          e.preventDefault();
          lock = true;
          lastFire = now;
          setGraphicDir(graphicIndex % 2 === 0 ? "left" : "right");
          setGraphicIndex((i) => i - 1);
          window.setTimeout(() => {
            lock = false;
          }, 700);
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [graphicIndex]);

  // Case study modal
  useEffect(() => {
    if (!activeCaseStudyId) return;
    document.body.style.overflow = "hidden";
    const rafA = window.requestAnimationFrame(() => {
      const rafB = window.requestAnimationFrame(() => setCaseVisible(true));
      return () => window.cancelAnimationFrame(rafB);
    });
    return () => {
      document.body.style.overflow = "";
      window.cancelAnimationFrame(rafA);
    };
  }, [activeCaseStudyId]);

  useEffect(() => {
    if (!activeCaseStudyId) return;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closeCaseStudy();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeCaseStudyId]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  const openCaseStudy = (id: string) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveCaseStudyId(id);
    setCaseVisible(false);
  };

  const closeCaseStudy = () => {
    setCaseVisible(false);
    closeTimerRef.current = window.setTimeout(() => {
      setActiveCaseStudyId(null);
      closeTimerRef.current = null;
    }, 400);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCaseStudy(id);
    }
  };

  const nextThumb = () => setThumbIndex((current) => (current + 1) % previewImages.length);
  const prevThumb = () => setThumbIndex((current) => (current - 1 + previewImages.length) % previewImages.length);

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    const sub = encodeURIComponent(subject || "Project inquiry");
    window.location.href = `mailto:${heroContent.email}?subject=${sub}&body=${body}`;
  };

  return (
    <div ref={rootRef} className="portfolio-page">
      <div id="ld" className={loaderGone ? "gone" : undefined}>
        <div className="ld-w">{heroContent.logo}</div>
        <div className="ld-b">
          <div className="ld-f" />
        </div>
      </div>

      {/* Floating menu button */}
      <button
        type="button"
        className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? <IconClose /> : (
          <span className="nav-burger">
            <span />
            <span />
          </span>
        )}
      </button>

      {/* Side menu */}
      <div className={`nav-overlay ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      <nav className={`nav-drawer ${menuOpen ? "is-open" : ""}`} aria-label="Primary">
        <div className="nav-eye">Menu</div>
        <ul className="nav-list">
          {navLinks.map((link, i) => (
            <li key={link.id} style={withDelay(`${0.05 + i * 0.05}s`)}>
              <a href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
                <span className="nav-num">0{i + 1}</span>
                <span className="nav-label">{link.label}</span>
                <IconArrow className="ico ico-arr nav-arr" />
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-foot">
          <a href={`mailto:${heroContent.email}`}>{heroContent.email}</a>
        </div>
      </nav>

      <div id="page">
        <section id="hero">
          <div className="h-shell">
            <div className="h-bg">
              <video id="heroVid" autoPlay muted loop playsInline>
                <source src={heroVideo} type="video/mp4" />
              </video>
              <div className="h-bg-grad" />
            </div>
            <div className="noise" />

            <div className="brace brace-tl" />
            <div className="brace brace-tc" />
            <div className="brace brace-tc2" />
            <div className="brace brace-tr" />
            <div className="brace brace-bc" />
            <div className="brace brace-bc2" />

            <div className="h-topbar">
              <a href="#hero" className="h-logo" onClick={(e) => handleNavClick(e, "hero")}>
                {heroContent.logo}
              </a>
              <div className="h-anno">
                <span className="h-anno-arr">↗</span>
                <span className="h-anno-txt">
                  Design That Speaks,
                  <br />
                  Stories That Connect
                </span>
              </div>
            </div>

            <div className="h-mid">
              <span className={`h-hi wu ${heroEntered ? "in" : ""}`} style={withDelay(".1s")}>
                {heroContent.intro}
              </span>
              <span className={`h-name wu ${heroEntered ? "in" : ""}`} style={withDelay(".2s")}>
                {heroContent.nameLines[0]}
                <br />
                {heroContent.nameLines[1]}
                <sup className="h-mark">{heroContent.mark}</sup>
              </span>
            </div>

            <div className="h-strip">
              <div className="h-col">
                <div className={`h-role fi ${heroEntered ? "in" : ""}`} style={withDelay(".5s")}>
                  Creative
                  <br />
                  Designer &amp;
                  <br />
                  No-Code Developer
                </div>
                <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className={`h-dl fi ${heroEntered ? "in" : ""}`} style={withDelay(".62s")}>
                  Get in touch ↓
                </a>
              </div>

              <div className="h-col">
                <p className={`h-desc fi ${heroEntered ? "in" : ""}`} style={withDelay(".55s")}>
                  {heroContent.description}
                </p>
                <div className={`h-btns fi ${heroEntered ? "in" : ""}`} style={withDelay(".7s")}>
                  <a href="#work" onClick={(e) => handleNavClick(e, "work")} className="btn-pill btn-primary">
                    View Works
                    <span className="btn-circle">
                      <IconArrow />
                    </span>
                  </a>
                  <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="btn-outline">
                    Let&apos;s Work
                  </a>
                </div>
              </div>

              <div className={`h-col fi ${heroEntered ? "in" : ""}`} style={withDelay(".65s")}>
                <div className="h-thumb">
                  {previewImages.map((src, idx) => (
                    <img
                      key={src + idx}
                      src={src}
                      alt="Work preview"
                      className={`h-slide ${idx === thumbIndex ? "is-active" : ""}`}
                      loading="lazy"
                    />
                  ))}
                  <div className="h-thumb-dots">
                    {previewImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`h-dot ${idx === thumbIndex ? "is-active" : ""}`}
                        onClick={() => setThumbIndex(idx)}
                        aria-label={`Show preview ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <div className="h-thumb-nav">
                    <button className="t-btn" type="button" onClick={prevThumb} aria-label="Show previous preview">
                      <IconChevronLeft />
                    </button>
                    <button className="t-btn" type="button" onClick={nextThumb} aria-label="Show next preview">
                      <IconChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-scroll">
              <div className="h-scroll-line" />
              <span className="h-scroll-txt">Scroll</span>
            </div>
          </div>
        </section>

        {/* WORKS — slides up over hero feel */}
        <section id="work" className="works-section">
          <div className="works-rise">
            <div className="sec-hdr">
              <div className="sec-lbl fi" style={withDelay("0s")}>
                Selected Work
              </div>
              <div>
                <span className="wu sec-h1" style={withDelay(".08s")}>
                  Projects that show
                </span>
              </div>
              <div>
                <span className="wu sec-h2" style={withDelay(".16s")}>
                  clarity and craft create impact.
                </span>
              </div>
            </div>

            <div
              className="works-grid"
              onMouseLeave={() => setHoveredWork(null)}
            >
              {worksData.map((w, i) => (
                <div
                  key={w.id}
                  className={`work-card si ${hoveredWork === i ? "is-active" : ""} ${
                    hoveredWork === null && i === 0 ? "is-default" : ""
                  }`}
                  style={withDelay(`${i * 0.08}s`)}
                  onMouseEnter={() => setHoveredWork(i)}
                >
                  <div className="work-card-img">
                    <img src={w.image} alt={w.title} loading="lazy" />
                    <div className="work-card-ov" />
                  </div>
                  <div className="work-card-meta">
                    <span className="work-card-title">{w.title}</span>
                    <span className="work-card-year">{w.year}</span>
                  </div>
                  <span className="work-card-cat">{w.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MARQUEE BANNER */}
        <section id="marquee" className="marquee-section" aria-label="Skills">
          <div className="marquee-track">
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="marquee-item">
                <span>{word}</span>
                <span className="marquee-plus">+</span>
              </span>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="a-card">
            <div className="a-inner">
              <div className="fi" style={withDelay("0s")}>
                <div className="a-photo-wrap">
                  <img src={resolvePortfolioImage(profileImage)} alt="John Adewole" className="a-photo" />
                  <div className="a-deco" />
                  <div className="a-badge">
                    <span className="a-badge-n">{aboutContent.badge}</span>
                    <span className="a-badge-l">{aboutContent.badgeLabel}</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="a-eye fi" style={withDelay(".05s")}>
                  {aboutContent.eyebrow}
                </span>

                <h2 className="a-heading">
                  <span className="wu" style={withDelay(".1s")}>
                    {aboutContent.headingLines[0]}
                  </span>
                  <br />
                  <span className="wu a-heading-accent" style={withDelay(".18s")}>
                    {aboutContent.headingLines[1]}
                  </span>
                  <br />
                  <span className="wu" style={withDelay(".26s")}>
                    {aboutContent.headingLines[2]}
                  </span>
                </h2>

                <div className="a-body">
                  {aboutContent.paragraphs.map((paragraph, index) => (
                    <p key={paragraph} className="fi" style={withDelay(`${0.32 + index * 0.08}s`)}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="a-stats fi" style={withDelay(".54s")}>
                  {aboutStats.map((stat) => (
                    <div className="stat" key={stat.label}>
                      <span className="stat-n" data-target={stat.value} data-suffix={stat.suffix}>
                        0{stat.suffix}
                      </span>
                      <span className="stat-l">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="a-tools fi" style={withDelay(".6s")}>
                  <div className="a-tools-lbl">Tools I use to design and build</div>
                  <div className="a-tools-row">
                    {aboutTools.map((tool) => (
                      <span key={tool.label} className="t-pill">
                        {tool.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GRAPHICS — full screen one-at-a-time throw out */}
        <section
          id="graphics"
          ref={graphicsSectionRef}
          className="graphics-section"
        >
          <div className="graphics-hdr-fixed">
            <div className="sec-lbl">Graphic Design</div>
            <div className="graphics-counter">
              <span className="g-curr">{String(graphicIndex + 1).padStart(2, "0")}</span>
              <span className="g-sep">/</span>
              <span className="g-tot">{String(graphicsData.length).padStart(2, "0")}</span>
            </div>
          </div>
          <div className="graphics-stage">
            {graphicsData.map((g, i) => {
              const isActive = i === graphicIndex;
              const isPast = i < graphicIndex;
              const dirClass = isPast ? `is-thrown-${i % 2 === 0 ? "right" : "left"}` : "is-coming";
              return (
                <div
                  key={g.id}
                  className={`graphic-slide ${isActive ? "is-active" : dirClass}`}
                  aria-hidden={!isActive}
                >
                  <img src={g.image} alt={g.title} loading="lazy" />
                  <div className="graphic-meta">
                    <span className="g-ti">{g.title}</span>
                    <span className="g-ty">{g.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="graphics-progress">
            {graphicsData.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`gp-dot ${i === graphicIndex ? "is-active" : ""}`}
                aria-label={`Go to graphic ${i + 1}`}
                onClick={() => {
                  setGraphicDir(i > graphicIndex ? "right" : "left");
                  setGraphicIndex(i);
                }}
              />
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="exp-section">
          <div className="exp-bg-text">
            <span>Project</span>
            <span className="exp-mark">✦</span>
            <span>Experience</span>
          </div>
          <div className="exp-inner">
            <div className="sec-lbl fi" style={withDelay("0s")} data-center>
              Work Experience
            </div>
            <div className="exp-list">
              {experienceData.map((item, i) => (
                <div className="exp-row si" key={`${item.year}-${item.role}`} style={withDelay(`${i * 0.08}s`)}>
                  <span className="exp-year">{item.year}</span>
                  <span className="exp-role">{item.role}</span>
                  <span className="exp-desc">{item.desc}</span>
                  <span className="exp-arr">
                    <IconArrow />
                  </span>
                </div>
              ))}
            </div>
            <div className="exp-image fi" style={withDelay(".3s")}>
              <img src={exp1} alt="Studio" loading="lazy" />
            </div>
          </div>
        </section>

        {/* STUDIO CTA */}
        <section id="studio">
          <div className="st-vid">
            <video id="stVid" ref={studioVideoRef} autoPlay muted loop playsInline />
          </div>
          <div className="st-ovl" />
          <div className="st-noise" />

          <div className="st-content">
            <div className="st-eye fi" style={withDelay("0s")}>
              {studioContent.eyebrow}
            </div>
            <h2 className="st-title">
              <span className="wu" style={withDelay(".08s")}>
                {studioContent.titleLines[0]}
              </span>
              <br />
              <span className="wu" style={withDelay(".16s")}>
                {studioContent.titleLines[1]}
              </span>
              <br />
              <span className="wu st-title-accent" style={withDelay(".24s")}>
                {studioContent.titleLines[2]}
              </span>
            </h2>
            <p className="st-sub fi" style={withDelay(".34s")}>
              {studioContent.subtitle}
            </p>
            <div className="st-tools fi" style={withDelay(".44s")}>
              {studioTools.map((tool) => (
                <span key={tool.label} className="st-pill">
                  {tool.label}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="btn-pill btn-primary fi"
              style={{ ...withDelay(".54s"), marginTop: "0.5rem" }}
            >
              Let&apos;s Work
              <span className="btn-circle">
                <IconArrow />
              </span>
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-form-section">
          <div className="cf-inner">
            <h2 className="cf-title fi" style={withDelay("0s")}>
              Let&rsquo;s work together!
            </h2>
            <p className="cf-sub fi" style={withDelay(".08s")}>
              [ Marked fields are required to fill ]
            </p>

            <form className="cf-form fi" style={withDelay(".15s")} onSubmit={handleContactSubmit}>
              <div className="cf-grid">
                <label className="cf-field">
                  <span className="cf-lbl">
                    Full Name <span className="cf-req">*</span>
                  </span>
                  <input type="text" name="name" placeholder="Your full name" required maxLength={100} />
                </label>
                <label className="cf-field">
                  <span className="cf-lbl">
                    Email Address <span className="cf-req">*</span>
                  </span>
                  <input type="email" name="email" placeholder="Your email address" required maxLength={255} />
                </label>
                <label className="cf-field">
                  <span className="cf-lbl">
                    Subject <span className="cf-req">*</span>
                  </span>
                  <input type="text" name="subject" placeholder="Subject" required maxLength={120} />
                </label>
                <label className="cf-field">
                  <span className="cf-lbl">Your Budget (Optional)</span>
                  <input type="text" name="budget" placeholder="A range of budget for project" maxLength={60} />
                </label>
                <label className="cf-field cf-full">
                  <span className="cf-lbl">
                    Message <span className="cf-req">*</span>
                  </span>
                  <textarea name="message" placeholder="Write your message here..." rows={4} required maxLength={1000} />
                </label>
              </div>
              <button type="submit" className="cf-submit">
                Send a message
                <span className="btn-circle">
                  <IconArrow />
                </span>
              </button>
            </form>

            <div className="cf-direct fi" style={withDelay(".25s")}>
              <a href={`mailto:${heroContent.email}`}>{heroContent.email}</a>
              <a href="https://wa.me/2340000000000" target="_blank" rel="noreferrer">
                WhatsApp · +234 000 000 0000
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="sf-grid">
            <div className="sf-brand">{heroContent.logo}</div>
            <div className="sf-col">
              <h4>Social Media</h4>
              <div className="sf-links">
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Pinterest</a>
              </div>
            </div>
            <div className="sf-col sf-office">
              <h4>Our Office :</h4>
              <p>Surakarta, Indonesia</p>
              <a href="tel:+621234567890" className="sf-phone">+62 123 4567 890</a>
            </div>
          </div>
          <div className="sf-bot">
            <div className="sf-bot-links">
              <a href="#">FAQ</a>
              <a href="#">Careers</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact Us</a>
            </div>
            <div className="sf-copy">© {new Date().getFullYear()} {contactContent.footerRight}</div>
          </div>
        </footer>
      </div>

      {caseStudies.map((caseStudy) => {
        const isActive = activeCaseStudy?.id === caseStudy.id;
        return (
          <div
            key={caseStudy.id}
            id={caseStudy.id}
            className={`cs-ov ${isActive ? "active" : ""} ${isActive && caseVisible ? "vis" : ""}`.trim()}
          >
            <div className="cs-nav">
              <button className="cs-bk" type="button" onClick={closeCaseStudy}>
                <IconBack />
                Back to portfolio
              </button>
              <span className="cs-tl">{caseStudy.navLabel}</span>
            </div>
            <div className="cs-hero">
              <img src={resolvePortfolioImage(caseStudy.image)} alt={caseStudy.imageAlt} />
              <div className="cs-hg" />
              <div className="cs-hc">
                <div className="cs-hn">{caseStudy.heroIndex}</div>
                <h1 className="cs-ht">{caseStudy.title}</h1>
                <p className="cs-hs">{caseStudy.subtitle}</p>
              </div>
            </div>
            <div className="cs-body">
              <div className={`cs-meta ${isActive && caseVisible ? "vis" : ""}`} style={{ transitionDelay: "0s" }}>
                {caseStudy.meta.map((item) => (
                  <div key={`${caseStudy.id}-${item.label}`}>
                    <div className="cs-ml">{item.label}</div>
                    <div className="cs-mv">{item.value}</div>
                  </div>
                ))}
              </div>
              {caseStudy.sections.map((section, index) => (
                <div key={`${caseStudy.id}-${section.label}`}>
                  <div
                    className={`cs-s ${isActive && caseVisible ? "vis" : ""}`}
                    style={{ transitionDelay: `${(index + 1) * 0.065}s` }}
                  >
                    <div className="cs-sl">{section.label}</div>
                    <h3>{section.title}</h3>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {!!section.boxes?.length && (
                      <div className="cs-2c">
                        {section.boxes.map((box) => (
                          <div key={box.title} className="cs-box">
                            <h4>{box.title}</h4>
                            <p>{box.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {!!section.bullets?.length && (
                      <ul>
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {index < caseStudy.sections.length - 1 && <hr className="div" />}
                </div>
              ))}
              <div
                className={`cs-out ${isActive && caseVisible ? "vis" : ""}`}
                style={{ transitionDelay: `${(caseStudy.sections.length + 1) * 0.065}s` }}
              >
                <h3>{caseStudy.outcome.title}</h3>
                <p>{caseStudy.outcome.text}</p>
                {caseStudy.outcome.liveUrl && (
                  <a href={caseStudy.outcome.liveUrl} target="_blank" rel="noreferrer" className="cs-live">
                    {caseStudy.outcome.liveLabel}
                    <span className="btn-circle">
                      <IconArrow />
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioPage;
