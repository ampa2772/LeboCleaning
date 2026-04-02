const fs = require('fs');
const path = 'c:/Mes_Projets_2/TestSites/Vitrine/Lebo Nettoyage/Site/SiteSandBox - 6/lebo-cleaning/src/components/LeboLanding_converted.css';
let css = fs.readFileSync(path, 'utf8');

// Find the start of the old responsive block
const splitIndex = css.indexOf('/* ============ RESPONSIVE');
if (splitIndex !== -1) {
  css = css.substring(0, splitIndex);
}

const newResponsiveCSS = `/* ============ RESPONSIVE & MOBILE ADAPTATIONS ============ */
/* L'approche est Mobile-First et Desktop-First combinée via RemScaling pour la base, et des restructurations Layout profondes pour chaque breakpoint. */

:root {
  --base-size: 16px;
}

@media (min-width: 1600px) {
  /* 1) Desktop Large */
  html { font-size: 17px; }
  .hero-left { width: 44rem; }
  .form-section { width: 44rem; }
}

@media (max-width: 1366px) {
  /* 2) Desktop standard / Laptop */
  html { font-size: 14.5px; }
  
  .main-content {
    gap: 1.5rem;
    padding-inline: 2rem;
  }
  
  .hero-left, .form-section {
    width: 48%; /* Fluid instead of fixed */
  }
  
  .features-bar {
    padding-inline: 2rem;
  }
  
  .services-grid-top { grid-template-columns: repeat(3, 1fr); }
  .services-grid-bottom { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 1024px) {
  /* 3) Tablette */
  html { font-size: 14px; }
  
  .main-content {
    flex-direction: column;
    align-items: center;
    padding-inline: 3rem;
  }
  
  .hero-left {
    width: 100%;
    max-width: 42rem;
    align-items: center;
    text-align: center;
    background: rgba(10, 25, 55, 0.4);
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    margin-bottom: 2rem;
  }

  .form-section {
    width: 100%;
    max-width: 42rem;
  }

  .features-row {
    justify-content: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .features-bar-inner {
    flex-wrap: wrap;
  }

  .feature-card {
    flex: 1 1 45%;
  }

  /* Overlay Video Section */
  .services-overlay {
    width: 95%;
  }

  .services-grid-top, .services-grid-bottom {
    grid-template-columns: repeat(2, 1fr);
  }

  .presentation-video {
    width: 85%;
    top: calc(8rem - 40px);
  }
  
  .red-zone {
    height: 1800px;
  }
}

@media (max-width: 768px) {
  /* 4) Grand Smartphone */
  html { font-size: 13px; }
  
  .header-inner {
    padding: 1rem 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .header-left {
    flex-direction: column;
    gap: 1rem;
  }

  .nav {
    margin: 0;
  }

  .main-content {
    padding-inline: 1.5rem;
    padding-top: 1.5rem;
  }

  .hero-left h1 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }

  /* On empile les champs de formulaire qui étaient par deux */
  .form-row {
    flex-direction: column;
    gap: 0;
  }

  .form-card input, .form-card textarea {
    margin-bottom: 0.8rem;
  }
  
  .services-checkboxes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .services-grid-top, .services-grid-bottom { 
    grid-template-columns: 1fr; 
  }

  .presentation-video {
    width: 95%;
    top: 5rem;
    border-radius: 1.5rem;
  }

  .red-zone {
    height: auto;
    min-height: 2500px;
    padding-bottom: 3rem;
  }
}

@media (max-width: 480px) {
  /* 5) Smartphone Standard */
  html { font-size: 12px; }
  
  .header-inner {
    padding: 0.8rem;
  }
  
  .nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  .nav-dot { display: none; }

  .hero-left {
    padding: 1.2rem;
  }
  
  .hero-left h1 {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  /* Les boutons d'action s'empilent en pleine largeur */
  .hero-buttons {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
  }

  .btn-primary, .btn-secondary {
    text-align: center;
    justify-content: center;
    font-size: 1.1rem;
    padding: 1rem;
  }

  .features-row {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .feature {
    justify-content: center;
  }

  .feature-card {
    flex: 1 1 100%;
  }

  .bottom-call {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
  .bottom-call-info {
    justify-content: center;
    margin-bottom: 1rem;
  }
}

@media (max-width: 360px) {
  /* 6) Smartphone très étroit / très petit écran */
  html { font-size: 11px; }

  .logo-text { font-size: 1.2rem; }
  
  .hero-left h1 {
    font-size: 1.8rem;
    line-height: 1.15;
    letter-spacing: -0.05rem;
  }

  .main-content {
    padding-inline: 0.8rem;
  }

  .form-card {
    padding: 1.2rem;
  }

  .checkbox-label {
    font-size: 1rem;
  }

  .call-info strong {
    font-size: 1rem;
  }
}
`;

fs.writeFileSync('c:/Mes_Projets_2/TestSites/Vitrine/Lebo Nettoyage/Site/SiteSandBox - 6/lebo-cleaning/src/components/LeboLanding.css', css + newResponsiveCSS);
console.log('CSS updated successfully.');
