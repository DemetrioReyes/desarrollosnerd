import React from 'react';
import { useLang } from '../../contexts/LanguageContext';
import './MisionVision.css';

function MisionVision() {
  const { t } = useLang();
  return (
    <section className="mision-vision-section">
      <div className="mision-vision-container">
        <span className="section-eyebrow">{t.mission.eyebrow}</span>
        <h2 className="section-title">
          {t.mission.title} <span>{t.mission.titleAccent}</span>
        </h2>
        <p className="section-subtitle">{t.mission.subtitle}</p>

        <div className="mvv-cards">
          <div className="mvv-card">
            <div className="card-icon"><i className="fas fa-rocket"></i></div>
            <h3>{t.mission.missionTitle}</h3>
            <p>{t.mission.missionText}</p>
          </div>

          <div className="mvv-card">
            <div className="card-icon"><i className="fas fa-eye"></i></div>
            <h3>{t.mission.visionTitle}</h3>
            <p>{t.mission.visionText}</p>
          </div>

          <div className="mvv-card">
            <div className="card-icon"><i className="fas fa-star"></i></div>
            <h3>{t.mission.valuesTitle}</h3>
            <ul>
              <li>{t.mission.value1}</li>
              <li>{t.mission.value2}</li>
              <li>{t.mission.value3}</li>
              <li>{t.mission.value4}</li>
              <li>{t.mission.value5}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MisionVision;
