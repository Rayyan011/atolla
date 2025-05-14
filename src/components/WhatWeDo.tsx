import React from "react";
import { Card } from "@/components/ui/card";

const WhatWeDo = () => {
  const focusAreas = [
    
    {
      title: "MurakaAI",
      description: "Machine learning for coral health assessment and prediction.",
      image: "https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?q=80&w=2069&auto=format&fit=crop",
      featured: true,
      color: "border-atolla-coral"
    },
    {
      title: "Open-Access Data Tools",
      description: "Building accessible interfaces for scientists and communities to understand marine ecosystems.",
      image: "images/image3.webp",
      color: "border-atolla-purple"
    },
    {
      title: "Immersive Ocean Storytelling",
      description: "Translating complex marine science into powerful narratives through art, design, and interactive media.",
      image: "images/image5.jpg",
      color: "border-atolla-coral"
    },
    {
      title: "Community Based Environmental Education",
      description: "Collaborative programs with local communities to build ocean literacy and stewardship.",
      image: "images/image6.webp",
      color: "border-atolla-blue"
    },
  ];

  return (
    <section id="what-we-do" className="py-24 px-6 md:px-12 bg-gradient-to-br from-atolla-blue/5 to-atolla-purple/5 relative">
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl text-atolla-seagrass mb-6">
            What <span className="text-atolla-blue">We Do</span>
          </h2>
          <p className="text-black text-lg font-medium">
            Our work spans multiple disciplines, always centered on generating knowledge that serves both marine ecosystems and the communities who depend on them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {focusAreas.filter(area => !area.featured).map((area, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 hover:-translate-y-1 ${area.color ? `border-t-4 ${area.color}` : ""}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className={`font-playfair text-xl font-semibold mb-2 ${area.color && area.color.includes('blue') ? 'text-atolla-blue' : area.color && area.color.includes('purple') ? 'text-atolla-purple' : area.color && area.color.includes('coral') ? 'text-atolla-coral' : 'text-atolla-seagrass'}`}>
                  {area.title}
                </h3>
                <p className="text-black font-medium">{area.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
