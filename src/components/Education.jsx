import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      type: 'B.Tech in Computer Science & Engineering',
      institution: 'CMR College of Engineering & Technology',
      location: 'Kandlakoya, Medchal',
      details: 'Currently Pursuing B.Tech in Computer Science and Engineering. Focusing on full-stack development, machine learning, and AI applications.',
      icon: '🎓',
      status: 'Current'
    },
    {
      type: 'Diploma in Computer Science & Engineering',
      institution: 'MITS College',
      location: 'Kodad, Suryapet',
      details: 'Specialized in computer science and engineering, building a robust foundation in programming and software systems.',
      score: '9.3 CGPA',
      icon: '📜',
      status: 'Completed'
    },
    {
      type: 'Secondary Schooling',
      institution: 'ZPHS Nadiguem',
      location: 'Nadiguem',
      details: 'Academic excellence throughout schooling, building a solid groundwork in science and mathematics.',
      score: '8.8 CGPA',
      icon: '🏫',
      status: 'Completed'
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic <span className="highlight">Journey</span></h2>
          <p className="section-subtitle">A record of constant learning and professional growth through diverse educational experiences.</p>
        </motion.div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className="education-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="education-dot">
                {edu.icon}
              </div>
              <div className="education-content">
                <span className="edu-type">{edu.type}</span>
                <h3 className="edu-institution">{edu.institution}</h3>
                <div className="edu-location">
                  <span>📍 {edu.location}</span>
                  {edu.status === 'Current' && (
                    <span className="tag" style={{ color: 'var(--primary-light)', borderColor: 'var(--primary-glow)', backgroundColor: 'rgba(124, 58, 237, 0.05)' }}>
                      Ongoing
                    </span>
                  )}
                </div>
                <p className="edu-details">{edu.details}</p>
                {edu.score && (
                  <div className="edu-score">
                    Secured {edu.score}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
