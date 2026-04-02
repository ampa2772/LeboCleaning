import { useState, useEffect, useRef } from 'react';
import './LeboLanding.css';

const servicesDataTop = [
  {
    title: "Residential Cleaning",
    icon: (
      <svg className="sc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    desc: "Recurring or one-time standard cleans with a detailed checklist.",
    bullets: ["Kitchen & baths detailed", "Vacuum & mop all floors", "Dusting, mirrors, surfaces"]
  },
  {
    title: "Deep Cleaning",
    icon: (
      <svg className="sc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    desc: "Top-to-bottom refresh: baseboards, inside cabinets, behind/under appliances.",
    bullets: []
  },
  {
    title: "Move-In / Move-Out",
    icon: (
      <svg className="sc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
    desc: "Landlord-ready results for stress-free moves and handovers.",
    bullets: []
  }
];

const servicesDataBottom = [
  {
    title: "Commercial & Office",
    icon: (
      <svg className="sc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    desc: "Offices, clinics, retail — after-hours janitorial and day porter service.",
    bullets: ["Nightly/weekly schedules", "Waste, wipes, washrooms", "Floor care & supplies mgmt"]
  },
  {
    title: "Post-Construction",
    icon: (
      <svg className="sc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      </svg>
    ),
    desc: "Fine dust removal, sticker/adhesive cleanup, and detail finishing.",
    bullets: []
  },
  {
    title: "Airbnb / STR Turnovers",
    icon: (
      <svg className="sc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    desc: "Hotel-style turnovers with laundry, restocking, and photo proof.",
    bullets: ["Laundry & linen reset", "Restock amenities", "Photo proof on completion"]
  },
  {
    title: "Eco Options",
    icon: (
      <svg className="sc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><line x1="2" y1="22" x2="11" y2="13"></line>
      </svg>
    ),
    desc: "Plant-based products available on request for a low-scent clean.",
    bullets: []
  }
];

const CheckIcon = () => (
  <svg className="sc-bullet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

function LeboLanding() {
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  const galleryImages = [
    '/slide1.png', '/slide2.png', '/slide3.png', '/slide4.png',
    '/slide5.png', '/slide6.png', '/slide7.png'
  ];
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Do you bring supplies and equipment?",
      a: "Yes—pro-grade tools and products are included. Eco options are available. If you prefer we use your supplies, we're happy to."
    },
    {
      q: "How do you price?",
      a: "Homes are priced by size, bathrooms/bedrooms, condition, and frequency. Offices are priced by square footage, scope, and schedule. Get a quick quote below."
    },
    {
      q: "What if something is missed?",
      a: "Let us know promptly and we'll work with you to address it as soon as possible."
    },
    {
      q: "Do you do Airbnb turnovers?",
      a: "Yes—turnarounds with linens/laundry, restocking, and optional photo documentation."
    }
  ];

  useEffect(() => {
    const galleryInterval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4500);
    return () => clearInterval(galleryInterval);
  }, []);

  const redZoneRef = useRef(null);
  const bgVideosRef = useRef([]);
  const isFirstBgPlay = useRef(true);
  const isFading = useRef(false);

  const crossfadeDuration = 1.5; // Durée de chevauchement avant la fin

  const handleTimeUpdate = (e, index) => {
    if (index !== currentBgIndex) return;

    const video = e.target;
    if (!video.duration) return;

    const timeLeft = video.duration - video.currentTime;
    
    if (timeLeft <= crossfadeDuration && !isFading.current) {
      isFading.current = true;
      setCurrentBgIndex((prev) => (prev + 1) % 5);
    }
  };

  useEffect(() => {
    isFading.current = false;

    if (isVideoEnded && bgVideosRef.current[currentBgIndex]) {
      const video = bgVideosRef.current[currentBgIndex];
      
      if (isFirstBgPlay.current) {
        video.currentTime = 0;
        isFirstBgPlay.current = false;
      } else {
        // Skip the first second to avoid static/frozen frames on start
        video.currentTime = 1;
      }
      
      video.play().catch(e => console.error("Video play error:", e));
    }
  }, [currentBgIndex, isVideoEnded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (redZoneRef.current) {
      observer.observe(redZoneRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    notes: '',
  });

  const [services, setServices] = useState({
    bedrooms: true,
    bathrooms: true,
    kitchen: true,
    offices: true,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (service) => {
    setServices({ ...services, [service]: !services[service] });
  };

  return (
    <div className="lebo-landing">
      {/* Background image - no overlay */}
      <div className="bg-image" />

      {/* Header bar */}
      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            <div className="logo">
              <span className="logo-circle">LC</span>
              <span className="logo-text">Lebo Cleaning Services</span>
            </div>
            <nav className="nav">
              <a href="#services">Services</a>
              <span className="nav-dot">·</span>
              <a href="#service-area">Service Area</a>
              <span className="nav-dot">·</span>
              <a href="#pricing">Pricing</a>
              <span className="nav-dot">·</span>
              <a href="#process">Process</a>
              <span className="nav-dot">·</span>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
          <a href="tel:4165557890" className="header-phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            416-555-7890
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Left */}
        <section className="hero-left">
          <h1>
            <span className="h1-line1">Trusted cleaning across</span><br />
            <span className="h1-line2">GTA &amp; Durham</span>
          </h1>
          <p className="hero-description">
            Residential, commercial, post-construction, and<br />
            Airbnb/short-term rental turnovers.<br />
            Eco options available.
          </p>
          <div className="rating-row">
            <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="rating-text">Excellent feedback from local clients</span>
          </div>
          <div className="features-row">
            <span className="feature">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4dd8c0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Supplies included
            </span>
            <span className="feature">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4dd8c0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Eco supplies on request
            </span>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">Get an Instant Quote</button>
            <button className="btn-secondary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              See Pricing
            </button>
          </div>
        </section>

        {/* Form Right */}
        <section className="form-section">
          <div className="form-card">
            <h2>Get Your Price</h2>
            <p className="form-subtitle">
              Fill out this quick form to receive a same-day quote and<br />
              check availability.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} />
                <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="form-row">
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
                <input type="text" name="city" placeholder="City (e.g., Whitby)" value={formData.city} onChange={handleInputChange} />
              </div>
              <div className="services-section">
                <div className="services-header">
                  <label className="services-label">Select service</label>
                  <svg className="services-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
                <div className="services-checkboxes">
                  {['bedrooms', 'bathrooms', 'kitchen', 'offices'].map((s) => (
                    <label key={s} className="checkbox-label">
                      <input type="checkbox" checked={services[s]} onChange={() => handleServiceToggle(s)} />
                      <span className="checkmark">&#10003;</span>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
              <textarea name="notes" placeholder="Notes (pets, parking, preferred dates)" value={formData.notes} onChange={handleInputChange} rows={2} />
              <div className="call-info">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a5276" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <div>
                  <strong>Call us: 416-555-7890</strong>
                  <span>Available 7 days a week from 8 AM to 6 PM</span>
                </div>
              </div>
              <button type="submit" className="btn-submit">Request Quote</button>
            </form>
          </div>

          {/* Bottom call section */}
          <div className="bottom-call">
            <div className="call-info bottom-call-info">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a5276" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2"/>
                <line x1="12" y1="18" x2="12" y2="18.01"/>
              </svg>
              <div>
                <strong>Call us:&nbsp; 416-555-7890</strong>
                <span>Available 7 days a week from 8 AM to 6 PM</span>
              </div>
            </div>
            <button className="btn-submit btn-submit-bottom">Request Quote</button>
          </div>
        </section>
      </main>

      {/* Features Bar */}
      <section className="features-bar">
        <div className="features-bar-inner">
          <div className="feature-card">
            <div className="feature-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="feature-card-text">
              <strong>Flexible Scheduling</strong>
              <span>Evenings &amp; weekends</span>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <div className="feature-card-text">
              <strong>Supplies Included</strong>
              <span>Pro tools &amp; products</span>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div className="feature-card-text">
              <strong>Detailed Checklists</strong>
              <span>Room-by-room tasks</span>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
            </div>
            <div className="feature-card-text">
              <strong>Simple Payments</strong>
              <span>Card or e-Transfer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Red Zone */}
      <section className="red-zone" ref={redZoneRef}>
        {!isVideoEnded && (
          <img src="/video-bg.png" alt="Video Background" className="video-bg-img" />
        )}
        
        {isVideoEnded && (
          <div className="bg-videos-container fade-in-bg">
            {[1, 2, 3, 4, 5].map((num, i) => (
              <video
                key={num}
                ref={(el) => (bgVideosRef.current[i] = el)}
                src={`/${num}.mp4`}
                className={`bg-video ${i === currentBgIndex ? 'active' : ''}`}
                muted
                playsInline
                onTimeUpdate={(e) => handleTimeUpdate(e, i)}
                onEnded={() => {
                  if (i === currentBgIndex && !isFading.current) {
                    setCurrentBgIndex((prev) => (prev + 1) % 5);
                  }
                }}
              />
            ))}
          </div>
        )}
        
        {showVideo && !isVideoEnded && (
          <video 
            src="/presentation.mp4" 
            className="presentation-video fade-in" 
            autoPlay 
            muted
            playsInline
            onEnded={() => setIsVideoEnded(true)}
          />
        )}

        {isVideoEnded && (
          <div className="services-overlay fade-in">
            <h2>Services</h2>
            <p className="services-sub">From recurring home cleans to construction dust-outs and office janitorial, we've got you covered.</p>
            
            <div className="services-grid-top">
              {servicesDataTop.map((srv, i) => (
                <div key={i} className="service-card">
                  <div className="sc-icon-wrapper">{srv.icon}</div>
                  <div className="sc-title">{srv.title}</div>
                  <div className="sc-desc">{srv.desc}</div>
                  {srv.bullets && srv.bullets.length > 0 && (
                    <ul className="sc-bullets">
                      {srv.bullets.map((b, j) => (
                        <li key={j} className="sc-bullet">
                          <CheckIcon />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="services-grid-bottom">
              {servicesDataBottom.map((srv, i) => (
                <div key={i} className="service-card">
                  <div className="sc-icon-wrapper">{srv.icon}</div>
                  <div className="sc-title">{srv.title}</div>
                  <div className="sc-desc">{srv.desc}</div>
                  {srv.bullets && srv.bullets.length > 0 && (
                    <ul className="sc-bullets">
                      {srv.bullets.map((b, j) => (
                        <li key={j} className="sc-bullet">
                          <CheckIcon />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-left">
            <h2>Spotless Results, <br/> Real Spaces</h2>
            <p>A few examples of our work</p>
          </div>
          <div className="gallery-right">
            <div className="gallery-frame">
              {galleryImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Gallery slide ${i + 1}`}
                  className={`gallery-slide ${i === currentGalleryIndex ? 'active' : ''}`}
                />
              ))}
              <div className="gallery-indicators">
                {galleryImages.map((_, i) => (
                  <span 
                    key={i} 
                    className={`gallery-dot ${i === currentGalleryIndex ? 'active' : ''}`}
                    onClick={() => setCurrentGalleryIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="pricing-header">
          <h2>Transparent Pricing</h2>
          <p>Final quotes depend on home size/condition and visit frequency. Below are typical ranges to help you budget.</p>
        </div>

        <div className="pricing-container">
          <div className="pricing-grid-top">
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="pc-title">Standard Clean</div>
              <div className="pc-price">$165+</div>
              <div className="pc-subtext">1-2 bed condo/home</div>
              <ul className="pc-bullets">
                <li><CheckIcon /> <span>Kitchen & baths</span></li>
                <li><CheckIcon /> <span>Dusting & floors</span></li>
                <li><CheckIcon /> <span>Inside microwave</span></li>
              </ul>
              <button className="pc-btn">Get Quote</button>
            </div>

            <div className="pricing-card">
              <div className="pc-title">Deep Clean</div>
              <div className="pc-price">$250-$400</div>
              <div className="pc-subtext">Avg 2-3 bed home</div>
              <ul className="pc-bullets">
                <li><CheckIcon /> <span>Baseboards & doors</span></li>
                <li><CheckIcon /> <span>Inside cabinets (select)</span></li>
                <li><CheckIcon /> <span>Behind/under appliances</span></li>
              </ul>
              <button className="pc-btn">Get Quote</button>
            </div>

            <div className="pricing-card">
              <div className="pc-title">Move In/Out</div>
              <div className="pc-price">$250-$600</div>
              <div className="pc-subtext">Scope varies by size</div>
              <ul className="pc-bullets">
                <li><CheckIcon /> <span>Fridge/oven add-ons</span></li>
                <li><CheckIcon /> <span>Inside all cabinets</span></li>
                <li><CheckIcon /> <span>Rental-ready finish</span></li>
              </ul>
              <button className="pc-btn">Get Quote</button>
            </div>
          </div>

          <div className="pricing-grid-bottom">
            <div className="pricing-card-small">
              <div className="pc-title-small">Hourly Option</div>
              <p>$50-$65 per cleaner-hour for custom tasks or partial scopes.</p>
            </div>
            <div className="pricing-card-small">
              <div className="pc-title-small">Airbnb / STR</div>
              <p>Turnovers priced per unit with laundry & restocking. Ask about calendar sync and QA.</p>
            </div>
          </div>
          
          <div className="pricing-footer">
            All prices in CAD. HST applies.
          </div>
        </div>
      </section>

      {/* Information Sections: Service Area, How It Works, Reviews */}
      <section className="info-section">
        <div className="info-container">
          
          <div className="info-block">
            <h2 className="info-title">Service Area</h2>
            <div className="area-grid">
              <div className="info-card">
                <div className="area-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                <div>
                  <div className="area-name">GTA Core</div>
                  <div className="area-desc">Toronto, North York, Etobicoke, Scarborough, York</div>
                </div>
              </div>
              <div className="info-card">
                <div className="area-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                <div>
                  <div className="area-name">West GTA / Peel + Halton</div>
                  <div className="area-desc">Mississauga, Brampton, Oakville, Milton, Burlington</div>
                </div>
              </div>
              <div className="info-card">
                <div className="area-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                <div>
                  <div className="area-name">York + Simcoe</div>
                  <div className="area-desc">Vaughan, Richmond Hill, Markham, Aurora, Newmarket</div>
                </div>
              </div>
              <div className="info-card">
                <div className="area-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                <div>
                  <div className="area-name">Durham Region</div>
                  <div className="area-desc">Pickering, Ajax, Whitby, Oshawa, Clarington</div>
                </div>
              </div>
            </div>
          </div>

          <div className="info-block">
            <h2 className="info-title">How It Works</h2>
            <div className="steps-grid">
              <div className="info-card step-card">
                <div className="step-number">1</div>
                <div>
                  <h3 className="step-title">Tell us about your space</h3>
                  <p className="step-desc">Size, bathrooms, priorities, pets, parking—straightforward form takes 60 seconds.</p>
                </div>
              </div>
              <div className="info-card step-card">
                <div className="step-number">2</div>
                <div>
                  <h3 className="step-title">Get a firm quote</h3>
                  <p className="step-desc">Transparent scope and add-ons. Choose recurring to save 10-20%.</p>
                </div>
              </div>
              <div className="info-card step-card">
                <div className="step-number">3</div>
                <div>
                  <h3 className="step-title">Relax while we clean</h3>
                  <p className="step-desc">Trained teams arrive with supplies. Tell us if anything needs attention.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-block">
            <h2 className="info-title">Recent Reviews</h2>
            <div className="reviews-grid">
              <div className="info-card review-card">
                <div className="stars">★★★★★</div>
                <p className="review-text">"They saved our move-in weekend. The place looked new!"</p>
                <div className="review-author">— Sonia K., North York</div>
              </div>
              <div className="info-card review-card">
                <div className="stars">★★★★★</div>
                <p className="review-text">"Nightly office cleaning has been flawless. Great communication."</p>
                <div className="review-author">— Martin D., Whitby</div>
              </div>
              <div className="info-card review-card">
                <div className="stars">★★★★★</div>
                <p className="review-text">"Airbnb turnovers are spotless—guests keep mentioning the cleanliness."</p>
                <div className="review-author">— Alyssa P., Pickering</div>
              </div>
            </div>
          </div>

          <div className="info-block" style={{ width: '100%', maxWidth: '55rem' }}>
            <h2 className="info-title">Our Approach</h2>
            <div className="info-card approach-card">
              <ul className="approach-list">
                <li><CheckIcon /> Trained, friendly teams</li>
                <li><CheckIcon /> Respect for your space and privacy</li>
                <li><CheckIcon /> Clear arrival windows and communication</li>
                <li><CheckIcon /> We bring standard supplies and tools</li>
                <li><CheckIcon /> Optional post-clean walkthrough</li>
              </ul>
            </div>
          </div>

          <div className="info-block faq-block" style={{ width: '100%', maxWidth: '65rem' }}>
            <h2 className="info-title">Frequently Asked Questions</h2>
            <div className="faq-container">
              {faqs.map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => toggleFaq(i)}>
                  <div className="faq-question">
                    {faq.q}
                    <span className="faq-icon">
                      {openFaq === i ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.2rem', height: '1.2rem' }}>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.2rem', height: '1.2rem' }}>
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      )}
                    </span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-col">
            <div className="footer-logo">Lebo Cleaning Services</div>
            <p>Professional cleaning across the GTA and Durham Region.</p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>1-647-779-1615</p>
            <p>Lebo.info@gmail.com</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>Services</li>
              <li>Service Area</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Lebo Cleaning Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default LeboLanding;
