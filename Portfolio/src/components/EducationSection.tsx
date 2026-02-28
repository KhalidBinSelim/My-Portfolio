import React from 'react';
import './EducationSection.css';
import sustLogo from '../assets/sust-logo.png';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="education-section section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-featured animate-fade-in-up">
          <div className="education-featured-card">
            
            <div className="education-glow"></div>
            
            <div className="education-content-wrapper">
              <div className="education-logo-large">
                <img src={sustLogo} alt="SUST Logo" className="university-logo" />
              </div>

              <div className="education-main-info">
                <h3 className="university-name">Shahjalal University of Science and Technology (SUST)</h3>
                <h4 className="degree-name">BSc (Engr.) in Computer Science and Engineering</h4>
                
                <div className="education-meta">
                  <span className="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Mar 2022 - June 2026 (expected)
                  </span>
                  <span className="meta-item grade-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    CGPA: 3.71/4.00 
                    <span className="grade-subtext">(up to 6th Semester)</span>
                  </span>
                </div>

              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
