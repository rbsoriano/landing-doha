import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const rafRef = useRef<number>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove("visible");
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
