import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            // Only remove the animation class if the element goes below the screen.
            // This makes it animate again when scrolling down, but not when scrolling up.
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove("visible");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const observeElements = () => {
      document.querySelectorAll(".fade-up:not(.observed)").forEach((el) => {
        el.classList.add("observed");
        observer.observe(el);
      });
    };

    // Initial check
    observeElements();

    // Set up MutationObserver to catch lazy-loaded elements
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
