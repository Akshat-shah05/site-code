import React, { useEffect, useRef, useState } from 'react';

const SlideInR = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`slide-in-from-right ${isVisible ? 'slide-in-active2' : ''}`}
    >
      {children}
    </div>
  );
};

export default SlideInR;