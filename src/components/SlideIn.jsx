import React, { useEffect, useRef, useState } from 'react';

const SlideIn = ({ children }) => {
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
      className={`slide-in-from-left ${isVisible ? 'slide-in-active' : ''}`}
    >
      {children}
    </div>
  );
};

export default SlideIn;