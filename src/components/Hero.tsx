import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden flex items-center justify-center pt-20 md:pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1974&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-atolla-blue/30 via-transparent to-atolla-purple/20"></div>
          <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-3xl animate-float">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 text-glow leading-tight">
            Illuminate the <span className="text-atolla-purple">Unknown</span>
          </h1>
          <h2 className="font-cormorant text-xl sm:text-2xl md:text-3xl text-white/90 coral-glow mb-6 md:mb-8">
            Regenerate the <span className="text-atolla-coral">Future</span>
          </h2>
          <div className="space-y-4 md:space-y-6">
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl border-l-4 border-atolla-purple pl-3 md:pl-4">
              Where science meets storytelling, data transforms into action, and ocean mysteries become visible.
            </p>
            <Button 
              className="bg-gradient-to-r from-atolla-coral to-atolla-purple hover:from-atolla-purple hover:to-atolla-coral text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all hover:shadow-lg hover:shadow-atolla-coral/20 w-full sm:w-auto"
            >
              Swim Closer
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-atolla-sand to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
