import React, { Suspense, useEffect, useRef, useState } from "react";

type LazySectionProps = {
  children: React.ReactNode;
  minHeight?: string;
  id?: string;
};

const LazySection = ({ children, minHeight = "320px", id }: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} id={id} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible ? (
        <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

export default LazySection;
