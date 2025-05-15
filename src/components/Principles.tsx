import React from "react";
import { 
  Globe, 
  HandHeart, 
  GraduationCap, 
  Wrench, 
  Users, 
  Recycle, 
  Lightbulb 
} from "lucide-react";

const Principles = () => {
  const principles = [
    {
      icon: <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-atolla-blue" />,
      title: "Openness",
      description: "Science thrives in the light. We share our data, methods, and tools openly, believing that knowledge of the ocean belongs to everyone.",
      bgColor: "bg-atolla-blue/5",
      borderColor: "border-atolla-blue",
      textColor: "text-atolla-blue"
    },
    {
      icon: <HandHeart className="h-8 w-8 sm:h-10 sm:w-10 text-atolla-coral" />,
      title: "Empathy",
      description: "We listen deeply to communities, to ecosystems, to the unsaid needs of a changing blue planet.",
      bgColor: "bg-atolla-coral/5",
      borderColor: "border-atolla-coral",
      textColor: "text-atolla-coral"
    },
    {
      icon: <Wrench className="h-8 w-8 sm:h-10 sm:w-10 text-atolla-seagrass" />,
      title: "Pragmatism",
      description: "Beautiful ideas must meet practical action. We build solutions that work in the real contexts of ocean communities.",
      bgColor: "bg-atolla-seagrass/5",
      borderColor: "border-atolla-seagrass",
      textColor: "text-atolla-seagrass"
    },
    {
      icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 text-atolla-blue" />,
      title: "Collaboration",
      description: "The challenges facing our oceans transcend disciplines and borders. Our work is inherently collaborative, connecting diverse perspectives.",
      bgColor: "bg-atolla-blue/5",
      borderColor: "border-atolla-blue",
      textColor: "text-atolla-blue"
    },
    {
      icon: <Recycle className="h-8 w-8 sm:h-10 sm:w-10 text-atolla-coral" />,
      title: "Regeneration",
      description: "Beyond sustainability, we work toward abundance ,helping marine ecosystems recover, rebuild, and flourish anew.",
      bgColor: "bg-atolla-coral/5", 
      borderColor: "border-atolla-coral",
      textColor: "text-atolla-coral"
    },
    {
      icon: <Lightbulb className="h-8 w-8 sm:h-10 sm:w-10 text-atolla-purple" />,
      title: "Curiosity",
      description: "The ocean holds questions we haven't yet learned to ask. We embrace the unknown with wonder and rigorous inquiry.",
      bgColor: "bg-atolla-purple/5",
      borderColor: "border-atolla-purple",
      textColor: "text-atolla-purple"
    },
  ];

  return (
    <section id="principles" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-atolla-purple/5 to-atolla-coral/5 relative">
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl mb-4 md:mb-6">
            <span className="text-atolla-purple">Our</span> <span className="text-atolla-seagrass">Principles</span>
          </h2>
          <p className="text-black text-base sm:text-lg font-medium">
            These values guide our work and shape how we approach the complex challenges of marine conservation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center group hover:transform hover:-translate-y-1 transition-all duration-300 p-4 sm:p-6 rounded-xl ${principle.bgColor}`}
            >
              <div className={`mb-3 sm:mb-4 p-3 sm:p-4 rounded-full bg-white shadow-md shadow-atolla-blue/5 group-hover:shadow-lg group-hover:shadow-atolla-blue/10 transition-all duration-300 border ${principle.borderColor}`}>
                {principle.icon}
              </div>
              <h3 className={`font-playfair text-lg sm:text-xl font-semibold mb-2 ${principle.textColor}`}>
                {principle.title}
              </h3>
              <p className="text-black text-sm sm:text-base font-medium">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
