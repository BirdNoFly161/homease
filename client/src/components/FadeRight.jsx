import { useState, useEffect, useRef } from "react";

const FadeRight = ({ children }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "50px", threshold: 0.7 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`opacity-0 ${isIntersecting ? "animate-fade-left" : ""}`}>
      {children}
    </div>
  );
};

export default FadeRight;
