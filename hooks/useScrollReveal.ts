import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      container.querySelectorAll(".reveal, .reveal-scale").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const elementsToObserve: Element[] = [];

    if (container.classList.contains("reveal") || container.classList.contains("reveal-scale")) {
      elementsToObserve.push(container);
    }

    container.querySelectorAll(".reveal, .reveal-scale").forEach((el) => {
      elementsToObserve.push(el);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return ref;
}
