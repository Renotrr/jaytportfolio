import { useEffect, useRef } from "react";

/**
 * Fixed thin progress bar at the very top of the viewport.
 * Tracks document scroll position 0 → 1.
 */
const ScrollProgressBar = () => {
  const fillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${progress})`;
      }
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

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={fillRef} className="scroll-progress-fill" />
    </div>
  );
};

export default ScrollProgressBar;
