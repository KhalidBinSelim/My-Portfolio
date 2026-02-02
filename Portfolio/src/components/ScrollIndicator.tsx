import { useEffect, useState } from 'react';
import './ScrollIndicator.css';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll Down Indicator (only show when at top) */}
      {scrollProgress < 5 && (
        <div className="scroll-down-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <p>Scroll Down</p>
          <div className="scroll-arrow">↓</div>
        </div>
      )}
    </>
  );
}
