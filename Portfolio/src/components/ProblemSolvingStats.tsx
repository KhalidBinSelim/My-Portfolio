import { useEffect, useState, useRef } from 'react';
import './ProblemSolvingStats.css';

// Import platform logos
import leetcodeLogo from '../assets/LeetCode_Logo_1.png';
import codeforcesLogo from '../assets/free-code-forces-logo-icon-svg-download-png-2944796.webp';
import codechefLogo from '../assets/codechef.jpg';
import atcoderLogo from '../assets/atcoder.png';
import vjudgeLogo from '../assets/vjudge-logo.jpg'; // VJudge logo
import lightojLogo from '../assets/loj-og-image.png';
import leetcodeBadge from '../assets/leetcode 50 days.gif';

// Platform Logo Components using actual images
const LeetCodeLogo = () => (
  <img src={leetcodeLogo} alt="LeetCode" className="platform-logo-img" />
);

const CodeforcesLogo = () => (
  <img src={codeforcesLogo} alt="Codeforces" className="platform-logo-img" />
);

const CodeChefLogo = () => (
  <img src={codechefLogo} alt="CodeChef" className="platform-logo-img" />
);

const AtCoderLogo = () => (
  <img src={atcoderLogo} alt="AtCoder" className="platform-logo-img" />
);

const VJudgeLogo = () => (
  <img src={vjudgeLogo} alt="VJudge" className="platform-logo-img" />
);

const LightOJLogo = () => (
  <img src={lightojLogo} alt="LightOJ" className="platform-logo-img" />
);


interface Platform {
  name: string;
  handle: string;
  url: string;
  problems: number;
  rating?: number;
  color: string;
  Logo: React.ComponentType;
}

const platforms: Platform[] = [
  {
    name: 'LeetCode',
    handle: 'Shadow0fTwilight',
    url: 'https://leetcode.com/u/Shadow0fTwilight/',
    problems: 173,
    rating: 1582,
    color: '#FFA116',
    Logo: LeetCodeLogo
  },
  {
    name: 'Codeforces',
    handle: 'Nextevens',
    url: 'https://codeforces.com/profile/Nextevens',
    problems: 700,
    color: '#1F8ACB',
    Logo: CodeforcesLogo
  },
  {
    name: 'Codeforces',
    handle: '__Eivor',
    url: 'https://codeforces.com/profile/__Eivor',
    problems: 183,
    color: '#1F8ACB',
    Logo: CodeforcesLogo
  },
  {
    name: 'CodeChef',
    handle: 'shadow0f_twi',
    url: 'https://www.codechef.com/users/shadow0f_twi',
    problems: 106,
    rating: 1450,
    color: '#5B4638',
    Logo: CodeChefLogo
  },
  {
    name: 'AtCoder',
    handle: 'Dilahk',
    url: 'https://atcoder.jp/users/Dilahk',
    problems: 44,
    color: '#222222',
    Logo: AtCoderLogo
  },
  {
    name: 'VJudge',
    handle: 'Khalid_44',
    url: 'https://vjudge.net/user/Khalid_44',
    problems: 152,
    color: '#4CAF50',
    Logo: VJudgeLogo
  },
  {
    name: 'LightOJ',
    handle: 'user-av2r9r6',
    url: 'https://lightoj.com/user/user-av2r9r6',
    problems: 26,
    color: '#FF5722',
    Logo: LightOJLogo
  }
];


// LeetCode rating history (sample data for visualization)
const leetcodeRatingHistory = [
  { contest: 1, rating: 1482 },
  { contest: 2, rating: 1546 },
  { contest: 3, rating: 1582 },
];

const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const RatingGraph = () => {
  const maxRating = Math.max(...leetcodeRatingHistory.map(d => d.rating));
  const minRating = Math.min(...leetcodeRatingHistory.map(d => d.rating));
  const range = maxRating - minRating;
  const width = 400;
  const height = 150;
  const padding = 20;

  const points = leetcodeRatingHistory.map((d, i) => {
    const x = padding + (i / (leetcodeRatingHistory.length - 1)) * (width - 2 * padding);
    const y = height - padding - ((d.rating - minRating) / range) * (height - 2 * padding);
    return `${x},${y}`;
  }).join(' ');

  const pathD = leetcodeRatingHistory.map((d, i) => {
    const x = padding + (i / (leetcodeRatingHistory.length - 1)) * (width - 2 * padding);
    const y = height - padding - ((d.rating - minRating) / range) * (height - 2 * padding);
    return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="rating-graph">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFA116" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 161, 22, 0.3)" />
          <stop offset="100%" stopColor="rgba(255, 161, 22, 0)" />
        </linearGradient>
      </defs>
      
      {/* Grid lines */}
      {[0, 1, 2, 3].map(i => (
        <line
          key={i}
          x1={padding}
          y1={padding + (i / 3) * (height - 2 * padding)}
          x2={width - padding}
          y2={padding + (i / 3) * (height - 2 * padding)}
          stroke="rgba(255,255,255,0.1)"
          strokeDasharray="4"
        />
      ))}
      
      {/* Area fill */}
      <path
        d={`${pathD} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`}
        fill="url(#areaGradient)"
        className="area-path"
      />
      
      {/* Line */}
      <path
        d={pathD}
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        className="line-path"
      />
      
      {/* Points */}
      {points.split(' ').map((point, i) => {
        const [x, y] = point.split(',').map(Number);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="5"
            fill="#FFA116"
            stroke="white"
            strokeWidth="2"
            className="data-point"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        );
      })}
      
      {/* Current rating label */}
      <text
        x={width - padding}
        y={height - padding - ((leetcodeRatingHistory[leetcodeRatingHistory.length - 1].rating - minRating) / range) * (height - 2 * padding) - 10}
        fill="#FFA116"
        fontSize="14"
        fontWeight="bold"
        textAnchor="end"
      >
        {leetcodeRatingHistory[leetcodeRatingHistory.length - 1].rating}
      </text>
    </svg>
  );
};

