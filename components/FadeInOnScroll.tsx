"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeInOnScrollProps = {
  children: ReactNode;
  className?: string;
};

export function FadeInOnScroll({ children, className = "" }: FadeInOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`scroll-fade ${isVisible ? "is-visible" : ""} ${className}`.trim()}>
      {children}
    </section>
  );
}
