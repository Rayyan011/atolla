import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 wave-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-playfair text-3xl md:text-4xl text-atolla-seagrass mb-8 leading-tight">
              A signal in <span className="text-atolla-blue text-glow">the deep</span>
            </h2>
            <div className="space-y-6 text-lg">
              <p className="text-black border-l-4 border-atolla-coral pl-4 font-medium">
                Atolla began with a simple observation: there's so much happening beneath the surface of our oceans but so little of it is seen, understood, or shared. Especially here in the Maldives, where marine ecosystems are both our heritage and our frontline.
              </p>
              <p className="text-black border-l-4 border-atolla-blue pl-4 font-medium">
                We realized that while data was being collected by researchers, NGOs, even citizen divers it often sat in silos: disconnected, inaccessible, or unused. And much of the ocean was still unmapped, unmeasured, and overlooked.
              </p>
              <p className="text-black border-l-4 border-atolla-purple pl-4 font-medium">
                So we asked: What if we could bring it all together? What if we could build something that made the ocean visible not just to scientists, but to communities, students, policymakers, and storytellers?
              </p>
              <p className="text-black border-l-4 border-atolla-coral pl-4 font-medium">
                Named after the bioluminescent jellyfish that lights up in the dark, Atolla is a nonprofit research collective dedicated to illuminating hidden ocean data and turning it into open tools for change.
              </p>
              <p className="text-black border-l-4 border-atolla-blue pl-4 font-medium">
                We combine science, design, and technology using AI to monitor coral health, building community dashboards, and sharing stories that help people care.
              </p>
              <p className="text-black border-l-4 border-atolla-purple pl-4 font-medium">
                Because we believe the ocean's future should belong to everyone and it starts with being able to see it clearly.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden h-[500px] shadow-xl shadow-atolla-blue/20 border-2 border-atolla-purple/10">
              <img 
                src="/images/image1.jpg" 
                alt="Coral reef research" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-atolla-blue/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-playfair text-xl italic bg-atolla-purple/30 p-4 rounded-lg backdrop-blur-sm">
                  "We don't study the ocean. We listen to it."
                </p>
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-atolla-purple/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-atolla-coral/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