const PieChart = () => {
  const total = platforms.reduce((sum, p) => sum + p.problems, 0);
  let currentAngle = 0;

  const segments = platforms.map((platform, i) => {
    const percentage = (platform.problems / total) * 100;
    const angle = (platform.problems / total) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;
    
    return {
      ...platform,
      percentage,
      startAngle,
      endAngle: currentAngle,
      delay: i * 0.15
    };
  });

  const getConicGradient = () => {
    let gradient = 'conic-gradient(from 0deg, ';
    let currentDeg = 0;
    
    segments.forEach((seg, i) => {
      const segDeg = (seg.problems / total) * 360;
      gradient += `${seg.color} ${currentDeg}deg ${currentDeg + segDeg}deg`;
      currentDeg += segDeg;
      if (i < segments.length - 1) gradient += ', ';
    });
    
    gradient += ')';
    return gradient;
  };

  return (
    <div className="pie-chart-container">
      <div className="pie-chart" style={{ background: getConicGradient() }}>
        <div className="pie-center">
          <span className="pie-total"><AnimatedCounter target={total} /></span>
          <span className="pie-label">Problems</span>
        </div>
      </div>
      <div className="pie-legend">
        {segments.map((seg, i) => (
          <div key={i} className="legend-item" style={{ animationDelay: `${seg.delay}s` }}>
            <span className="legend-color" style={{ background: seg.color }}></span>
            <span className="legend-name">{seg.name}</span>
            <span className="legend-value">{seg.problems}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProblemSolvingStats = () => {
  return (
    <section id="problem-solving" className="problem-solving-section section">
      <div className="container">
        <h2 className="section-title">Problem Solving Statistics</h2>
        
        {/* LeetCode Featured Card */}
        <div className="featured-platform">
          <a 
            href={platforms[0].url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="leetcode-card"
          >
            {/* Top Row: Rating Graph + Top Percentage */}
            <div className="leetcode-top-row">
              <div className="leetcode-rating-section">
                <div className="leetcode-header-compact">
                  <div className="leetcode-icon"><LeetCodeLogo /></div>
                  <div className="leetcode-title-group">
                    <div className="rating-header-row">
                      <span className="rating-label-sm">Contest Rating</span>
                      <span className="global-ranking">Global Ranking <strong>210,262</strong>/822,246</span>
                      <span className="attended">Attended <strong>4</strong></span>
                    </div>
                    <span className="rating-value-large">{platforms[0].rating}</span>
                  </div>
                </div>
                <div className="leetcode-graph">
                  <RatingGraph />
                </div>
              </div>
              
              <div className="leetcode-top-percentage">
                <span className="top-label">Top</span>
                <span className="top-value">25.97% WorldWide</span>
                <div className="top-bar-chart">
                  {[3, 4, 5, 6, 8, 7, 9, 12, 15, 18, 20, 22, 25, 28, 30, 28, 25, 22, 18, 15, 12, 9, 7, 5].map((h, i) => (
                    <div 
                      key={i} 
                      className={`top-bar ${i >= 18 ? 'active' : ''}`}
                      style={{ height: `${h * 3}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Middle Row: Solved Donut + Difficulty Breakdown + Badges */}
            <div className="leetcode-middle-row">
              <div className="solved-section">
                <div className="solved-donut">
                  <svg viewBox="0 0 100 100" className="donut-chart">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#00B8A3" strokeWidth="8" 
                      strokeDasharray="251.2" strokeDashoffset={251.2 - (173/3830) * 251.2}
                      transform="rotate(-90 50 50)" className="donut-progress" />
                  </svg>
                  <div className="donut-center">
                    <span className="solved-count"><AnimatedCounter target={173} /></span>
                    <span className="solved-total">/3830</span>
                    <span className="solved-label">✓ Solved</span>
                  </div>
                </div>
                <span className="attempting-text">1 Attempting</span>
              </div>
              
              <div className="difficulty-breakdown">
                <div className="difficulty-item easy">
                  <span className="diff-label">Easy</span>
                  <span className="diff-value">78/924</span>
                </div>
                <div className="difficulty-item medium">
                  <span className="diff-label">Med.</span>
                  <span className="diff-value">83/2001</span>
                </div>
                <div className="difficulty-item hard">
                  <span className="diff-label">Hard</span>
                  <span className="diff-value">12/905</span>
                </div>
              </div>
              
              <div className="badges-section">
                <div className="badges-header">
                  <span className="badges-title">Badges</span>
                  <span className="badges-arrow">→</span>
                </div>
                <span className="badges-count">1</span>
                <img src={leetcodeBadge} alt="50 Days Badge" className="badge-gif" />
                <span className="badge-label">Most Recent Badge</span>
                <span className="badge-name">50 Days Badge 2025</span>
              </div>
            </div>
            
            {/* Bottom Row: Submission Heatmap */}
            <div className="leetcode-bottom-row">
              <div className="submissions-header">
                <span className="submissions-count"><strong>471</strong> submissions in the past one year</span>
                <div className="activity-stats">
                  <span>Total active days: <strong>117</strong></span>
                  <span>Max streak: <strong>65</strong></span>
                </div>
              </div>
              <div className="heatmap-grid">
                {Array.from({ length: 52 }, (_, weekIdx) => (
                  <div key={weekIdx} className="heatmap-week">
                    {Array.from({ length: 7 }, (_, dayIdx) => {
                      const intensity = weekIdx > 30 ? Math.random() : weekIdx > 20 ? Math.random() * 0.3 : 0;
                      return (
                        <div 
                          key={dayIdx} 
                          className="heatmap-day"
                          style={{ 
                            background: intensity > 0.7 ? '#39d353' : 
                                       intensity > 0.4 ? '#26a641' : 
                                       intensity > 0.1 ? '#006d32' : 
                                       'rgba(255,255,255,0.05)'
                          }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="heatmap-months">
                {['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'].map(m => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </a>
        </div>


        {/* Charts Row */}
        <div className="charts-row">
          <div className="chart-card">
            <h3 className="chart-title">Total Problems by Platform</h3>
            <PieChart />
          </div>
          
          <div className="chart-card bar-chart-card">
            <h3 className="chart-title">Problem Distribution</h3>
            <div className="bar-chart">
              {/* Combined platforms for bar chart - merging Codeforces accounts */}
              {[
                { name: 'Codeforces', problems: 883, color: '#1F8ACB', Logo: CodeforcesLogo },
                { name: 'LeetCode', problems: 173, color: '#FFA116', Logo: LeetCodeLogo },
                { name: 'VJudge', problems: 152, color: '#4CAF50', Logo: VJudgeLogo },
                { name: 'CodeChef', problems: 106, color: '#5B4638', Logo: CodeChefLogo },
                { name: 'AtCoder', problems: 44, color: '#222222', Logo: AtCoderLogo },
                { name: 'LightOJ', problems: 26, color: '#FF5722', Logo: LightOJLogo },
              ].map((platform, i) => (
                <div key={i} className="bar-item" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="bar-info">
                    <span className="bar-icon" style={{ color: platform.color }}>{<platform.Logo />}</span>
                    <span className="bar-name">{platform.name}</span>
                  </div>
                  <div className="bar-track">
                    <div 
                      className="bar-fill" 
                      style={{ 
                        width: `${(platform.problems / 883) * 100}%`,
                        background: platform.color 
                      }}
                    ></div>
                  </div>
                  <span className="bar-value">{platform.problems}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Cards Grid */}
        <div className="platforms-grid">
          {platforms.slice(1).map((platform, i) => (
            <a
              key={i}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card"
              style={{ 
                '--platform-color': platform.color,
                animationDelay: `${i * 0.1}s`
              } as React.CSSProperties}
            >
              <div className="platform-icon" style={{ color: platform.color }}>{<platform.Logo />}</div>
              <div className="platform-info">
                <h4 className="platform-name">{platform.name}</h4>
                <span className="platform-handle">@{platform.handle}</span>
              </div>
              <div className="platform-stats">
                <div className="platform-problems">
                  <span className="problems-value"><AnimatedCounter target={platform.problems} /></span>
                  <span className="problems-label">Problems</span>
                </div>
                {platform.rating && (
                  <div className="platform-rating">
                    <span className="rating-value">{platform.rating}</span>
                    <span className="rating-label">Rating</span>
                  </div>
                )}
              </div>
              <div className="platform-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolvingStats;
