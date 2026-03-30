import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(
      ".scroll-fade-up, .scroll-fade, .scroll-bounce-left, .scroll-bounce-right, .scroll-blur, .scroll-scale"
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer, observer.disconnect();
  }, []);
};
