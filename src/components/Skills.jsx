import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const SkillIcon = ({ name }) => {
  const icons = {
    'Flutter': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12L6 15.7L21.684.012h-7.357zm.014 11.072l-6.106 6.106L14.328 24h7.372L11.514 13.914l2.814-2.842z" />
      </svg>
    ),
    'React': (
      <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
    'Python': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.997 0C9.648 0 8.01 1.05 8.01 1.05V3.3C8.01 3.3 9.495 2.1 11.997 2.1C14.499 2.1 15.984 3.3 15.984 3.3V1.05C15.984 1.05 14.346 0 11.997 0ZM7.995 3.3C5.694 3.3 4.5 4.5 4.5 6.795V10.11H7.995V6.795C7.995 5.572 8.783 4.5 9.998 4.5C11.212 4.5 12 5.572 12 6.795V10.11H15.42V6.795C15.42 4.5 14.226 3.3 11.925 3.3H7.995ZM11.997 10.11H8.01V13.89C8.01 16.185 9.204 17.379 11.505 17.379H15.981V13.89C15.981 11.595 14.787 10.11 12.486 10.11H11.997ZM12 17.379C10.788 17.379 10 16.307 10 15.084C10 13.861 10.788 12.789 12 12.789C13.212 12.789 14 13.861 14 15.084C14 16.307 13.212 17.379 12 17.379ZM8.019 13.89H4.5V17.379C4.5 19.674 5.694 20.868 7.995 20.868H11.997C14.298 20.868 15.492 19.674 15.492 17.379V15.084C15.492 13.861 14.704 12.789 13.489 12.789C12.274 12.789 11.487 13.861 11.487 15.084V20.868H7.995V15.084C7.995 13.861 8.783 12.789 9.998 12.789C11.212 12.789 12 13.861 12 15.084V13.89H8.019Z" />
      </svg>
    ),
    'Django': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.86 5.86H12.86V13.86H10.86V5.86ZM10.86 15.86H12.86V17.86H10.86V15.86ZM16.86 5.86H18.86V17.86H16.86V15.86H14.86V17.86H12.86V15.86H10.86V17.86H8.86V15.86H6.86V17.86H4.86V5.86H6.86V7.86H8.86V5.86H10.86V7.86H12.86V5.86H14.86V7.86H16.86V5.86Z" />
      </svg>
    ),
    'FastAPI': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.562 12L12 1l8.438 11L12 23L3.562 12ZM12 5.5l-4.5 6l4.5 6l4.5-6l-4.5-6Z" />
      </svg>
    ),
    'TensorFlow': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 5L12 1L23 5V19L12 23L1 19V5ZM12 4.13L4 7.04V16.96L12 19.87L20 16.96V7.04L12 4.13ZM12 8.13L8 9.58V14.42L12 15.87L16 14.42V9.58L12 8.13Z" />
      </svg>
    ),
    'OpenCV': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.5 14.5C8.67 14.5 8 13.83 8 13C8 12.17 8.67 11.5 9.5 11.5C10.33 11.5 11 12.17 11 13C11 13.83 10.33 14.5 9.5 14.5ZM14.5 14.5C13.67 14.5 13 13.83 13 13C13 12.17 13.67 11.5 14.5 11.5C15.33 11.5 16 12.17 16 13C16 13.83 15.33 14.5 14.5 14.5Z" />
      </svg>
    ),
    'GitHub': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.39.81 1.17.81 2.35 0 1.693-.016 3.06-.016 3.48 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    'Deep Learning': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 18V15H10V18H8V15C8 13.9 8.9 13 10 13H14C15.1 13 16 13.9 16 15V18H14V15H12V18ZM15.5 11C14.12 11 13 9.88 13 8.5S14.12 6 15.5 6 18 7.12 18 8.5 16.88 11 15.5 11ZM8.5 11C7.12 11 6 9.88 6 8.5S7.12 6 8.5 6 11 7.12 11 8.5 9.88 11 8.5 11Z" />
      </svg>
    ),
    'PostgreSQL': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6V11.5L16.5 14L17.25 12.75L13.5 10.75V6H12Z" />
      </svg>
    )
  };

  return icons[name] || <span>✨</span>;
};

const Skills = () => {
  const categories = [
    {
      title: 'Full Stack & Mobile',
      skills: [
        { name: 'Flutter', delay: 0 },
        { name: 'React', delay: 0.1 },
        { name: 'Django', delay: 0.2 },
        { name: 'Python', delay: 0.3 },
        { name: 'FastAPI', delay: 0.4 },
        { name: 'Redux', delay: 0.5 }
      ]
    },
    {
      title: 'ML & AI Ecosystem',
      skills: [
        { name: 'TensorFlow', delay: 0 },
        { name: 'OpenCV', delay: 0.1 },
        { name: 'Vision', delay: 0.2 },
        { name: 'Deep Learning', delay: 0.3 },
        { name: 'Gen AI', delay: 0.4 },
        { name: 'LLMs', delay: 0.5 }
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'PostgreSQL', delay: 0 },
        { name: 'GitHub', delay: 0.1 },
        { name: 'DevOps', delay: 0.2 },
        { name: 'REST APIs', delay: 0.3 },
        { name: 'Prompt Eng.', delay: 0.4 }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Technical Mastery</span>
          <h2 className="section-title">My <span className="highlight">Stack</span></h2>
          <p className="section-subtitle">Empowered by cutting-edge tools to build high-performance, AI-driven applications.</p>
        </motion.div>

        <div className="skills-container">
          {categories.map((cat, catIndex) => (
            <div key={catIndex} className="skill-category-group">
              <motion.h3 
                className="skill-category-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                {cat.title}
              </motion.h3>
              
              <div className="skills-grid">
                {cat.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: skill.delay + catIndex * 0.1,
                      type: 'spring',
                      stiffness: 100
                    }}
                  >
                    <div className="skill-icon-wrap">
                      <SkillIcon name={skill.name} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
