import { useCallback, useEffect, useState } from "react";

export type GraphicSlide = {
  id: string;
  image: string;
  title: string;
  category: string;
  context: string;
  systemLogic: string;
};

type Props = {
  slides: GraphicSlide[];
};

const IconChevronLeft = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconChevronRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const GraphicsSlideshow = ({ slides }: Props) => {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // touch / swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart == null) return;
    const dx = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    setTouchStart(null);
  };

  const slide = slides[index];

  return (
    <div className="gs-shell" aria-roledescription="carousel">
      <div className="gs-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {slides.map((s, i) => (
          <figure
            key={s.id}
            className={`gs-slide ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <div className="gs-img">
              <img src={s.image} alt={s.title} loading={i === 0 ? "eager" : "lazy"} />
            </div>
          </figure>
        ))}
      </div>

      <div className="gs-caption">
        <div className="gs-cap-l">
          <span className="gs-cat">{slide.category}</span>
          <h3 className="gs-title">{slide.title}</h3>
        </div>
        <div className="gs-cap-r">
          <p className="gs-context"><span className="gs-tag">Context</span>{slide.context}</p>
          <p className="gs-system"><span className="gs-tag">System logic</span>{slide.systemLogic}</p>
        </div>
      </div>

      <div className="gs-controls">
        <div className="gs-count">
          <span className="gs-curr">{String(index + 1).padStart(2, "0")}</span>
          <span className="gs-sep">/</span>
          <span className="gs-total">{String(total).padStart(2, "0")}</span>
        </div>
        <div className="gs-dots" role="tablist">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={`gs-dot ${i === index ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <div className="gs-nav">
          <button type="button" className="gs-btn" onClick={prev} aria-label="Previous slide">
            <IconChevronLeft />
          </button>
          <button type="button" className="gs-btn" onClick={next} aria-label="Next slide">
            <IconChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphicsSlideshow;
