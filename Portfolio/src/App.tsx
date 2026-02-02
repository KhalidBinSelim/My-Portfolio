import { useEffect, useState } from 'react'
import './App.css'
import CertificateGallery from './components/CertificateGallery'
// import StatsCounter from './components/StatsCounter'
import ProblemSolvingStats from './components/ProblemSolvingStats'
import robosustLogo from './assets/robosust-logo.png'
import copernicusLogo from './assets/copernicus-logo.png'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll detection for topbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="portfolio">
      {/* Topbar Navigation */}
      <nav className={`topbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="topbar-container">
          <a href="#" className="topbar-logo" onClick={() => scrollToSection('hero')}>
            <span className="logo-text">KBS</span>
          </a>
          
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className={`topbar-nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a onClick={() => scrollToSection('programming')}>Programming</a></li>
            <li><a onClick={() => scrollToSection('achievements')}>Achievements</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="nav-cta">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero section">

        <div className="container">
          <div className="hero-grid">
            {/* Profile Photo */}
            <div className="hero-image-wrapper animate-fade-in-left">
              <div className="profile-image-container">
                <div className="profile-glow"></div>
                <img src="/profile.jpg" alt="Khalid Bin Selim" className="profile-image" />
                <div className="profile-border"></div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="hero-content animate-fade-in-right">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Khalid Bin Selim!</span>
              </h1>
              <p className="hero-subtitle">
                University Innovation Hub Program Winner | NASA Space Apps Challenge, Solvio AI Hackathon Finalist | Full-Stack Developer | AI/ML Researcher | Competitive Programmer
              </p>
              <p className="hero-description">
                BSc (Engr.) in CSE at Shahjalal University of Science and Technology
                <br />
                {/* <strong>CGPA: 3.72/4.00</strong> | Expected Graduation: May 2026 */}
              </p>
              
              <div className="hero-links">
                <a href="tel:+8801721998383" className="btn btn-primary">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
                  </svg>
                  Contact Me
                </a>
                <a href="mailto:khalidbinselim@gmail.com" className="btn btn-outline">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                  Email
                </a>
              </div>
              
              {/* Social Media Icons */}
              <div className="social-icons">
                <a href="https://www.facebook.com/khalid.bin.selim.2024" target="_blank" rel="noopener noreferrer" className="social-icon facebook" title="Facebook">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/__khalid.44__/" target="_blank" rel="noopener noreferrer" className="social-icon instagram" title="Instagram">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/khalid-bin-selim-4a043a30a/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" title="LinkedIn">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/KhalidBinSelim" target="_blank" rel="noopener noreferrer" className="social-icon github" title="GitHub">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solving Statistics */}
      <section id="programming" className="section">
        
      <ProblemSolvingStats />
      </section>

      {/* Stats Counter */}
      {/* <StatsCounter /> */}

      {/* Certificate Gallery */}
      <section id="achievements" className="section">  <CertificateGallery /></section>
      {/* Awards Section */}
      {/* <section id="achievements" className="section">
        <div className="container">
          <h2 className="section-title">Awards & Achievements</h2>
          <div className="awards-list">
            <div className="award-item card animate-fade-in-up">
              <span className="award-badge">FINALIST</span>
              <h3>SOLVIO AI Hackathon 2025 - Top 20 Finalist</h3>
              <p className="award-detail">
                Developed <strong>Lumos</strong>, an AI-powered scholarship discovery platform
              </p>
              <div className="award-links">
                <a href="https://github.com/KhalidBinSelim/Lumos" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="award-item card animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <span className="award-badge">PUBLISHED</span>
              <h3>IEEE COMPAS 2025 - Research Paper Accepted</h3>
              <p className="award-detail">
                Paper on <em>Bangla Speech to IPA Transcription</em> accepted for publication
              </p>
            </div>

            <div className="award-item card animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <span className="award-badge">WINNER</span>
              <h3>University Innovation Hub Program</h3>
              <p className="award-detail">
                Selected for prestigious innovation and entrepreneurship program
              </p>
            </div>

            <div className="award-item card animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <span className="award-badge">SCHOLAR</span>
              <h3>EricssonEdge Academia Program</h3>
              <p className="award-detail">
                Completed advanced training in telecommunications and 5G technology
              </p>
            </div>

            <div className="award-item card animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <span className="award-badge">NASA</span>
              <h3>NASA Space Apps Challenge 2023 & 2024</h3>
              <p className="award-detail">
                Participated in global hackathon solving real-world space challenges
              </p>
            </div>

            <div className="award-item card animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <span className="award-badge">HACKATHON</span>
              <h3>Learnathon 3.0 by Geeky Solutions</h3>
              <p className="award-detail">
                Developed innovative learning platform solution
              </p>
            </div>

            <div className="award-item card animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <span className="award-badge">COMPETITIVE</span>
              <h3>ICPC 2023 Asia Dhaka Preliminary</h3>
              <p className="award-detail">
                Competed in prestigious international programming competition
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card card animate-fade-in-up">
              <div className="project-header">
                <h3>SUSTverse - Campus Platform</h3>
                <a href="https://github.com/KhalidBinSelim/SUSTverse" target="_blank" rel="noopener noreferrer" className="github-link">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </div>
              <p className="project-date">Apr – May 2025</p>
              <p className="project-description">
                <strong>Full-Stack</strong> campus communication platform for students, alumni, and administrators with AI-powered chatbot.
              </p>
              <div className="tech-stack">
                <span className="badge">ReactJS</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Node.js</span>
                <span className="badge">MongoDB</span>
                <span className="badge">Tailwind CSS</span>
              </div>
              <ul className="project-highlights">
                <li><strong>40% reduction</strong> in fragmented messaging</li>
                <li><strong>95%+ uptime</strong> with robust architecture</li>
                <li><strong>AI chatbot</strong> for real-time support</li>
              </ul>
            </div>

            <div className="project-card card animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="project-header">
                <h3>CoSeismic - Seismic Analysis</h3>
                <a href="https://github.com/KhalidBinSelim/CoSeismic" target="_blank" rel="noopener noreferrer" className="github-link">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </div>
              <p className="project-date">October 2024</p>
              <p className="project-description">
                <strong>NASA Space Apps 2024</strong> - Seismic analysis algorithm to filter noise from Apollo and Mars InSight datasets.
              </p>
              <div className="tech-stack">
                <span className="badge">Python</span>
                <span className="badge">PyTorch</span>
                <span className="badge">NumPy</span>
                <span className="badge">Pandas</span>
                <span className="badge">Jupyter</span>
              </div>
              <ul className="project-highlights">
                <li><strong>Improved</strong> event detection accuracy</li>
                <li><strong>30% reduction</strong> in processing overhead</li>
                <li><strong>Planetary mission</strong> signal isolation</li>
              </ul>
            </div>

            <div className="project-card card animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="project-header">
                <h3>Traffic Violation Detection</h3>
                <a href="https://github.com/KhalidBinSelim/Traffic-Rule-Violation-Detection-System" target="_blank" rel="noopener noreferrer" className="github-link">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </div>
              <p className="project-date">April 2024</p>
              <p className="project-description">
                <strong>IoT-based</strong> automated surveillance system with real-time image capture and object recognition.
              </p>
              <div className="tech-stack">
                <span className="badge">Arduino UNO</span>
                <span className="badge">ESP32-CAM</span>
                <span className="badge">Telegram Bot</span>
              </div>
              <ul className="project-highlights">
                <li><strong>90%+ accuracy</strong> in violation detection</li>
                <li><strong>70% reduction</strong> in manual oversight</li>
                <li><strong>35% faster</strong> response speed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category card animate-fade-in-up">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span className="badge">Java</span>
                <span className="badge">C</span>
                <span className="badge">C++</span>
                <span className="badge">Python</span>
                <span className="badge">JavaScript</span>
                <span className="badge">Assembly</span>
              </div>
            </div>

            <div className="skill-category card animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h3>Frameworks & Libraries</h3>
              <div className="skill-tags">
                <span className="badge">NumPy</span>
                <span className="badge">Pandas</span>
                <span className="badge">Matplotlib</span>
                <span className="badge">React</span>
                <span className="badge">Next.js</span>
                <span className="badge">Node.js</span>
                <span className="badge">Express</span>
              </div>
            </div>

            <div className="skill-category card animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h3>Databases & Tools</h3>
              <div className="skill-tags">
                <span className="badge">Git</span>
                <span className="badge">GitHub</span>
                <span className="badge">Docker</span>
                <span className="badge">MySQL</span>
                <span className="badge">PostgreSQL</span>
                <span className="badge">MongoDB</span>
                <span className="badge">Jira</span>
                <span className="badge">LaTeX</span>
              </div>
            </div>

            <div className="skill-category card animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <h3>Platforms & Concepts</h3>
              <div className="skill-tags">
                <span className="badge">Object-Oriented Programming</span>
                <span className="badge">Software Engineering Principles</span>
                <span className="badge">Kaggle</span>
                <span className="badge">Arduino</span>
                <span className="badge">Android Studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Organizations</h2>
          <div className="organizations-grid">
            <div className="org-card card animate-fade-in-up">
              <div className="org-header">
                <img src={robosustLogo} alt="RoboSUST" className="org-logo" />
                <div className="org-info">
                  <h3>RoboSUST</h3>
                  <p className="org-role">General Member</p>
                  <p className="org-date">Oct 2022 - Sep 2023</p>
                </div>
              </div>
              <p className="org-description">
                Built and tested robotics projects including a line-following car; attended microcontroller workshops and technical challenges.
              </p>
            </div>

            <div className="org-card card animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="org-header">
                <img src={copernicusLogo} alt="Copernicus" className="org-logo" />
                <div className="org-info">
                  <h3>Copernicus Astronomical Memorial of SUST</h3>
                  <p className="org-role">General Member</p>
                  <p className="org-date">Nov 2022 - Oct 2023</p>
                </div>
              </div>
              <p className="org-description">
                Engaged in astronomy workshops, study circles, and outreach events; helped organize programs to promote scientific curiosity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info animate-fade-in-left">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>Email</h3>
                <a href="mailto:khalidbinselim@gmail.com">khalidbinselim@gmail.com</a>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <h3>Phone</h3>
                <a href="tel:+8801721998383">+880 1721-998383</a>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Location</h3>
                <p>Gazipur, Bangladesh</p>
              </div>
              
              <div className="contact-socials">
                <a href="https://github.com/KhalidBinSelim" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/khalid-bin-selim-4a043a30a" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="https://leetcode.com/u/KhalidBinSelim/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-wrapper animate-fade-in-right">
              <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <input type="hidden" name="subject" value="New Contact from Portfolio Website" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="name@example.com" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject_line">Subject</label>
                  <input type="text" id="subject_line" name="subject_line" placeholder="Project Collaboration" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me about your project or idea..." required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <h3 className="footer-logo">Khalid Bin Selim</h3>
              <p className="footer-tagline">Computer Science Engineer passionate about building innovative solutions and solving complex problems.</p>
              <div className="footer-socials">
                <a href="https://github.com/KhalidBinSelim" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/khalid-bin-selim-4a043a30a" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="mailto:khalidbinselim@gmail.com">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="footer-links-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
                <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
                <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
                <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>📧 khalidbinselim@gmail.com</p>
              <p>📱 +880 1721-998383</p>
              <p>📍 Gazipur, Bangladesh</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 Khalid Bin Selim. All rights reserved.</p>
            <p className="made-with">Made with Vite and React</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
