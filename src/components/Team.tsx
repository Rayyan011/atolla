import React from "react";
import { Card } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Mohamed Rayyan Ameez",
      role: "Founding Director of AI Systems & Scientific Vision",
      bio: "Leading the development of AI systems and scientific vision for Atolla's marine research initiatives.",
      image: "/images/rayyan.jpeg"
    },
    {
      name: "Ahmed Sujau Mohamed",
      role: "Founding Director of Field Operations & Strategy",
      bio: "Overseeing field operations and strategic development of Atolla's research programs.",
      image: "/images/sujau.jpeg"
    },
    {
      name: "Ismail Houd Rizvee",
      role: "Founding Director of Technology & Research",
      bio: "Driving technological innovation and research initiatives at Atolla.",
      image: "/images/houd.jpeg"
    },
    {
      name: "Shahindha",
      role: "Director of Visual Identity & Creative Development",
      bio: "Shaping Atolla's visual identity and creative direction across all platforms.",
      image: "/images/shahindha.jpeg"
    },
    {
      name: "Aafreen Ali Hameed",
      role: "Director of Communications & Design",
      bio: "Leading communications strategy and design initiatives at Atolla.",
      image: "/images/reen.jpeg"
    }
  ];

  return (
    <section id="team" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 relative">
      <div className="absolute inset-0 bg-water-gradient"></div>
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl text-atolla-seagrass mb-4 md:mb-6">
            Our Team
          </h2>
          <p className="text-atolla-seagrass/95 text-base sm:text-lg font-medium">
            A diverse collective of scientists, technologists, designers, and storytellers united by a shared passion for the ocean.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {teamMembers.slice(0, 3).map((member, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <h3 className="font-playfair text-white text-lg sm:text-xl font-semibold">{member.name}</h3>
                  <p className="text-white/90 text-xs sm:text-sm font-medium">{member.role}</p>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-atolla-seagrass/95 text-sm sm:text-base font-medium">{member.bio}</p>
              </div>
            </Card>
          ))}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-center gap-6 md:gap-8">
            {teamMembers.slice(3).map((member, index) => (
              <Card 
                key={index + 3} 
                className="w-full sm:max-w-md overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 hover:-translate-y-1"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3 className="font-playfair text-white text-lg sm:text-xl font-semibold">{member.name}</h3>
                    <p className="text-white/90 text-xs sm:text-sm font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-atolla-seagrass/95 text-sm sm:text-base font-medium">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
