import React from 'react';
import Folder from './Folder';
import './ProcessSection.css';

const steps = [
  {
    title: "Discovery",
    description: "We dive deep into your business goals, audience, and market landscape.",
    color: "#C97AFF",
    papers: ["Audit", "Research", "Scope"]
  },
  {
    title: "Strategy",
    description: "Structuring the roadmap defined by data and creative direction.",
    color: "#FF9FFC", 
    papers: ["Plan", "User Journey", "Sitemap"]
  },
  {
    title: "Design",
    description: "Crafting the visual identity and user interface.",
    color: "#00C2FF",
    papers: ["Wireframes", "UI Kit", "Mockups"]
  },
  {
    title: "Development",
    description: "Building a pixel-perfect, high-performance website.",
    color: "#FF5252",
    papers: ["Code", "Database", "API"]
  },
  {
    title: "Launch",
    description: "Testing, optimization, and finally going live.",
    color: "#4ADE80",
    papers: ["QA", "SEO", "Deploy"]
  },
  {
    title: "Support",
    description: "Ongoing maintenance and growth optimization.",
    color: "#FCD34D",
    papers: ["Updates", "Security", "Analytics"]
  }
];

export default function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">The Blueprint.</h2>
          <p className="process-subtitle">
            A transparent, step-by-step process to reduce uncertainty and guarantee results.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="folder-wrapper">
                <Folder 
                  size={1.5} 
                  color={step.color} 
                  className="custom-folder"
                  items={step.papers.map((paper, i) => (
                    <div key={i} style={{ 
                      width: '100%', 
                      height: '100%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      color: '#333'
                    }}>
                      {paper}
                    </div>
                  ))}
                />
              </div>
              <div className="step-info">
                <span className="step-number">0{index + 1}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
