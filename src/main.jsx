import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Check, Clock3, Dumbbell,
  Instagram, Mail, MapPin, Menu, Quote, Sparkles,
  Users, X, Zap, ShieldCheck, Award
} from "lucide-react";
import "./styles.css";

// Curated Ultra-Aesthetic High-Resolution Gym Imagery
const IMG = {
  // Full-screen background for Hero (Edge-to-Edge)
  heroBg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=85",
  
  // Program 01: Strength Lab (Barbell, chalk, knurling & dramatic lighting)
  strength: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=1400&q=85",
  
  // Program 02: Athletic Engine (Explosive battle ropes, athletic conditioning)
  conditioning: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1400&q=85",
  
  // Program 03: VYRA Flow & Mobility (Sunlit studio, joint mobility, active decompression)
  mobility: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=85",
  
  // Program 04: 1:1 Personal Coaching (Biomechanics coach with lifter)
  coaching: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=85",
  
  // Coaches photos
  coach1: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",
  coach2: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=85",
  coach3: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=85",
  
  // Philosophy & Coaching Standard
  philosophy: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85"
};

// MINIMAL AESTHETIC GYM THEMED LOADING ANIMATION (Monochromatic Matte Black & Chrome)
function GymPreloader() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 250);
          setTimeout(() => setHidden(true), 850);
          return 100;
        }
        return prev + 4;
      });
    }, 38);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => setHidden(true), 300);
  };

  if (hidden) return null;

  // Calculate live barbell weight based on loaded plates
  let weight = 45;
  let statusText = "CHALKING HANDS & APPROACHING PLATFORM...";
  if (progress >= 25 && progress < 50) {
    weight = 135;
    statusText = "RACKING 45LB OLYMPIC BUMPER PLATES (135 LBS)...";
  } else if (progress >= 50 && progress < 75) {
    weight = 225;
    statusText = "SLIDING SECOND PAIR OF 45S (225 LBS)... NO SHORTCUTS...";
  } else if (progress >= 75 && progress < 90) {
    weight = 275;
    statusText = "ADDING 25LB PLATES (275 LBS)... DIALING IN MAXIMUM FOCUS...";
  } else if (progress >= 90) {
    weight = 315;
    statusText = "COLLARS LOCKED (315 LBS LOADED)... LIGHT WEIGHT BABY!";
  }

  return (
    <div className={`gym-preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="gym-preloader-backdrop" />
      <div className="gym-preloader-box">
        <div className="preloader-tag">
          <Dumbbell size={14} />
          <span>PRE-WORKOUT LOADING SEQUENCE</span>
        </div>

        <div className="preloader-brand-title">
          VYRA<span>.</span>
        </div>

        {/* Minimalist Matte Black & Chrome Olympic Barbell Graphic */}
        <div className="barbell-stage-container">
          <svg className="barbell-svg" viewBox="0 0 460 110">
            <defs>
              <linearGradient id="barChrome" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <linearGradient id="plateMatteBlack" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e2220" />
                <stop offset="50%" stopColor="#2c322e" />
                <stop offset="100%" stopColor="#181b19" />
              </linearGradient>
              <linearGradient id="plateCharcoal" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#333834" />
                <stop offset="50%" stopColor="#414742" />
                <stop offset="100%" stopColor="#282d29" />
              </linearGradient>
              <linearGradient id="collarChrome" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>

            {/* Central Knurled Barbell Shaft */}
            <rect x="50" y="51" width="360" height="8" rx="3" fill="url(#barChrome)" />

            {/* Knurling Texture Zones */}
            <rect x="145" y="51" width="60" height="8" fill="rgba(255,255,255,0.4)" />
            <rect x="255" y="51" width="60" height="8" fill="rgba(255,255,255,0.4)" />

            {/* Inner Barbell Sleeves / Rings */}
            <rect x="110" y="44" width="8" height="22" rx="2" fill="url(#collarChrome)" />
            <rect x="342" y="44" width="8" height="22" rx="2" fill="url(#collarChrome)" />

            {/* Left Sleeve Barbell Rod */}
            <rect x="40" y="49" width="70" height="12" rx="2" fill="url(#barChrome)" />
            {/* Right Sleeve Barbell Rod */}
            <rect x="350" y="49" width="70" height="12" rx="2" fill="url(#barChrome)" />

            {/* Pair 1: 45lb Matte Black Bumper Plates (at >= 25%) */}
            {progress >= 25 && (
              <g style={{ transition: "all 0.3s ease" }}>
                <rect x="96" y="15" width="12" height="80" rx="3" fill="url(#plateMatteBlack)" stroke="#475569" strokeWidth="0.5" />
                <rect x="352" y="15" width="12" height="80" rx="3" fill="url(#plateMatteBlack)" stroke="#475569" strokeWidth="0.5" />
                <text x="102" y="58" fill="#e2e8f0" fontSize="7" fontWeight="bold" textAnchor="middle">45</text>
                <text x="358" y="58" fill="#e2e8f0" fontSize="7" fontWeight="bold" textAnchor="middle">45</text>
              </g>
            )}

            {/* Pair 2: 45lb Matte Black Bumper Plates (at >= 50%) */}
            {progress >= 50 && (
              <g style={{ transition: "all 0.3s ease" }}>
                <rect x="82" y="15" width="12" height="80" rx="3" fill="url(#plateMatteBlack)" stroke="#475569" strokeWidth="0.5" />
                <rect x="366" y="15" width="12" height="80" rx="3" fill="url(#plateMatteBlack)" stroke="#475569" strokeWidth="0.5" />
                <text x="88" y="58" fill="#e2e8f0" fontSize="7" fontWeight="bold" textAnchor="middle">45</text>
                <text x="372" y="58" fill="#e2e8f0" fontSize="7" fontWeight="bold" textAnchor="middle">45</text>
              </g>
            )}

            {/* Pair 3: 25lb Charcoal Bumper Plates (at >= 75%) */}
            {progress >= 75 && (
              <g style={{ transition: "all 0.3s ease" }}>
                <rect x="69" y="24" width="11" height="62" rx="3" fill="url(#plateCharcoal)" stroke="#64748b" strokeWidth="0.5" />
                <rect x="380" y="24" width="11" height="62" rx="3" fill="url(#plateCharcoal)" stroke="#64748b" strokeWidth="0.5" />
                <text x="74.5" y="58" fill="#f8fafc" fontSize="6.5" fontWeight="bold" textAnchor="middle">25</text>
                <text x="385.5" y="58" fill="#f8fafc" fontSize="6.5" fontWeight="bold" textAnchor="middle">25</text>
              </g>
            )}

            {/* Pair 4: 10lb Slate Bumper Plates (at >= 90%) */}
            {progress >= 90 && (
              <g style={{ transition: "all 0.3s ease" }}>
                <rect x="57" y="32" width="10" height="46" rx="2" fill="url(#plateCharcoal)" stroke="#94a3b8" strokeWidth="0.5" />
                <rect x="393" y="32" width="10" height="46" rx="2" fill="url(#plateCharcoal)" stroke="#94a3b8" strokeWidth="0.5" />
                <text x="62" y="58" fill="#f8fafc" fontSize="6" fontWeight="bold" textAnchor="middle">10</text>
                <text x="398" y="58" fill="#f8fafc" fontSize="6" fontWeight="bold" textAnchor="middle">10</text>
              </g>
            )}

            {/* Barbell Lock Collars (at >= 95%) */}
            {progress >= 95 && (
              <g style={{ transition: "all 0.25s ease" }}>
                <rect x="47" y="42" width="8" height="26" rx="2" fill="url(#collarChrome)" stroke="#94a3b8" strokeWidth="0.5" />
                <rect x="405" y="42" width="8" height="26" rx="2" fill="url(#collarChrome)" stroke="#94a3b8" strokeWidth="0.5" />
              </g>
            )}
          </svg>
        </div>

        {/* Live Weight Display */}
        <div className="weight-display-badge">
          <span className="weight-number">{weight}</span>
          <span className="weight-unit">LBS LOADED · {progress}%</span>
        </div>

        <div className="gym-status-text">{statusText}</div>

        <div className="preloader-progress-track">
          <div className="preloader-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <button className="skip-btn" onClick={handleSkip}>
          Enter Club Floor →
        </button>
      </div>
    </div>
  );
}

// Floating Ambient Dumbbell Particles
function DumbbellField() {
  return (
    <div className="dumbbell-field" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <div className={`floating-db db-${i}`} key={i}>
          <span>●</span>
          <i></i>
          <span>●</span>
        </div>
      ))}
    </div>
  );
}

// Safe Scroll-To-Top
function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

// Top Announcement Ticker Bar
function TopTicker() {
  return (
    <div className="top-ticker">
      <div className="container ticker-content">
        <div className="ticker-badge">
          <span className="pulse-dot"></span>
          <span>CLUB LIVE: 06 ZONES OPEN · 14 COACHES ON DECK</span>
        </div>
        <div>VELLORE, TAMIL NADU · 05:30 — 22:00 DAILY</div>
      </div>
    </div>
  );
}

// Clean Navigation Header (No theme switcher toggle)
function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["Programs", "/programs"],
    ["Coaches", "/coaches"],
    ["Membership", "/membership"],
    ["Contact", "/contact"]
  ];

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          VYRA<span>.</span>
        </Link>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}
            >
              {name}
            </NavLink>
          ))}
        </div>

        <div className="nav-right">
          <Link className="nav-cta" to="/membership" onClick={() => setOpen(false)}>
            Start training <ArrowUpRight size={15} />
          </Link>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

// Dedicated Next Page Banner
function NextPageBanner({ to, eyebrow, title, copy, buttonText = "Go to next page" }) {
  return (
    <section className="container">
      <div className="next-page-banner">
        <div className="next-page-meta">
          <div className="eyebrow">{eyebrow}</div>
          <h3>{title}</h3>
          <p>{copy}</p>
        </div>
        <Link to={to} className="btn">
          {buttonText} <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}

// Standard Button
function Button({ to = "/membership", children = "Start training", outline = false, className = "" }) {
  return (
    <Link className={`btn ${outline ? "btn-outline" : ""} ${className}`} to={to}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

// Section Title
function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="section-title">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

// Page Hero for Secondary Pages
function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

// Interactive Goal Matcher Widget
function GoalMatcher() {
  const [activeTab, setActiveTab] = useState(0);

  const goals = [
    {
      label: "Pure Strength",
      subtitle: "Barbells & progressive overload",
      title: "Strength Lab System",
      desc: "Designed for compound lifts, structural hypertrophy, and measurable PR progression with Eleiko equipment.",
      target: "/programs"
    },
    {
      label: "Metabolic Engine",
      subtitle: "High output athletic conditioning",
      title: "Athletic Conditioning System",
      desc: "High-intensity intervals, sled tracks, SkiErgs, and heart-rate monitored engine building.",
      target: "/programs"
    },
    {
      label: "Mobility & Flow",
      subtitle: "Joint resilience & active recovery",
      title: "VYRA Flow & Recovery",
      desc: "Restores movement kinematics, spinal decompression, and breathwork to accelerate tissue repair.",
      target: "/programs"
    },
    {
      label: "1:1 Coaching",
      subtitle: "Private tailored transformation",
      title: "Personal Mentorship Tier",
      desc: "Dedicated biomechanics coach, weekly macro adjustments, and private zone reservations.",
      target: "/coaches"
    }
  ];

  const current = goals[activeTab];

  return (
    <div className="goal-matcher">
      <div className="matcher-head">
        <div>
          <div className="eyebrow">Interactive Assessment</div>
          <h3 style={{ fontSize: "22px", marginTop: "4px" }}>What is your primary fitness goal?</h3>
        </div>
        <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>Select to match protocol</span>
      </div>

      <div className="matcher-tabs">
        {goals.map((g, idx) => (
          <button
            key={idx}
            className={`matcher-tab ${activeTab === idx ? "active" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            <strong>{g.label}</strong>
            <span>{g.subtitle}</span>
          </button>
        ))}
      </div>

      <div className="matcher-result">
        <div className="matcher-info">
          <h4>{current.title}</h4>
          <p>{current.desc}</p>
        </div>
        <Link to={current.target} className="btn btn-sm">
          View Protocol <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

