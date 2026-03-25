import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const highlights = [
    {
      icon: '📱',
      title: 'Full Stack App Developer',
      subtitle: 'Flutter · React · Django · Python',
      description: 'Building end-to-end cross-platform apps — from sleek Flutter mobile interfaces to robust Python/Django backend APIs. Focused on clean architecture and scalable design patterns.'
    },
    {
      icon: '🧠',
      title: 'ML Master',
      subtitle: 'TensorFlow · Computer Vision · Deep Learning',
      description: 'Designing and deploying machine learning pipelines including real-time disease detection, predictive analytics, and data-driven decision systems using TensorFlow and OpenCV.'
    },
    {
      icon: '🤖',
      title: 'Professional AI User',
      subtitle: 'Generative AI · LLMs · Prompt Engineering',
      description: 'Leveraging cutting-edge AI tools and large language models to accelerate development, automate workflows, and build intelligent features into production applications.'
    }
  ];

  return (
    <section className="experience" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Profile</span>
          <h2 className="section-title">What I <span className="highlight">Bring</span></h2>
          <p className="section-subtitle">A fresher with strong hands-on project experience and deep expertise in modern development stacks.</p>
        </motion.div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <div className="highlight-icon-wrap">
                <span className="highlight-icon">{item.icon}</span>
              </div>
              <div className="highlight-body">
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-subtitle">{item.subtitle}</p>
                <p className="highlight-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
