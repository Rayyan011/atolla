import React from "react";
import { Button } from "@/components/ui/button";

const MurakaAI = () => {
  const handleDownloadPaper = () => {
    window.open('/images/Automated Coral Health Assessment in the Maldives_ Addressing Dataset Limitations.pdf', '_blank');
  };

  const handleVisitHuggingFace = () => {
    window.open('https://huggingface.co/spaces/mohamedrayyan/muraka', '_blank');
  };

  return (
    <section className="py-16 px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-atolla-blue/5 via-transparent to-atolla-coral/5">
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-atolla-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-atolla-blue/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-atolla-coral/20">
              <img 
                src="images/image2.webp" 
                alt="MurakaAI in action" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-atolla-coral/10 blur-3xl -z-10"></div>
          </div>
          <div className="space-y-6">
            <span className="text-atolla-coral font-medium text-sm tracking-wider uppercase bg-atolla-coral/10 px-4 py-1 rounded-full">Featured Project</span>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-gradient-to-r from-atolla-coral to-atolla-blue bg-clip-text text-transparent leading-tight">
              MurakaAI
            </h2>
            <p className="text-lg text-atolla-seagrass/95 border-l-4 border-atolla-blue pl-4 font-medium">
              MurakaAI is our reef health detection system combining field data with AI to support coral resilience in the Maldives. Using computer vision and machine learning, we're building tools that can identify early warning signs of reef degradation and highlight opportunities for targeted conservation.
            </p>
            <p className="text-lg text-atolla-seagrass/95 border-l-4 border-atolla-coral pl-4 font-medium">
              Working with local marine biologists and conservation organizations, MurakaAI strives to be both technically advanced and practically applicable in real-world conservation settings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleDownloadPaper}
                className="bg-gradient-to-r from-atolla-coral to-atolla-blue hover:from-atolla-blue hover:to-atolla-coral text-white rounded-full px-6 py-5 font-medium transition-all shadow-lg shadow-atolla-blue/10 hover:shadow-atolla-coral/20"
              >
                Download Paper
              </Button>
              <Button 
                onClick={handleVisitHuggingFace}
                className="bg-gradient-to-r from-atolla-blue to-atolla-coral hover:from-atolla-coral hover:to-atolla-blue text-white rounded-full px-6 py-5 font-medium transition-all shadow-lg shadow-atolla-coral/10 hover:shadow-atolla-blue/20"
              >
                Try MurakaAI Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MurakaAI;