// FRONT PAGE / HOME COMPONENT
function Home() {
  return (
    <div className="page page-enter">
      {/* Full-Screen Edge-to-Edge Hero: Background Gym Image + High-Contrast Quote (No small poster) */}
      <section className="hero-fullscreen" style={{ backgroundImage: `url(${IMG.heroBg})` }}>
        <div className="hero-fullscreen-overlay" />
        <DumbbellField />

        <div className="container">
          <div className="hero-fullscreen-layout">
            <div className="eyebrow">EST. 2026 · VELLORE, TAMIL NADU</div>
            <h1>
              Train with <em>purpose.</em>
            </h1>

            {/* Aesthetic Gym Quote Box (High Contrast, Razor Sharp) */}
            <div className="hero-quote-card">
              <Quote size={24} />
              <div>
                <blockquote>
                  “The pain of discipline is far less than the pain of regret. Show up. Put in the work.”
                </blockquote>
                <cite>— VYRA ATHLETIC CODE</cite>
              </div>
            </div>

            <p>
              A modern athletic club built for those who value discipline, scientific training,
              and an elevated aesthetic environment that makes consistency effortless.
            </p>

            <div className="hero-actions">
              <Button to="/membership">Join Club Today</Button>
              <Button to="/programs" outline>
                Explore Programs
              </Button>
            </div>

            <div className="hero-proof-strip">
              <div className="hero-proof-item">
                <strong>2,500+</strong>
                <span>Active Members</span>
              </div>
              <div className="hero-proof-item">
                <strong>4.9 ★</strong>
                <span>Google Rating</span>
              </div>
              <div className="hero-proof-item">
                <strong>06</strong>
                <span>Elite Zones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: The Standard */}
      <section className="section">
        <div className="container split">
          <SectionTitle
            eyebrow="01 — The Standard"
            title={
              <>
                Not just another gym.
                <br />
                <i>A transformative ritual.</i>
              </>
            }
            copy="Every square foot is engineered to make training feel focused, high-energy, and sustainable — from Swedish Eleiko plates to private recovery saunas."
          />

          <div className="intro-stats-grid">
            <div className="stat-box">
              <strong>06</strong>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>Specialized Training Zones</h4>
                <span>Olympic Lifting, Turf Conditioning, HIIT Engine, Recovery Lounge.</span>
              </div>
            </div>
            <div className="stat-box">
              <strong>24/7</strong>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>Smart RFID Access</h4>
                <span>Train on your schedule with seamless keyless entry systems.</span>
              </div>
            </div>
            <div className="stat-box">
              <strong>1:1</strong>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>Biomechanic Mentorship</h4>
                <span>Certified strength coaches dedicated to safe, measurable progress.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <GoalMatcher />
        </div>
      </section>

      {/* Section 02: Training Systems Preview (All cards updated with Aesthetic Photos & Clickable) */}
      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <SectionTitle eyebrow="02 — Systems" title="Choose your training discipline." />
            <Link className="text-link" to="/programs">
              View all 4 systems <ArrowRight size={16} />
            </Link>
          </div>

          <div className="program-grid">
            <Link to="/programs" className="program-card-link">
              <img src={IMG.strength} alt="Strength Lab System" />
              <div className="program-card-overlay">
                <span className="program-card-tag">SYSTEM 01 · STRENGTH</span>
                <h3>Strength Lab</h3>
                <p>Heavy compound movements, progressive overload, and barbell proficiency.</p>
                <span className="program-card-action">
                  Explore System <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            <Link to="/programs" className="program-card-link">
              <img src={IMG.conditioning} alt="Athletic Engine Conditioning System" />
              <div className="program-card-overlay">
                <span className="program-card-tag">SYSTEM 02 · CAPACITY</span>
                <h3>Athletic Engine</h3>
                <p>Heavy battle ropes, sled work, rowing intervals, and stamina development.</p>
                <span className="program-card-action">
                  Explore System <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            <Link to="/programs" className="program-card-link">
              <img src={IMG.mobility} alt="VYRA Flow Mobility System" />
              <div className="program-card-overlay">
                <span className="program-card-tag">SYSTEM 03 · LONGEVITY</span>
                <h3>VYRA Flow</h3>
                <p>End-range joint mobility, spinal health, and active recovery sequences.</p>
                <span className="program-card-action">
                  Explore System <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 03: Philosophy */}
      <section className="section">
        <div className="container philosophy-grid">
          <div className="philosophy-photo">
            <img src={IMG.philosophy} alt="VYRA Gym Philosophy" />
          </div>
          <div>
            <div className="eyebrow">03 — Philosophy</div>
            <h2 style={{ font: "700 clamp(36px, 4.5vw, 60px)/1.05 'Playfair Display'", margin: "18px 0 24px" }}>
              Consistency always
              <br />
              <i>beats intensity.</i>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "32px" }}>
              We reject chaotic punishment workouts and unsustainable fads. VYRA is rooted in
              intelligent biomechanics, repeatable training, and an atmosphere that motivates you to
              show up day after day.
            </p>
            <Button to="/coaches">Meet the coaches</Button>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="quote-band">
        <DumbbellField />
        <div className="container quote-content">
          <Quote size={34} />
          <blockquote>
            “The goal isn't to become someone else. It's to become more capable of being yourself.”
          </blockquote>
          <span className="quote-author">— VYRA TRAINING PRINCIPLE</span>
        </div>
      </section>

      {/* Explicit Next Page Banner */}
      <NextPageBanner
        to="/programs"
        eyebrow="NEXT PAGE"
        title={
          <>
            Step inside our <i>4 training systems.</i>
          </>
        }
        copy="Discover progressive barbell programming, metabolic conditioning, and mobility classes."
        buttonText="Next: Explore Programs"
      />
    </div>
  );
}

// PROGRAMS COMPONENT (Curated Aesthetic Photos)
const programs = [
  {
    n: "01",
    name: "Strength Lab",
    tag: "STRENGTH & POWER",
    desc: "Progressive barbell resistance training built around compound lifts, accessory movements, and structured periodization.",
    image: IMG.strength,
    features: ["Periodized Progression", "Eleiko Olympic Racks", "Biomechanical Assessment", "PR Tracking App"]
  },
  {
    n: "02",
    name: "Athletic Engine",
    tag: "CARDIOVASCULAR CAPACITY",
    desc: "High-output intervals, 30m turf sprint tracks, Concept2 rowers, SkiErgs, and metabolic conditioning.",
    image: IMG.conditioning,
    features: ["Heart Rate Monitoring", "Turf Sled Drills", "Aerobic Capacity Building", "Low Impact Cardio"]
  },
  {
    n: "03",
    name: "VYRA Flow & Mobility",
    tag: "LONGEVITY & JOINT HEALTH",
    desc: "Controlled movement practice combining deep tissue mobility, active stretching, core stability, and nervous system regulation.",
    image: IMG.mobility,
    features: ["Fascial Stretching", "Spinal Decompression", "Joint Integrity Routines", "Breathwork Sessions"]
  },
  {
    n: "04",
    name: "Private Coaching 1:1",
    tag: "INDIVIDUALIZED PROTOCOL",
    desc: "Dedicated personal coaching customized around your unique lifestyle, biomechanics, schedule, and physique goals.",
    image: IMG.coaching,
    features: ["Full Nutrition Coaching", "Form Video Reviews", "Weekly Body Comp Checks", "VIP Training Zone"]
  }
];

