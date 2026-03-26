import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  const { scrollY } = useScroll();
  const yImg = useTransform(scrollY, [0, 400], [0, 40]);

  return (
    <section className="hero" id="home">
      {/* Background mesh */}
      <div className="hero-bg-mesh" />
      <div className="hero-glow primary" />
      <div className="hero-glow secondary" />

      <div className="container hero-container">
        {/* Left: Text */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-badge">
            <span className="badge-dot" />
            Open to Full-Time Opportunities
          </div>

          <h1 className="hero-title">
            Engineering<br />
            <span className="gradient-text">Future-Proof</span><br />
            Systems.
          </h1>

          <p className="hero-description">
            Full Stack App Developer specializing in Flutter, Python, and AI-powered applications.
            Passionate about building intuitive mobile and web experiences backed by intelligent, scalable backends.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">5+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">Fresher</span>
              <span className="stat-label">Work Status</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#" download className="btn btn-outline">
              Download CV
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right: Profile card */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div className="hero-profile-card card" style={{ y: yImg }}>
            <div className="profile-img-wrap">
              <img src={profileImg} alt="Ganesh Thummala" className="profile-img" />
            </div>
            <div className="profile-info">
              <h3 className="profile-name">Ganesh T.</h3>
              <p className="profile-role">Full Stack App Developer</p>
              <div className="profile-tags">
                <span className="tag">Flutter</span>
                <span className="tag">ML</span>
                <span className="tag">AI</span>
              </div>
            </div>
            <div className="profile-status">
              <span className="status-dot" />
              <span>Open to opportunities</span>
            </div>
          </motion.div>

          {/* Floating chips */}
          <motion.div
            className="float-chip chip-1 card"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="chip-icon">📱</span>
            <span>Flutter Developer</span>
          </motion.div>

          <motion.div
            className="float-chip chip-2 card"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <span className="chip-icon">🤖</span>
            <span>ML & AI Expert</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
