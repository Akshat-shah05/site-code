import React, { useEffect, useRef, useState } from 'react';
import './fade.css';

const FadeinView = ({ children }) => {
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
      className={`fade-in ${isVisible ? 'fade-in-active' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeinView;