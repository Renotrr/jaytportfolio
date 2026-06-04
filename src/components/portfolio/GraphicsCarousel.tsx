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

export default function GraphicsCarousel({ items, autoPlayMs = 4500 }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const bgARef = useRef<HTMLDivElement>(null);
  const bgBRef = useRef<HTMLDivElement>(null);
  const useARef = useRef(true);
  const autoRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const [active, setActive] = useState(0);

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

  // Auto-play
  const startAuto = useCallback(() => {
    if (autoRef.current) window.clearInterval(autoRef.current);
    autoRef.current = window.setInterval(() => {
      if (pausedRef.current) return;
      setActive((prev) => {
        const next = (prev + 1) % items.length;
        scrollToIndex(next);
        return prev; // scroll listener will update active
      });
    }, autoPlayMs);
  }, [autoPlayMs, items.length, scrollToIndex]);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, [startAuto]);

  // Pause on hover/focus/interaction
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);
    vp.addEventListener("pointerenter", pause);
    vp.addEventListener("pointerleave", resume);
    vp.addEventListener("focusin", pause);
    vp.addEventListener("focusout", resume);
    vp.addEventListener("pointerdown", pause);
    return () => {
      vp.removeEventListener("pointerenter", pause);
      vp.removeEventListener("pointerleave", resume);
      vp.removeEventListener("focusin", pause);
      vp.removeEventListener("focusout", resume);
      vp.removeEventListener("pointerdown", pause);
    };
  }, []);

  const go = (dir: 1 | -1) => {
    const next = (active + dir + items.length) % items.length;
    scrollToIndex(next);
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
          {items.map((it, i) => (
            <figure
              key={it.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`gd-card${i === active ? " is-active" : ""}`}
              onClick={() => scrollToIndex(i)}
            >
              <div className="gd-img">
                <img
                  src={it.image}
                  data-large={it.large || it.image}
                  alt={it.title}
                  loading="lazy"
                />
              </div>
              <figcaption className="gd-meta">
                <span className="gd-ti">{it.title}</span>
                <span className="gd-ty">{it.category}</span>
              </figcaption>
            </figure>
          ))}
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
    </div>
  );
}
