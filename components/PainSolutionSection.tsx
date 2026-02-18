"use client";

import { motion } from "motion/react";
import TrueFocus from "./TrueFocus";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import GradientText from "./GradientText";
import "./PainSolutionSection.css";

const pairs = [
  {
    pain: "Low conversion rates",
    solution: "Conversion-focused UI/UX",
    description: "We design user flows that guide visitors naturally toward taking action, turning traffic into revenue."
  },
  {
    pain: "Slow website performance", 
    solution: "Lightning-fast Next.js core",
    description: "Speed is a feature. We build on modern stacks that load instantly, boosting SEO and retention."
  },
  {
    pain: "Generic, template design",
    solution: "Premium, bespoke aesthetics",
    description: "Stand out in a crowded market with a unique visual identity that commands authority and trust."
  },
  {
    pain: "No clear brand identity",
    solution: "Strategic brand positioning",
    description: "We clarify your message and amplify your voice, ensuring your brand resonates with your ideal audience."
  },
];

export default function PainSolutionSection() {
  return (
    <section className="pain-solution-section" id="about">
      <div className="pain-solution__container">
        {/* Header with TrueFocus */}
        <div className="pain-solution__header">
          <TrueFocus
            sentence="Stop Settling"
            manualMode={false}
            blurAmount={5}
            borderColor="#FF9FFC"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
          <h2 className="pain-solution__subtitle">
            Your brand deserves better than average.
          </h2>
        </div>

        {/* ScrollStack Redesign */}
        <div className="pain-solution__stack-wrapper">
          <ScrollStack
            itemDistance={50} 
            itemScale={0.05}
            itemStackDistance={10} 
            stackPosition="250px" /* Fixed px to sit consistently below sticky header */
            scaleEndPosition="10%"
            baseScale={0.9}
            blurAmount={0} /* Remove blur for clarity */
            useWindowScroll={true}
          >
            {pairs.map((pair, index) => (
              <ScrollStackItem key={index} itemClassName="pain-solution-card">
                <div className="card-content">
                  <div className="card-header">
                    <span className="card-step">0{index + 1}</span>
                  </div>
                  
                  <div className="card-body">
                    <div className="pain-row">
                  <span className="pain-text">{pair.pain}</span>
                </div>
                <div className="solution-row">
                  <GradientText
                    colors={["#C97AFF", "#FF9FFC", "#B19EEF"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="solution-text-gradient"
                  >
                    <span className="solution-text">{pair.solution}</span>
                  </GradientText>
                </div>
                    
                    <p className="card-description">{pair.description}</p>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
