import { useEffect, useRef, useState } from 'react';
import './StatsCounter.css';

interface Stat {
  icon: string;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: '🏆',
    value: 1582,
    label: 'LeetCode Rating',
    color: 'var(--gradient-vibrant)'
  },
  {
    icon: '💻',
    value: 1200,
    label: 'Problems Solved',
    suffix: '+',
    color: 'var(--gradient-ocean)'
  },
  {
    icon: '🎯',
    value: 1450,
    label: 'CodeChef Rating',
    color: 'var(--gradient-sunset)'
  },
  {
    icon: '📊',
    value: 372,
    label: 'CGPA (x100)',
    color: 'var(--gradient-aurora)'
  }
];

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="stats-counter section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Achievements in Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isVisible, delay }: { stat: Stat; isVisible: boolean; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      
      if (step >= steps) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div
      className="stat-card glass-effect hover-lift"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="stat-icon animate-float-slow">{stat.icon}</div>
      <div className="stat-value" style={{ background: stat.color }}>
        {count}{stat.suffix || ''}
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-glow" style={{ background: stat.color }}></div>
    </div>
  );
}
