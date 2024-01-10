import { useRef, useEffect, useState } from "react";

export const FadeIn = ({ className, children }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);

        observer.unobserve(domRef.current);
      }
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [domRef, setVisible]);

  return (
    <section
      ref={domRef}
      className={`${className} ${isVisible ? ` is-visible` : ``}`}
    >
      {children}
    </section>
  );
};