function Programs() {
  return (
    <div className="page page-enter">
      <PageHero
        eyebrow="TRAINING SYSTEM"
        title={
          <>
            Train for the life
            <br />
            <i>outside the gym.</i>
          </>
        }
        copy="Four focused systems. One guiding principle: intelligent, injury-free training that compounds over decades."
      />

      <section className="section">
        <div className="container program-list">
          {programs.map((p) => (
            <article className="program-row" key={p.n}>
              <div className="program-number">{p.n}</div>
              <div className="program-row-image">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="program-row-copy">
                <div className="eyebrow">{p.tag}</div>
                <h2>{p.name}</h2>
                <p>{p.desc}</p>
                <ul>
                  {p.features.map((x) => (
                    <li key={x}>
                      <Check size={16} />
                      {x}
                    </li>
                  ))}
                </ul>
                <Link className="text-link" to="/membership">
                  Start this program <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Explicit Next Page Banner */}
      <NextPageBanner
        to="/coaches"
        eyebrow="NEXT PAGE"
        title={
          <>
            Meet the coaches behind <i>the results.</i>
          </>
        }
        copy="Learn about our team of CSCS-certified strength coaches, movement specialists, and nutritionists."
        buttonText="Next: View Coaches"
      />
    </div>
  );
}

// COACHES COMPONENT
function Coaches() {
  const coaches = [
    {
      name: "Aarav Mehta",
      role: "Head of Strength & Performance",
      image: IMG.coach1,
      desc: "Former national weightlifter specializing in biomechanics, Olympic lifting mechanics, and long-term athletic development.",
      badge: "CSCS CERTIFIED"
    },
    {
      name: "Maya Rao",
      role: "Mobility & Conditioning Director",
      image: IMG.coach2,
      desc: "Pioneering athletic conditioning, FRC mobility systems, and respiratory endurance for executive athletes.",
      badge: "FRC MOBILITY"
    },
    {
      name: "Kabir Singh",
      role: "Elite 1:1 Personal Trainer",
      image: IMG.coach3,
      desc: "Goal-based physique recomposition specialist with over 8 years coaching both beginners and advanced powerlifters.",
      badge: "NASM MASTER"
    }
  ];

  return (
    <div className="page page-enter">
      <PageHero
        eyebrow="THE COACHING STAFF"
        title={
          <>
            Elite coaching changes
            <br />
            <i>everything.</i>
          </>
        }
        copy="Experienced coaches, scientific programming, and zero ego. We assess where you stand and systematically elevate you."
      />

      <section className="section">
        <div className="container coach-grid">
          {coaches.map((c) => (
            <article className="coach-card" key={c.name}>
              <div className="coach-image">
                <img src={c.image} alt={c.name} />
                <span className="coach-image-tag">
                  <Award size={13} />
                  {c.badge}
                </span>
              </div>
              <div className="coach-meta">
                <div className="coach-role">{c.role}</div>
                <h3>{c.name}</h3>
                <p className="coach-desc">{c.desc}</p>
                <Link to="/contact" className="btn btn-outline btn-sm" style={{ width: "100%" }}>
                  Book Consultation <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft">
        <div className="container philosophy-grid">
          <div>
            <div className="eyebrow">COACHING STANDARD</div>
            <h2 style={{ font: "700 clamp(36px, 4.5vw, 56px)/1.05 'Playfair Display'", margin: "16px 0 20px" }}>
              Technique first.
              <br />
              <i>Ego never.</i>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Every coach follows the VYRA baseline: analyze movement patterns, teach the rationale,
              log progressive overload data, and empower you to train with absolute autonomy.
            </p>
          </div>
          <div className="intro-stats-grid">
            <div className="stat-box">
              <ShieldCheck size={36} color="var(--accent)" />
              <div>
                <h4 style={{ fontWeight: 700 }}>100% Certified Coaches</h4>
                <span>All trainers hold international NSCA / ACSM credentials.</span>
              </div>
            </div>
            <div className="stat-box">
              <Zap size={36} color="var(--accent)" />
              <div>
                <h4 style={{ fontWeight: 700 }}>Bi-Weekly Assessments</h4>
                <span>Regular body composition, mobility, and strength testing.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explicit Next Page Banner */}
      <NextPageBanner
        to="/membership"
        eyebrow="NEXT PAGE"
        title={
          <>
            Explore simple, transparent <i>membership tiers.</i>
          </>
        }
        copy="Pick the plan that fits your ambition — from full gym access to private coaching."
        buttonText="Next: View Memberships"
      />
    </div>
  );
}

// MEMBERSHIP COMPONENT
function Membership() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "ESSENTIAL",
      monthly: "₹1,999",
      annual: "₹1,599",
      desc: "For self-directed athletes looking for world-class equipment and clean space.",
      features: [
        "Full Open Gym Access",
        "06 Specialized Training Zones",
        "Luxury Lockers & Steam Showers",
        "RFID Smart Entry",
        "VYRA Companion Workout App"
      ]
    },
    {
      name: "VYRA PLUS",
      monthly: "₹2,999",
      annual: "₹2,399",
      featured: true,
      desc: "Our most popular tier. Includes all group coaching and recovery zones.",
      features: [
        "Everything in Essential",
        "Unlimited Group Athletic Classes",
        "Infrared Sauna & Cold Plunge Access",
        "Monthly 1:1 Coach Consultation",
        "InBody Composition Scans (Monthly)",
        "Guest Pass (1 per month)"
      ]
    },
    {
      name: "PRIVATE 1:1",
      monthly: "₹6,999",
      annual: "₹5,599",
      desc: "Total bespoke transformation with dedicated coach and customized nutrition.",
      features: [
        "Everything in VYRA Plus",
        "12 Monthly 1:1 Personal Training Sessions",
        "Personalized Macros & Nutrition Guide",
        "Priority Peak-Hour Rack Reservation",
        "Complimentary Protein Shakes",
        "Unlimited Guest Passes"
      ]
    }
  ];

  return (
    <div className="page page-enter">
      <PageHero
        eyebrow="MEMBERSHIP TIERS"
        title={
          <>
            Make training a
            <br />
            <i>non-negotiable.</i>
          </>
        }
        copy="Simple plans, premium facilities, and zero locked contracts. Invest in the environment that elevates your performance."
      />

      <section className="section">
        <div className="container">
          <div className="pricing-billing-toggle">
            <span>Billed Monthly</span>
            <div className="toggle-pill">
              <button className={!annual ? "active" : ""} onClick={() => setAnnual(false)}>
                Monthly
              </button>
              <button className={annual ? "active" : ""} onClick={() => setAnnual(true)}>
                Annual
              </button>
            </div>
            <span className="save-badge">SAVE 20% YEARLY</span>
          </div>

          <div className="pricing-grid">
            {plans.map((p) => (
              <article className={`price-card ${p.featured ? "featured" : ""}`} key={p.name}>
                {p.featured && <div className="popular-badge">MOST POPULAR TIER</div>}
                <div className="eyebrow">{p.name}</div>
                <div className="price-amount">
                  {annual ? p.annual : p.monthly}
                  <small> / month</small>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "13.5px", marginBottom: "24px" }}>
                  {p.desc}
                </p>
                <div className="price-features">
                  {p.features.map((feat) => (
                    <div className="price-feature-item" key={feat}>
                      <Check size={16} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className={`btn price-btn ${p.featured ? "" : "btn-outline"}`}
                >
                  Choose {p.name} <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionTitle
            eyebrow="CLUB STANDARDS"
            title="The VYRA member experience."
            copy="We obsess over cleanliness, atmosphere, and amenities so you can focus 100% on performance."
          />
          <div className="perks-grid">
            <div className="perk-card">
              <Sparkles size={30} />
              <h3>Precision By Design</h3>
              <p>Calibrated Eleiko plates, custom dumbbells up to 60kg, and immaculate air purification.</p>
            </div>
            <div className="perk-card">
              <Users size={30} />
              <h3>Community, Not Crowds</h3>
              <p>Capped memberships guarantee you never wait in lines for squat racks or benches.</p>
            </div>
            <div className="perk-card">
              <Zap size={30} />
              <h3>Contrast Recovery Lounge</h3>
              <p>Nordic cedar saunas and 4°C cold plunge tubs to optimize parasympathetic recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explicit Next Page Banner */}
      <NextPageBanner
        to="/contact"
        eyebrow="NEXT PAGE"
        title={
          <>
            Ready to experience the space? <i>Book a tour.</i>
          </>
        }
        copy="Visit our Vellore facility, speak with coaches, and claim your complimentary 1-day guest pass."
        buttonText="Next: Contact & Book Tour"
      />
    </div>
  );
}

// CONTACT COMPONENT
function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", goal: "Gym membership", note: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page page-enter">
      <PageHero
        eyebrow="VISIT & INQUIRE"
        title={
          <>
            Come experience
            <br />
            <i>the space in person.</i>
          </>
        }
        copy="Claim a complimentary day pass, book a private tour, or speak with our training director."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <span>LOCATION</span>
                <h3>Vellore, Tamil Nadu</h3>
                <p>Near Katpadi Junction · Private parking on-site</p>
              </div>
            </div>

            <div className="contact-item">
              <Clock3 size={24} />
              <div>
                <span>HOURS OF OPERATION</span>
                <h3>05:30 — 22:00</h3>
                <p>Monday to Sunday · 24/7 Smart Access for members</p>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={24} />
              <div>
                <span>DIRECT CONCIERGE</span>
                <h3>hello@vyra.fit</h3>
                <p>Direct inquiries answered within 4 working hours</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            {sent ? (
              <div className="form-success">
                <Check size={48} />
                <h2>Tour Request Confirmed.</h2>
                <p>Thank you {formData.name || "Athlete"}. Our team will WhatsApp you your 1-Day Pass.</p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setSent(false);
                    setFormData({ name: "", email: "", goal: "Gym membership", note: "" });
                  }}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    required
                    placeholder="e.g. Manish Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Primary Interest</label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  >
                    <option>Gym membership</option>
                    <option>Personal training (1:1)</option>
                    <option>Book 1-Day VIP Guest Pass</option>
                    <option>Corporate Partnership</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Personal Goals / Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you want to achieve with VYRA..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn" style={{ width: "100%" }}>
                  Claim 1-Day Pass & Book Tour <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Explicit Next Page Banner */}
      <NextPageBanner
        to="/"
        eyebrow="RETURN TO FRONT PAGE"
        title={
          <>
            Back to <i>VYRA Club Overview.</i>
          </>
        }
        copy="Revisit training principles, membership highlights, and athletic philosophy."
        buttonText="Back to Front Page"
      />
    </div>
  );
}

// FOOTER COMPONENT
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            VYRA<span>.</span>
          </div>
          <p className="footer-bio">
            A high-performance fitness club designed around intelligent biomechanics, beautiful spaces,
            and sustainable lifelong progress.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/programs">Programs</Link>
          <Link to="/coaches">Coaches</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/contact">Book Tour</Link>
        </div>

        <div className="footer-col">
          <h4>Location</h4>
          <p>
            <MapPin size={15} /> Vellore · Tamil Nadu
          </p>
          <p>
            <Clock3 size={15} /> 05:30 — 22:00 Daily
          </p>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={15} /> Instagram
          </a>
          <a href="mailto:hello@vyra.fit">
            <Mail size={15} /> hello@vyra.fit
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 VYRA Athletic Club. All rights reserved.</span>
        <span>Move with intention. Built for lifelong athletes.</span>
      </div>
    </footer>
  );
}

// MAIN APP ROOT
function App() {
  return (
    <div className="app-container">
      <GymPreloader />
      <ScrollTop />
      <TopTicker />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
