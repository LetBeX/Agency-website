"use client";

import { ArrowUpRight } from "lucide-react";
import "./CoreServices.css";

const services = [
  {
    title: "Website Design",
    description: "Visually stunning, user-centric interfaces.",
  },
  {
    title: "Web Development",
    description: "Functionality and speed, perfectly coded.",
  },
  {
    title: "Branding",
    description: "Identity that speaks to your audience.",
  },
  {
    title: "Website Maintenance",
    description: "Keeping your digital assets secure and fresh.",
  },
  {
    title: "Performance Optimization",
    description: "Speed audits and enhancements for ROI.",
  },
];

export default function CoreServices() {
  return (
    <section className="core-services" id="services">
      <div className="core-services__container">
        {/* Header */}
        <div className="core-services__header">
          <h2 className="core-services__title">
            Core Web Design Services.
          </h2>
          <p className="core-services__subtitle">
            We focus on what drives growth. Orientation, not just detail.
          </p>
        </div>

        {/* Grid */}
        <div className="core-services__grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card cursor-target"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              }}
            >
              <div className="service-card__content">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
              </div>
              <div className="service-card__icon">
                <ArrowUpRight size={24} />
              </div>
              <div className="service-card__bg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
