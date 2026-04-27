import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../contexts/LanguageContext';
import './HeroSection.css';

const CODE_LINES = [
  { text: 'const dev = new DesarrollosNerd();', delay: 0 },
  { text: '', delay: 300 },
  { text: 'await dev.build({', delay: 500 },
  { text: "  idea: tuVision,", delay: 700 },
  { text: "  tech: ['React', 'Node', 'Cloud'],", delay: 900 },
  { text: "  quality: 'premium',", delay: 1100 },
  { text: '});', delay: 1300 },
  { text: '', delay: 1500 },
  { text: '// ✓ Tu visión hecha realidad', delay: 1700 },
];

function HeroSection() {
  const { t } = useLang();
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = CODE_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(v => Math.max(v, i + 1)), line.delay + 400)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg-grid" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-2" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            {t.hero.badge}
          </div>

          <h1 className="hero-title">
            {t.hero.title}
            <span className="hero-title-gradient">{t.hero.titleGradient}</span>
          </h1>

          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <div className="hero-actions">
            <Link to="/servicios" className="btn-hero-primary">
              {t.hero.cta1}
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/contacto" className="btn-hero-secondary">
              {t.hero.cta2}
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-num">10+</span>
              <span className="stat-lbl">{t.hero.stat1Label}</span>
            </div>
            <div className="stat-sep"></div>
            <div className="hero-stat">
              <span className="stat-num">5+</span>
              <span className="stat-lbl">{t.hero.stat2Label}</span>
            </div>
            <div className="stat-sep"></div>
            <div className="hero-stat">
              <span className="stat-num">100%</span>
              <span className="stat-lbl">{t.hero.stat3Label}</span>
            </div>
          </div>
        </div>

        <div className="hero-code-window">
          <div className="code-win-header">
            <span className="code-dot dot-red"></span>
            <span className="code-dot dot-yellow"></span>
            <span className="code-dot dot-green"></span>
            <span className="code-win-title">main.js — Desarrollos Nerd</span>
          </div>
          <div className="code-win-body">
            {CODE_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="code-row">
                <span className="code-ln">{i + 1}</span>
                <span className="code-txt">
                  <ColorizedLine text={line.text} />
                </span>
              </div>
            ))}
            {visibleLines < CODE_LINES.length && (
              <div className="code-row">
                <span className="code-ln">{visibleLines + 1}</span>
                <span className="code-cursor">▋</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
}

function ColorizedLine({ text }) {
  if (!text) return <span>&nbsp;</span>;

  if (text.includes('//')) {
    const idx = text.indexOf('//');
    return (
      <>
        {idx > 0 && <span>{text.slice(0, idx)}</span>}
        <span className="code-comment">{text.slice(idx)}</span>
      </>
    );
  }

  const keywords = /\b(const|await|new|return)\b/g;
  const strings = /(['"`][^'"`]*['"`])/g;
  const combined = new RegExp(`(${keywords.source}|${strings.source})`, 'g');

  const parts = [];
  let last = 0;
  let key = 0;
  let match;

  while ((match = combined.exec(text)) !== null) {
    if (match.index > last) parts.push(<span key={key++}>{text.slice(last, match.index)}</span>);
    if (/^(const|await|new|return)$/.test(match[0])) {
      parts.push(<span key={key++} className="code-kw">{match[0]}</span>);
    } else {
      parts.push(<span key={key++} className="code-str">{match[0]}</span>);
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(<span key={key++}>{text.slice(last)}</span>);
  return <>{parts}</>;
}

export default HeroSection;
