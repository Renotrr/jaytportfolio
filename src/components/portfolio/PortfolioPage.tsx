import { CSSProperties, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import Hls from "hls.js";

import {
  aboutContent,
  aboutStats,
  aboutTools,
  caseStudies,
  contactContent,
  contactLinks,
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

const placeholderImage = "/placeholder.svg";

const withDelay = (delay: string): CSSProperties => ({ ["--d" as string]: delay } as CSSProperties);

const resolvePortfolioImage = (src: string) =>
  !src || src.startsWith("PASTE_YOUR_") ? placeholderImage : src;

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

const PortfolioPage = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const studioVideoRef = useRef<HTMLVideoElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const [loaderGone, setLoaderGone] = useState(false);
  const [heroEntered, setHeroEntered] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [caseVisible, setCaseVisible] = useState(false);

  const previewImages = useMemo(() => {
    const mapped = thumbnailImages.map(resolvePortfolioImage);
    const list = mapped.length > 0 ? mapped : [resolvePortfolioImage(heroPreviewFallback)];
    return list.slice(0, 3);
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

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const countUp = (element: HTMLElement, target: number, suffix: string, duration: number) => {
      const start = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.round(eased * target)}${progress < 1 ? "" : suffix}`;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          element.textContent = `${target}${suffix}`;
        }
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
      if (!element.closest("#hero")) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!supportsFinePointer) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    const root = rootRef.current;
    if (!dot || !ring || !root) return;

    document.body.classList.add("portfolio-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frameId = 0;

    const move = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      frameId = window.requestAnimationFrame(tick);
    };

    const interactiveElements = root.querySelectorAll<HTMLElement>("a,button,.pc,.g-item");
    const addHover = () => document.body.classList.add("hov");
    const removeHover = () => document.body.classList.remove("hov");

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", addHover);
      element.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", move);
    frameId = window.requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("portfolio-cursor", "hov");
      window.removeEventListener("mousemove", move);
      window.cancelAnimationFrame(frameId);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", addHover);
        element.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

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
      if (event.key === "Escape") {
        closeCaseStudy();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeCaseStudyId]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

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

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCaseStudy(id);
    }
  };

  const nextThumb = () => setThumbIndex((current) => (current + 1) % previewImages.length);
  const prevThumb = () => setThumbIndex((current) => (current - 1 + previewImages.length) % previewImages.length);

  return (
    <div ref={rootRef} className="portfolio-page">
      <div id="cd" ref={cursorDotRef} />
      <div id="cr" ref={cursorRingRef} />

      <div id="ld" className={loaderGone ? "gone" : undefined}>
        <div className="ld-w">John Adewole</div>
        <div className="ld-b">
          <div className="ld-f" />
        </div>
      </div>

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
              <a href="#" className="h-logo">
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
              <button className="h-ham" aria-label="Open navigation menu" type="button">
                <span />
                <span />
              </button>
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
                <a href={`mailto:${heroContent.email}`} className={`h-dl fi ${heroEntered ? "in" : ""}`} style={withDelay(".62s")}>
                  Get in touch ↓
                </a>
              </div>

              <div className="h-col">
                <p className={`h-desc fi ${heroEntered ? "in" : ""}`} style={withDelay(".55s")}>
                  {heroContent.description}
                </p>
                <div className={`h-btns fi ${heroEntered ? "in" : ""}`} style={withDelay(".7s")}>
                  <a href="#work" className="btn-pill btn-primary">
                    View Works
                    <span className="btn-circle">
                      <IconArrow />
                    </span>
                  </a>
                  <a href="#contact" className="btn-outline">
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

        <section id="work">
          <div className="sec-hdr">
            <div className="sec-lbl fi" style={withDelay("0s")}>
              Selected Work
            </div>
            <div>
              <span className="wu sec-h1" style={withDelay(".08s")}>
                Five projects that show how
              </span>
            </div>
            <div>
              <span className="wu sec-h2" style={withDelay(".16s")}>
                clarity and craft create impact.
              </span>
            </div>
          </div>

          <div className="p-outer">
            <div className="p-row">
              {workProjects.slice(0, 4).map((project, index) => {
                if (project.layout === "image") {
                  return (
                    <div
                      key={project.id}
                      className="pc pc-img si"
                      style={withDelay(`${index * 0.15}s`)}
                      onClick={() => openCaseStudy(project.id)}
                      onKeyDown={(event) => handleCardKeyDown(event, project.id)}
                      role="button"
                      tabIndex={0}
                    >
                      <img src={resolvePortfolioImage(project.image)} alt={project.imageAlt} />
                      <div className="pc-ov" />
                      <div className="pc-bot">
                        <span className="pc-tag2">{project.tag}</span>
                        <div className="pc-title2">{project.title}</div>
                        <div className="pc-sub">{project.description}</div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={project.id} className="pc pc-txt si" style={withDelay(`${index * 0.15}s`)}>
                    <img src={resolvePortfolioImage(project.image)} alt={project.imageAlt} className="pc-ico" />
                    <div>
                      <div className="pc-num">{project.number}</div>
                      <div className="pc-name">{project.title}</div>
                    </div>
                    <p className="pc-desc-short">{project.description}</p>
                    <ul className="pc-list">
                      {project.features?.map((feature) => (
                        <li key={feature.text} className="pc-li">
                          <IconCheck />
                          <span>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="pc-learn" type="button" onClick={() => openCaseStudy(project.id)}>
                      Read case study <IconArrow className="l-ar" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="p-row2">
              {workProjects.slice(4).map((project) => (
                <div
                  key={project.id}
                  className="pc pc-img pc-wide si"
                  style={withDelay(".6s")}
                  onClick={() => openCaseStudy(project.id)}
                  onKeyDown={(event) => handleCardKeyDown(event, project.id)}
                  role="button"
                  tabIndex={0}
                >
                  <img src={resolvePortfolioImage(project.image)} alt={project.imageAlt} />
                  <div className="pc-ov" />
                  <div className="pc-bot">
                    <div>
                      <span className="pc-tag2">{project.tag}</span>
                      <div className="pc-title2">{project.title}</div>
                      <div className="pc-sub">{project.description}</div>
                    </div>
                    <button
                      className="pc-learn"
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        openCaseStudy(project.id);
                      }}
                    >
                      Read case study <IconArrow className="l-ar" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="graphics">
          <div className="sec-hdr graphics-hdr">
            <div className="sec-lbl fi" style={withDelay("0s")}>
              Graphic Design
            </div>
            <div>
              <span className="wu sec-h1" style={withDelay(".08s")}>
                Visual work that communicates
              </span>
            </div>
            <div>
              <span className="wu sec-h2" style={withDelay(".16s")}>
                before a word is read.
              </span>
            </div>
          </div>

          <div className="g-grid">
            {graphicProjects.map((project, index) => (
              <div key={`${project.title}-${project.category}`} className="g-item si" style={withDelay(`${[0, 0.1, 0.2, 0.05, 0.15, 0.25, 0.1, 0.2, 0.3, 0.15, 0.25, 0.35][index]}s`)}>
                <img src={resolvePortfolioImage(project.image)} alt={project.imageAlt} />
                <div className="g-ov">
                  <div className="g-ti">{project.title}</div>
                  <div className="g-ty">{project.category}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
            <a href="#contact" className="btn-pill btn-primary fi" style={{ ...withDelay(".54s"), marginTop: "0.5rem" }}>
              Let&apos;s Work
              <span className="btn-circle">
                <IconArrow />
              </span>
            </a>
          </div>
        </section>

        <section id="contact">
          <div className="ct-orb" />
          <div className="ct-in">
            <div className="ct-eye fi" style={withDelay("0s")}>
              {contactContent.eyebrow}
            </div>
            <h2 className="ct-title fi" style={withDelay(".1s")}>
              {contactContent.titleLines[0]}
              <br />
              <em>{contactContent.titleLines[1]}</em>
              <br />
              {contactContent.titleLines[2]}
            </h2>
            <p className="ct-sub fi" style={withDelay(".2s")}>
              {contactContent.subtitle}
            </p>
            <a href={`mailto:${contactContent.email}`} className="ct-email fi" style={withDelay(".3s")}>
              {contactContent.email}
            </a>
            <div className="ct-links fi" style={withDelay(".4s")}>
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} className="ct-lnk">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer>
          <span className="f-l">{contactContent.footerLeft}</span>
          <span className="f-r">{contactContent.footerRight}</span>
          <a href="#hero" className="f-top">
            Back to top ↑
          </a>
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
