import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const rafRef = useRef<number>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Once visible, stop observing (one-way animation — saves resources)
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const observeElements = () => {
      document.querySelectorAll(".fade-up:not(.observed)").forEach((el) => {
        el.classList.add("observed");
        observer.observe(el);
      });
    };

    observeElements();

    // Watch for dynamically added elements (lazy-loaded sections)
    // Use childList only (not subtree) on the main element for less overhead
    const mutationObserver = new MutationObserver(() => {
      cancelAnimationFrame(rafRef.current ?? 0);
      rafRef.current = requestAnimationFrame(observeElements);
    });

    const main = document.querySelector("main");
    if (main) {
      mutationObserver.observe(main, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      cancelAnimationFrame(rafRef.current ?? 0);
    };
  }, []);
}
