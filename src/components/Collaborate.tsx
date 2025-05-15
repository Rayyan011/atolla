import React from "react";
import { Button } from "@/components/ui/button";

const Collaborate = () => {
  return (
    <section id="collaborate" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-atolla-sand to-atolla-coral/10 relative">
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight">
              Partner With <span className="text-atolla-coral coral-glow">Atolla</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-base sm:text-lg">
              <p className="text-black border-l-4 border-atolla-blue pl-3 md:pl-4 font-medium">
                We don't work for communities—we work with them. Whether you're a diver, a policymaker, or a curious student, there's space for you in our current.
              </p>
              <p className="text-black border-l-4 border-atolla-purple pl-3 md:pl-4 font-medium">
                Atolla collaborates with research institutions, conservation organizations, government agencies, local communities, and private sector partners who share our values of openness, empathy, and regeneration.
              </p>
            </div>
            <div className="mt-6 md:mt-8">
              <a 
                href="mailto:info@atolla.ngo"
                className="inline-block bg-gradient-to-r from-atolla-blue to-atolla-purple hover:from-atolla-purple hover:to-atolla-blue text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all hover:shadow-lg hover:shadow-atolla-purple/20 w-full sm:w-auto text-center"
              >
                Partner With Us
              </a>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <div className="space-y-3 sm:space-y-5">
                <div className="rounded-xl overflow-hidden h-32 sm:h-44 shadow-lg border-2 border-atolla-blue/20">
                  <img 
                    src="images/image7.jpg" 
                    alt="Collaborative research" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-48 sm:h-64 shadow-lg border-2 border-atolla-coral/20">
                  <img 
                    src="images/image8.jpg" 
                    alt="Community engagement" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-5 mt-6 sm:mt-10">
                <div className="rounded-xl overflow-hidden h-48 sm:h-64 shadow-lg border-2 border-atolla-purple/20">
                  <img 
                    src="images/image9.jpg" 
                    alt="Data collection" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-32 sm:h-44 shadow-lg border-2 border-atolla-blue/20">
                  <img 
                    src="images/image10.jpg" 
                    alt="Underwater research" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 sm:-bottom-12 -right-8 sm:-right-12 w-48 sm:w-64 h-48 sm:h-64 bg-atolla-coral/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
