import { CSSProperties, FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

import logoSvg from "@/assets/logo.svg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import work1 from "@/assets/work-1.jpg";
import queuetopHero from "@/assets/queuetop-hero.jpg";
import ryswiftHero from "@/assets/ryswift/ry-1.webp";
import revolutHero from "@/assets/revolut-hero.webp";
import atelierHero from "@/assets/atelier-1-hero.webp";
import virexHero from "@/assets/virex/virex-1.webp";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import graphicHouseFellowship from "@/assets/graphic-house-fellowship.webp";
import graphicCreating from "@/assets/graphic-creating-imperfections.webp";
import graphicBalenciaga from "@/assets/graphic-balenciaga.webp";
import graphicJazzy from "@/assets/graphic-jazzy-burger.webp";
import graphicAnora1 from "@/assets/graphic-anora-1.webp";
import graphicAnora2 from "@/assets/graphic-anora-2.webp";
import graphicAnora3 from "@/assets/graphic-anora-3.webp";
import graphicAnora4 from "@/assets/graphic-anora-4.webp";
import graphicMidnight from "@/assets/graphic-midnight-pulse.webp";
import graphicMalole from "@/assets/graphic-8-malole.webp";
import graphicPwaFlag from "@/assets/graphic-9-pwa-flag.webp";
import graphicPwaFlyer from "@/assets/graphic-10-pwa-flyer.webp";

const placeholderImage = "/placeholder.svg";

const withDelay = (delay: string): CSSProperties => ({ ["--d" as string]: delay } as CSSProperties);

const resolvePortfolioImage = (src: string) =>
  !src || src.startsWith("PASTE_YOUR_") ? placeholderImage : src;

// New works data with year + generated images
const worksData = [
  { id: "w1", title: "QueueTop", year: "2026", category: "Product Design · Mobile PWA", image: queuetopHero, href: "/work/queuetop" },
  { id: "w2", title: "RySwift", year: "2025", category: "SaaS · Logistics", image: ryswiftHero, href: "/work/ryswift" },
  { id: "w3", title: "Revolut", year: "2026", category: "Fintech · Mobile App · UI/UX", image: revolutHero, href: "/work/revolut" },
  { id: "w4", title: "Virex Energy", year: "2025", category: "BioFuel · Landing Page", image: virexHero, href: "/work/virex" },
  { id: "w5", title: "Atelier", year: "2026", category: "Fashion E-commerce · Lovable", image: atelierHero, href: "/work/atelier" },
];

const graphicsData = [
  { id: "g1", title: "House Fellowship", category: "Event Poster · Àkàndá", image: graphicHouseFellowship },
  { id: "g2", title: "Creating Imperfections", category: "Poster · Brutalist Study", image: graphicCreating },
  { id: "g3", title: "Balenciaga", category: "New Collection · Editorial", image: graphicBalenciaga },
  { id: "g4", title: "Jazzy Burger", category: "F&B Poster", image: graphicJazzy },
  { id: "g6", title: "Midnight Pulse", category: "DJ Event Poster", image: graphicMidnight },
  { id: "g7", title: "Mal\u00f2l\u00e9", category: "Album Cover · Àkàndá", image: graphicMalole },
];

const anoraBranding = {
  id: "g5",
  title: "Anora · Grill & Sip",
  category: "Brand Identity · Packaging",
  images: [graphicAnora3, graphicAnora1, graphicAnora2, graphicAnora4],
};

const pwaPair = {
  main: { title: "The Corporate Rave", category: "Event Flag · PWA", image: graphicPwaFlag },
  side: { title: "The Corporate Rave", category: "Event Flyer · PWA", image: graphicPwaFlyer },
};

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

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Works" },
  { id: "about", label: "About Me" },
  { id: "graphics", label: "Graphics" },
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
  
  const worksScrollRef = useRef<HTMLElement | null>(null);
  const worksTrackRef = useRef<HTMLDivElement | null>(null);

  const [loaderGone, setLoaderGone] = useState(false);
  const [heroEntered, setHeroEntered] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [caseVisible, setCaseVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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


  // Works section: horizontal scroll pinned (fromanother-style)
  useEffect(() => {
    const section = worksScrollRef.current;
    const track = worksTrackRef.current;
    if (!section || !track) return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const distance = track.scrollWidth - window.innerWidth;
      if (distance <= 0) return;
      const total = section.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / total, 0), 1);
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

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

      <div className={`h-topbar h-topbar--pin ${navScrolled ? "is-scrolled" : ""}`}>
        <ul className="h-topnav h-topnav--left">
          <li><a href="#work" onClick={(e) => handleNavClick(e, "work")}>Works</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a></li>
        </ul>
        <a href="#hero" className="h-logo h-logo--center" onClick={(e) => handleNavClick(e, "hero")} aria-label="Home">
          <img src={logoSvg} alt="John Adewole" />
        </a>
        <ul className="h-topnav h-topnav--right">
          <li><a href="#graphics" onClick={(e) => handleNavClick(e, "graphics")}>Graphics</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a></li>
        </ul>
      </div>

      <div id="page">
        <div className="elope-stack">
        <section id="hero">
          <div className="h-shell h-shell--pin">
            <div className="h-bg">
              <video id="heroVid" autoPlay muted loop playsInline>
                <source src={heroVideo} type="video/mp4" />
              </video>
              <div className="h-bg-grad h-bg-grad--vignette" />
            </div>
            <div className="noise" />

            {/* Floating pill labels with hairlines */}
            <div className={`h-pins fi ${heroEntered ? "in" : ""}`} aria-hidden="true">
              <span className="h-pin h-pin--tl" style={withDelay(".4s")}>
                <span className="h-pin-dot" />
                Creative Designer
                <span className="h-pin-line" />
              </span>
              <span className="h-pin h-pin--bl" style={withDelay(".55s")}>
                <span className="h-pin-dot" />
                No-Code Developer
                <span className="h-pin-line" />
              </span>
              <span className="h-pin h-pin--tr" style={withDelay(".7s")}>
                <span className="h-pin-dot" />
                Brand &amp; Identity
                <span className="h-pin-line" />
              </span>
              <span className="h-pin h-pin--br" style={withDelay(".85s")}>
                <span className="h-pin-dot" />
                AI &amp; Web Experiences
                <span className="h-pin-line" />
              </span>
            </div>

            {/* Bottom content block: headline left, description right, divider, CTAs */}
            <div className="h-bottom">
              <div className="h-bottom-row">
                <h1 className={`h-headline h-headline--pin wu ${heroEntered ? "in" : ""}`} style={withDelay(".15s")}>
                  <span className="h-headline-line">Hi I&rsquo;m John,</span>
                  <span className="h-headline-line">Welcome to my World.</span>
                </h1>
                <p className={`h-lede fi ${heroEntered ? "in" : ""}`} style={withDelay(".35s")}>
                  Creative designer &amp; no-code developer crafting brand systems,
                  product interfaces, and considered web experiences.
                </p>
              </div>
              <div className="h-divider" />
              <div className={`h-cta h-cta--pin fi ${heroEntered ? "in" : ""}`} style={withDelay(".55s")}>
                <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="btn-pill btn-primary">
                  Get in touch
                  <span className="btn-circle"><IconArrow /></span>
                </a>
                <a href="#graphics" onClick={(e) => handleNavClick(e, "graphics")} className="btn-pill btn-ghost">
                  <span className="btn-play" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19" /></svg>
                  </span>
                  View graphic design
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT — elopes the hero (slides up over it) */}
        <section id="about" className="ab-elope">
          <div className="ab-top">
            <span className="ab-top-item"><span className="ab-bullet" />(About me)</span>
            <span className="ab-top-item"><span className="ab-bullet" />Crafted with intention</span>
            <span className="ab-top-copy">©25</span>
          </div>
          <div className="ab-grid">
            <div className="ab-card fi" style={withDelay(".05s")}>
              <div className="ab-card-inner">
                <img src={aboutPortrait} alt="John Adewole" />
                <div className="ab-tag">
                  <span className="ab-tag-k">JA / 3+</span>
                  <span className="ab-tag-l">Creative Designer · No-Code Developer</span>
                </div>
              </div>
            </div>
            <div className="ab-right">
              <h2 className="ab-headline wu" style={withDelay(".15s")}>
                <span className="ab-eye">(About)</span>
                With over 3 years under my belt, I craft — memorable websites and brand visuals that reflect each client&rsquo;s unique story.
              </h2>
              <ul className="ab-list">
                <li className="fi" style={withDelay(".35s")}>
                  <span className="ab-num">01.</span>
                  <span className="ab-li-l">Creative Designer & No-Code Developer</span>
                  <span className="ab-li-d" />
                </li>
                <li className="fi" style={withDelay(".45s")}>
                  <span className="ab-num">02.</span>
                  <span className="ab-li-l">Figma, Canva, Framer, ChatGPT</span>
                  <span className="ab-li-d" />
                </li>
                <li className="fi" style={withDelay(".55s")}>
                  <span className="ab-num">03.</span>
                  <span className="ab-li-l">Available for freelance & collaborations</span>
                  <span className="ab-li-d" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        </div>
        {/* /elope-stack */}

        {/* SELECTED WORKS — grid layout */}
        <section id="work" className="sw" ref={worksScrollRef}>
          <div className="sw-top">
            <span className="sw-top-l"><span className="sw-dot" />002</span>
            <span className="sw-top-c"><span className="sw-dot" />(Work)</span>
            <span className="sw-top-r">©2025</span>
          </div>
          <div className="sw-title-row">
            <h2 className="sw-title">Selected<br />Works</h2>
            <span className="sw-count">({worksData.length})</span>
          </div>
          <p className="sw-lede">// &nbsp;&nbsp;We help brands grow and tell their stories to the world.</p>
          <div className="sw-grid">
            {worksData.map((w, i) => {
              const inner = (
                <>
                  <div className="sw-card-img">
                    <img src={w.image} alt={w.title} loading="lazy" />
                  </div>
                  <div className="sw-card-foot">
                    <span className="sw-card-name"><span className="sw-plus">+</span> {w.title}</span>
                    <div className="sw-tags">
                      <span className="sw-tag sw-tag-num">{i + 1}</span>
                      {w.category.split("·").map((t, k) => (
                        <span className="sw-tag" key={k}>{t.trim()}</span>
                      ))}
                    </div>
                  </div>
                </>
              );
              return w.href ? (
                <Link to={w.href} className="sw-card sw-card--link" key={w.id}>
                  {inner}
                </Link>
              ) : (
                <article className="sw-card" key={w.id}>
                  {inner}
                </article>
              );
            })}
            <div className="sw-allworks-cell">
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="sw-allworks">
                <span>All Works</span>
                <span className="sw-allworks-arr"><IconArrow /></span>
              </a>
            </div>
          </div>
        </section>



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



        {/* GRAPHICS — grid 2/2/2 + landscape */}
        <section id="graphics" className="gx-section">
          <div className="gx-intro">
            <div className="gx-intro-top">
              <span className="sec-lbl">Graphics</span>
              <span className="gx-intro-tag">/ A practice called <em>Calm Violence</em></span>
            </div>
            <h2 className="gx-intro-title">
              Beyond pixels &amp; products, I make <em>loud, quiet</em> graphics.
            </h2>
            <p className="gx-intro-body">
              I'm also a graphic designer. I built a visual language I call
              <em> Calm Violence</em> — composed surfaces that hold tension underneath:
              soft typography, brutal contrast, restrained color, sudden noise.
              The work below is my playground for posters, covers, and
              identity studies that try to feel like a held breath.
            </p>
            <div className="gx-intro-meta">
              <span>Posters</span><span className="gx-dot">•</span>
              <span>Covers</span><span className="gx-dot">•</span>
              <span>Identity</span><span className="gx-dot">•</span>
              <span>Editorial</span>
            </div>
          </div>

          <div className="gx-hdr">
            <div className="gx-count">
              <span className="gx-curr">09</span>
              <span className="gx-sep">—</span>
              <span className="gx-lbl">Selected pieces</span>
            </div>
          </div>
          <div className="gx-grid">
            {graphicsData.slice(0, 4).map((g) => (
              <figure key={g.id} className="gx-card">
                <div className="gx-img">
                  <img src={g.image} alt={g.title} loading="lazy" />
                </div>
                <figcaption className="gx-meta">
                  <span className="gx-ti">{g.title}</span>
                  <span className="gx-ty">{g.category}</span>
                </figcaption>
              </figure>
            ))}

            {/* Anora — branding collage, 4 boxes in one card */}
            <figure className="gx-card gx-card--wide gx-card--collage">
              <div className="gx-collage">
                {anoraBranding.images.map((src, i) => (
                  <div className="gx-collage-cell" key={i}>
                    <img src={src} alt={`${anoraBranding.title} ${i + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
              <figcaption className="gx-meta">
                <span className="gx-ti">{anoraBranding.title}</span>
                <span className="gx-ty">{anoraBranding.category}</span>
              </figcaption>
            </figure>

            {graphicsData.slice(4, 6).map((g) => (
              <figure key={g.id} className="gx-card">
                <div className="gx-img">
                  <img src={g.image} alt={g.title} loading="lazy" />
                </div>
                <figcaption className="gx-meta">
                  <span className="gx-ti">{g.title}</span>
                  <span className="gx-ty">{g.category}</span>
                </figcaption>
              </figure>
            ))}

            {/* PWA pair — landscape flag + flyer beside it */}
            <div className="gx-card gx-card--wide gx-pair">
              <figure className="gx-pair-main">
                <div className="gx-img">
                  <img src={pwaPair.main.image} alt={pwaPair.main.title} loading="lazy" />
                </div>
                <figcaption className="gx-meta">
                  <span className="gx-ti">{pwaPair.main.title}</span>
                  <span className="gx-ty">{pwaPair.main.category}</span>
                </figcaption>
              </figure>
              <figure className="gx-pair-side">
                <div className="gx-img">
                  <img src={pwaPair.side.image} alt={pwaPair.side.title} loading="lazy" />
                </div>
                <figcaption className="gx-meta">
                  <span className="gx-ti">{pwaPair.side.title}</span>
                  <span className="gx-ty">{pwaPair.side.category}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* STUDIO CTA */}

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
