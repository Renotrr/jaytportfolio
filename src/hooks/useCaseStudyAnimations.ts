import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Premium scroll-triggered animations for case study pages.
 * Wires hero parallax, staggered block reveals, and mock-image reveals.
 */
export function useCaseStudyAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(".qt-hero img", {
        scale: 1.15,
        opacity: 0,
        duration: 1.6,
        ease: "expo.out",
      });

      // Hero parallax on scroll
      gsap.to(".qt-hero img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".qt-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Top meta line
      gsap.from(".qt-case-top", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".qt-case-top", start: "top 90%" },
      });

      // Title + tagline
      gsap.from([".qt-case-title", ".qt-case-tag"], {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".qt-case-head", start: "top 85%" },
      });

      // Meta dl
      gsap.from(".qt-meta > div", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".qt-meta", start: "top 88%" },
      });

      // Mock images — reveal with mask + scale
      gsap.utils.toArray<HTMLElement>(".qt-mock").forEach((mock) => {
        const img = mock.querySelector("img");
        gsap.from(mock, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: mock, start: "top 88%" },
        });
        if (img) {
          gsap.from(img, {
            scale: 1.18,
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: mock, start: "top 88%" },
          });
        }
      });

      // Body copy columns
      gsap.from(".qt-body-col", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".qt-body", start: "top 85%" },
      });

      // Highlights list
      gsap.from(".qt-highlights li", {
        y: 20,
        opacity: 0,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: { trigger: ".qt-highlights", start: "top 85%" },
      });

      // Numbers count-up + reveal
      gsap.utils.toArray<HTMLElement>(".qt-numbers > div").forEach((box, i) => {
        gsap.from(box, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: i * 0.08,
          scrollTrigger: { trigger: ".qt-numbers", start: "top 88%" },
        });
        const numEl = box.querySelector<HTMLElement>(".qt-num");
        if (!numEl) return;
        const raw = numEl.textContent?.trim() ?? "";
        const match = raw.match(/^([\d.]+)(.*)$/);
        if (!match) return;
        const target = parseFloat(match[1]);
        const suffix = match[2] ?? "";
        if (!isFinite(target)) return;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.4,
          ease: "power2.out",
          delay: i * 0.08 + 0.2,
          scrollTrigger: { trigger: ".qt-numbers", start: "top 85%" },
          onUpdate: () => {
            const value = target % 1 === 0 ? Math.round(obj.v) : obj.v.toFixed(1);
            numEl.textContent = `${value}${suffix}`;
          },
        });
      });

      // Stack chips
      gsap.from(".qt-stack .qt-chip", {
        y: 16,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: { trigger: ".qt-stack", start: "top 92%" },
      });

      // Footer CTAs
      gsap.from(".qt-foot > *", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".qt-foot", start: "top 95%" },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
}
