import { useState } from 'react';
import './CertificateGallery.css';

// Import certificate images
import icpc2023Cert from '../assets/icpc-2023-certificate.png';
import compas2025Paper from '../assets/compas-2025-paper.png';
import cuetDatathon from '../assets/cuet-datathon-2025.png';
import ericssonEdge from '../assets/ericsson-edge-2025.png';
import bitfest2025 from '../assets/bitfest-2025-datathon.png';
import nasaSpaceApps2024 from '../assets/nasa-space-apps-2024.png';

interface Certificate {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  date: string;
}

const certificates: Certificate[] = [
  // September 2025
  {
    id: 1,
    title: 'IEEE COMPAS 2025 - Paper Accepted',
    category: 'Research',
    image: compas2025Paper,
    description: 'Bangla Speech to IPA Transcription: A Multi-Stage Transformer-Based Approach',
    date: 'September 2025'
  },
  // April 2025
  {
    id: 2,
    title: 'Learnathon 3.0 by Geeky Solutions',
    category: 'Hackathons',
    image: '/certificates/Learnathon 3.0 Certificate.png',
    description: 'Top 169 teams out of 3,000+ participants',
    date: 'April 2025'
  },
  // January 2025
  {
    id: 3,
    title: 'CUET CSE Fest 2025 - Datathon',
    category: 'Datathons',
    image: cuetDatathon,
    description: 'Team SUST_Aivolve - Delineate presents CUET CSE Fest 2025 Datathon',
    date: 'January 2025'
  },
  {
    id: 4,
    title: 'SOLVIO AI Hackathon 2025 - Top 20 Finalist',
    category: 'Hackathons',
    image: '/certificates/SOLVIO_Top20_Certificate_Team_84.png',
    description: 'Top 6% among 3,259 participants - Built Lumos, a GenAI scholarship platform',
    date: 'January 2026'
  },
  {
    id: 5,
    title: 'EricssonEdge Academia Program 2025',
    category: 'Awards',
    image: ericssonEdge,
    description: 'Successfully participated in EricssonEdge Academia Program 2025',
    date: 'January 2026'
  },
  // December 2024
  {
    id: 6,
    title: 'BITFEST 2025 - Game of Datathon',
    category: 'Datathons',
    image: bitfest2025,
    description: '3rd KUET CSE National Fest - Data Science, Analytics & Problem-Solving',
    date: 'December 2024'
  },
  // October 2024
  {
    id: 7,
    title: 'NASA Space Apps Challenge 2024 - Galactic Problem Solver',
    category: 'Hackathons',
    image: nasaSpaceApps2024,
    description: 'Outstanding participation and efforts to address challenges we face on Earth and in space',
    date: 'October 2024'
  },
  // 2024
  {
    id: 8,
    title: 'University Innovation Hub Program',
    category: 'Awards',
    image: '/certificates/University Innovation Hub Program.jpg',
    description: 'Winner - Team SUST CareCrew for CareNest AI healthcare solution',
    date: 'April 2025'
  },
  // October 2023
  {
    id: 9,
    title: 'ICPC Asia Dhaka Regional 2023 - Honorable Mention',
    category: 'Awards',
    image: icpc2023Cert,
    description: 'Team SUST_Decryptors - ICPC Asia Dhaka Regional Site Online Preliminary Contest',
    date: 'October 2023'
  },
  {
    id: 10,
    title: 'NASA Space Apps Challenge 2023',
    category: 'Hackathons',
    image: '/certificates/NASA Space Apps Challenge 2023.png',
    description: 'Galactic Problem Solver - Outstanding participation in space-tech innovation',
    date: 'October 2023'
  }
];

export default function CertificateGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const categories = ['All', 'Hackathons', 'Datathons', 'Awards', 'Research'];

  const filteredCertificates = selectedCategory === 'All'
    ? certificates
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <section id="awards" className="certificate-gallery section">
      <div className="container">
        <h2 className="section-title">Awards & Achievements</h2>
        
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificate Grid */}
        <div className="certificates-grid">
          {filteredCertificates.map((cert, index) => (
            <div
              key={cert.id}
              className="certificate-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="certificate-image-wrapper">
                <img src={cert.image} alt={cert.title} className="certificate-image" />
                <div className="certificate-overlay">
                  <span className="view-text">Click to View</span>
                </div>
              </div>
              <div className="certificate-info">
                <span className="certificate-category badge">{cert.category}</span>
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-description">{cert.description}</p>
                <span className="certificate-date">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedCertificate && (
          <div className="lightbox-modal" onClick={() => setSelectedCertificate(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedCertificate(null)}>
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img src={selectedCertificate.image} alt={selectedCertificate.title} className="lightbox-image" />
              <div className="lightbox-info">
                <h3>{selectedCertificate.title}</h3>
                <p>{selectedCertificate.description}</p>
                <span>{selectedCertificate.date}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
