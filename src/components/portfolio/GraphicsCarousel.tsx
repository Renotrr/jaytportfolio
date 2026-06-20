import { useCallback, useEffect, useRef, useState } from "react";

export type GraphicsCarouselItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  large?: string;
};

interface Props {
  items: GraphicsCarouselItem[];
  autoPlayMs?: number;
}

type FullView = { src: string; alt: string } | null;

export default function GraphicsCarousel({ items, autoPlayMs = 1500 }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const bgARef = useRef<HTMLDivElement>(null);
  const bgBRef = useRef<HTMLDivElement>(null);
  const useARef = useRef(true);
  const autoRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  // Press tracking — distinguishes a quick tap (open full) from a press-and-hold (pause)
  const pressRef = useRef<{ t: number; x: number; y: number; moved: boolean } | null>(null);
  const [active, setActive] = useState(0);
  const [full, setFull] = useState<FullView>(null);

  const setBg = useCallback((src: string) => {
    const a = bgARef.current;
    const b = bgBRef.current;
    if (!a || !b) return;
    const next = useARef.current ? b : a;
    const prev = useARef.current ? a : b;
    next.style.backgroundImage = `url("${src}")`;
    next.style.opacity = "1";
    prev.style.opacity = "0";
    useARef.current = !useARef.current;
  }, []);

  const scrollToIndex = useCallback((idx: number, behavior: ScrollBehavior = "smooth") => {
    const vp = viewportRef.current;
    const card = cardRefs.current[idx];
    if (!vp || !card) return;
    const left = card.offsetLeft - (vp.clientWidth - card.clientWidth) / 2;
    vp.scrollTo({ left, behavior });
  }, []);

  // Track active card via scroll position
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const center = vp.scrollLeft + vp.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        cardRefs.current.forEach((c, i) => {
          if (!c) return;
          const cc = c.offsetLeft + c.clientWidth / 2;
          const d = Math.abs(cc - center);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setActive((prev) => (prev !== best ? best : prev));
      });
    };
    vp.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      vp.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items.length]);

  // Update bg on active change
  useEffect(() => {
    const item = items[active];
    if (item) setBg(item.large || item.image);
  }, [active, items, setBg]);

  // Auto-play — infinite loop, advances every autoPlayMs (default 1.5s)
  const startAuto = useCallback(() => {
    if (autoRef.current) window.clearInterval(autoRef.current);
    autoRef.current = window.setInterval(() => {
      if (pausedRef.current) return;
      setActive((prev) => {
        const next = (prev + 1) % items.length;
        scrollToIndex(next);
        return prev; // scroll listener updates active
      });
    }, autoPlayMs);
  }, [autoPlayMs, items.length, scrollToIndex]);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, [startAuto]);

  // Pause auto-play whenever the full image overlay is open
  useEffect(() => {
    pausedRef.current = full !== null;
  }, [full]);

  // Close full overlay on Escape
  useEffect(() => {
    if (!full) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setFull(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [full]);

  const go = (dir: 1 | -1) => {
    const next = (active + dir + items.length) % items.length;
    scrollToIndex(next);
  };

  // Press-and-hold pauses the animation; a quick tap opens the full image.
  const onPressStart = (e: React.PointerEvent) => {
    pressRef.current = { t: Date.now(), x: e.clientX, y: e.clientY, moved: false };
    pausedRef.current = true; // hold to stop the animation
  };

  const onPressMove = (e: React.PointerEvent) => {
    const p = pressRef.current;
    if (!p) return;
    if (Math.abs(e.clientX - p.x) > 8 || Math.abs(e.clientY - p.y) > 8) p.moved = true;
  };

  const onPressEnd = (src: string, alt: string) => {
    const p = pressRef.current;
    pressRef.current = null;
    if (!full) pausedRef.current = false; // resume the animation
    if (!p) return;
    const quick = Date.now() - p.t < 250;
    if (quick && !p.moved) {
      setFull({ src, alt }); // quick tap → open full image
    }
  };

  return (
    <div className="gd-wrap">
      <div className="gd-bgs" aria-hidden="true">
        <div ref={bgARef} className="gd-bg" />
        <div ref={bgBRef} className="gd-bg" />
        <div className="gd-bg-veil" />
      </div>

      <div
        className="gd-viewport"
        ref={viewportRef}
        role="region"
        aria-label="Graphics design carousel"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        }}
      >
        <div className="gd-track">
          {items.map((it, i) => {
            const src = it.large || it.image;
            return (
              <figure
                key={it.id}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`gd-card${i === active ? " is-active" : ""}`}
                onPointerDown={onPressStart}
                onPointerMove={onPressMove}
                onPointerUp={() => onPressEnd(src, it.title)}
                onPointerCancel={() => onPressEnd(src, it.title)}
                onPointerLeave={() => {
                  // released outside / drag away → resume without opening
                  if (pressRef.current) {
                    pressRef.current = null;
                    if (!full) pausedRef.current = false;
                  }
                }}
              >
                <div className="gd-img">
                  <img
                    src={it.image}
                    data-large={src}
                    alt={it.title}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <figcaption className="gd-meta">
                  <span className="gd-ti">{it.title}</span>
                  <span className="gd-ty">{it.category}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      <div className="gd-controls">
        <button type="button" className="gd-btn" aria-label="Previous" onClick={() => go(-1)}>‹</button>
        <div className="gd-dots" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`gd-dot${i === active ? " active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === active}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
        <button type="button" className="gd-btn" aria-label="Next" onClick={() => go(1)}>›</button>
      </div>

      {/* Full-image preview — opens on tap, closes via the X button */}
      {full && (
        <div className="gd-full" role="dialog" aria-modal="true" aria-label={full.alt}>
          <button
            type="button"
            className="gd-full-close"
            aria-label="Close full image"
            onClick={() => setFull(null)}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          <img src={full.src} alt={full.alt} />
        </div>
      )}
    </div>
  );
}
